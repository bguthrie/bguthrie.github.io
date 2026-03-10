---
title: "Accumulated ignorance at scale"
description: "What do we do about tech debt and code review in a world where AI both writes the code and reviews it?"
date: 2026-03-06T12:00:00-05:00
image: jose-martin-ramirez-carrasco-z2tinW7Z6Bw-unsplash.jpg
image_credit: Photo by José Martín Ramírez Carrasco on Unsplash
image_credit_url: https://unsplash.com/photos/gray-and-blue-coin-operated-binoculars-z2tinW7Z6Bw
draft: false
hidden: false
categories:
  - sdlc
  - ai
---

A reasonable response to the shift to agentic coding is to insist that humans continue to review every line of code—to resist the siren call of the [dark software factory](https://factory.strongdm.ai/) and keep a human in the loop at least at the review stage. If the tools are producing more code faster, the argument goes, then the responsible thing to do in high-risk or high-compliance environments is to maintain the same level of scrutiny we've always applied. Don't let anything through that a human hasn't vetted.

I'm sympathetic to the goal, but it no longer seems tenable over the medium term. We have entered a period in which AI is able to author more code than is reviewable by humans, and many teams—maybe not at enterprises, but certainly at startups—are already past the point where each line can realistically be expected to be scrutinized; the volume of code being generated is increasing faster than our capacity to inspect it. Every AI-assisted coding session produces choices: naming decisions, structural decisions, abstraction decisions, dependency decisions. Some of these are good, some less so, and the ratio of decisions being made to decisions being reviewed by a human is growing.

Consequently, while the cost of _creating_ software seems to have dropped by something like an order of magnitude, the cost of _maintaining_ it probably hasn't dropped nearly as much, because maintenance requires knowing something is wrong, and invisible debt is invisible. Issues accumulate because the model can only plan for and absorb what fits within its context, and many codebases contain more features (and flaws) than can fit.

Holding back the tide isn't the answer. But neither is pretending the tide doesn't carry risk. What I want to argue is that the right response is to change what we think of as business-forward engineering practice: to reclassify work that leaders have traditionally treated as overhead or debt paydown—tests, observability, monitoring, guardrails—as core product work, because it's the thing that makes AI-assisted velocity sustainable. And in exchange, to be less precious about the kind of code-level scrutiny that used to justify itself when humans wrote every line.

## What kind of debt are we actually accumulating?

Tech debt is often understood to accumulate through _taking deliberate shortcuts_: we knew we should have written tests, but we shipped without them. We knew the schema was wrong, but we didn't have time to fix it. It's a moral failing, and occasionally a bludgeon.

But Ward Cunningham, who coined the term in a [1992 OOPSLA paper](https://c2.com/doc/oopsla92.html), didn't intend for it to be understood that way. "Shipping _first time_ code is like going into debt," he wrote. The debt isn't understood to be the product of taking shortcuts; it's the gap between what the code expresses and what the team has since learned about the problem. Fowler later [categorized this](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html) as "prudent-inadvertent" debt: the kind that accrues even when good teams do good work, because understanding deepens and the code doesn't reflect it yet.

AI-generated code creates something closer to Ward's original meaning, but with a twist. Ward assumed a team whose understanding had deepened past what the code expressed; the debt was the lag between learning and refactoring. AI code starts from a different place. The model operates within the light-cone of its context window and whatever plans it writes for itself downstream of that context, both as an author and a reviewer. It doesn't know your business, your users, or your architecture beyond what it can see right now. It makes locally reasonable choices that may be globally suboptimal, and it does this at scale, thousands of times per day. The code works; it passes the tests. But it accumulates a kind of ignorance that no one chose and that is difficult to notice, not because the team learned something the code hasn't caught up with, but because the code never knew it in the first place.

This matters because it changes which costs you should worry about. Tech debt has always imposed two kinds of cost. The first is structural: building new features on top of a degraded codebase, where each new feature takes longer because you're fighting the existing code. In a world where AI has reduced the cost of writing and refactoring code by roughly an order of magnitude, this cost has dropped dramatically. If a messy abstraction is slowing you down, it can be refactored in hours instead of days or weeks; structural choices over internal architecture are simply a question of token consumption and time. The economic argument for tolerating some mess has gotten a _lot_ stronger.

The second cost is what I'd call user-facing product debt: features that don't work as they should, that lack internal coherence and consistency, or that fail to meet cross-functional requirements, because context is finite and models are still occasionally limited in the quality of what they produce. This can manifest as bugs your users find before you do, performance degradation they suffer from, error states you never tested for. This is the debt that accumulated ignorance produces at scale: not messy code, but code that doesn't know what it doesn't know.

Software creation, in this moment, still requires driving, and to be effective, a driver first has to _know that something is wrong_. If the debt was accumulated invisibly, by an AI making thousands of locally reasonable decisions, you might not know until a customer tells you. Or until they leave.

The structural cost has gone down. The user-facing cost may well have gone up, because the volume of unreviewed decisions is increasing. But the cost of _mitigating_ both has also gone down, and that changes the calculus.

## Reclassify quality infrastructure as product work

If the core risk of AI-assisted development is accumulated ignorance—code that doesn't know what it doesn't know—then the response isn't to review every line. It's to build systems that surface the consequences of what you missed.

Mitchell Hashimoto wrote recently about a practice he calls "[harness engineering](https://mitchellh.com/writing/my-ai-adoption-journey)": the idea that anytime you find an agent making a mistake, you take the time to engineer a solution so that the agent never makes that mistake again. Better AGENTS.md files, custom scripts, automated checks. It's the discipline of building upstream guardrails, and it's very similar to where StrongDM landed with [DTU](https://www.strongdm.com/blog/the-strongdm-software-factory-building-software-with-ai) (stub services taken to their logical extreme).

I really like this framing, but I treat it as one end of a spectrum. Yegge once observed that one of Amazon's lessons from its SOA journey is that [monitoring and QA are the same thing](https://gist.github.com/chitchcock/1281611): both are systems for detecting whether your software is behaving as intended, just at different points in its lifecycle. On the upstream end, harness engineering makes the LLM less likely to produce bad code in the first place. On the downstream end, observability, error monitoring, and post-deploy smoke tests catch the impact of what slipped through. Both matter and neither alone is sufficient; together, they form the quality infrastructure that makes AI-assisted velocity survivable.

What's changed is that AI has made *all* of this cheaper to build. Comprehensive test suites that would have taken weeks can be generated in hours. Observability instrumentation that teams used to defer indefinitely can be set up in an afternoon. Error monitoring, synthetic tests, performance benchmarks—all of it is more accessible than it's ever been.

This work is no longer overhead or debt paydown. It is not the thing you do after shipping features, when there's time, which there never is. In a world where AI is generating code at volume and humans cannot review all of it, quality infrastructure *is* the product work. It's the investment that makes the speed sustainable and the ignorance manageable. Teams should be given explicit time and mandate to build it, not asked to squeeze it in around the edges.

This isn't particularly novel. Most teams should be given space and clear direction to invest in this work already, and often aren't. The tools were too expensive to build, or the perceived return was too low relative to shipping features. The cost has now dropped far enough that the old excuses don't hold, but the old habits of treating quality infrastructure as a second-class priority still do.

## Lower the bar on code review, raise the bar on what users see

This is two sides of one strategy. First: you can be less precious about minor structural debt. Duplicate functions, awkward abstractions, and poor naming conventions matter less when the cost of fixing them has collapsed. You have to stop treating every imperfection as a hard-blocking gate. Your users do not care about your internal code aesthetics.[^1]

Second: be *more* rigorous about what your users actually experience. If you're going to let AI generate code at volume, you need to be confident that you'll know when something breaks. Instrument aggressively. Test comprehensively. Monitor what your users see.

These two moves are inseparable, in much the same that continuous delivery requires increased rigor around pre-deploy validation. Relaxing scrutiny on code internals only makes sense if you've invested in the quality infrastructure that catches user-facing problems. The trade is: spend less time reviewing code, spend more time building systems that tell you when the code is wrong. *Quality builds safety, which builds speed.*

We're rapidly moving past the point where humans can meaningfully assess every code change. The rate at which unreviewed code accumulates is accelerating. The response to this isn't to slow down, and it isn't to pretend that human review can scale to match. It's to redefine what constitutes responsible engineering practice: less gatekeeping, more instrumentation. Less time reading diffs, more time building the systems that make diffs less consequential when they're wrong.

[^1]: I have never once heard a customer say, "I would have renewed, but I could tell your service layer had some code duplication." Code duplication _can_ have downstream effects, but the effects are observable. Focus on what they can see.
