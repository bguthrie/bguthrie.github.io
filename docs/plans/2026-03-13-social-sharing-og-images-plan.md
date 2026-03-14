# Social Sharing & OG Image Generation — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Generate attractive OG share images with title overlays using Hugo's native image processing, and fix metadata so LinkedIn/Twitter render large, well-formatted cards.

**Architecture:** A new Hugo partial (`og-image.html`) generates a 1200x630 image per page by compositing the post's header image (or a fallback) with a dark overlay and title text. The head partial references the generated image in OG and Twitter meta tags. No external tools — pure Hugo templates.

**Tech Stack:** Hugo 0.147.0+ (for `images.Text` with `alignx`/`aligny`), Hugo image processing filters, TTF font bundled in `assets/fonts/`.

**Design doc:** `docs/plans/2026-03-13-social-sharing-og-images-design.md`

---

### Task 1: Upgrade Hugo

Hugo 0.147.0+ is required for `images.Text` with `alignx`/`aligny` centering support. The local install is v0.139.2 and CI uses v0.128.0.

**Files:**
- Modify: `.github/workflows/hugo.yml:34` (HUGO_VERSION env var)

**Step 1: Upgrade local Hugo**

Run:
```bash
brew upgrade hugo
hugo version
```

Expected: v0.147.0 or newer.

**Step 2: Update CI workflow version**

In `.github/workflows/hugo.yml`, change:
```yaml
HUGO_VERSION: 0.128.0
```
to:
```yaml
HUGO_VERSION: 0.147.0
```

(Use whatever version `brew upgrade` installed locally, to keep them in sync.)

**Step 3: Verify site still builds**

Run:
```bash
hugo --minify
```

Expected: Clean build, no errors. Check that the public/ output looks reasonable.

**Step 4: Commit**

```bash
git add .github/workflows/hugo.yml
git commit -m "chore: upgrade Hugo to v0.147.0+ for images.Text alignment support"
```

---

### Task 2: Bundle a font in assets

`images.Text` needs a TTF font resource. Bundle one in `assets/fonts/`.

**Files:**
- Create: `assets/fonts/` directory
- Create: `assets/fonts/Inter-Bold.ttf` (or similar clean sans-serif)

**Step 1: Download font**

Inter is a popular open-source sans-serif (SIL license). Download the Bold weight:

```bash
mkdir -p assets/fonts
curl -L -o assets/fonts/Inter-Bold.ttf \
  "https://github.com/rsms/inter/raw/master/fonts/desktop/Inter-Bold.ttf"
```

If the URL has changed, check https://github.com/rsms/inter/releases for the latest.

**Step 2: Verify the file is a valid TTF**

```bash
file assets/fonts/Inter-Bold.ttf
```

Expected: output containing "TrueType" or "sfnt".

**Step 3: Commit**

```bash
git add assets/fonts/
git commit -m "chore: bundle Inter Bold font for OG image text rendering"
```

---

### Task 3: Copy fallback image to assets

Posts without a header image need a fallback background. The site already uses `gears.webp` on the index page but it lives in `static/images/`. Hugo image processing requires images to be in `assets/` (or page bundles).

**Files:**
- Create: `assets/images/og-fallback.jpg`

**Step 1: Copy and convert the fallback image**

Hugo's `images.Text` works on image resources from `assets/`. Copy `gears.webp` there. Hugo can process webp, but if any issues arise, convert to jpg:

```bash
mkdir -p assets/images
cp static/images/gears.webp assets/images/og-fallback.webp
```

**Step 2: Commit**

```bash
git add assets/images/
git commit -m "chore: add fallback image to assets for OG image generation"
```

---

### Task 4: Create the og-image partial

This is the core implementation. A partial that generates a 1200x630 OG image with title text overlay.

**Files:**
- Create: `layouts/partials/og-image.html`

**Step 1: Create the partial**

Create `layouts/partials/og-image.html` with the following content:

