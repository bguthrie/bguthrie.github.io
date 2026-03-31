# Blog Writing Skill v2 Design

## Problem

The current `writing-blog-posts` skill conflates argumentation and articulation. The brainstorm phase proceeds directly to drafting, and the argumentative spine of the post gets lost once prose starts flowing. The author ends up fighting two battles at once: "is this the right argument?" and "is this well-written?" There is no adversarial check on the argument before writing begins.

## Design

One skill (`writing-blog-posts`) that orchestrates a multi-phase pipeline with human approval gates at each transition. The skill determines entry point based on user input and walks forward from there.

### Pipeline

```
Interrogation → Outline Review → Critic → Author Revision → Authoring → Revision
                     ↑              |           ↑                           |
                     +--------------+           +---------------------------+
                   (revise if needed)          (revise, optionally re-crit)
```

**Phase 1: Interrogation** (collaborative, same conversation)

- User arrives with a topic, idea, or rough outline
- Skill asks one question at a time, Socratic style
- Skill asks early what kind of piece this is (argued essay vs. opinion/polemic) to calibrate the pipeline
- Uses web search proactively to find counterarguments, verify claims, surface related work
- Goal: extract the argumentative spine
- Output: structured dialectical outline written to `drafts/<slug>/outline.md`
- Gate: user reviews and revises the outline, signals readiness

**Phase 2: Oppositional Review** (separate agent)

- Spawned as a separate Agent with only the outline file as input
- Does NOT receive the interrogation conversation history (deliberate: independence)
- Does independent web research
- Produces a structured written critique (see Critic Spec below)
- Critique is presented to the user in the main conversation
- Gate: user revises the outline (or dismisses the critique), signals readiness
- For opinion/polemic pieces: critic's mandate shifts from "is this airtight?" to "is this interesting and does it land?" Less adversarial, more editorial.

**Phase 3: Authoring** (same conversation or spawned agent)

- Reads the validated outline from `drafts/<slug>/outline.md`
- Voice calibration: reads 2-3 recent posts from `content/post/` to internalize style
- Independent web research for references, examples, links to cite
- Outline is a spine, not a blueprint: can reorder, merge, split, add material, but should not silently drop claims or change the thesis
- Output: draft written to `content/post/<slug>/index.md`, always `draft: true`
- Voice guide, formatting conventions, and Hugo specifics carried forward verbatim from the current skill (see below)

**Phase 4: Revision** (same conversation, iterative)

- User edits the draft, comes back for feedback
- Skill offers the option to invoke the critic again in draft mode
- Structural feedback if the argument needs it; line-level prose feedback if the structure is solid
- Multiple rounds supported

### The Outline Artifact

Lives at `drafts/<slug>/outline.md`. This is the key structural artifact that moves between phases.

```markdown
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
```

Notes:
- Per-section dialectic (claim/evidence/objection/resolution) forces each section to earn its place
- "Open Questions" gives the critic targets and gives the author permission to flag uncertainty
- The antithesis is a first attempt; the critic's job is to validate or strengthen it
- The outline is a working document; the user can edit it directly between phases

### Critic Spec

**Invocation:** Separate agent via the Agent tool. Receives only the outline (outline mode) or the outline plus draft (draft mode). No conversation history.

**Outline mode** (after Phase 1). Evaluates the argument's structure:
- Is the thesis clear and falsifiable, or a platitude?
- Is the antithesis genuinely the strongest counterargument? (With evidence from its own research.)
- Does the synthesis resolve the tension or just split the difference?
- Per-section: does each claim have real evidence? Are the objections the right ones?
- Novelty: has this argument been made before? What does this version add? (Web research expected.)
- Interest: would a thoughtful reader forward this, or is it obvious?
- What's missing? What unanswered question would let a skeptic dismiss the whole piece?

**Draft mode** (after Phase 3, optional). Evaluates execution against the outline:
- Did the prose deliver on the outline's promises?
- Are claims substantiated in the outline but left unsupported in the prose?
- Did the entry point work as a door into the thesis?
- Are there sections that wander or don't earn their length?
- Does the piece hold together as a single coherent argument?

