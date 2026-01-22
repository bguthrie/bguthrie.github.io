# Minimal Hugo Theme Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a minimal, magazine-style Hugo theme with three-column layout, Tailwind CSS, and support for unlisted articles.

**Architecture:** Custom theme in `themes/minimal/` with Hugo Pipes processing Tailwind CSS. Self-hosted Inter and Newsreader fonts. Three-column grid layout for articles (sidebar/content/TOC), two-column for list pages.

**Tech Stack:** Hugo, Tailwind CSS 3.x, PostCSS, @tailwindcss/typography plugin

---

## Task 1: Initialize Theme Structure

**Files:**
- Create: `themes/minimal/theme.toml`
- Create: `themes/minimal/layouts/_default/baseof.html`

**Step 1: Create theme directory structure**

```bash
mkdir -p themes/minimal/{layouts/_default,layouts/partials,assets/css,static/fonts}
```

**Step 2: Create theme.toml**

Create `themes/minimal/theme.toml`:

```toml
name = "Minimal"
license = "MIT"
licenselink = "https://github.com/bguthrie/bguthrie.github.io/blob/main/LICENSE"
description = "A minimal, magazine-style Hugo theme"
homepage = "https://brianguthrie.com"
tags = ["minimal", "blog", "tailwind"]
features = ["three-column", "toc", "unlisted-posts"]
min_version = "0.128.0"

[author]
  name = "Brian Guthrie"
  homepage = "https://brianguthrie.com"
```

**Step 3: Create baseof.html skeleton**

Create `themes/minimal/layouts/_default/baseof.html`:

```html
<!DOCTYPE html>
<html lang="{{ .Site.LanguageCode | default "en" }}">
<head>
  {{ partial "head.html" . }}
</head>
<body class="bg-white text-gray-900 font-sans">
  {{ block "main" . }}{{ end }}
  {{ partial "footer.html" . }}
</body>
</html>
```

**Step 4: Verify theme structure**

```bash
ls -la themes/minimal/
```

Expected: Shows layouts/, assets/, static/, theme.toml

**Step 5: Commit**

```bash
git add themes/minimal/
git commit -m "feat: initialize minimal theme structure"
```

---

## Task 2: Set Up Tailwind CSS with Hugo Pipes

**Files:**
- Create: `themes/minimal/assets/css/main.css`
- Create: `package.json`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`

**Step 1: Create package.json**

Create `package.json` in project root:

```json
{
  "name": "bguthrie-blog",
  "private": true,
  "scripts": {
    "dev": "hugo server -D",
    "build": "hugo --minify"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "@tailwindcss/typography": "^0.5.0"
  }
}
```

**Step 2: Create tailwind.config.js**

Create `tailwind.config.js` in project root:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./themes/minimal/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Newsreader", "Georgia", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
```

**Step 3: Create postcss.config.js**

Create `postcss.config.js` in project root:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

**Step 4: Create main.css with Tailwind directives**

Create `themes/minimal/assets/css/main.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply antialiased;
  }
}
```

**Step 5: Install dependencies**

```bash
npm install
```

Expected: node_modules created, no errors

**Step 6: Add node_modules to .gitignore**

Append to `.gitignore`:

```
node_modules/
```

**Step 7: Commit**

```bash
git add package.json tailwind.config.js postcss.config.js themes/minimal/assets/css/main.css .gitignore
git commit -m "feat: set up Tailwind CSS with Hugo Pipes"
```

---

## Task 3: Download and Configure Self-Hosted Fonts

**Files:**
- Create: `themes/minimal/static/fonts/Inter-Regular.woff2`
- Create: `themes/minimal/static/fonts/Inter-Bold.woff2`
- Create: `themes/minimal/static/fonts/Newsreader-Regular.woff2`
- Create: `themes/minimal/static/fonts/Newsreader-Italic.woff2`
- Create: `themes/minimal/static/fonts/Newsreader-Bold.woff2`
- Modify: `themes/minimal/assets/css/main.css`

**Step 1: Download Inter font files**

Download from Google Fonts API:

```bash
cd themes/minimal/static/fonts

# Inter Regular (400)
curl -o Inter-Regular.woff2 "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2"

# Inter Bold (700)
curl -o Inter-Bold.woff2 "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fAZ9hjp-Ek-_EeA.woff2"

cd -
```

