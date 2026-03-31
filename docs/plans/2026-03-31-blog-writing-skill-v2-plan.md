# Blog Writing Skill v2 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rewrite the `writing-blog-posts` skill to decouple argumentation from articulation via a multi-phase pipeline with an oppositional critic agent.

**Architecture:** One skill file (`~/.claude/skills/writing-blog-posts/SKILL.md`) orchestrates a pipeline: interrogation, outline production, oppositional review (separate agent), authoring, and revision. The dialectical outline (`drafts/<slug>/outline.md`) is the key artifact that moves between phases. Human approval gates at each transition.

**Tech Stack:** Claude Code skills (markdown prompt files), Agent tool for critic spawning, Hugo for content management.

**Design doc:** `docs/plans/2026-03-31-blog-writing-skill-v2-design.md`

---

### Task 1: Create the drafts directory

The outline artifact lives in `drafts/<slug>/outline.md`. This directory doesn't exist yet.

**Files:**
- Create: `drafts/.gitkeep`

**Step 1: Create directory with .gitkeep**

```bash
mkdir -p drafts && touch drafts/.gitkeep
```

**Step 2: Commit**

```bash
git add drafts/.gitkeep
git commit -m "Add drafts/ directory for outline artifacts"
```

---

### Task 2: Write the skill frontmatter and overview

Replace the top of SKILL.md with the new structure. This sets up the phase routing and checklist that drives the orchestration.

**Files:**
- Modify: `~/.claude/skills/writing-blog-posts/SKILL.md` (full rewrite, starting with lines 1-20)

**Step 1: Write the frontmatter, overview, and phase routing**

Replace the entire file's frontmatter and overview section with:

```markdown
---
name: writing-blog-posts
description: Use when writing, drafting, or editing blog posts for brianguthrie.com; orchestrates interrogation, dialectical outline, oppositional review, authoring, and revision
---

# Writing Blog Posts

## Overview

Orchestrate the full blog post lifecycle for brianguthrie.com (Hugo site). Five phases with human approval gates at each transition. Enter at whichever phase fits.

## Entry Points

Determine entry phase based on user input:

- **User has a topic or idea** → Phase 1 (Interrogation)
- **User has a completed outline** → Phase 2 (Oppositional Review)
- **User says "draft it" or outline review is complete** → Phase 3 (Authoring)
- **User provides an already-written draft** → Phase 4 (Revision)

## Pipeline

You MUST create a task for each phase and complete them in order from the entry point:

1. **Interrogation** — Socratic questioning, produce dialectical outline
2. **Outline review** — present outline to user, revise until approved
3. **Oppositional review** — spawn critic agent, present critique, revise outline
4. **Authoring** — voice-calibrated, research-backed draft from validated outline
5. **Revision** — structural or line-level feedback, optionally re-invoke critic
```

**Step 2: Verify the frontmatter is valid**

Read back the file and confirm the YAML frontmatter parses correctly (name and description fields present, no syntax errors).

---

### Task 3: Write Phase 1 (Interrogation)

This is the Socratic brainstorming phase that produces the dialectical outline artifact.

**Files:**
- Modify: `~/.claude/skills/writing-blog-posts/SKILL.md` (append after overview)

**Step 1: Write the interrogation phase**

Append after the Pipeline section:

```markdown
## Phase 1: Interrogation

Input is a topic, idea, or rough outline. Your job is to extract the argumentative spine through Socratic questioning before any prose gets written.

**First question:** Ask what kind of piece the user is writing. This calibrates the whole pipeline.
- **Argued essay**: thesis that needs to survive challenge. Full critic review.
- **Opinion / polemic**: the user has something to say and the value is in saying it well. Lighter critic review focused on "is this interesting?" rather than "is this airtight?"

**Then, one question at a time. Focus on:**
- What's the core claim? Can you state it in one sentence?
- What's the counterargument? What's the strongest version of it?
- Where is the evidence thin or anecdotal?
- Is the thesis actually one thesis or two competing ones?
- What's the "so what?"; why should a reader care?
- Is there a better entry point (story, analogy, historical example)?

Use web search proactively to find counterarguments, verify claims, and surface related work the author may want to engage with.

Keep going until the author signals readiness. Do not move to outline production prematurely.

**Output:** When the author is ready, write the outline to `drafts/<slug>/outline.md` using this structure:

~~~markdown
# <Working Title>

## Thesis
<One to three sentences stating the core claim.>

## Antithesis
<The strongest version of the counterargument. Not a strawman; the version
a smart, good-faith disagreer would actually make.>

## Synthesis
<Where you land and why. What the thesis looks like after it has absorbed
the counterargument.>

## Entry Point
<The story, observation, or historical example that opens the piece.
Why this is the right door in.>

## Sections

### <Section header, argumentative not topical>
- **Claim:** What this section asserts
- **Evidence:** What supports it (experience, data, reference)
- **Objection:** What a skeptic would say about this specific claim
- **Resolution:** How the section answers the objection

### <Next section>
...

## So What?
<Why should a reader care? What does this change about how they think or act?>

## Open Questions
<Anything unresolved. Thin evidence, uncertain framing, areas where
the author isn't sure yet. Honest inventory.>
~~~

The slug should be kebab-cased from the working title.

**Gate:** Present the outline to the user for review. They may edit it directly. Do not proceed until they signal readiness.
```

