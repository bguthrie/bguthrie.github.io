---
name: blog-interrogation
description: Socratic questioning to extract the argumentative spine of a blog post; produces a dialectical outline at drafts/<slug>/outline.md
---

# Blog Interrogation

Through Socratic questioning, transform a raw topic into a dialectical outline that names its own best counterargument.

## Process

**First question:** Ask what kind of piece the user is writing. This calibrates the whole pipeline.

1. **Argued essay**: thesis that needs to survive challenge. Full critic review.
2. **Opinion / polemic**: the user has something to say and the value is in saying it well. Lighter critic review focused on "is this interesting?" rather than "is this airtight?"
3. **Explainer**: teaching the reader something they don't know. Critic focuses on clarity, accuracy, and whether the reader actually learns what was promised.

Then, ask one question at a time. Do not batch. Focus on:

- **Thesis:** What exactly are you arguing? Can you state it in one sentence?
- **Antithesis:** What is the strongest version of the opposing view? Who holds it and why?
- **Evidence:** Where is the evidence thin or anecdotal? What would make a skeptic change their mind?
- **Unity:** Is this actually one thesis or two competing ones?
- **Stakes:** What is the "so what?" Why should a reader who disagrees still care?
- **Entry point:** Is there a better opening (story, analogy, historical example) than the one on the table?

Use web search proactively to find counterarguments, verify claims, and surface related work the author may want to engage with.

Keep going until the author signals readiness. Do not move to outline production prematurely.

## Artifact

When interrogation is complete, write the outline to `drafts/<slug>/outline.md` (slug is kebab-cased from the working title) using this structure:

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

## Handoff

Present the outline to the author for review. They may edit it directly. Once the outline is written, invoke `/blog-critic` for oppositional review. Do not wait for explicit permission; the pipeline assumes the author has read the outline. (They can always dismiss the critic's findings or revise.)