**Step 2: Download Newsreader font files**

```bash
cd themes/minimal/static/fonts

# Newsreader Regular (400)
curl -o Newsreader-Regular.woff2 "https://fonts.gstatic.com/s/newsreader/v21/cY9qfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBCzBDXXD9JVF438w.woff2"

# Newsreader Italic (400)
curl -o Newsreader-Italic.woff2 "https://fonts.gstatic.com/s/newsreader/v21/cY9kfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLP4obnf7fTXglsMo.woff2"

# Newsreader Bold (700)
curl -o Newsreader-Bold.woff2 "https://fonts.gstatic.com/s/newsreader/v21/cY9qfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBCzBDXXD9AhC438w.woff2"

cd -
```

**Step 3: Add @font-face declarations to main.css**

Update `themes/minimal/assets/css/main.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Newsreader";
  src: url("/fonts/Newsreader-Regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Newsreader";
  src: url("/fonts/Newsreader-Italic.woff2") format("woff2");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Newsreader";
  src: url("/fonts/Newsreader-Bold.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@layer base {
  html {
    @apply antialiased;
  }
}
```

**Step 4: Verify font files exist**

```bash
ls -la themes/minimal/static/fonts/
```

Expected: 5 .woff2 files present

**Step 5: Commit**

```bash
git add themes/minimal/static/fonts/ themes/minimal/assets/css/main.css
git commit -m "feat: add self-hosted Inter and Newsreader fonts"
```

---

## Task 4: Build Head and Footer Partials

**Files:**
- Create: `themes/minimal/layouts/partials/head.html`
- Create: `themes/minimal/layouts/partials/footer.html`

**Step 1: Create head.html partial**

Create `themes/minimal/layouts/partials/head.html`:

```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{{ if .IsHome }}{{ .Site.Title }}{{ else }}{{ .Title }} | {{ .Site.Title }}{{ end }}</title>
<meta name="description" content="{{ with .Description }}{{ . }}{{ else }}{{ .Site.Params.description }}{{ end }}">

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

{{/* Favicon */}}
<link rel="icon" href="/favicon.png" type="image/png">

{{/* Tailwind CSS via Hugo Pipes */}}
{{ $css := resources.Get "css/main.css" | postCSS }}
{{ if hugo.IsProduction }}
  {{ $css = $css | minify | fingerprint }}
{{ end }}
<link rel="stylesheet" href="{{ $css.RelPermalink }}">

{{/* RSS */}}
{{ range .AlternativeOutputFormats }}
  {{ printf `<link rel="%s" type="%s" href="%s" title="%s">` .Rel .MediaType.Type .Permalink $.Site.Title | safeHTML }}
{{ end }}
```

**Step 2: Create footer.html partial**

Create `themes/minimal/layouts/partials/footer.html`:

```html
<footer class="mt-16 py-8 border-t border-gray-100">
  <div class="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
    <p>&copy; {{ now.Year }} {{ .Site.Title }}. All rights reserved.</p>
  </div>
</footer>
```

**Step 3: Verify partials exist**

```bash
ls themes/minimal/layouts/partials/
```

Expected: head.html, footer.html

**Step 4: Commit**

```bash
git add themes/minimal/layouts/partials/
git commit -m "feat: add head and footer partials"
```

---

## Task 5: Build Identity Sidebar Partial

**Files:**
- Create: `themes/minimal/layouts/partials/sidebar.html`

**Step 1: Create sidebar.html partial**

Create `themes/minimal/layouts/partials/sidebar.html`:

```html
<aside class="hidden lg:block">
  <div class="sticky top-8">
    {{/* Avatar */}}
    {{ with .Site.Params.sidebar.avatar }}
      {{ if .enabled }}
        <img
          src="{{ if .local }}/{{ .src }}{{ else }}{{ .src }}{{ end }}"
          alt="{{ $.Site.Title }}"
          class="w-24 h-24 rounded-full mb-4"
        >
      {{ end }}
    {{ end }}

    {{/* Site title */}}
    <h1 class="text-xl font-bold mb-2">
      <a href="/" class="hover:text-gray-600">{{ .Site.Title }}</a>
    </h1>

    {{/* Subtitle/bio */}}
    {{ with .Site.Params.sidebar.subtitle }}
      <p class="text-sm text-gray-600 leading-relaxed">{{ . }}</p>
    {{ end }}
  </div>
</aside>
```

