# Prospero Extraction Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Extract the five blog-writing skills from `bguthrie.github.io/.claude/skills/` into a standalone Claude Code plugin named Prospero, published at `github.com/bguthrie/prospero.git`, then migrate `bguthrie.github.io` to consume Prospero as an installed plugin.

**Architecture:** Plugin mirrors Superpowers' layout (`.claude-plugin/`, `commands/`, `skills/`, supporting directories). Voice, audience, and research sources move out of the skills into user-project files (`.prospero/voice.md`, `.prospero/audience.md`). CMS idioms move into TOML presets; the LLM-driven `init` skill detects the CMS on first use. Slug is the cross-reference across draft and published paths.

**Tech Stack:** Claude Code plugins. Bash for validation script. TOML for presets. Markdown everywhere else.

**Design reference:** `docs/plans/2026-04-29-prospero-extraction-design.md`.

**Source material:**
- `.claude/skills/blog-interrogation/SKILL.md`
- `.claude/skills/blog-critic/SKILL.md`
- `.claude/skills/blog-author/SKILL.md`
- `.claude/skills/blog-revision/SKILL.md`
- `.claude/skills/writing-blog-posts/SKILL.md`

**Repositories in play:**
- **Prospero repo** (new work): `github.com/bguthrie/prospero.git` (currently empty). Clone to `~/Projects/prospero/`. Phases 1-8 happen here.
- **Host repo** (migration): `~/Projects/bguthrie.github.io` (this repo). Phase 9 happens here.

---

## Phase 0: Workspace setup

### Task 0.1: Clone the empty Prospero repo

**Steps:**

1. Clone the repo:
   ```bash
   cd ~/Projects
   git clone https://github.com/bguthrie/prospero.git
   cd prospero
   ```
2. Confirm it's empty:
   ```bash
   ls -la
   ```
   Expected: only `.git/` directory.
3. Create a working branch:
   ```bash
   git checkout -b extract-blog-skills
   ```

**No commit yet** — nothing to commit.

---

## Phase 1: Plugin skeleton

### Task 1.1: Create plugin manifest

**Files:**
- Create: `~/Projects/prospero/.claude-plugin/plugin.json`

**Step 1:** Create the directory and file.
   ```bash
   mkdir -p .claude-plugin
   ```

**Step 2:** Write `plugin.json`:
   ```json
   {
     "name": "prospero",
     "description": "Dialectical blog-post pipeline: interrogate, critique, author, revise. CMS-agnostic; voice and audience are project-local.",
     "version": "0.1.0",
     "author": {
       "name": "Brian Guthrie"
     },
     "homepage": "https://github.com/bguthrie/prospero",
     "repository": "https://github.com/bguthrie/prospero",
     "license": "MIT",
     "keywords": ["blogging", "writing", "hugo", "jekyll", "skills"]
   }
   ```

**Step 3:** Commit:
   ```bash
   git add .claude-plugin/plugin.json
   git commit -m "feat: add plugin manifest"
   ```

### Task 1.2: Add LICENSE and .gitignore

**Files:**
- Create: `~/Projects/prospero/LICENSE`
- Create: `~/Projects/prospero/.gitignore`

