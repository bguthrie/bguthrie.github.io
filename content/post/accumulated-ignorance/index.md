---
title: "Accumulated ignorance at scale"
description: "What do we do about tech debt and code review in a world where AI both writes the code and reviews it?"
date: 2026-03-06T12:00:00-05:00
image: jose-martin-ramirez-carrasco-z2tinW7Z6Bw-unsplash.jpg
draft: false
hidden: true
categories:
  - sdlc
  - ai
---

A product manager I know asked me a question recently that I've been chewing on. They were trying to figure out how to plan work in a world where AI is writing a lot of the code: how should they think about MVPs, backlogs, tech debt? Refactoring is easier than it used to be, they said, so should their team worry less about accumulating debt, or were they missing something?

I confess that my initial reaction has been to massively discount the negative impact of debt markers like code quality. It's just a question of token cost now. Move faster.

However, while the cost of _creating_ software seems to have dropped by something like an order of magnitude, depending on the task, the cost of _maintaining_ it probably hasn't dropped nearly as much, because maintenance requires knowing something is wrong, and invisible debt is invisible. AI can comfortably outpace humans at authoring code, but the smarter the authoring tools get, the quicker they exhaust the context window. Issues accumulate because the model doesn't know what it doesn't know.

So teams need to change *what* they worry about: less about the particulars of the code, _more than ever_ about what your users actually experience.

## The volume problem

We have entered a period in which AI is able to author more code than is conveniently reviewable by humans. Consequently, the volume of code being generated is increasing faster than our capacity to inspect it. Every AI-assisted coding session produces choices: naming decisions, structural decisions, abstraction decisions, dependency decisions. Some of these are good, some are suboptimal, and the ratio of decisions being made to decisions being reviewed by a human is growing.

The term "tech debt" is often understood to mean deliberate shortcuts: we knew we should have written tests, but we shipped without them. We knew the schema was wrong, but we didn't have time to fix it. It's a bludgeon.

But Ward Cunningham, who coined the term in a [1992 OOPSLA paper](https://c2.com/doc/oopsla92.html), didn't intend for it to be understood that way. "Shipping first time code is like going into debt," he wrote. The debt isn't about shortcuts; it's the gap between what the code expresses and what the team has since learned about the problem. Fowler later [formalized this](https://martinfowler.com/bliki/TechnicalDebtQuadrant.html) as "prudent-inadvertent" debt: the kind that accrues even when good teams do good work, because understanding deepens and the code doesn't reflect it yet.

AI-generated code creates something closer to Ward's original meaning. The model operates within the light-cone of its context window, both as an author and a reviewer. It doesn't know your business, your users, or your architecture beyond what it can see right now. It makes locally reasonable choices that may be globally suboptimal, and it does this at scale, thousands of times per day. The code works; it passes the tests. But it accumulates a kind of ignorance that no one chose and is difficult to notice.

## Two kinds of cost

Tech debt has always imposed two kinds of cost.

The first is the cost of building new features on top of a degraded codebase, in which each new feature takes longer because you're fighting the existing code. In a world where AI has reduced the cost of writing and refactoring code by roughly an order of magnitude, this cost has dropped dramatically. If a messy abstraction is slowing you down, you can refactor it in minutes instead of days; structural choices over internal architecture are simply a question of token consumption and time. The economic argument for tolerating some mess has gotten a lot stronger.

The second cost is subtler and more dangerous: the cost of maintaining existing features. This is the one that shows up as bugs your users find, as performance degradation they notice, as error states they hit that you never tested for. This cost doesn't care how cheap your refactoring is, because you first have to *know* something is wrong. If the debt was accumulated invisibly, by an AI making thousands of locally reasonable decisions, you might not know until a customer tells you. Or until they leave.

The first cost has gone down. The second cost may well have gone up, because the volume of unreviewed decisions is increasing. But the cost of *mitigating* both has also gone down, and that changes the calculus.

## Harness engineering and the quality spectrum

Mitchell Hashimoto wrote recently about a practice he calls "[harness engineering](https://mitchellh.com/writing/my-ai-adoption-journey)": the idea that anytime you find an agent making a mistake, you take the time to engineer a solution so that the agent never makes that mistake again. Better AGENTS.md files, custom scripts, automated checks. It's the discipline of building upstream guardrails so you stop babysitting and start preventing.

I like this framing, but as with quality engineering more generally, it lies on one end of the same spectrum that Yegge once described: [monitoring and QA are the same thing](https://gist.github.com/chitchcock/1281611). On the upstream end, you want to make the LLM less likely to produce bad code in the first place. On the downstream end, you want betters tools for detecting its impact: observability, error monitoring, and post-deploy smoke tests. Both matter and neither alone is sufficient.

What's changed is that AI has made *all* of this cheaper to build. Comprehensive test suites that would have taken weeks can be generated in hours. Observability instrumentation that teams used to defer indefinitely can be set up in an afternoon. Error monitoring, synthetic tests, performance benchmarks; all of it is more accessible than it has ever been.

The irony is that most teams should have been investing in this work already and weren't. The tools were too expensive to build, or the perceived return was too low relative to shipping features. However, the cost of building quality infrastructure has now dropped far enough that the old excuses no longer hold.

## What to actually do differently

Shift the balance of your portfolio of work proportionally *toward* the things that let you (and have always let you) detect and respond to problems: tests, observability, error monitoring, guardrails. Work like this lets you move fast without the risk of user-detectable choices compounding silently underneath you. Net-net, you should still be moving faster on product work, but the implementation should explicitly incorporate more guardrails.

That said, I'd also argue that you can be less precious about minor debt. Duplicate functions, awkward abstractions, and poor naming conventions matter less when the cost of fixing them has collapsed. You have to stop treating every imperfection as a hard-blocking gate. Your users do not care about your internal code aesthetics.[^1]

But be *more* rigorous about what your users actually experience. If you're going to let AI generate code at volume, you need to be confident that you'll know when something breaks. The investment in quality infrastructure is the thing that makes the speed sustainable. Quality builds safety, which builds speed.

We're rapidly moving past the point where humans can meaningfully assess every code change, and we have to decide whether we're going to deal with or try to hold back the tide. This has been *somewhat* true in large codebases for a long time, but the rate at which unreviewed code accumulates is accelerating. The response to this isn't to slow down; it's to build better systems for detecting the consequences of the code you can't review. Instrument aggressively. Test comprehensively. Monitor what your users see. And move as fast as you can, because the economics have never been better for doing so.

[^1]: I have never once heard a customer say, "I would have renewed, but I could tell your service layer had some code duplication." Code duplication can have downstream effects, but the effects are observable. Focus on what they can see.
