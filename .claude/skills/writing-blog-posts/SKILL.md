---
name: writing-blog-posts
description: Use when writing, drafting, or editing blog posts for brianguthrie.com; routes to the appropriate phase skill
---

# Writing Blog Posts

Orchestrator for the blog post pipeline on brianguthrie.com (Hugo site). Routes to the appropriate phase skill based on user input.

## Entry Points

- **User has a topic or idea** → Invoke `/blog-interrogation`
- **User has a completed outline and says "review it"** → Invoke `/blog-critic`
- **User says "draft it" or the outline has passed review** → Invoke `/blog-author`
- **User provides an already-written draft and asks for feedback** → Invoke `/blog-revision`

## Pipeline

The full sequence is:

1. `/blog-interrogation` — Socratic questioning, produces dialectical outline at `drafts/<slug>/outline.md`
2. `/blog-critic` — Oppositional review of the outline by a separate agent
3. `/blog-author` — Voice-calibrated, research-backed draft from the validated outline
4. `/blog-revision` — Structural or line-level feedback on the author's edited draft

Each skill hands off to the next. The author approves at each gate before proceeding.

## Artifacts

- **Outline:** `drafts/<slug>/outline.md` (dialectical structure: thesis, antithesis, synthesis)
- **Draft:** `content/post/<slug>/index.md` (Hugo post, always `draft: true`)
