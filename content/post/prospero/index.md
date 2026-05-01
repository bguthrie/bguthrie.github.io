---
title: "Introducing Prospero: Superpowers for writing"
slug: prospero
description: "A Claude Code plugin that sharpens the spine of your argument through dialectic rather than generating prose for you."
date: 2026-04-30T10:00:00-04:00
image: nasa-5477L9Z5eqI-unsplash.jpg
image_url: https://unsplash.com/photos/hurricane-as-seen-from-space-5477L9Z5eqI
image_credit: Photo by NASA on Unsplash
draft: false
hidden: false
categories:
  - ai
---
> No man but a blockhead ever wrote, except for money.
> — Samuel Johnson

I like the act of _writing_, but often find actually _publishing_ paralyzing. I'll sit with a piece for weeks, hem and haw over it and chew on it and maybe pass a draft around, but by the time I'm done I'll have lost whatever conviction I started with. A fair number of pieces never finish, and the drafts folder keeps growing. Consequently, I tend to think of myself as a better editor than an author; responding to a piece is less taxing than authoring one.

However, I've been sitting a lot with [Superpowers](https://github.com/obra/superpowers) these past few months. While it's built for writing code, I'm often struck by how effective it is at interrogating me on my intent; it shows what's possible when you treat LLMs as interlocutors.