**Step 2: Verify partial exists**

```bash
cat themes/minimal/layouts/partials/sidebar.html
```

Expected: Shows sidebar HTML

**Step 3: Commit**

```bash
git add themes/minimal/layouts/partials/sidebar.html
git commit -m "feat: add identity sidebar partial"
```

---

## Task 6: Build TOC Partial

**Files:**
- Create: `themes/minimal/layouts/partials/toc.html`

**Step 1: Create toc.html partial**

Create `themes/minimal/layouts/partials/toc.html`:

```html
{{ if .TableOfContents }}
<aside class="hidden xl:block">
  <div class="sticky top-8">
    <h2 class="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-4">
      On this page
    </h2>
    <nav class="text-sm">
      {{ .TableOfContents }}
    </nav>
  </div>
</aside>
{{ end }}
```

**Step 2: Add TOC styling to main.css**

Append to `themes/minimal/assets/css/main.css`:

```css

/* Table of Contents styling */
@layer components {
  nav#TableOfContents ul {
    @apply list-none pl-0 space-y-2;
  }

  nav#TableOfContents ul ul {
    @apply pl-4 mt-2;
  }

  nav#TableOfContents a {
    @apply text-gray-500 hover:text-gray-900 transition-colors;
  }

  nav#TableOfContents li {
    @apply leading-snug;
  }
}
```

**Step 3: Verify TOC partial and styles**

```bash
cat themes/minimal/layouts/partials/toc.html
```

Expected: Shows TOC HTML

**Step 4: Commit**

```bash
git add themes/minimal/layouts/partials/toc.html themes/minimal/assets/css/main.css
git commit -m "feat: add table of contents partial with styling"
```

---

## Task 7: Build Single Article Template (Three-Column)

**Files:**
- Create: `themes/minimal/layouts/_default/single.html`

**Step 1: Create single.html template**

Create `themes/minimal/layouts/_default/single.html`:

```html
{{ define "main" }}
<div class="max-w-7xl mx-auto px-4 py-8">
  <div class="grid grid-cols-1 lg:grid-cols-[240px_1fr] xl:grid-cols-[240px_1fr_240px] gap-8">

    {{/* Left sidebar - identity */}}
    {{ partial "sidebar.html" . }}

    {{/* Main content */}}
    <article class="min-w-0">
      <header class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold font-serif mb-4">
          {{ .Title }}
          {{ if .Params.hidden }}
            <span class="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded ml-2 font-sans font-normal align-middle">Unlisted</span>
          {{ end }}
        </h1>
        <div class="text-sm text-gray-500 font-sans">
          <time datetime="{{ .Date.Format "2006-01-02" }}">{{ .Date.Format "Jan 2, 2006" }}</time>
          {{ with .ReadingTime }}
            <span class="mx-2">&middot;</span>
            <span>{{ . }} min read</span>
          {{ end }}
        </div>
      </header>

      {{/* Article body */}}
      <div class="prose prose-lg max-w-none font-serif
                  prose-headings:font-sans prose-headings:font-bold
                  prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                  prose-blockquote:border-gray-300 prose-blockquote:text-gray-600
                  prose-code:before:content-none prose-code:after:content-none">
        {{ .Content }}
      </div>
    </article>

    {{/* Right sidebar - TOC */}}
    {{ partial "toc.html" . }}

  </div>
</div>
{{ end }}
```

**Step 2: Verify template**

```bash
cat themes/minimal/layouts/_default/single.html
```

Expected: Shows three-column article layout

**Step 3: Commit**

```bash
git add themes/minimal/layouts/_default/single.html
git commit -m "feat: add three-column single article template"
```

---

## Task 8: Build List Template (Homepage & Archives)

**Files:**
- Create: `themes/minimal/layouts/_default/list.html`
- Create: `themes/minimal/layouts/_default/summary.html`

**Step 1: Create list.html template**

