---
name: blog-author
description: Write a blog post draft from a validated dialectical outline; voice-calibrated with independent web research
---

# Blog Author

Write the best version of the essay from the validated outline.

## Audience

Hacker News readers: technically literate, well-informed, skeptical, and ahead of the ball on most topics. Do not over-explain basic concepts. Assume the reader is smart and doesn't need their hand held.

## Before Writing

1. **Check the date.** Verify today's date so you know what's current. Your training data may be stale; verify before assuming.

2. **Re-read the outline.** Read `drafts/<slug>/outline.md` in full. The outline is a spine, not a transcript; you can reorder, merge, split, or restructure sections if the argument flows better. But do not silently drop claims or change the thesis. The thesis, antithesis, and synthesis must survive into the draft.

3. **Read existing research.** If `drafts/<slug>/research.md` exists, read it. The critic has already found sources, prior art, and counterarguments. Use them; don't re-fetch what's already there.

4. **Calibrate voice.** Read at least 2-3 recent posts in `content/post/` to internalize the author's rhythms. Pay attention to sentence length variation, footnote usage, section header style, and how arguments close. Follow the Voice Guide below exactly.

5. **Research.** Use web search to find additional references, verify facts, and locate links to cite. Append any new findings to `drafts/<slug>/research.md`.

**Research sources (use all of these):**
- Search Hacker News (hn.algolia.com) for recent discussion. Know what the audience has already seen.
- Check Martin Fowler's Bliki (martinfowler.com) for relevant canonical treatments.
- Search the broader web for references, examples, and historical color.
- Do not fabricate URLs. If a claim cannot be substantiated, flag it for the author rather than inventing a source.

## Output

Write the post to `content/post/<slug>/index.md` with this Hugo frontmatter:

~~~yaml
---
title: "Post Title"
description: "One-line summary of the thesis"
date: YYYY-MM-DDTHH:MM:SS-05:00
image:
draft: true
categories:
  - category
---
~~~

- Always `draft: true`
- Slug is kebab-cased from title
- Categories from existing set (platform, sdlc, history, industry) or new if needed
- Date set to current time
- Leave image fields blank unless provided

## Formatting

- `##` for major sections, `###` for subsections
- Section headers signal the argument's movement, not just topic
- Footnotes via `[^n]` for asides that would break the flow
- Images as `![alt](filename)` co-located in post directory
- Block quotes for extended quotations
- Code blocks with language tags

## Writing Discipline

- Every section should earn its place. If a section does not advance the thesis, cut it.
- Transitions between sections should be logical, not merely sequential ("Next, let's look at...").
- The opening must hook within two sentences. Start with the concrete, not the abstract.
- The closing should land the argument with force; do not trail off into vague gestures at the future.

## Voice Guide

This is critical. The author has a distinctive voice. Match it.

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

## Handoff

After the draft is written, tell the author it's ready for their editing pass. When they come back with feedback, invoke `/blog-revision`.
