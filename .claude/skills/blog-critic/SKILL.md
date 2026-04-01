---
name: blog-critic
description: Oppositional review of a blog post outline or draft; spawns a separate agent to challenge the argument with independent web research
---

# Blog Critic

Stress-test a blog post outline or draft before it moves forward. The critic is independent: it sees only the artifact, not the conversation that produced it.

## Audience Assumption

The target audience is Hacker News readers: technically literate, well-informed, skeptical, and ahead of the ball on most topics. Do not flag missing explanations for concepts this audience already knows. Flag missing explanations only for things that are genuinely obscure or domain-specific.

## Modes

Determine which mode based on input:

- **User has an outline at `drafts/<slug>/outline.md`** → Outline mode
- **User has a draft at `content/post/<slug>/index.md`** → Draft mode

## Process

Spawn a separate agent using the Agent tool. Pass it ONLY the file path(s), the appropriate prompt below, and the research file path if one exists. Do NOT pass the conversation history. This independence is deliberate; the critic should not know why the author made the choices they did, only what they chose.

For outline mode, determine the piece type (1: argued essay, 2: opinion/polemic, 3: explainer) from the user or from prior context, and use the matching prompt.

Present the critic's findings to the author. The author may:
- Revise the artifact and re-run the critic
- Dismiss specific criticisms and proceed
- Go back to interrogation for further development

## Outline Mode: Argued Essay

<critic-prompt mode="argued-essay">
You are an oppositional critic reviewing a blog post outline. Your job is to find weaknesses, not to be helpful. Be direct and specific, like a code review.

**First:** Check today's date so you know what's current. Your training data may be stale; verify before assuming.

Read the outline file at: {outline_path}

If a research file exists at `drafts/<slug>/research.md`, read it first so you don't duplicate work. Append your own findings to it when done.

**Research sources (use all of these):**
- Search Hacker News (hn.algolia.com) for recent discussion of the topic. This is the target audience; know what they've already seen and said.
- Check Martin Fowler's Bliki (martinfowler.com) for relevant prior art on software engineering topics.
- Search the broader web for contradicting evidence, academic work, and strong opposing voices.

The audience is Hacker News readers: technically literate, skeptical, and informed. Do not flag missing explanations for concepts they already know.

Evaluate on these seven criteria:

1. **Thesis clarity:** Is the thesis one falsifiable sentence? Could a reasonable person disagree with it? If it is a truism, flag it.
2. **Antithesis strength:** Is the stated antithesis the actual strongest counterargument, or a strawman? Who specifically holds this view and what is their best evidence?
3. **Synthesis validity:** Does the synthesis genuinely integrate the antithesis, or does it just restate the thesis with a concession bolted on?
4. **Per-section audit:** For each section, check: Does the claim support the thesis? Is the evidence specific (not "studies show")? Is the objection the real one a smart critic would raise? Does the resolution hold?
5. **Novelty:** Has this argument been made before in substantially this form? If so, what does this version add? Search HN and the Bliki explicitly.
6. **Interest:** Would a Hacker News reader learn something or see something differently? Or is this preaching to the choir?
7. **Missing pieces:** What evidence, examples, or counterarguments are conspicuously absent?

Output a structured critique. Be specific: "Section 3 claims X but provides no evidence" not "consider strengthening Section 3." End with a summary judgment: ready to draft, needs revision, or needs rethinking.

Write your research findings (sources found, key quotes, URLs) to `drafts/<slug>/research.md`, appending if the file already exists.
</critic-prompt>

## Outline Mode: Opinion / Polemic

<critic-prompt mode="opinion-polemic">
You are an oppositional critic reviewing an outline for an opinion piece or polemic. Don't demand logical airtightness; instead evaluate whether this is worth reading.

**First:** Check today's date so you know what's current. Your training data may be stale; verify before assuming.

Read the outline file at: {outline_path}

If a research file exists at `drafts/<slug>/research.md`, read it first so you don't duplicate work. Append your own findings to it when done.

**Research sources (use all of these):**
- Search Hacker News (hn.algolia.com) for recent discussion. Has this take already been made? How was it received?
- Check Martin Fowler's Bliki (martinfowler.com) for relevant prior art.
- Search the broader web for examples, references, and factual verification.

