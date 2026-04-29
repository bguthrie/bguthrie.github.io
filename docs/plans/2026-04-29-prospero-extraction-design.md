# Prospero: Extracting the Blog-Writing Skill into a Standalone Plugin

**Date:** 2026-04-29
**Target repository:** `https://github.com/bguthrie/prospero.git` (currently empty)
**Source:** `.claude/skills/blog-*` and `.claude/skills/writing-blog-posts/` in `bguthrie.github.io`

## Problem

The blog-writing pipeline in `bguthrie.github.io` is a five-skill orchestration (`writing-blog-posts`, `blog-interrogation`, `blog-critic`, `blog-author`, `blog-revision`) that works well but is tightly coupled to one author's voice, one site's conventions, and one CMS. Extracting it into a standalone Claude Code plugin named Prospero makes it reusable across projects and publishable for other writers who want the same dialectical workflow.

## Scope

Build a general-purpose Claude Code plugin that:

- Packages the interrogation → critique → author → revision pipeline as a standalone installable unit.
- Decouples voice, audience, and research sources from the skills themselves.
- Detects the host project's CMS on first use and adapts output paths and frontmatter accordingly.
- Ships with Hugo as the reference preset and plain-markdown as the default, with Jekyll/Ghost as skeleton presets open to community contribution.

Non-goals for v1:

- Multi-audience support in a single project (users fork directories instead).
- Automated integration testing with Claude in the loop.
- CMS presets beyond Hugo being actively maintained.
- User-defined piece types (bundled three remain; community PRs expected).

## Architecture

### Plugin repository layout

Mirrors the Superpowers plugin convention.

```
prospero/
├── .claude-plugin/
│   └── plugin.json
├── commands/
│   ├── init.md
│   ├── interrogate.md
│   ├── critique.md
│   ├── author.md
│   └── revise.md
├── skills/
│   ├── prospero/SKILL.md           # orchestrator; routes based on user input
│   ├── init/SKILL.md               # LLM-driven setup
│   ├── interrogate/SKILL.md
│   ├── critique/SKILL.md
│   ├── author/SKILL.md
│   └── revise/SKILL.md
├── presets/
│   ├── hugo.toml                   # reference preset
│   ├── plain.toml                  # default, CMS-agnostic
│   ├── jekyll.toml                 # skeleton
│   └── ghost.toml                  # skeleton
├── templates/
│   ├── voice.md                    # starter voice guide
│   ├── audience.md                 # starter audience + research sources
│   └── types/
│       ├── argued-essay.md         # critic rubric for argued essays
│       ├── opinion-polemic.md      # critic rubric for polemics
│       └── explainer.md            # critic rubric for explainers
├── examples/                       # worked-example blog post (artifacts at each stage)
├── tests/
│   ├── fixtures/                   # per-CMS before/after project snapshots
│   └── validate.sh                 # static plugin lint
├── README.md
└── LICENSE
```

### User project layout after `/init`

```
my-project/
├── .prospero/
│   ├── config.toml                 # preset = "hugo" + any overrides
│   ├── voice.md                    # copied from template, user fills in
│   └── audience.md                 # copied from template, user fills in
├── drafts/
│   └── <slug>/
│       ├── outline.md
│       └── research.md
└── content/post/<slug>/index.md    # path resolved from preset
```

## Components

### The `init` skill

Invoked automatically by `/interrogate` when `.prospero/` is absent, or manually via `/init` for reconfiguration. On invocation:

1. Scans the project root and neighbors for CMS markers (`hugo.toml`, `_config.yml`, `package.json` with Ghost or Eleventy or Next, etc.). The LLM reads files and makes a judgment; no regex heuristics.
2. Proposes a preset with its implied paths and frontmatter shape, showing the user what will be written.
3. Asks for confirmation or overrides.
4. Writes `.prospero/config.toml` with a single `preset = "..."` line plus explicit overrides.
5. Copies `templates/voice.md` and `templates/audience.md` into `.prospero/`.
6. Tells the user to fill in the voice guide before running `/interrogate`. This is the one step that cannot be automated.

### Phase skills

Each preserves its current workflow (see existing skills in `bguthrie.github.io/.claude/skills/`). Two changes:

- All hardcoded voice/audience/research-source text is replaced with references to `.prospero/voice.md` and `.prospero/audience.md`. The existing HN + Martin Fowler content moves into the *template* audience file, not the skill.
- Output paths are resolved via the preset. `author` no longer hardcodes `content/post/<slug>/index.md`; it substitutes `{slug}` into the preset's `post_path_pattern`.

### Presets

A preset is a TOML file defining CMS idioms:

```toml
# presets/hugo.toml
posts_dir = "content/post"
post_path_pattern = "{posts_dir}/{slug}/index.md"
drafts_dir = "drafts"
sample_posts_dir = "content/post"
frontmatter_template = """---
title: "{title}"
description: "{description}"
date: {date}
draft: true
categories:
  - {category}
---"""
```

Resolution order:

1. Load preset referenced in `.prospero/config.toml`, or `plain.toml` as default.
2. Overlay any explicit fields set directly in `.prospero/config.toml`.
3. Substitute path template variables (`{slug}`, `{title}`, `{date}`, `{category}`) at write time.

