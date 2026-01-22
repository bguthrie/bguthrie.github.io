# Custom Hugo Theme Design

## Overview

A minimal, magazine-style Hugo theme for brianguthrie.com with three-column article layout, clean typography, and support for world-readable unlisted articles.

## Goals

1. **Visual simplicity**: Clean white background, generous typography, minimal UI chrome
2. **Three-column layout**: Identity sidebar, content, sticky TOC
3. **Unlisted articles**: Posts accessible via direct URL but hidden from homepage, archives, and RSS

## Typography

**Fonts (self-hosted):**
- **Headlines/UI**: Inter
- **Body text**: Newsreader (editorial serif)

**Sizing:**
- Body: 18-20px
- Headlines: 32-48px for post titles
- Sidebar/TOC: 14px, muted gray

## Theme Structure

```
themes/minimal/
├── layouts/
│   ├── _default/
│   │   ├── baseof.html      # Base template with head, body wrapper
│   │   ├── single.html      # Article page (3-column with TOC)
│   │   ├── list.html        # Homepage and section lists
│   │   └── summary.html     # Post preview card for lists
│   ├── partials/
│   │   ├── head.html        # Meta tags, Tailwind CSS, fonts
│   │   ├── sidebar.html     # Left sidebar (identity)
│   │   ├── toc.html         # Right sidebar (table of contents)
│   │   ├── header.html      # Minimal top nav for mobile/tablet
│   │   └── footer.html      # Simple footer
│   └── _default/
│       └── rss.xml          # RSS with hidden posts filtered
├── assets/
│   └── css/
│       └── main.css         # Tailwind directives + custom styles
├── static/
│   └── fonts/
│       ├── Inter-*.woff2
│       └── Newsreader-*.woff2
└── theme.toml               # Theme metadata
```

## Layout

### Article Pages (single.html)

Three-column grid layout:

```
┌──────────────────────────────────────────────────────────────┐
│  Left Sidebar (240px)  │  Content (fluid)  │  TOC (240px)    │
│                        │                   │                  │
│  Avatar                │  Title            │  • Section 1     │
│  Brian Guthrie         │  Date · 4 min     │  • Section 2     │
│  Bio text...           │                   │    ◦ Subsection  │
│                        │  Article body     │  • Section 3     │
│                        │  with Newsreader  │                  │
│                        │  typography...    │  (sticky)        │
│                        │                   │                  │
└──────────────────────────────────────────────────────────────┘
```

**CSS Grid:**
```css
.article-layout {
  display: grid;
  grid-template-columns: 240px 1fr 240px;
  gap: 2rem;
  max-width: 1280px;
  margin: 0 auto;
}
```

**Sticky sidebars:**
```css
.sidebar, .toc {
  position: sticky;
  top: 2rem;
  align-self: start;
}
```

### Homepage & List Pages (list.html)

Two-column layout (no TOC):

```
┌─────────────────────────────────────────────────┐
│  Left Sidebar (240px)  │  Post List (fluid)    │
│                        │                        │
│  Avatar                │  Post Title One        │
│  Brian Guthrie         │  Sep 17, 2025 · 4 min  │
│  Bio text...           │  Brief description...  │
│                        │                        │
│                        │  Post Title Two        │
│                        │  Sep 10, 2025 · 6 min  │
│                        │  Brief description...  │
│                        │                        │
│                        │  [Older posts →]       │
└─────────────────────────────────────────────────┘
```

**Post summary card:**
- Title (Newsreader, linked)
- Date + reading time (Inter, muted text-gray-500)
- Description from frontmatter (single line)
- No thumbnail images

### Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Desktop (1024px+) | Three columns: sidebar / content / TOC |
| Tablet (768-1023px) | Two columns: content / TOC; identity moves to header |
| Mobile (<768px) | Single column; TOC collapses to expandable block at top |

## Unlisted Articles

**Frontmatter:**
```yaml
---
title: "My Draft Article"
hidden: true
---
```

**Behavior when `hidden: true`:**
- Excluded from homepage post list
- Excluded from section archives
- Excluded from RSS feed
- Excluded from sitemap (or included with noindex)
- Fully rendered at its URL
- Has all normal styling, TOC, etc.

**Template filtering:**
```go-html-template
{{ range where .Pages "Params.hidden" "!=" true }}
  {{ partial "summary.html" . }}
{{ end }}
```

**Visual indicator:**
Inline badge next to article title:
```html
<h1>
  {{ .Title }}
  {{ if .Params.hidden }}
    <span class="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded ml-2">Unlisted</span>
  {{ end }}
</h1>
```

## Tailwind Integration

**Hugo Pipes setup:**

`assets/css/main.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-sans text-gray-900 bg-white;
  }

  article.prose {
    @apply font-serif;
  }
}
```

**Config files at project root:**

`tailwind.config.js`:
```js
module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
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

`postcss.config.js`:
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

**In `head.html`:**
```go-html-template
{{ $css := resources.Get "css/main.css" | postCSS }}
{{ if hugo.IsProduction }}
  {{ $css = $css | minify | fingerprint }}
{{ end }}
<link rel="stylesheet" href="{{ $css.RelPermalink }}">
```

## Self-Hosted Fonts

Download from Google Fonts, place in `static/fonts/`.

**Font-face declarations in `main.css`:**
```css
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
```

## Other Pages

- **About/Bio**: Two-column layout (sidebar + content), no TOC
- **Archives**: Chronological list grouped by year, two-column layout
- **404**: Minimal centered message with link to homepage

## Meta & SEO

**Open Graph / Twitter cards:**
```go-html-template
<meta property="og:title" content="{{ .Title }}">
<meta property="og:description" content="{{ .Description }}">
<meta property="og:type" content="article">
{{ with .Params.image }}
<meta property="og:image" content="{{ . | absURL }}">
{{ end }}
```

**RSS feed:** Filter hidden posts in `layouts/_default/rss.xml`

**Sitemap:** Hidden posts excluded or marked with noindex

## Migration Steps

1. Create theme structure in `themes/minimal/`
2. Download and install Inter and Newsreader fonts
3. Set up Tailwind with Hugo Pipes
4. Build base templates (baseof, head, footer)
5. Build article single template with TOC
6. Build homepage list template
7. Build sidebar partial with identity
8. Add hidden post filtering and badge
9. Move drafts from `/drafts/` to `/content/post/` with `hidden: true`
10. Update Hugo config to use new theme
11. Remove hugo-theme-stack dependency

## Out of Scope

- Comments system
- Search functionality
- Tag cloud / category widgets
- Dark mode toggle
- Image galleries
- Math/KaTeX support
