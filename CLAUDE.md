# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal blog built with Hugo using the [hugo-theme-stack](https://github.com/CaiJimmy/hugo-theme-stack) theme. The site is deployed to GitHub Pages via GitHub Actions and published at https://brianguthrie.com.

## Common Commands

### Development
```bash
# Start local development server with drafts enabled
hugo server -D

# Start server without drafts
hugo server

# Build the site (output to ./public)
hugo --minify

# Build with production settings
HUGO_ENVIRONMENT=production hugo --minify
```

### Content Management
```bash
# Create a new post (creates directory structure)
hugo new content/post/my-new-post/index.md

# Create a new draft
hugo new drafts/my-draft/index.md
```

## Architecture

### Content Structure

**Published posts**: `content/post/<post-name>/index.md`
- Each post lives in its own directory with an `index.md` file
- Images and other assets are co-located in the post directory
- Posts require frontmatter with: `title`, `description`, `date`, `image` (optional), `draft: false`, and `categories`

**Draft posts**: `drafts/<draft-name>/index.md`
- Drafts are stored outside the `content/` directory, not in Hugo's content tree
- To publish a draft, move it from `drafts/` to `content/post/`
- Draft posts use the same directory structure as published posts

**Pages**: `content/page/<page-name>/index.md`
- Static pages like bio, archives, search, and links
- Use similar structure to posts but different layout

### Configuration

Configuration is split across multiple files in `config/_default/`:
- `config.toml`: Base site settings (baseURL, title, language)
- `params.toml`: Theme parameters (sidebar, widgets, comments, image processing)
- `menu.toml`: Navigation menu structure
- `markup.toml`: Markdown rendering settings
- `permalinks.toml`: URL structure rules

### Theme

The site uses hugo-theme-stack v3.29.0 as a Hugo module (defined in `go.mod`). Theme customizations:
- Custom head partial at `layouts/partials/head/custom.html` adds PostHog analytics
- Minimal custom layouts; most styling comes from the theme

### Deployment

Automated deployment via `.github/workflows/hugo.yml`:
1. Pushes to `main` trigger the workflow
2. Builds with Hugo 0.128.0 extended (with Dart Sass)
3. Uses `--minify` flag for production
4. Deploys to GitHub Pages automatically

The workflow handles submodule initialization for the theme and sets up the correct base URL dynamically.

### Categories & Organization

Posts are organized by categories defined in `content/categories/`. The main section for posts is `post` (defined in `params.toml`). Categories include: platform, sdlc, etc.