Create `themes/minimal/layouts/_default/list.html`:

```html
{{ define "main" }}
<div class="max-w-7xl mx-auto px-4 py-8">
  <div class="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">

    {{/* Left sidebar - identity */}}
    {{ partial "sidebar.html" . }}

    {{/* Post list */}}
    <main class="min-w-0">
      {{ if not .IsHome }}
        <h1 class="text-2xl font-bold mb-8">{{ .Title }}</h1>
      {{ end }}

      <div class="space-y-8">
        {{ $pages := where .Pages "Params.hidden" "!=" true }}
        {{ range $pages }}
          {{ partial "summary.html" . }}
        {{ end }}
      </div>

      {{/* Pagination */}}
      {{ if .Paginator }}
        {{ if or .Paginator.HasPrev .Paginator.HasNext }}
          <nav class="mt-12 flex justify-between text-sm">
            {{ if .Paginator.HasPrev }}
              <a href="{{ .Paginator.Prev.URL }}" class="text-gray-600 hover:text-gray-900">&larr; Newer posts</a>
            {{ else }}
              <span></span>
            {{ end }}
            {{ if .Paginator.HasNext }}
              <a href="{{ .Paginator.Next.URL }}" class="text-gray-600 hover:text-gray-900">Older posts &rarr;</a>
            {{ end }}
          </nav>
        {{ end }}
      {{ end }}
    </main>

  </div>
</div>
{{ end }}
```

**Step 2: Create summary.html partial**

Create `themes/minimal/layouts/_default/summary.html`:

```html
<article class="group">
  <h2 class="text-xl font-serif font-bold mb-1">
    <a href="{{ .RelPermalink }}" class="group-hover:text-gray-600">
      {{ .Title }}
    </a>
  </h2>
  <div class="text-sm text-gray-500 mb-2">
    <time datetime="{{ .Date.Format "2006-01-02" }}">{{ .Date.Format "Jan 2, 2006" }}</time>
    {{ with .ReadingTime }}
      <span class="mx-2">&middot;</span>
      <span>{{ . }} min read</span>
    {{ end }}
  </div>
  {{ with .Description }}
    <p class="text-gray-600">{{ . }}</p>
  {{ end }}
</article>
```

**Step 3: Verify templates**

```bash
cat themes/minimal/layouts/_default/list.html
cat themes/minimal/layouts/_default/summary.html
```

Expected: Shows list and summary templates

**Step 4: Commit**

```bash
git add themes/minimal/layouts/_default/list.html themes/minimal/layouts/_default/summary.html
git commit -m "feat: add list and summary templates with hidden post filtering"
```

---

## Task 9: Build Homepage Override

**Files:**
- Create: `themes/minimal/layouts/index.html`

**Step 1: Create homepage template**

Create `themes/minimal/layouts/index.html`:

```html
{{ define "main" }}
<div class="max-w-7xl mx-auto px-4 py-8">
  <div class="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">

    {{/* Left sidebar - identity */}}
    {{ partial "sidebar.html" . }}

    {{/* Post list */}}
    <main class="min-w-0">
      <div class="space-y-8">
        {{ $posts := where site.RegularPages "Section" "post" }}
        {{ $posts = where $posts "Params.hidden" "!=" true }}
        {{ range $posts.ByDate.Reverse }}
          {{ partial "summary.html" . }}
        {{ end }}
      </div>
    </main>

  </div>
</div>
{{ end }}
```

**Step 2: Verify template**

```bash
cat themes/minimal/layouts/index.html
```

Expected: Shows homepage with filtered posts

**Step 3: Commit**

```bash
git add themes/minimal/layouts/index.html
git commit -m "feat: add homepage template with hidden post filtering"
```

---

## Task 10: Build RSS Template with Hidden Post Filtering

**Files:**
- Create: `themes/minimal/layouts/_default/rss.xml`

**Step 1: Create RSS template**

Create `themes/minimal/layouts/_default/rss.xml`:

```xml
{{- $pctx := . -}}
{{- if .IsHome -}}{{ $pctx = .Site }}{{- end -}}
{{- $pages := slice -}}
{{- if or $.IsHome $.IsSection -}}
{{- $pages = where $pctx.RegularPages "Params.hidden" "!=" true -}}
{{- else -}}
{{- $pages = where $pctx.Pages "Params.hidden" "!=" true -}}
{{- end -}}
{{- $limit := .Site.Config.Services.RSS.Limit -}}
{{- if ge $limit 1 -}}
{{- $pages = $pages | first $limit -}}
{{- end -}}
{{ printf "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>" | safeHTML }}
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>{{ .Site.Title }}</title>
    <link>{{ .Permalink }}</link>
    <description>{{ .Site.Params.description | default .Site.Title }}</description>
    <generator>Hugo -- gohugo.io</generator>
    <language>{{ .Site.LanguageCode }}</language>{{ with .Site.Author.email }}
    <managingEditor>{{.}}{{ with $.Site.Author.name }} ({{.}}){{end}}</managingEditor>{{end}}{{ with .Site.Author.email }}
    <webMaster>{{.}}{{ with $.Site.Author.name }} ({{.}}){{end}}</webMaster>{{end}}{{ with .Site.Copyright }}
    <copyright>{{.}}</copyright>{{end}}
    <lastBuildDate>{{ now.Format "Mon, 02 Jan 2006 15:04:05 -0700" }}</lastBuildDate>
    {{ printf "<atom:link href=%q rel=\"self\" type=\"application/rss+xml\"/>" .Permalink | safeHTML }}
    {{- range $pages }}
    <item>
      <title>{{ .Title }}</title>
      <link>{{ .Permalink }}</link>
      <pubDate>{{ .Date.Format "Mon, 02 Jan 2006 15:04:05 -0700" }}</pubDate>
      <guid>{{ .Permalink }}</guid>
      <description>{{ .Summary | html }}</description>
    </item>
    {{- end }}
  </channel>
</rss>
```

**Step 2: Verify template**

```bash
cat themes/minimal/layouts/_default/rss.xml
```

Expected: Shows RSS with hidden filtering

**Step 3: Commit**

```bash
git add themes/minimal/layouts/_default/rss.xml
git commit -m "feat: add RSS template with hidden post filtering"
```

---

## Task 11: Add Mobile Header for Responsive Layout

**Files:**
- Create: `themes/minimal/layouts/partials/header.html`
- Modify: `themes/minimal/layouts/_default/baseof.html`

**Step 1: Create mobile header partial**

Create `themes/minimal/layouts/partials/header.html`:

```html
<header class="lg:hidden border-b border-gray-100 py-4 mb-8">
  <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
    <a href="/" class="text-xl font-bold hover:text-gray-600">{{ .Site.Title }}</a>
    <nav class="flex gap-4 text-sm text-gray-600">
      <a href="/post/" class="hover:text-gray-900">Archive</a>
      {{ with .Site.GetPage "/page/bio" }}
        <a href="{{ .RelPermalink }}" class="hover:text-gray-900">About</a>
      {{ end }}
    </nav>
  </div>
</header>
```

**Step 2: Update baseof.html to include header**

Update `themes/minimal/layouts/_default/baseof.html`:

```html
<!DOCTYPE html>
<html lang="{{ .Site.LanguageCode | default "en" }}">
<head>
  {{ partial "head.html" . }}
</head>
<body class="bg-white text-gray-900 font-sans min-h-screen">
  {{ partial "header.html" . }}
  {{ block "main" . }}{{ end }}
  {{ partial "footer.html" . }}
</body>
</html>
```

**Step 3: Verify templates**

```bash
cat themes/minimal/layouts/partials/header.html
cat themes/minimal/layouts/_default/baseof.html
```

Expected: Shows header and updated baseof

**Step 4: Commit**

```bash
git add themes/minimal/layouts/partials/header.html themes/minimal/layouts/_default/baseof.html
git commit -m "feat: add mobile header for responsive layout"
```

---

## Task 12: Update Hugo Config to Use New Theme

**Files:**
- Modify: `config/_default/config.toml`
- Delete references to old theme in `go.mod`

**Step 1: Update config.toml to use new theme**

Update `config/_default/config.toml` to set theme:

Add or update the theme line:
```toml
theme = "minimal"
```

**Step 2: Remove old theme module from go.mod**

Update `go.mod` to remove hugo-theme-stack:

```
module github.com/CaiJimmy/hugo-theme-stack-starter

go 1.17
```

(Remove the `require` line for hugo-theme-stack)

**Step 3: Test Hugo build**

```bash
hugo --minify
```

Expected: Build succeeds with new theme

**Step 4: Test Hugo server**

```bash
hugo server -D
```

Expected: Site runs on localhost:1313

**Step 5: Commit**

```bash
git add config/_default/config.toml go.mod
git commit -m "feat: switch to minimal theme, remove hugo-theme-stack"
```

---

## Task 13: Migrate Drafts to Content with Hidden Flag

**Files:**
- Move: `drafts/*` to `content/post/*`
- Modify: frontmatter to use `hidden: true`

**Step 1: Move draft files to content/post**

```bash
for dir in drafts/*/; do
  name=$(basename "$dir")
  mv "$dir" "content/post/$name"
done
rmdir drafts 2>/dev/null || true
```

**Step 2: Update frontmatter in moved files**

For each file moved, ensure frontmatter has:
- `draft: false`
- `hidden: true`

Example frontmatter:
```yaml
---
title: "The Case for Monorepos"
date: 2025-05-06T12:03:13-04:00
hidden: true
draft: false
---
```

**Step 3: Verify migration**

```bash
ls content/post/
hugo --minify
```

Expected: All posts listed, build succeeds

**Step 4: Commit**

```bash
git add content/post/
git rm -r drafts/ 2>/dev/null || true
git commit -m "feat: migrate drafts to content/post with hidden flag"
```

---

## Task 14: Add Custom Head Partial for Analytics

**Files:**
- Modify: `themes/minimal/layouts/partials/head.html`

**Step 1: Check existing custom head content**

Read the existing `layouts/partials/head/custom.html` in the project root to see what analytics code exists.

**Step 2: Add analytics hook to head.html**

Add to end of `themes/minimal/layouts/partials/head.html`:

```html
{{/* Custom head content (analytics, etc.) */}}
{{ if templates.Exists "partials/head/custom.html" }}
  {{ partial "head/custom.html" . }}
{{ end }}
```

**Step 3: Copy existing custom.html to theme**

```bash
mkdir -p themes/minimal/layouts/partials/head
cp layouts/partials/head/custom.html themes/minimal/layouts/partials/head/
```

**Step 4: Verify**

```bash
hugo --minify
```

Expected: Build succeeds

**Step 5: Commit**

```bash
git add themes/minimal/layouts/partials/
git commit -m "feat: add custom head partial hook for analytics"
```

---

## Task 15: Final Verification and Cleanup

**Step 1: Full build test**

```bash
hugo --minify
```

Expected: No errors, site builds completely

**Step 2: Run dev server and visual inspection**

```bash
hugo server -D
```

Verify:
- Homepage shows post list (no hidden posts)
- Article pages have three-column layout
- TOC appears on right side
- Typography uses Newsreader for body, Inter for headings
- Hidden posts show "Unlisted" badge
- Mobile responsive behavior works

**Step 3: Check RSS excludes hidden posts**

```bash
curl -s http://localhost:1313/index.xml | grep -c "<item>"
```

Expected: Count matches visible posts only

**Step 4: Remove old theme customizations if any**

```bash
rm -rf layouts/partials/head 2>/dev/null || true
```

**Step 5: Final commit**

```bash
git add -A
git commit -m "chore: cleanup old theme customizations"
```

---

## Summary

After completing all tasks, you will have:

1. A custom `themes/minimal/` theme with:
   - Three-column layout for articles (sidebar/content/TOC)
   - Two-column layout for list pages
   - Self-hosted Inter + Newsreader fonts
   - Tailwind CSS via Hugo Pipes
   - Responsive mobile/tablet behavior

2. Hidden post support:
   - Posts with `hidden: true` are accessible via direct URL
   - Hidden posts filtered from homepage, archives, RSS
   - Visual "Unlisted" badge on hidden articles

3. Migrated content:
   - All drafts moved from `/drafts/` to `/content/post/` with `hidden: true`
   - Old theme removed

4. Clean build:
   - `hugo --minify` produces production site
   - `hugo server -D` runs development server