[Prospero](https://github.com/bguthrie/prospero) is a Claude Code plugin I built to make me a better (I hope!) writer, and (just as important!) to help me ship. It borrows the interrogative, artifact-driven approach from Superpowers by staging writing into four phases: 

* `/interrogate` questions you into an outline.
* `/critique` runs an adversarial review in an independent context window, both for outlines and drafts.
* `/author` writes a first-pass draft in your configured voice.
* `/revise` walks you through a line-level edit.

Along the way, agents perform research on the topic, both to strengthen the thesis and to challenge it. The argument has to survive challenge before any prose gets written, and again before the piece ships. I get to play editor on work whose spine already holds.

## Try it out

If you are running Claude Code:

```
/plugin install bguthrie/prospero
```

On first use, `/interrogate` will invoke `/init` to scaffold `.prospero/` with `config.toml`, `voice.md`, and `audience.md`. Fill in `voice.md` and `audience.md` before running any other phase, because trying to run without them produces a draft that improvises a voice you didn't specify and just sounds like generic AI. The project repository is at [github.com/bguthrie/prospero](https://github.com/bguthrie/prospero). The Hugo preset is the most-tested path, plain markdown handles most other projects adequately, and the Jekyll and Ghost presets exist and would benefit from more users.

## Throughput is not the goal

I try to treat [AI like a bicycle](/p/ai-like-a-bicycle/): it should provide mechanical advantage, but does not plan the route. Prospero is my attempt at applying this to a creative process I care quite a lot about. It's a little embarrassing to make the argument for an AI-driven writing tool, but I wouldn't be doing it if I didn't think the results represented both my voice and my perspective. It helps me produce the essay I wanted to write to begin with, and get it out.

If you draft fluently, publish weekly, and the blank page does not unnerve you, Prospero may not make you faster. But if you're a neurotic perfectionist, if the draft never flows quite right, or the argument isn't tight enough yet, or you just know that someone will point out that you're being wrong on the internet, Prospero may help.

The specific pain Prospero addresses is not speed; it is the anticipatory anxiety that keeps the piece unpublished. The critic has already poked at the weak joints by the time you go to ship, sometimes painfully; you already know where the argument is thin, which places you have decided to defend, and which you have decided to fix. The imagined commenter has already done their worst. For a fluent writer, that is a minor improvement; for someone whose baseline output is closer to zero, it can move throughput from nothing to something, which is a substantial gain even if no individual piece is produced faster.

## Interrogate, critique, author, revise

Each phase is a slash command, although they're intended to ride on rails similar to Superpowers, and each reads or writes files in the project's drafts directory. Artifacts persist between sessions, so you can come back to a piece a week later and pick up where you left off.

`/interrogate` is Socratic questioning: what, exactly, are you arguing? What is the strongest version of the opposing view, and who holds it? Where is the evidence thin? Is this one thesis or two competing ones? Questions come one at a time, and there is pressure to answer rather than evade. Once interrogation is complete, the tool writes an outline to `drafts/<slug>/outline.md` with thesis, a steelmanned antithesis, synthesis, entry point, and section-level claims, evidence, objections, and resolutions. Here is one section of the outline it produced for a recent piece, [Software architecture after AI](/p/software-architecture-after-ai/):

```markdown
### The old boundary: when code was architecture
- **Claim:** For decades, code-level decisions were legitimately
  architectural because changing them cost months of calendar time.
  The patterns movement was a rational response to this.
- **Evidence:** Gang of Four, Fowler's *Patterns of Enterprise
  Application Architecture*, clean architecture, DDD, the
  refactoring-as-discipline era. Rational responses to high time costs.
- **Objection:** Aren't these still expensive? Large codebases are
  still hard to refactor.
- **Resolution:** Hand off to the next section — the industry has
  been systematically proving this wrong for decades.
```

Each section gets a claim, the evidence supporting it, the objection a skeptical reader would raise, and how the section resolves the objection (sometimes by handing off to a later section). The outline is not a table of contents; it is a contract the draft has to honor. The default output has its own tics (em dashes, a reflex toward bold) that the voice guide partly softens, and that I edit out in the final draft.

`/critique` is oppositional review, in which a subagent is spawned in a fresh context window with no visibility into the conversation that produced the outline. It reads the outline, the project's audience description, any preexisting research findings, and a rubric appropriate to the piece type (argued essay, opinion, or explainer), then reviews the artifact as an opponent rather than a collaborator. The output is structured: ratings against rubric criteria, specific findings ("section 3 claims X but provides no evidence" rather than "consider strengthening section 3"), and a summary judgment of ready to draft, needs revision, or needs rethinking. Further research findings get appended to `drafts/<slug>/research.md` so subsequent phases do not re-fetch what the critic has already located.

Here are two findings from the critic's review of the piece you're reading, as an indicator of the annoyingly pedantic but grudgingly useful work it produces:

```markdown
**The sycophancy footnote is a citation stretch.** The draft cites
Goedecke's "Sycophancy is the first LLM dark pattern" to support
the claim that a fresh-context critic is less sycophantic than an
in-session one. Goedecke's argument is about in-session RLHF
dynamics; it does not cover the cross-session case. The outline
instructed the draft to name this as an engineering bet, not proven
fact; the draft collapses the bet into "we have all seen this."

**"A little embarrassing" is a defensive tell.** The opening includes
the hedge "It's a little embarrassing to make the argument for an
AI-driven writing tool." Cut it. The rest of the paragraph is a
confident claim; the hedge primes the reader to expect an apology
rather than an argument.
```

I accepted the first finding; the citation really was doing more work than it deserved, and the surrounding claim has been softened in this version. I overrode the second, because the self-effacement is doing honest work about how it feels to ship an AI writing tool on a blog whose prior argument is that AI should amplify human intent rather than substitute for it. Sometimes the critic is right, and sometimes you read a finding and decide the voice wins. The judgment is imperfect; I will come back to it.

`/author` writes the first-pass draft. It reads the outline, the research file, your voice guide, the audience description, and three of your existing posts to calibrate rhythm and section-header style. The draft lands at the configured post path with appropriate frontmatter. The prose is a scaffold, not a finished artifact; I edit it extensively before moving on.

`/revise` is the final pass: structural and line-level feedback against your voice rules and the outline's intent, with an option to re-run the critic in draft mode once the edits are stable. It's not my favorite tool of the four, but it's extremely helpful for focusing in on small problems, reconciling arguments with the critic, and wordsmithing.

Three files in `.prospero/` calibrate everything. `config.toml` names the active preset (Hugo, plain markdown, Jekyll, Ghost). `voice.md` is the author's voice guide, read verbatim by `/author` and `/revise`; personally, mine is a list of rules about when to use semicolons, how to handle italics, what fragments are never allowed, when profanity is warranted, and which throat-clearing phrases to avoid. It works, sort of, but I nonetheless wind up doing an enormous amount of editing to claim back my voice, and so for me, the prose-generation piece isn't really the point. `audience.md` describes the reader and lists research sources, the places where the tool should verify claims and check for prior art.

## Why the dialectical shape needs tooling

"Dialectical" is meant here as "staged argument against itself": an outline that names its own best counterargument, a critic that reviews the outline as an opponent, a draft that has to survive both before it ships. Thesis, antithesis, synthesis, and any disciplined user could run these phases manually in a chat window. Two features of Prospero, however, stand out.

The first is the fresh-context critic. When the critic subagent launches, it has no exposure to the outline's drafting process. A single-session model that helped you build an outline will often soften its critique of that same outline; the sycophancy literature has documented the in-session reward dynamics that produce this,[^syco] and running the critic in a fresh context is a structural bet grounded in the same mechanism rather than a separately measured property. The fresh-context critic cannot be sycophantic about history it does not have.

[^syco]: Sean Goedecke's "[Sycophancy is the first LLM dark pattern](https://www.seangoedecke.com/ai-sycophancy/)" is the clearest short treatment; the Hacker News discussion is canonical for this audience. Goedecke's argument concerns in-session RLHF dynamics rather than cross-session independence specifically, so the cross-session case I'm invoking is reasoned from the same mechanism, not benchmarked.

The second is artifact persistence. The outline lives on disk as a file, and so do the research and the draft. Phases read and write what they need without replaying the conversation that produced earlier artifacts. The research file deserves its own mention: `/critique` records the sources it consulted, the prior art it located, the counterarguments it surfaced, and any facts it verified, and that file has standalone value even if the outline gets abandoned. If you have tried to turn LLM chat into durable research notes and found it difficult, this persistence is a feature on its own terms.

Here are two entries from the research file for "Software architecture after AI," showing how the critic captures the strongest opposing voices it finds during outline review:

```markdown
## Opposing Voices / Counterevidence

### Addy Osmani (Google Chrome team)
"Vibe coding is not an excuse for low-quality work." Argues
developers must review AI output like junior-level code, refactor
into clean modules, strengthen type systems. Directly contradicts
the claim that code structure investment is over-investment.
Source: https://addyo.substack.com/p/vibe-coding-is-not-an-excuse-for

### fast.ai ("Breaking the spell of vibe coding")
Core claim: "We have automated coding, but not software engineering."
AI produces syntactically correct code but "doesn't produce useful
layers of abstraction nor meaningful modularization." Argues
outsourcing thinking to AI atrophies human judgment for
architectural decisions.
Source: https://www.fast.ai/posts/2026-01-28-dark-flow/
```

Each entry captures the source's core claim with a URL so the author can go verify it. The research file accumulates across phases; by the time `/author` runs, it has everything `/interrogate` and `/critique` collected, and the author can drop in their own notes too. This is the part that survives even when the thesis doesn't.

The guardrails are two-sided. Some are ones I'm seeking to avoid as an ego-bound meat-brain: wanting to believe my thesis is stronger than it is, bringing weak steelmen to the antithesis because I'm not trying hard enough, anchoring on the opening I happened to think of first. Some are the LLM's: sycophancy within a session, flattened counterarguments without explicit prompting, the quiet drift toward mealy-mouthed balance when the model isn't sure what you want. Each phase of Prospero is pointed at one of these.

## Amplify argument, not prose

My goal is to amplify the author's _intellectual intent_, and to focus less on pure prose. The prose that LLMs tend to generate requires a great deal of human work to preserve voice, in my experience; AI writing now reads as transparently artificial to most critical readers absent revision. Prospero shines at argument, dispute, and research, not at prose. Which claim should the piece actually make? What does the sharpest counterargument look like? Where is the evidence thin? Those are the questions that distinguish a piece that can be taken seriously from one that gets discarded, and LLMs turn out to be genuinely good at all three when prompted accordingly and given a clean slate. If your thesis is confused, the interrogator will do its level best to send you back to think rather than forward to drafting.

## Rigor versus boldness

In an attempt to encourage _rigorous_ arguments that can withstand challenge, Prospero risks blunting _bold_ ones. The critic will continually challenge you to justify assertions presented without evidence; while it _should_ puncture arguments that do not work, its critiques are often limited to whatever context it has available in its window, as with any LLM, which is why the research it generates is so important. It can soften a declarative stance that was worth making sharply, and resist statements made without evidence even if the author has reason to believe its audience will accept them that way, and so the author has to decide, piece by piece and section by section, when to accept a finding and when to override it. My rough heuristic is to accept findings that flag weak evidence and to push back on findings that ask me to hedge an opinion. That call is imperfect, and I have gotten it wrong in both directions. Improving the balance between rigor and preservation of voice is a design question that's worth iterating on.

If the blank page intimidates you, or if you lose momentum halfway through a piece and let it stall in `drafts/`, Prospero is built to push you through. Use it for argumentation, critique, research, and understanding, not just to generate prose; you will publish with more confidence than you started with. [PRs gratefully accepted](https://github.com/bguthrie/prospero).
