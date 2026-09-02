---
title: "The maximalist case for AI coding"
description: "Software is what it does. It always has been. Human line-level code review is a ceremonial bottleneck whose days are numbered."
date: 2026-07-30T06:00:00-05:00
draft: true
hidden: true
categories:
  - sdlc
  - ai
---

You almost certainly haven't read the source code for macOS; I certainly haven't. You likewise probably haven't read the source code for 1Password, for Instagram, or for your bank's wire-transfer system, and no single working engineer could. I trust my life to software I have never inspected, written by people I have never met, working under processes I will never audit. Plenty of OSS advocates are disciplined objectors to this sytem, but even they have no read every line of that software; why would they? It seemingly does what it's supposed to do. Readable is not the same thing as read.

A web of trust underpins our relationship with software, predicated on the idea that someone, somewhere, has bothered to make sure that it does what it's supposed to do, but it's a pretty tenuous thing. If you've ever blithely installed an NPM package based on stars and reviews, you know the feeling. We rely on reputation, on popularity, on the presence of a test suite, on the fact that thousands of other people are using it without complaint. We rely, in other words, on behavioral evidence. Does it work? Has it broken for anyone? Is someone maintaining it?

Bluntly, my belief is that if software passes all its tests, serves its users, and withstands adversarial probing, then questions about its internal structure are in some sense metaphysical. You can prefer beautiful code, or argue that beautiful code correlates with fewer defects.[^correlates] But the correlation is not the thing. The thing is what the software does.

[^correlates]: I've [argued before](/p/good-code/) that most debates over code aesthetics are cultural rather than empirical: programmers value what they trust and understand, and the schools of thought run deep. What's legible to one school is opaque to another. This does not change what the software does.

For me, the case for ensuring that every line of source code is audited by humans has weakened considerably as velocity and reliability have improved. It is now possible to just let 'er rip, responsibly, and you probably should.

## The harness is the thing

If software is what it does, then how do you know what it does? The answer, at scale, has never been "a single human read every line." The gold standard has, at least since I've started as a professional software engineer, automated verification: test suites, type systems, static analysis, security scanners, observability, monitoring, and increasingly, formal verification. Reliable delivery at scale has always been underpinned by deterministic checks.

Human code review catches a meaningful but narrower band of issues. It's good at naming, at design preference, at certain classes of logic error that jump out to an experienced eye. However, it can and often does miss entire categories of defect that automated tools catch reliably. It is slow, it is expensive, and critically, it does not scale with the rate of code generation that AI enables. Provided you have no other organizational impediments, human peer review is now your most significant bottleneck.

I've [argued elsewhere](/p/software-architecture-after-ai/) that observability and behavioral verification are ascending in importance precisely because they work regardless of whether anyone reads the source. If your monitoring tells you the system is healthy, and your tests tell you the contracts are satisfied, and your users tell you the product works, then what additional information does reading the implementation give you? Comfort, mostly, and comfort is not a quality gate.

### But who verifies intent?

The strongest version of the pro-review argument isn't "humans catch bugs in code." It's "humans catch bugs in *intent*." A reviewer who says "wait, this doesn't match what the PM actually wants" or "this technically satisfies the acceptance criteria but will confuse users" is doing God's work, but doing so at the code level may or may not make any sense.

Code review catches intent mismatches accidentally, not systematically. A reviewer who happens to notice a mismatch between implementation and intent is getting lucky, not executing a repeatable process. If you want to verify intent, you need better specification practices: design documents, acceptance criteria, behavioral contracts, and the observability to confirm them in production. You need design review, not implementation review. Conflating the two is how code review becomes a gate rather than a habit: it takes on the weight of intent verification that it cannot systematically deliver, and then everyone wonders why it's so slow and so expensive.

The human role that remains essential is directing attention: scoping intent, defining what success looks like, interrogating application boundaries, deciding where the one-way doors are. This is judgment work, and it scales. It's also not code review. It happens upstream, in design and specification, or downstream, in observability and user research. Reading diffs is the least efficient place to do it.