**Step 2: Verify**

Read back the file and confirm Phase 1 section is well-formed and the outline template renders correctly (nested markdown fences using `~~~` to avoid conflicts).

---

### Task 4: Write Phase 2 (Oppositional Review)

This phase spawns a separate critic agent. The skill needs to provide the exact prompt for the agent, including its two modes.

**Files:**
- Modify: `~/.claude/skills/writing-blog-posts/SKILL.md` (append after Phase 1)

**Step 1: Write the oppositional review phase**

Append:

```markdown
## Phase 2: Oppositional Review

Spawn a separate agent to challenge the outline. The critic must be independent: it receives only the outline file, not the conversation history.

**Invocation:** Use the Agent tool to spawn a general-purpose agent. Pass it the outline file path and the critic prompt below. The agent should use web search and web fetch tools for independent research.

<critic-prompt>
You are an oppositional critic reviewing a blog post outline. Your job is to find weaknesses, not to be helpful. Be direct and specific, like a code review.

Read the outline file at: {outline_path}

{If argued essay mode:}
Evaluate the argument's structure. For each item, provide specific evidence from your own web research:

1. **Thesis clarity:** Is the thesis clear and falsifiable, or is it a platitude dressed up as an argument?
2. **Antithesis strength:** Is this genuinely the strongest counterargument, or is there a stronger one? Search for the best version of the opposing view.
3. **Synthesis validity:** Does the synthesis resolve the tension, or does it just split the difference?
4. **Per-section audit:** For each section: does the claim have real evidence? Is the objection the right one? Would a skeptic accept the resolution?
5. **Novelty:** Has this argument been made before? Search for prior art. What does this version add that hasn't already been said?
6. **Interest:** Would a thoughtful reader forward this to a friend, or is it obvious? Is it HN-worthy?
7. **Missing pieces:** What question, if left unanswered, would let a skeptic dismiss the whole piece?

{If opinion/polemic mode:}
This is an opinion piece. Don't demand logical airtightness; instead evaluate:

1. **Compelling voice:** Does this sound like something worth reading, or is it generic?
2. **Interest:** Is the take surprising, specific, or fresh? Or has it been said a hundred times?
3. **Landing:** Does the piece know where it's going? Does it arrive somewhere satisfying?
4. **Weak spots:** Which sections drag, repeat themselves, or fail to earn their length?
5. **Missing color:** What story, example, or reference would make this land harder?

Output a structured critique. Be specific: "Section 3 claims X but provides no evidence" not "consider strengthening Section 3."
</critic-prompt>

**After the critique:** Present the critic's report to the user. They may:
- Revise the outline and re-run the critic
- Dismiss specific criticisms and proceed
- Go back to Phase 1 for further interrogation

**Gate:** User signals the outline is ready for drafting.
```

**Step 2: Verify**

Read back the file. Confirm the critic prompt template is complete and includes both argued-essay and opinion/polemic modes.

---

### Task 5: Write Phase 3 (Authoring)

The authoring phase reads the validated outline, calibrates voice, does research, and writes the draft.

**Files:**
- Modify: `~/.claude/skills/writing-blog-posts/SKILL.md` (append after Phase 2)

**Step 1: Write the authoring phase**

Append:

```markdown
## Phase 3: Authoring

Write the best version of the essay from the validated outline.

**Before writing:**

1. **Re-read the outline.** Read `drafts/<slug>/outline.md` in full. The outline is a spine, not a blueprint; you can reorder, merge, split, or restructure sections if the argument flows better. But do not silently drop claims or change the thesis.

2. **Voice calibration.** Read 2-3 recent posts from `content/post/` to internalize the author's style. Follow the Voice Guide below exactly.

3. **Research pass.** Independent web research to find references, examples, historical color, and links to cite. The outline tells you *what* to argue; the research gives you *material* to argue with. Do not fabricate URLs.

**Output:** Write the post to `content/post/<slug>/index.md` with Hugo frontmatter:

```yaml
---
title: "Post Title"
description: "One-line summary of the thesis"
date: YYYY-MM-DDTHH:MM:SS-05:00
image:
draft: true
categories:
  - category