**Step 1:** Write `LICENSE` — standard MIT, copyright 2026 Brian Guthrie. (Copy from https://opensource.org/license/mit or from any existing repo with an MIT license.)

**Step 2:** Write `.gitignore`:
   ```
   .DS_Store
   *.swp
   node_modules/
   ```

**Step 3:** Commit:
   ```bash
   git add LICENSE .gitignore
   git commit -m "chore: add LICENSE and .gitignore"
   ```

### Task 1.3: Stub out directory structure

**Files:**
- Create: `~/Projects/prospero/commands/.gitkeep`
- Create: `~/Projects/prospero/skills/.gitkeep`
- Create: `~/Projects/prospero/presets/.gitkeep`
- Create: `~/Projects/prospero/templates/.gitkeep`
- Create: `~/Projects/prospero/templates/types/.gitkeep`
- Create: `~/Projects/prospero/examples/.gitkeep`
- Create: `~/Projects/prospero/tests/.gitkeep`
- Create: `~/Projects/prospero/tests/fixtures/.gitkeep`

**Step 1:** Create all directories:
   ```bash
   mkdir -p commands skills presets templates/types examples tests/fixtures
   touch commands/.gitkeep skills/.gitkeep presets/.gitkeep templates/.gitkeep templates/types/.gitkeep examples/.gitkeep tests/.gitkeep tests/fixtures/.gitkeep
   ```

**Step 2:** Commit:
   ```bash
   git add .
   git commit -m "chore: scaffold directory structure"
   ```

---

## Phase 2: Validation script

Write the validator before the content so every subsequent task verifies its own output.

### Task 2.1: Write failing validator

**Files:**
- Create: `~/Projects/prospero/tests/validate.sh`

**Step 1:** Write the script:
   ```bash
   #!/usr/bin/env bash
   # Static lint for the Prospero plugin. Returns 0 on success, non-zero on failure.
   set -euo pipefail

   ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
   cd "$ROOT"

   fail() { echo "FAIL: $1" >&2; exit 1; }

   # Plugin manifest present and parseable
   [[ -f .claude-plugin/plugin.json ]] || fail "missing .claude-plugin/plugin.json"
   python3 -c "import json; json.load(open('.claude-plugin/plugin.json'))" || fail "plugin.json not valid JSON"

   # Required skills exist
   for skill in prospero init interrogate critique author revise; do
     [[ -f "skills/$skill/SKILL.md" ]] || fail "missing skills/$skill/SKILL.md"
   done

   # Required commands exist
   for cmd in init interrogate critique author revise; do
     [[ -f "commands/$cmd.md" ]] || fail "missing commands/$cmd.md"
   done

   # Required presets exist with required keys
   for preset in plain hugo; do
     path="presets/$preset.toml"
     [[ -f "$path" ]] || fail "missing $path"
     for key in posts_dir post_path_pattern drafts_dir frontmatter_template; do
       grep -q "^$key" "$path" || fail "$path missing key: $key"
     done
   done

   # Required templates
   [[ -f templates/voice.md ]] || fail "missing templates/voice.md"
   [[ -f templates/audience.md ]] || fail "missing templates/audience.md"
   for type in argued-essay opinion-polemic explainer; do
     [[ -f "templates/types/$type.md" ]] || fail "missing templates/types/$type.md"
   done

   # Every SKILL.md has required frontmatter
   for skill_file in skills/*/SKILL.md; do
     head -5 "$skill_file" | grep -q "^name:" || fail "$skill_file missing 'name:' frontmatter"
     head -5 "$skill_file" | grep -q "^description:" || fail "$skill_file missing 'description:' frontmatter"
   done

   echo "OK"
   ```

**Step 2:** Make it executable:
   ```bash
   chmod +x tests/validate.sh
   ```

**Step 3:** Run it — it must fail at this point:
   ```bash
   ./tests/validate.sh
   ```
   Expected: `FAIL: missing skills/prospero/SKILL.md` (or similar; should exit non-zero).

**Step 4:** Commit:
   ```bash
   git add tests/validate.sh
   git commit -m "feat: add plugin validation script"
   ```

---

## Phase 3: Presets

### Task 3.1: Write the default `plain.toml` preset

**Files:**
- Create: `~/Projects/prospero/presets/plain.toml`

**Step 1:** Write:
   ```toml
   # Default preset for non-CMS projects. Plain markdown with minimal frontmatter.
   posts_dir = "posts"
   post_path_pattern = "{posts_dir}/{slug}/index.md"
   drafts_dir = "drafts"
   sample_posts_dir = "posts"
   frontmatter_template = """---
   title: "{title}"
   date: {date}
   draft: true
   ---"""
   ```

**Step 2:** Commit:
   ```bash
   git add presets/plain.toml
   git commit -m "feat: add plain preset"
   ```

### Task 3.2: Write the reference `hugo.toml` preset

**Files:**
- Create: `~/Projects/prospero/presets/hugo.toml`

**Step 1:** Write:
   ```toml
   # Hugo preset. Reference implementation; actively maintained.
   posts_dir = "content/post"
   post_path_pattern = "{posts_dir}/{slug}/index.md"
   drafts_dir = "drafts"
   sample_posts_dir = "content/post"
   frontmatter_template = """---
   title: "{title}"
   description: "{description}"
   date: {date}
   image:
   draft: true
   categories:
     - {category}
   ---"""
   ```

**Step 2:** Commit:
   ```bash
   git add presets/hugo.toml
   git commit -m "feat: add hugo preset"
   ```

### Task 3.3: Write skeleton `jekyll.toml` preset

**Files:**
- Create: `~/Projects/prospero/presets/jekyll.toml`

**Step 1:** Write:
   ```toml
   # Jekyll preset. Skeleton; PRs welcome to refine.
   posts_dir = "_posts"
   post_path_pattern = "{posts_dir}/{date}-{slug}.md"
   drafts_dir = "_drafts"
   sample_posts_dir = "_posts"
   frontmatter_template = """---
   layout: post
   title: "{title}"
   date: {date}
   categories: [{category}]
   published: false
   ---"""
   ```

**Step 2:** Commit:
   ```bash
   git add presets/jekyll.toml
   git commit -m "feat: add jekyll preset skeleton"
   ```

### Task 3.4: Write skeleton `ghost.toml` preset

**Files:**
- Create: `~/Projects/prospero/presets/ghost.toml`

**Step 1:** Write:
   ```toml
   # Ghost preset. Skeleton; Ghost is API-driven, so this writes a local markdown staging file.
   # PRs welcome to add a Ghost Admin API export hook.
   posts_dir = "ghost-posts"
   post_path_pattern = "{posts_dir}/{slug}.md"
   drafts_dir = "drafts"
   sample_posts_dir = "ghost-posts"
   frontmatter_template = """---
   title: "{title}"
   slug: {slug}
   status: draft
   published_at: {date}
   tags: [{category}]
   ---"""
   ```

**Step 2:** Commit:
   ```bash
   git add presets/ghost.toml
   git commit -m "feat: add ghost preset skeleton"
   ```

---

## Phase 4: Templates

### Task 4.1: Write `templates/voice.md`

**Files:**
- Create: `~/Projects/prospero/templates/voice.md`

**Step 1:** Write a skeleton with section headers and commented prompts:
   ```markdown
   # Voice Guide

   <!--
   This file defines YOUR voice. Prospero reads it verbatim when authoring
   and revising posts. Fill in each section below; delete the comments when
   you're done. Keep your rules tight and specific — vague instructions
   produce vague writing.

   A good voice guide is an explicit set of rules, NOT a description of
   who you are. "Use semicolons freely" beats "I like complex sentences."
   -->

   ## Tone

   <!-- Stance (confident? hedged?), person (first? third?), register (formal? conversational?).
   Examples of phrases that fit your voice. Phrases that don't. -->

   ## Structure

   <!-- How you use section headers (topical? argumentative?). Footnote usage.
   Lists vs prose. How sections end. Paragraph length preferences. -->

   ## Sentences

   <!-- Length variation. When you use italics, semicolons, parentheses, dashes.
   Rules about fragments. Profanity posture. -->

   ## Argument

   <!-- How you build claims. Personal experience vs abstract. How you engage
   counterarguments. What counts as sufficient evidence. -->

   ## Never

   <!-- List of forbidden patterns with one-line explanations:
   - Em dashes
   - Throat-clearing clichés
   - AI-sounding generalizations
   - etc. -->
   ```

**Step 2:** Commit:
   ```bash
   git add templates/voice.md
   git commit -m "feat: add voice template"
   ```

### Task 4.2: Write `templates/audience.md`

**Files:**
- Create: `~/Projects/prospero/templates/audience.md`

**Step 1:** Write:
   ```markdown
   # Audience

   <!--
   Who reads your writing? Prospero uses this to calibrate how much
   background the critic should flag as missing, what prior art it should
   check for, and how to frame the entry point of each post.

   Be concrete: "sysadmins at mid-size companies" beats "tech people."
   -->

   ## Reader

   <!-- Describe the reader: role, level of expertise, disposition
   (skeptical? friendly?), what they've already seen. What concepts can
   you assume; which ones need framing? -->

   # Research Sources

   <!--
   Where does your audience read? Where do you go to verify claims,
   find prior art, or check whether an argument has been made before?
   List URLs and one-line notes on what each source is good for.
   -->

   ## Sources

   <!-- Examples:
   - hn.algolia.com (what has the HN audience already seen on this topic?)
   - martinfowler.com/bliki (canonical treatments of software engineering ideas)
   - broader web for counterarguments and factual verification
   -->
   ```

**Step 2:** Commit:
   ```bash
   git add templates/audience.md
   git commit -m "feat: add audience template"
   ```

---

## Phase 5: Piece-type rubrics

Extract the three critic rubrics currently embedded in `.claude/skills/blog-critic/SKILL.md`. Each becomes a standalone markdown file.

### Task 5.1: Write `templates/types/argued-essay.md`

**Files:**
- Create: `~/Projects/prospero/templates/types/argued-essay.md`

**Step 1:** Adapt from `blog-critic/SKILL.md` lines 33-63 (the `argued-essay` critic prompt). Replace hardcoded audience references with generic `{audience}` placeholder. Write:
   ```markdown
   # Argued Essay

   Rubric for an essay whose thesis needs to survive challenge.

   ## Critic criteria

   1. **Thesis clarity:** Is the thesis one falsifiable sentence? Could a reasonable person disagree with it? If it is a truism, flag it.
   2. **Antithesis strength:** Is the stated antithesis the actual strongest counterargument, or a strawman? Who specifically holds this view and what is their best evidence?
   3. **Synthesis validity:** Does the synthesis genuinely integrate the antithesis, or does it just restate the thesis with a concession bolted on?
   4. **Per-section audit:** For each section, check: Does the claim support the thesis? Is the evidence specific (not "studies show")? Is the objection the real one a smart critic would raise? Does the resolution hold?
   5. **Novelty:** Has this argument been made before in substantially this form? If so, what does this version add? Check prior art in the research sources defined in the project's audience.md.
   6. **Interest:** Would the target reader (see audience.md) learn something or see something differently? Or is this preaching to the choir?
   7. **Missing pieces:** What evidence, examples, or counterarguments are conspicuously absent?

   ## Output

   Structured critique. Be specific: "Section 3 claims X but provides no evidence" not "consider strengthening Section 3." End with a summary judgment: ready to draft, needs revision, or needs rethinking.
   ```

**Step 2:** Commit:
   ```bash
   git add templates/types/argued-essay.md
   git commit -m "feat: add argued-essay rubric"
   ```

### Task 5.2: Write `templates/types/opinion-polemic.md`

**Files:**
- Create: `~/Projects/prospero/templates/types/opinion-polemic.md`

**Step 1:** Adapt from `blog-critic/SKILL.md` lines 65-94. Write:
   ```markdown
   # Opinion / Polemic

   Rubric for an opinion piece or polemic. Don't demand logical airtightness; evaluate whether this is worth reading.

   ## Critic criteria

   1. **Compelling voice:** Does the outline suggest a piece that will have energy and conviction? Or does it read like a committee report?
   2. **Interest:** Is there a genuine insight here, or is this a well-known position restated? What would make a skeptical reader keep reading?
   3. **Landing:** Does the piece know where it is going? Is there a clear destination, or does it trail off?
   4. **Weak spots:** Where will smart critics poke holes? Which claims are asserted without support?
   5. **Missing color:** What stories, examples, or concrete details would make the abstract claims land?

   ## Output

   Structured critique. Be specific. End with a summary judgment: ready to draft, needs revision, or needs rethinking.
   ```

**Step 2:** Commit:
   ```bash
   git add templates/types/opinion-polemic.md
   git commit -m "feat: add opinion-polemic rubric"
   ```

### Task 5.3: Write `templates/types/explainer.md`

**Files:**
- Create: `~/Projects/prospero/templates/types/explainer.md`

**Step 1:** Adapt from `blog-critic/SKILL.md` lines 96-125. Write:
   ```markdown
   # Explainer

   Rubric for an explainer post. The goal is to teach the reader something; evaluate whether they will actually learn it.

   ## Critic criteria

   1. **Clarity:** Will the reader understand the core concept after reading this? Is the explanation concrete enough?
   2. **Accuracy:** Are the technical claims correct? Check against current sources.
   3. **Progression:** Does the explanation build logically? Can the reader follow without backtracking?
   4. **Novelty:** Is this a fresh explanation or angle, or does it retread well-covered ground? What does it add?
   5. **Payoff:** Does the reader walk away with something useful? Can they apply what they learned?

   ## Output

   Structured critique. Be specific. End with a summary judgment: ready to draft, needs revision, or needs rethinking.
   ```

**Step 2:** Commit:
   ```bash
   git add templates/types/explainer.md
   git commit -m "feat: add explainer rubric"
   ```

---

## Phase 6: The init skill

### Task 6.1: Write `skills/init/SKILL.md`

**Files:**
- Create: `~/Projects/prospero/skills/init/SKILL.md`

**Step 1:** Write:
   ```markdown
   ---
   name: init
   description: Scaffold .prospero/ in the current project. Detect CMS, propose preset, copy voice/audience templates. Auto-invoked by /interrogate on first use.
   ---

   # Init

   Set up Prospero in the current project. Idempotent: safe to re-run for reconfiguration.

   ## Process

   1. **Scan for CMS markers.** Read the project root. Look for:
      - `hugo.toml`, `hugo.yaml`, or `config.toml` with Hugo-specific keys → Hugo.
      - `_config.yml` with Jekyll markers → Jekyll.
      - `package.json` with `ghost` or `@tryghost` dependency → Ghost.
      - None of the above → plain.
      Read the files; do not rely on filename alone. If ambiguous, ask the user.

   2. **Propose the preset.** Tell the user what you found and what you'd use. Show:
      - Preset name.
      - The implied post path (from `post_path_pattern`).
      - The sample posts directory used for voice calibration.
      Ask whether to accept, choose a different preset, or override specific fields.

   3. **Write `.prospero/config.toml`.** Minimal:
      ```toml
      preset = "hugo"
      ```
      Add explicit overrides only if the user requested them.

   4. **Copy templates.** Read the plugin's `templates/voice.md` and `templates/audience.md` and write them to `.prospero/voice.md` and `.prospero/audience.md`. If the files already exist (reconfiguration case), do not overwrite; notify the user.

   5. **Tell the user what to do next.** Exact message:
      > Setup complete. Before running `/interrogate`, fill in `.prospero/voice.md` and `.prospero/audience.md`. These are the one thing Prospero cannot write for you.

   ## Resolving the plugin's templates directory

   The plugin ships `templates/` at its installed location. Resolve via:
   - Check `$CLAUDE_PLUGIN_ROOT` if set.
   - Otherwise, find the plugin root relative to this SKILL.md's own path.

   ## Handoff

   After writing files, control returns to the invoking context (the user if invoked directly, or the `/interrogate` skill if auto-invoked).
   ```

**Step 2:** Commit:
   ```bash
   git add skills/init/SKILL.md
   git commit -m "feat: add init skill"
   ```

### Task 6.2: Write `commands/init.md`

**Files:**
- Create: `~/Projects/prospero/commands/init.md`

**Step 1:** Write:
   ```markdown
   ---
   description: Scaffold or reconfigure Prospero in the current project
   disable-model-invocation: true
   ---

   Invoke the prospero:init skill and follow it exactly.
   ```

**Step 2:** Commit:
   ```bash
   git add commands/init.md
   git commit -m "feat: add /init command"
   ```

---

## Phase 7: Phase skills

Each skill is a refactor of the corresponding `blog-*` skill in `bguthrie.github.io`. The source files are readable from `~/Projects/bguthrie.github.io/.claude/skills/<name>/SKILL.md`.

### Task 7.1: Write `skills/interrogate/SKILL.md`

**Files:**
- Source: `~/Projects/bguthrie.github.io/.claude/skills/blog-interrogation/SKILL.md`
- Create: `~/Projects/prospero/skills/interrogate/SKILL.md`

**Step 1:** Read the source file in full.

**Step 2:** Write the new skill. Changes from the source:
- Rename: `blog-interrogation` → `interrogate`.
- Add auto-init logic at top: if `.prospero/config.toml` is missing, invoke the `init` skill, then continue.
- Read `.prospero/audience.md` before asking the piece-type question — the audience context informs the questioning.
- Output path: `drafts/<slug>/outline.md` where `drafts_dir` comes from the resolved preset, not hardcoded.
- Replace "brianguthrie.com" and HN-specific references with generic audience language.

**Step 3:** Run the validator:
   ```bash
   ./tests/validate.sh
   ```
   Expected: still fails (other skills missing), but no new errors introduced.

**Step 4:** Commit:
   ```bash
   git add skills/interrogate/SKILL.md
   git commit -m "feat: extract interrogate skill"
   ```

### Task 7.2: Write `commands/interrogate.md`

**Files:**
- Create: `~/Projects/prospero/commands/interrogate.md`

**Step 1:** Write:
   ```markdown
   ---
   description: Start a new post: Socratic questioning to extract a dialectical outline
   disable-model-invocation: true
   ---

   Invoke the prospero:interrogate skill and follow it exactly.
   ```

**Step 2:** Commit:
   ```bash
   git add commands/interrogate.md
   git commit -m "feat: add /interrogate command"
   ```

### Task 7.3: Write `skills/critique/SKILL.md`

**Files:**
- Source: `~/Projects/bguthrie.github.io/.claude/skills/blog-critic/SKILL.md`
- Create: `~/Projects/prospero/skills/critique/SKILL.md`

**Step 1:** Read the source file in full.

**Step 2:** Write the new skill. Changes from the source:
- Rename: `blog-critic` → `critique`.
- **Remove** the three inlined `<critic-prompt>` blocks for argued-essay, opinion-polemic, and explainer. Replace with: "Load the rubric from `.prospero/types/<type>.md` (user override) or the plugin's `templates/types/<type>.md` (bundled default)."
- Replace "brianguthrie.com" and HN-specific references with generic phrasing that reads audience from `.prospero/audience.md`.
- Audience injection: the agent prompt says "the target audience and research sources are defined in `.prospero/audience.md`; read that file."
- Research file path: `drafts/<slug>/research.md` (slug resolved at invocation).

**Step 3:** Run the validator:
   ```bash
   ./tests/validate.sh
   ```

**Step 4:** Commit:
   ```bash
   git add skills/critique/SKILL.md
   git commit -m "feat: extract critique skill"
   ```

### Task 7.4: Write `commands/critique.md`

**Files:**
- Create: `~/Projects/prospero/commands/critique.md`

**Step 1:** Write:
   ```markdown
   ---
   description: Oppositional review of an outline or draft by an independent agent
   disable-model-invocation: true
   ---

   Invoke the prospero:critique skill and follow it exactly.
   ```

**Step 2:** Commit:
   ```bash
   git add commands/critique.md
   git commit -m "feat: add /critique command"
   ```

### Task 7.5: Write `skills/author/SKILL.md`

**Files:**
- Source: `~/Projects/bguthrie.github.io/.claude/skills/blog-author/SKILL.md`
- Create: `~/Projects/prospero/skills/author/SKILL.md`

**Step 1:** Read the source file in full.

**Step 2:** Write the new skill. Changes from the source:
- Rename: `blog-author` → `author`.
- **Remove** the entire "Voice Guide" section (lines 71-99 of source). Replace with: "Read `.prospero/voice.md` and follow it exactly."
- **Remove** the audience statement (lines 11-12). Replace with: "Read `.prospero/audience.md` for audience context and research sources."
- Research sources section: replace hardcoded HN + Bliki list with: "Use the research sources listed in `.prospero/audience.md`."
- Voice calibration: replace "read at least 2-3 recent posts in `content/post/`" with "read at least 3 posts in `{sample_posts_dir}` (resolved from the active preset)."
- Output: replace hardcoded Hugo frontmatter template with: "Write to the path resolved from the preset's `post_path_pattern`, using the preset's `frontmatter_template`."

**Step 3:** Run the validator:
   ```bash
   ./tests/validate.sh
   ```

**Step 4:** Commit:
   ```bash
   git add skills/author/SKILL.md
   git commit -m "feat: extract author skill"
   ```

### Task 7.6: Write `commands/author.md`

**Files:**
- Create: `~/Projects/prospero/commands/author.md`

**Step 1:** Write:
   ```markdown
   ---
   description: Write the draft from the validated outline, voice-calibrated
   disable-model-invocation: true
   ---

   Invoke the prospero:author skill and follow it exactly.
   ```

**Step 2:** Commit:
   ```bash
   git add commands/author.md
   git commit -m "feat: add /author command"
   ```

### Task 7.7: Write `skills/revise/SKILL.md`

**Files:**
- Source: `~/Projects/bguthrie.github.io/.claude/skills/blog-revision/SKILL.md`
- Create: `~/Projects/prospero/skills/revise/SKILL.md`

**Step 1:** Read the source file in full.

**Step 2:** Write the new skill. Changes from the source:
- Rename: `blog-revision` → `revise`.
- Replace "Voice Reference" section's reference to `blog-author`'s voice guide with: "Refer to `.prospero/voice.md` for this project's voice rules."
- Draft path resolution: read from preset's `post_path_pattern`, not hardcoded `content/post/<slug>/index.md`.

**Step 3:** Run the validator:
   ```bash
   ./tests/validate.sh
   ```

**Step 4:** Commit:
   ```bash
   git add skills/revise/SKILL.md
   git commit -m "feat: extract revise skill"
   ```

### Task 7.8: Write `commands/revise.md`

**Files:**
- Create: `~/Projects/prospero/commands/revise.md`

**Step 1:** Write:
   ```markdown
   ---
   description: Structural or line-level feedback on a draft; optionally re-runs the critic
   disable-model-invocation: true
   ---

   Invoke the prospero:revise skill and follow it exactly.
   ```

**Step 2:** Commit:
   ```bash
   git add commands/revise.md
   git commit -m "feat: add /revise command"
   ```

---

## Phase 8: Orchestrator skill

### Task 8.1: Write `skills/prospero/SKILL.md`

**Files:**
- Source: `~/Projects/bguthrie.github.io/.claude/skills/writing-blog-posts/SKILL.md`
- Create: `~/Projects/prospero/skills/prospero/SKILL.md`

**Step 1:** Write:
   ```markdown
   ---
   name: prospero
   description: Dialectical blog-post pipeline. Use when the user wants to write, draft, outline, or edit a post. Routes to the appropriate phase skill based on input and project state.
   ---

   # Prospero

   Orchestrator for the blog-post pipeline. Invoked automatically when the user expresses intent to write.

   ## Entry points

   - User has a raw topic or idea → invoke `/interrogate`.
   - User has an outline at `drafts/<slug>/outline.md` and wants review → invoke `/critique`.
   - User has a reviewed outline and says "draft it" → invoke `/author`.
   - User has a draft at the preset's post path and wants feedback → invoke `/revise`.
   - `.prospero/` is missing → invoke `/init` first, then resume.

   ## Pipeline

   1. `/interrogate` — Socratic questioning. Produces `drafts/<slug>/outline.md`.
   2. `/critique` — Oppositional review by a separate agent. Produces or updates `drafts/<slug>/research.md`.
   3. `/author` — Voice-calibrated draft. Writes to the path resolved from the active preset.
   4. `/revise` — Structural and line-level feedback on the author's edited draft.

   Each phase hands off to the next. The author approves at each gate before proceeding.

   ## Artifacts

   - **Outline:** `drafts/<slug>/outline.md`.
   - **Research:** `drafts/<slug>/research.md`.
   - **Post:** resolved from `{post_path_pattern}` in the active preset.

   ## Configuration

   Project configuration lives in `.prospero/`:
   - `config.toml` — preset selection and overrides.
   - `voice.md` — the author's voice guide.
   - `audience.md` — reader description and research sources.

   If any of these are missing, the invoked phase skill halts with a clear message directing the user to `/init` or to fill in the relevant template.
   ```

**Step 2:** Run the validator:
   ```bash
   ./tests/validate.sh
   ```
   Expected: `OK` — all required files now exist.

**Step 3:** Commit:
   ```bash
   git add skills/prospero/SKILL.md
   git commit -m "feat: add orchestrator skill"
   ```

---

## Phase 9: Fixtures, examples, README

### Task 9.1: Write a Hugo fixture (before/after)

**Files:**
- Create: `~/Projects/prospero/tests/fixtures/hugo/before/hugo.toml`
- Create: `~/Projects/prospero/tests/fixtures/hugo/before/content/post/existing-post/index.md`
- Create: `~/Projects/prospero/tests/fixtures/hugo/after/.prospero/config.toml`
- Create: `~/Projects/prospero/tests/fixtures/hugo/after/.prospero/voice.md`
- Create: `~/Projects/prospero/tests/fixtures/hugo/after/.prospero/audience.md`

**Step 1:** Create `tests/fixtures/hugo/before/hugo.toml` — a minimal Hugo config that the init skill should detect.
   ```toml
   baseURL = "https://example.com/"
   languageCode = "en-us"
   title = "Example Site"
   theme = "minimal"
   ```

**Step 2:** Create a sample post so voice calibration has something to read:
   ```bash
   mkdir -p tests/fixtures/hugo/before/content/post/existing-post
   ```
   ```markdown
   ---
   title: "An Existing Post"
   date: 2026-01-01T00:00:00-05:00
   draft: false
   ---

   Sample content to calibrate voice against.
   ```

**Step 3:** Create the "after" state showing what init should produce. Copy the templates, fill in with plausible content so this fixture is also an example.

**Step 4:** Commit:
   ```bash
   git add tests/fixtures/hugo/
   git commit -m "test: add hugo fixture"
   ```

### Task 9.2: Write one worked example

**Files:**
- Create: `~/Projects/prospero/examples/sample-post/drafts/my-example-post/outline.md`
- Create: `~/Projects/prospero/examples/sample-post/drafts/my-example-post/research.md`
- Create: `~/Projects/prospero/examples/sample-post/content/post/my-example-post/index.md`

**Step 1:** Pick a simple topic (e.g., "why slug-based addressing beats date-based for blog posts"). Write a plausible outline, research notes, and draft. Does not need to be publication-quality — just realistic enough to show what each artifact looks like.

**Step 2:** Commit:
   ```bash
   git add examples/sample-post/
   git commit -m "docs: add worked example"
   ```

### Task 9.3: Write README

**Files:**
- Create: `~/Projects/prospero/README.md`

**Step 1:** Cover:
- What Prospero is (one paragraph).
- The dialectical pipeline (one paragraph per phase).
- Installation via Claude Code plugin marketplace.
- Quickstart: `/interrogate "my topic"` → follow the prompts.
- Configuration: `.prospero/` layout.
- Presets: hugo is the reference; plain is the default; jekyll/ghost are skeletons, PRs welcome.
- Piece types: argued essay, opinion, explainer — community additions welcome.
- Link to `docs/design.md` or similar (TBD; v0.1 can skip).
- License.

**Step 2:** Commit:
   ```bash
   git add README.md
   git commit -m "docs: add README"
   ```

### Task 9.4: Final validator run

**Step 1:** Run:
   ```bash
   ./tests/validate.sh
   ```
   Expected: `OK`.

**Step 2:** If anything fails, fix and re-run before proceeding.

---

## Phase 10: Publish Prospero v0.1

### Task 10.1: Merge the working branch

**Step 1:** Review the full diff:
   ```bash
   git log --oneline main..extract-blog-skills
   git diff main..extract-blog-skills --stat
   ```

**Step 2:** Switch to main and merge:
   ```bash
   git checkout main
   git merge --no-ff extract-blog-skills
   ```

**Step 3:** Tag v0.1.0:
   ```bash
   git tag -a v0.1.0 -m "Initial release: blog-writing pipeline extracted from bguthrie.github.io"
   ```

**Step 4:** Push:
   ```bash
   git push origin main --tags
   ```

---

## Phase 11: Migration in `bguthrie.github.io`

This phase happens in `~/Projects/bguthrie.github.io`. Ask the user before proceeding — they may want to hold off on migration until they've tested Prospero in a scratch project.

### Task 11.1: Install Prospero plugin

**Step 1:** Switch back to the host repo:
   ```bash
   cd ~/Projects/bguthrie.github.io
   ```

**Step 2:** Install the plugin. (Exact mechanism depends on whether Brian is running Claude Code from local plugin paths or via a marketplace registration. If local, a symlink or claude config entry pointing at `~/Projects/prospero/` will do.)

**Step 3:** Confirm the plugin's skills are loaded by checking `/interrogate` is a recognized command in this session.

### Task 11.2: Run `/init`

**Step 1:** Invoke `/init`. Confirm:
- It detects Hugo.
- It proposes `preset = "hugo"`.
- It writes `.prospero/config.toml`, `.prospero/voice.md`, `.prospero/audience.md`.

**Step 2:** Inspect the written files:
   ```bash
   ls .prospero/
   cat .prospero/config.toml
   ```

**Step 3:** Commit the scaffolded `.prospero/` directory:
   ```bash
   git add .prospero/
   git commit -m "feat: scaffold .prospero/ via Prospero init"
   ```

### Task 11.3: Move the Voice Guide into `.prospero/voice.md`

**Files:**
- Source: `~/Projects/bguthrie.github.io/.claude/skills/blog-author/SKILL.md` (lines 71-99)
- Target: `~/Projects/bguthrie.github.io/.prospero/voice.md`

**Step 1:** Open both files. Copy the Voice Guide content from the source file, preserving every subsection (Tone, Structure, Sentences, Argument, Earn your claims, Never).

**Step 2:** Paste into `.prospero/voice.md` under the template's section headers. Remove the commented-out prompts. Preserve every rule verbatim — this is the one irreplaceable artifact.

**Step 3:** Verify by reading the file end-to-end; confirm no rules were dropped.

**Step 4:** Commit:
   ```bash
   git add .prospero/voice.md
   git commit -m "feat: populate voice.md from legacy blog-author skill"
   ```

### Task 11.4: Move audience description into `.prospero/audience.md`

**Files:**
- Source: audience and research source text in `blog-author/SKILL.md` and `blog-critic/SKILL.md`.
- Target: `~/Projects/bguthrie.github.io/.prospero/audience.md`

**Step 1:** Extract the "Audience" paragraph (currently: "Hacker News readers: technically literate, well-informed, skeptical, and ahead of the ball on most topics."). Paste into the Reader section.

**Step 2:** Extract the research source bullets (HN, Martin Fowler's Bliki, broader web). Paste into the Sources section.

**Step 3:** Remove commented-out prompts from the template.

**Step 4:** Commit:
   ```bash
   git add .prospero/audience.md
   git commit -m "feat: populate audience.md from legacy blog-author/critic"
   ```

### Task 11.5: Smoke test

**Step 1:** Invoke `/interrogate "test-post-ignore"`. Confirm:
- It reads `.prospero/audience.md` and asks the piece-type question.
- It begins Socratic questioning.

**Step 2:** Answer a few questions superficially, then abort. Confirm `drafts/test-post-ignore/outline.md` was written (or is being assembled).

**Step 3:** Clean up the test draft:
   ```bash
   rm -rf drafts/test-post-ignore/
   ```

### Task 11.6: Delete legacy skills

**Files:**
- Delete: `~/Projects/bguthrie.github.io/.claude/skills/blog-author/`
- Delete: `~/Projects/bguthrie.github.io/.claude/skills/blog-critic/`
- Delete: `~/Projects/bguthrie.github.io/.claude/skills/blog-interrogation/`
- Delete: `~/Projects/bguthrie.github.io/.claude/skills/blog-revision/`
- Delete: `~/Projects/bguthrie.github.io/.claude/skills/writing-blog-posts/`

**Step 1:** Remove all five legacy skill directories:
   ```bash
   rm -rf .claude/skills/blog-author .claude/skills/blog-critic .claude/skills/blog-interrogation .claude/skills/blog-revision .claude/skills/writing-blog-posts
   ```

**Step 2:** Confirm `.claude/skills/` is now empty:
   ```bash
   ls .claude/skills/
   ```

**Step 3:** Commit:
   ```bash
   git add .claude/skills/
   git commit -m "refactor: remove legacy blog skills, now provided by Prospero plugin"
   ```

### Task 11.7: Final verification

**Step 1:** Run `/interrogate "another-test"` again. Full pipeline smoke test:
- Interrogate writes outline.
- Critique produces a review (don't need to act on it).
- Author writes a draft.
- Revise offers feedback.

**Step 2:** Clean up:
   ```bash
   rm -rf drafts/another-test/ content/post/another-test/
   ```

**Step 3:** Celebrate. The migration is complete.

---

## Post-migration notes

- v0.1.0 does not auto-maintain the Jekyll or Ghost presets. If real users arrive with those CMSes, invest then.
- The "bundled types only" constraint may bite when the author wants a type outside the three. The design anticipates this — a PR adding a new type to `templates/types/` is a one-file change and requires no code.
- The Prospero plugin, once published to a marketplace, can be version-pinned in `bguthrie.github.io`. For v0.1 the plugin is expected to evolve frequently; reference the latest until things stabilize.

---

## Execution

Plan complete and saved to `docs/plans/2026-04-29-prospero-extraction-plan.md`. Two execution options:

1. **Subagent-Driven (this session)** — I dispatch fresh subagent per task, review between tasks, fast iteration.

2. **Parallel Session (separate)** — Open a new session in `~/Projects/prospero/` with executing-plans, batch execution with checkpoints.

Given this plan spans two repositories (Prospero for phases 0-10, bguthrie.github.io for phase 11), the Parallel Session approach is recommended: start a new session in the freshly-cloned Prospero directory for phases 0-10, then return here for phase 11.

**Which approach?**