In July 2026, a fully autonomous agentic attacker [compromised Hugging Face's production infrastructure](https://huggingface.co/blog/security-incident-july-2026) at machine speed: thousands of individual actions across a swarm of short-lived sandboxes, self-migrating command-and-control infrastructure, lateral movement across multiple internal clusters over a weekend. No human reviewed those thousands of actions in real time, because no human could have. The defense required AI-driven forensic analysis that processed over 17,000 attacker events in hours rather than the days it would have taken a human team. And the defenders' own commercial AI tools were initially *blocked* by safety filters that couldn't distinguish a security responder from an attacker. The attacker was bound by no such usage policy.

Human review of diffs was categorically irrelevant to both the attack and the defense. Security, at this scale, is a harness problem. It has to be.

## Maintainability is dissolving

The cost of rewriting code is approaching zero, modulo higher or lower cost of token consumption. Not the cost of rewriting *systems*; I'll draw that distinction in a moment. But the cost of regenerating, restructuring, or fundamentally reshaping a module, a service's internals, a data layer, a test suite: this is collapsing. Every entrepreneur I know who started out using LLMs to write code they weren't proud of has gradually discovered that newer models wallpaper over the mistakes of the old. The code didn't need to be beautiful; it needed to work long enough to validate the business hypothesis, and when the business grew, better models made the code better too. Code is just tech. The commercial incentives for LLMs to improve remain overwhelming, and the trajectory is not ambiguous.

Martin Fowler's "[Vibe Coding](https://martinfowler.com/bliki/VibeCoding.html)" piece from May 2026 draws the line here. He argues that LLMs are probabilistic inferrers, not compilers of natural language; that developer judgment remains essential for evaluating output; that well-structured code benefits LLMs as well as humans. He distinguishes "vibe coding" (ignoring the code entirely) from "agentic programming" (AI writes, human reviews), and argues that the distinction matters because the consequences differ.

He's partially right. Developer judgment remains essential. I agree with this without reservation. But Fowler's argument conflates two things: the judgment required to decide *what to build and where the boundaries should be*, which is irreplaceable, and the line-by-line review of *how the model chose to implement it*, which does not scale, does not need to, and increasingly doesn't buy you much. Structure is instrumentally useful; it makes agents faster at navigating codebases and developers faster at understanding them during debugging. But instrumental value is an optimization, not a design constraint, and optimizations are cheap to revisit. You can restructure the code to make agents more effective *using agents*, and the cost is tokens and time.[^architecture]

[^architecture]: I made this argument at length in "[Software architecture after AI](/p/software-architecture-after-ai/)": if the cost to reverse a code-level decision has collapsed, that decision is no longer architectural, regardless of how important it used to feel.

The scoping here matters, and I want to be honest about it. Code-level rewrites are approaching cheapness. System-level migrations, with accumulated state, live integrations, contractual SLAs, and data gravity, remain hard. They remain hard for reasons that were never about the code: data accumulates mass, more things depend on its current shape than anyone can enumerate, and reversing those dependencies requires coordinating with human beings and reshaping real-world contracts. Scrutinize your application boundaries. Interrogate one-way doors. But scrutinizing the internal implementation of a service that sits behind a well-defined interface is buying you dramatically less than it used to. The humans direct attention to boundaries and intent; the machines handle the rest.

Steering models is increasingly a matter of intent and focus. Especially with frontier models, the quality of your direction matters far more than the quality of your review.[^fable] You get better output by being clearer about what you want, not by being more meticulous about inspecting what you got.

[^fable]: My experience with Fable, in particular, has been that the gap between "steering well" and "steering poorly" is much larger than the gap between "reviewing carefully" and "not reviewing at all." The former determines whether you build the right thing; the latter is mostly cosmetic.

## The dark factory is already winning

The "[dark factory](https://www.mindstudio.ai/blog/what-is-dark-factory-autonomous-ai-codebase)" concept, borrowed from manufacturing, describes a codebase where AI agents autonomously handle the entire development lifecycle: planning, coding, testing, fixing, deploying, all without a human reviewing or approving any step. The idea became popular in early 2026, faded somewhat as organizations recovered from the initial shock, and then quietly became reality at the margins while the establishment was still debating whether it was safe.

If you want to see where software development is going, don't look at the incumbents. Look at the margins. Look at the solo entrepreneurs, the two-person startups, the technical PMs who decided they didn't need an engineering team. A friend of mine maintains a parking-ticket app. His background is VC and big-tech product management, not software engineering. Occasionally he gets embarrassed about the source code, asks me or someone like me for advice on how to steer the LLM differently, fixes what's bothering him, and moves on. Nobody reviews his code. The business is growing. The product serves its users. He is, by any meaningful definition, shipping production software without human code review, and it works.

This is not an isolated case. This is what it looks like at the margins, where competitive pressure is fiercest and survival depends on speed rather than process. The problems ThoughtWorks solves, the problems *I've* spent my career solving, have always been caused by successful businesses that did not much care about the niceties of code craft on their path to competitive dominance. Facebook famously shipped PHP of astonishing ugliness on its way to a billion users. Early Google's code was, by many accounts, a mess. They cleaned it up later because they could afford to; the craft was a *consequence* of success, not a prerequisite for it.

The market selects for speed when quality is held constant by harnesses. This is the key conditional: "when quality is held constant." If you have no tests, no monitoring, no verification, then yes, speed without quality is a race to the bottom. But harnesses are cheaper to build than ever, and the teams adopting dark-factory patterns are building them aggressively, because the harness is the only thing standing between their velocity and disaster. They know this. They invest accordingly. The gate was never the safeguard; the harness was.

Grand poobahs of the software engineering establishment remain earnestly committed to human code review as a prerequisite for shipping. They are wrong, and the evidence is accumulating at the edges where it always does: among the scrappy, the desperate, the competitive, and the fast. The future is already here; it is simply not yet evenly distributed.

What about novel failure modes? When the harness doesn't cover something because nobody anticipated it? This is a fair question, and the honest answer is: novel failures are definitionally novel. The evidence that old-fashioned code review catches them is exactly as scant as the evidence that it doesn't. A reviewer might spot an unfamiliar pattern and raise an eyebrow, or they might not; the base rate of catching genuinely novel failure modes through line-level review is not high enough to justify the cost of reviewing *everything*. The mitigation is iteration speed: when something breaks in a way you didn't anticipate, you detect it through observability, you fix it fast, and you add it to the harness so it never happens again. The blast radius is a function of your monitoring and your deployment speed, not your review thoroughness.

## The craft has changed

Here's where I land. We have invented the code equivalent of a bandsaw. The automation is real, and it is not going away. You can still build furniture by hand if you want; people do, and the results can be beautiful. But as a commercial proposition, hand-built furniture is a luxury good, and software companies are not in the luxury business. They are in the business of solving problems for users as fast as possible while keeping the building from falling down. The bandsaw is how you do that now.

Source code is becoming an intermediate representation: inspected for debugging, not crafted for beauty. The artifact of record is the intent, expressed in natural language, and the harness that verifies it. This is not a diminishment. It's the fulfillment of a promise that has been lurking in software engineering since the first compiler translated human-readable notation into machine instructions: each generation of tooling moves the locus of human attention one level up, toward intent and away from mechanism.

The new craft is steering with intent and focus. Knowing what to build. Specifying it precisely enough that automated systems can verify it. Building the harnesses that catch what you missed. Iterating at a speed that would have seemed reckless five years ago and now seems merely competitive. The discipline hasn't gone away. Its object has shifted, and the shift is more dramatic than most practitioners have yet absorbed.

The ceiling rises for everyone. That's not a consolation prize; it's the point. Software built rapidly, verified ruthlessly, iterated fearlessly. A different conception of what it means to build, and a better one.