---
```

- Always `draft: true`
- Slug is kebab-cased from title
- Categories from existing set (platform, sdlc, history, industry) or new if needed
- Date set to current time
- Leave image fields blank unless provided

**Formatting:**
- `##` for major sections, `###` for subsections
- Footnotes via `[^n]` for asides
- Images as `![alt](filename)` co-located in post directory
- Block quotes for extended quotations
- Code blocks with language tags
```

**Step 2: Verify**

Read back the file. Confirm the Hugo frontmatter template renders correctly (watch for nested code fences).

**Note:** The YAML code block inside the markdown skill file will need careful fencing. Use `~~~yaml` if the outer block is triple-backtick, or vice versa, to avoid fence conflicts.

---

### Task 6: Write Phase 4 (Revision)

**Files:**
- Modify: `~/.claude/skills/writing-blog-posts/SKILL.md` (append after Phase 3)

**Step 1: Write the revision phase**

Append:

```markdown
## Phase 4: Revision

The author has edited the draft and wants feedback. Read the current version of `content/post/<slug>/index.md` carefully.

**Offer the critic option:** Ask whether the user wants to run the oppositional critic again in draft mode before giving your own feedback. If yes, spawn the critic agent with both the outline and the draft:

<critic-draft-prompt>
You are an oppositional critic reviewing a blog post draft against its outline. Your job is to find where the execution failed the argument.

Read the outline at: {outline_path}
Read the draft at: {draft_path}

Evaluate execution against the outline:

1. **Promise delivery:** Did the prose deliver on the outline's promises, or did the argument get muddled in the writing?
2. **Evidence gaps:** Are claims that were substantiated in the outline left unsupported in the prose?
3. **Entry point:** Did the opening story/observation actually work as a door into the thesis?
4. **Section discipline:** Are there sections that wander, repeat themselves, or don't earn their length?
5. **Coherence:** Does the piece hold together as a single argument, or does it fragment into loosely related observations?

Be specific: "The outline listed evidence Y for Section 3's claim, but it doesn't appear in the draft" not "Section 3 could be stronger."
</critic-draft-prompt>

**Your own feedback:**
- If the argument's structure needs work: focus on ordering, cuts, thesis clarity, whether sections earn their place
- If the structure is solid: focus on line-level prose; tighten sentences, fix awkward phrasing, improve transitions
- Weight your feedback toward whichever the draft needs more

Provide specific, actionable suggestions. Do not rewrite the whole post. Can go multiple rounds.
```

**Step 2: Verify**

Read back the revision section. Confirm the draft-mode critic prompt is complete.

---

### Task 7: Write the Voice Guide

The voice guide is carried forward verbatim from the current skill. It must be exact.

**Files:**
- Modify: `~/.claude/skills/writing-blog-posts/SKILL.md` (append after Phase 4)

**Step 1: Copy the voice guide verbatim**

Append the Voice Guide section exactly as it appears in the current SKILL.md, lines 80-107. Do not paraphrase, reorder, or "improve" any of it. The only addition is the staccato fragment list rule from the feedback memory.

This section begins with `## Voice Guide` and ends after the **Never:** list.

**Step 2: Verify**

Diff the voice guide section against the current skill's voice guide. Every line must match except the staccato fragment addition (which is already present in the current skill).

---

### Task 8: Final assembly and verification

**Files:**
- Verify: `~/.claude/skills/writing-blog-posts/SKILL.md` (complete file)

**Step 1: Read the complete file**

Read the entire SKILL.md from top to bottom. Verify:
- Frontmatter is valid YAML
- All five phases are present in order
- The outline template in Phase 1 renders correctly
- The critic prompts in Phases 2 and 4 are complete
- The voice guide matches the current skill verbatim
- Hugo frontmatter template is correct
- No nested fence conflicts (backticks inside backticks)
- Entry points section routes to the correct phases

**Step 2: Check for fence conflicts**

The file contains multiple code blocks. Ensure no triple-backtick blocks are nested inside other triple-backtick blocks. Use `~~~` for inner fences where needed.

**Step 3: Commit**

```bash
git add ~/.claude/skills/writing-blog-posts/SKILL.md
git commit -m "Rewrite writing-blog-posts skill with multi-phase pipeline

Decouples argumentation from articulation:
- Interrogation phase produces dialectical outline artifact
- Oppositional critic agent challenges the argument independently
- Authoring phase writes from validated outline with voice calibration
- Revision phase supports optional draft-mode critic review

Voice guide, formatting, and Hugo specifics carried forward unchanged."
```

---

### Task 9: Smoke test

**Step 1: Invoke the skill**

In a new conversation or after `/clear`, invoke `/writing-blog-posts` with a simple test topic to verify:
- The skill loads without errors
- Phase routing works (detects a topic → starts interrogation)
- The interrogation asks about piece type first
- The outline template is produced correctly

This is a manual verification step. If anything is broken, fix it and re-commit.