### Piece types

Three bundled in `templates/types/`:

- `argued-essay.md` — the 7-criterion critic rubric currently in `blog-critic`.
- `opinion-polemic.md` — the 5-criterion polemic rubric.
- `explainer.md` — the 5-criterion explainer rubric.

No user override mechanism in v1. Community additions via PR.

### Voice and audience

Free-form markdown. Templates ship with commented section scaffolding:

- `voice.md`: Tone, Structure, Sentences, Argument, Never sections, each empty with prompt commentary.
- `audience.md`: Audience and Research Sources sections, each empty with prompt commentary.

Skills read these files verbatim and inject into their prompts. No parsing or structure required.

## Data flow

### Config resolution chain

Every phase skill performs at invocation:

1. Load `.prospero/config.toml` (fail gracefully if absent → trigger init).
2. Load referenced preset, overlay with explicit config fields.
3. Resolve path templates.
4. Load `.prospero/voice.md` and `.prospero/audience.md`.
5. Halt with a clear message if either user file is empty.

### Slug as cross-reference

The slug is the single identifier spanning all stages. No dated draft directories; the slug `my-topic` appears at:

```
drafts/my-topic/outline.md
drafts/my-topic/research.md
content/post/my-topic/index.md
```

Rename the slug, rename both sides. The date lives in frontmatter, not in paths.

### Slug disambiguation

When multiple drafts are in flight, phase skills resolve the active slug by (in order):

1. Explicit command argument: `/author my-topic`.
2. Most-recently-modified directory under `drafts/`.

No state file tracks "the active post" — the filesystem's mtime is sufficient.

### Pipeline flow

```
/interrogate [topic]
  → if .prospero/ absent, invoke init skill first
  → read audience.md, ask piece-type question
  → Socratic questioning with web search
  → write drafts/<slug>/outline.md

/critique
  → spawn Agent with outline path, piece-type rubric path, audience.md path
  → agent reads outline, performs web research, writes drafts/<slug>/research.md
  → returns critique to user

/author
  → read outline, research.md, voice.md, audience.md, sample posts
  → resolve post path from preset
  → write content/post/<slug>/index.md using preset's frontmatter_template

/revise
  → read current draft, voice.md, outline for reference
  → return line-level and structural feedback
  → optional: spawn /critique in draft mode
```

### Cross-skill state

Every artifact lives on disk. No session state, no global variables, no implicit context. Each skill resolves its paths fresh at invocation time.

### Error surfaces

- `voice.md` empty → phase skill halts with "fill in `.prospero/voice.md` before continuing."
- Preset references unknown CMS → init re-runs.
- Research file missing when critic runs in draft mode → critic warns and proceeds with web-search only.
- No silent fallbacks.

## Migration path for `bguthrie.github.io`

Five steps in the existing repo once Prospero is published:

1. Install the Prospero plugin via the Claude Code marketplace.
2. Run `/init`. It detects Hugo, proposes the hugo preset, writes `.prospero/config.toml` with `preset = "hugo"`.
3. Move the current Voice Guide (lines 71-99 of `.claude/skills/blog-author/SKILL.md`) into `.prospero/voice.md` verbatim, under the template's section headers.
4. Move the HN audience description and research source list (from `blog-author` and `blog-critic`) into `.prospero/audience.md`.
5. Delete `.claude/skills/blog-*` and `.claude/skills/writing-blog-posts/`.

Existing `drafts/software-architecture-after-ai/` already matches Prospero's slug convention; no renaming needed.

Verification: run `/interrogate` on a dummy topic, confirm it reads the right voice and writes to `drafts/<slug>/outline.md`.

## Testing and validation

- Manual smoke tests in a scratch directory with fake Hugo, Jekyll, and plain-folder configs.
- Preset fixtures: `tests/fixtures/<cms>/` showing before/after project snapshots per preset. Doubles as documentation.
- Worked example in `examples/`: one fully-completed post with outline, research, draft, and revision feedback visible.
- `tests/validate.sh`: static lint that confirms all skills parse, commands reference valid skills, and presets contain required keys. Runs in CI.

No automated integration testing (that would require Claude in the loop). Manual smoke + lint + examples sufficient for v1.

## Decisions log

- **Audience:** general-purpose open-source tool. Full decoupling of voice/audience/paths.
- **Distribution:** Claude Code plugin. Marketplace-installable; mirrors Superpowers.
- **Voice decoupling:** user-provided `.prospero/voice.md` + sample-post calibration.
- **Audience decoupling:** combined `.prospero/audience.md` covering reader description and research sources.
- **Output/paths:** convention over configuration via presets, with LLM-driven CMS detection on first use. Hugo is the reference preset; others are skeletons.
- **Piece types:** three bundled, no user override in v1.
- **Naming:** plain verbs (`init`, `interrogate`, `critique`, `author`, `revise`) without `prospero-` prefix; namespace resolution via plugin system.
- **Init trigger:** auto-invoked by `/interrogate` when `.prospero/` is absent; also callable explicitly for reconfiguration.
- **Slug convention:** plain slug as cross-reference across draft and published paths. No dated directories.
- **Host-repo scope:** Hugo-first maintenance. Other presets welcome via PR but not proactively polished.