```html
{{/*
  og-image.html - Generates a 1200x630 OG share image with title overlay.

  Usage: {{ partial "og-image" . }}
  Returns: an image resource (use .Permalink, .RelPermalink, .Width, .Height)

  Pipeline:
  1. Get the post's header image, or fall back to site default
  2. Crop/resize to 1200x630
  3. Darken for text contrast
  4. Overlay post title as white text
*/}}

{{/* Load font */}}
{{ $font := resources.Get "fonts/Inter-Bold.ttf" }}

{{/* Get source image: page image or fallback */}}
{{ $src := false }}
{{ with .Params.image }}
  {{ $src = $.Resources.Get . }}
{{ end }}
{{ if not $src }}
  {{ $src = resources.Get "images/og-fallback.webp" }}
{{ end }}

{{/* Build filter chain */}}
{{ $title := .Title }}

{{/* Simple word-wrap: break title into lines of ~30 chars */}}
{{ $words := split $title " " }}
{{ $lines := slice }}
{{ $currentLine := "" }}
{{ range $words }}
  {{ $candidate := printf "%s %s" $currentLine . }}
  {{ if eq $currentLine "" }}
    {{ $candidate = . }}
  {{ end }}
  {{ if and (gt (len $candidate) 30) (ne $currentLine "") }}
    {{ $lines = $lines | append $currentLine }}
    {{ $currentLine = . }}
  {{ else }}
    {{ $currentLine = $candidate }}
  {{ end }}
{{ end }}
{{ if ne $currentLine "" }}
  {{ $lines = $lines | append $currentLine }}
{{ end }}
{{ $wrappedTitle := delimit $lines "\n" }}

{{ $filters := slice
  (images.Process "fill 1200x630 Center jpg")
  (images.Brightness -40)
  (images.Text $wrappedTitle (dict
    "size" 52
    "color" "#ffffff"
    "font" $font
    "alignx" "center"
    "aligny" "center"
    "x" 600
    "y" 315
    "linespacing" 10
  ))
}}

{{ $img := $src | images.Filter $filters }}

{{ return $img }}
```

**Step 2: Test locally with hugo server**

Run:
```bash
hugo server -D
```

At this point the partial exists but isn't called yet. No errors expected. We'll wire it up in the next task.

**Step 3: Commit**

```bash
git add layouts/partials/og-image.html
git commit -m "feat: add OG image generation partial with title overlay"
```

---

### Task 5: Wire up the head partial to use generated OG images

Update the head template to call the new partial and use its output for OG and Twitter meta tags.

**Files:**
- Modify: `themes/gears-minimal/layouts/partials/head.html:6-16`

**Step 1: Update the OG and Twitter meta tags**

Replace lines 6-16 of `themes/gears-minimal/layouts/partials/head.html`:

```html
{{/* Open Graph */}}
<meta property="og:title" content="{{ .Title }}">
<meta property="og:description" content="{{ with .Description }}{{ . }}{{ else }}{{ .Site.Params.description }}{{ end }}">
<meta property="og:type" content="{{ if .IsPage }}article{{ else }}website{{ end }}">
<meta property="og:url" content="{{ .Permalink }}">
{{ with .Params.image }}<meta property="og:image" content="{{ . | absURL }}">{{ end }}

{{/* Twitter Card */}}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{ .Title }}">
<meta name="twitter:description" content="{{ with .Description }}{{ . }}{{ else }}{{ .Site.Params.description }}{{ end }}">
```

with:

```html
{{/* Open Graph */}}
<meta property="og:title" content="{{ .Title }}">
<meta property="og:description" content="{{ with .Description }}{{ . }}{{ else }}{{ .Site.Params.description }}{{ end }}">
<meta property="og:type" content="{{ if .IsPage }}article{{ else }}website{{ end }}">
<meta property="og:url" content="{{ .Permalink }}">
{{ $ogImage := partial "og-image" . }}
<meta property="og:image" content="{{ $ogImage.Permalink }}">
<meta property="og:image:width" content="{{ $ogImage.Width }}">
<meta property="og:image:height" content="{{ $ogImage.Height }}">
{{ if .IsPage }}<meta property="article:published_time" content="{{ .Date.Format "2006-01-02T15:04:05Z07:00" }}">{{ end }}

{{/* Twitter Card */}}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{ .Title }}">
<meta name="twitter:description" content="{{ with .Description }}{{ . }}{{ else }}{{ .Site.Params.description }}{{ end }}">
<meta name="twitter:image" content="{{ $ogImage.Permalink }}">
```

**Step 2: Test locally**

Run:
```bash
hugo server -D
```

Open a post in the browser, view source, and verify:
- `og:image` points to a generated image URL (something like `/post/.../og-image_hu....jpg`)
- `og:image:width` is `1200`
- `og:image:height` is `630`
- `twitter:image` matches `og:image`
- `article:published_time` is present on post pages

Also open the OG image URL directly in the browser to visually verify the title overlay looks good.

**Step 3: Test a post without an image**

Navigate to a post that has no `image` in frontmatter (e.g., "Pairing Is Collaboration That Ships"). Verify the OG image uses the gears fallback background.

**Step 4: Test non-page contexts**

Check the homepage and a category page. The partial should still work (using the fallback image since these aren't posts with header images).

**Note:** The og-image partial uses `.Resources.Get` which returns nil for non-page-bundle pages. The fallback path handles this. However, if homepage or list pages cause issues, we may need to gate the partial call with `{{ if .IsPage }}` and use a simpler fallback for non-page contexts. Address this if it comes up during testing.

**Step 5: Commit**

```bash
git add themes/gears-minimal/layouts/partials/head.html
git commit -m "feat: wire OG image generation into head partial with full metadata"
```

---

### Task 6: Visual QA and tuning

The text overlay likely needs tuning — font size, brightness, wrapping threshold. This task is iterative.

**Step 1: Test with various title lengths**

Check these posts (representing short, medium, and long titles):
- Short: "Good Code"
- Medium: "The Tyranny of the Plan"
- Long: "What Made ThoughtWorks Work Part 2: The Squabble for Talent"
- Very long: "A Probabilistic Measurement of Programmer Productivity"

For each, open the generated OG image URL and check:
- Text is fully visible (not clipped)
- Text is reasonably centered
- The darkening makes text readable
- Text wrapping looks natural (no orphaned single words on last line if avoidable)

**Step 2: Tune parameters as needed**

Adjust in `layouts/partials/og-image.html`:
- `"size" 52` — increase for short titles, decrease if long titles clip
- `(images.Brightness -40)` — more negative = darker background
- `30` in the wrapping logic — lower = more aggressive wrapping
- `"linespacing" 10` — adjust gap between lines

**Step 3: Test with LinkedIn Post Inspector**

If you want to verify with the actual platform, use https://www.linkedin.com/post-inspector/ with a deployed URL (or use `hugo server` + ngrok for a temporary public URL).

**Step 4: Commit final tuning**

```bash
git add layouts/partials/og-image.html
git commit -m "fix: tune OG image text size and positioning"
```

---

### Task 7: Update CI workflow and verify production build

**Files:**
- Verify: `.github/workflows/hugo.yml` (already updated in Task 1)

**Step 1: Run a production build locally**

```bash
HUGO_ENVIRONMENT=production hugo --minify
```

Expected: Clean build. Check `public/` for generated OG images.

**Step 2: Verify generated images exist in output**

```bash
find public/post -name "*og*" -o -name "*image*" | head -20
```

Look for the generated image files in the post output directories.

**Step 3: Commit any remaining changes and push**

```bash
git push
```

Monitor the GitHub Actions build to ensure CI passes with the new Hugo version and image generation.
