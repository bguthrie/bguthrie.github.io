# Social Sharing & OG Image Generation

**Date:** 2026-03-13
**Status:** Approved

## Problem

When sharing blog posts on LinkedIn (and other social platforms), the preview cards look poor. The header image appears but is cropped or tiny because the OG metadata lacks image dimensions. Posts without images get no visual card at all.

## Goals

1. Fix OG metadata so existing images render well on LinkedIn, Twitter, etc.
2. Generate purpose-built 1200x630 OG share images at build time using Hugo's native image processing
3. Overlay post titles on darkened header images for visually appealing share cards
4. Provide a fallback for posts without header images

## Design

### 1. OG Metadata Fixes

Update `themes/gears-minimal/layouts/partials/head.html` to add:

- `og:image:width` (1200) and `og:image:height` (630)
- Explicit `twitter:image` meta tag
- `article:published_time` from `.Date`
- Ensure every page gets an `og:image` — generated image for posts, site fallback for other pages

### 2. OG Image Generation Partial

Create `layouts/partials/og-image.html` (project-level override, not in the theme):

**Pipeline (single Hugo filter chain):**
1. Source the post's header image via `.Resources.Get` or fall back to a global image in `assets/`
2. `images.Process "fill 1200x630 Center"` — crop and resize to standard OG dimensions
3. `images.Brightness -30` to `-50` — darken the image for text contrast
4. `images.Text .Title` — render the post title as white text, centered, using a bundled font

**Text wrapping:** Hugo's `images.Text` does not auto-wrap. Implement simple line-breaking in the template: split the title on spaces, chunk into lines of ~30-35 characters, join with newlines. Font size ~48-56px, centered horizontally and vertically.

**Font:** Bundle a clean sans-serif TTF in `assets/fonts/` (e.g., Inter, Lato, or Source Sans Pro — all SIL licensed).

**Fallback image:** For posts without a header image, use `gears.webp` (the site's index page image) stored in `assets/images/` as the background.

### 3. Template Integration

The `og-image.html` partial returns the processed image's `.Permalink`. The head partial uses this URL for `og:image`, `og:image:width`, `og:image:height`, and `twitter:image`.

### 4. What's NOT in scope

- No external services or build tools (everything is pure Hugo)
- No changes to how images display on the actual blog pages
- No changes to the post listing/summary templates

## Technical Notes

- Hugo's `images.Filter` supports chaining: Process, Brightness, and Text can all be applied in a single slice
- `images.Process "fill 1200x630 Center"` handles crop+resize to exact dimensions
- Font files are loaded via `resources.Get "fonts/font.ttf"` from the `assets/` directory
- The built-in Hugo OG template (`_internal/opengraph.html`) is not used; the theme has its own head partial
- Generated images are cached by Hugo's asset pipeline (content-addressable), so rebuilds only regenerate when inputs change