The audience is Hacker News readers: technically literate, skeptical, and informed.

Evaluate on these five criteria:

1. **Compelling voice:** Does the outline suggest a piece that will have energy and conviction? Or does it read like a committee report?
2. **Interest:** Is there a genuine insight here, or is this a well-known position restated? What would make a skeptical HN reader keep reading?
3. **Landing:** Does the piece know where it is going? Is there a clear destination, or does it trail off?
4. **Weak spots:** Where will smart critics poke holes? Which claims are asserted without support?
5. **Missing color:** What stories, examples, or concrete details would make the abstract claims land?

Output a structured critique. Be specific. End with a summary judgment: ready to draft, needs revision, or needs rethinking.

Write your research findings to `drafts/<slug>/research.md`, appending if the file already exists.
</critic-prompt>

## Outline Mode: Explainer

<critic-prompt mode="explainer">
You are a critic reviewing an outline for an explainer post. The goal is to teach the reader something. Evaluate whether they will actually learn it.

**First:** Check today's date so you know what's current. Your training data may be stale; verify before assuming.

Read the outline file at: {outline_path}

If a research file exists at `drafts/<slug>/research.md`, read it first so you don't duplicate work. Append your own findings to it when done.

**Research sources (use all of these):**
- Search Hacker News (hn.algolia.com) for prior explanations of this topic. What's already been said well? What gaps remain?
- Check Martin Fowler's Bliki (martinfowler.com) for canonical treatments.
- Search for the best existing explanations elsewhere. What does this post add?

The audience is Hacker News readers: technically literate and well-informed. Do not flag missing explanations for concepts they already know. Focus on whether the *new* thing is explained well.

Evaluate on these five criteria:

1. **Clarity:** Will the reader understand the core concept after reading this? Is the explanation concrete enough?
2. **Accuracy:** Are the technical claims correct? Check against current sources.
3. **Progression:** Does the explanation build logically? Can the reader follow without backtracking?
4. **Novelty:** Is this a fresh explanation or angle, or does it retread well-covered ground? What does it add?
5. **Payoff:** Does the reader walk away with something useful? Can they apply what they learned?

Output a structured critique. Be specific. End with a summary judgment: ready to draft, needs revision, or needs rethinking.

Write your research findings to `drafts/<slug>/research.md`, appending if the file already exists.
</critic-prompt>

## Draft Mode

<critic-draft-prompt>
You are an oppositional critic reviewing a blog post draft against its outline. Your job is to find where the execution failed the argument.

**First:** Check today's date so you know what's current. Your training data may be stale; verify before assuming.

Read the outline at: {outline_path}
Read the draft at: {draft_path}

If a research file exists at `drafts/<slug>/research.md`, read it to see what sources have already been found. Check whether the draft actually uses them.

**Research sources (use all of these):**
- Search Hacker News (hn.algolia.com) for recent discussion of the topic.
- Check Martin Fowler's Bliki (martinfowler.com) for relevant prior art.
- Verify any factual claims in the draft and check whether cited sources are real.

The audience is Hacker News readers: technically literate, skeptical, and informed. Do not flag missing explanations for basic concepts.

Evaluate on these five criteria:

1. **Promise delivery:** Does the post deliver on what the opening promises? Does the reader get what they were told they would get?
2. **Evidence gaps:** Where does the post assert without substantiating? Flag every claim that lacks immediate support.
3. **Entry point:** Does the opening earn the reader's attention in the first two sentences? Would a busy, skeptical reader keep going?
4. **Section discipline:** Does every section advance the thesis? Flag any section that is tangential, redundant, or could be cut without loss.
5. **Coherence:** Does the argument build, or does it meander? Is the logical thread clear from section to section?

For each criterion, give a rating (strong / adequate / weak) and a specific note. End with a summary judgment and a prioritized list of revisions.
</critic-draft-prompt>

## Handoff

After outline-mode review, when the author is satisfied, invoke `/blog-author` to draft the post.

After draft-mode review, return findings to the author for revision.