**Output:** Structured written report. Direct and specific, like a code review: "Section 3 claims X but provides no evidence; the outline listed Y as support but it doesn't appear in the draft" rather than "consider strengthening Section 3."

**Research:** The critic is expected to do independent web research. It should actively look for evidence that contradicts the thesis, find prior art, and check factual claims.

**Calibration:** For opinion/polemic pieces, the critic shifts from adversarial to editorial. Less "is this logically airtight?" and more "is this compelling, interesting, and worth reading?"

### Voice Guide

Carried forward verbatim from the current skill. This is battle-tested and non-negotiable.

**Tone:** Confident, opinionated, conversational. First person. States positions plainly. Acknowledges the other side but doesn't pretend to be neutral. Phrases like "I've come to view this as..." or "Where I've landed is..." are fine when signaling a genuine shift in stance, but cut them when they're just delaying the argument.

**Structure:**
- Section headers signal the argument's movement, not just topic ("However, software companies are in the business of making sellable software" not "Business context")
- Footnotes for asides that would break the flow: personal commentary, humor, or precise preemptive rebuttals to fair objections. They can be funny but they can also do real argumentative work.
- Parenthetical humor and self-aware asides woven into sentences
- Bulleted lists sparingly, for genuinely parallel items
- Sections and paragraphs often end with a tight, aphoristic statement of principle ("It's a bludgeon." "Quality builds safety, which builds speed."). These cap the argument, not decorate it.

**Sentences:** Mix long complex sentences (subordinate clauses, semicolons) with short punchy ones for emphasis. Italics for stress. Semicolons for joining related clauses; parentheses for asides. Occasional profanity when emotional stakes warrant it, never gratuitously. Every sentence must be grammatically complete; curtness is fine, fragments are not.

**Argument:** Builds from personal experience or historical example toward a broader principle. Starts with a story or concrete observation, extracts the lesson. Engages counterarguments seriously before setting them aside. Shows rather than tells. Personal anecdotes are entry points, not the frame; generalize the lesson so the reader sees themselves in it.

**Earn your claims:** Every assertion must be substantiated in the same breath or the next sentence. Do not gesture vaguely at a point ("This isn't the kind of X most people mean") without immediately backing it up. If a claim needs evidence, provide it right there.

**Never:**
- Em dashes
- Corporate jargon
- AI-sounding generalizations ("In today's rapidly evolving landscape...")
- False balance or unnecessary qualifiers
- Emoji
- Hedging *positions*. Hedging *factual claims* is fine and expected ("seems to have dropped by something like an order of magnitude, depending on the task"), but hedging opinions is not ("You have to stop treating every imperfection as a hard-blocking gate"). Be precise about evidence, direct about where you stand.
- Throat-clearing cliches that signal importance without delivering it: "Here's the thing," "The uncomfortable truth is," "the real X is more interesting/nuanced/uncomfortable than," "What most people are missing is." Just make the point.
- Sentence fragments used for false punchiness ("Not because X. But because Y."). Be curt but grammatical.
- Staccato fragment lists ("AI for designers. AI for product managers. AI for coding."). Restructure into flowing sentences with semicolons or subordinate clauses.

### Hugo Specifics

Carried forward verbatim from the current skill.

**Frontmatter template:**
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

### Entry Points

The skill determines entry phase based on user input:

- **User has a topic or idea** → Phase 1 (Interrogation)
- **User has a completed outline** → Phase 2 (Oppositional Review)
- **User says "draft it" or outline review is complete** → Phase 3 (Authoring)
- **User provides an already-written draft** → Phase 4 (Revision)

### What Changes from v1

- Interrogation phase produces a structured dialectical outline as a file artifact, not just conversation
- Oppositional critic (separate agent) inserted between outline and drafting
- Outline format is thesis/antithesis/synthesis with per-section dialectic
- Critic can optionally run again on the draft
- Early question about piece type (argued essay vs. opinion/polemic) calibrates critic intensity
- Voice guide, formatting, Hugo specifics, and "never" list carried forward unchanged
