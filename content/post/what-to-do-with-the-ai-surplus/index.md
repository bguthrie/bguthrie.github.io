---
title: "What to do with the AI surplus"
description: "AI has made engineering faster than your organization can absorb. The surplus is a political problem, not a technical one."
date: 2026-03-18T12:00:00-04:00
image:
draft: true
hidden: true
categories:
  - sdlc
  - ai
---

# What to do with the AI surplus

A few months ago I watched an engineering team ship in a few weeks what would have taken them a quarter the year before. And then it sat in staging for three weeks, because our other stakeholders couldn't align on what to do with it. AI let them skip substantial steps, and a structured PRD process is premised on the idea that up-front work is cheap and implementation is expensive. This is no longer true if it ever was. Every engineering team is now capable of moving faster than the rest of the organization can metabolize.

This is the AI surplus in miniature. Engineering velocity has, for many teams, begun to outrun the organization's ability to absorb it. Features pile up faster than they can be reviewed, approved, and released. The bottleneck has moved from "can we build it" to "can the rest of the company keep up," and the answer, increasingly, is no.

Steve Yegge [laid out the math](https://sourcegraph.com/blog/revenge-of-the-junior-developer) on what this means for headcount: each wave of tooling is conservatively 5x as productive as the last, and the economics point clearly toward fewer engineers doing more work. But the question that matters right now, before the headcount conversations happen, is what engineers do with the gap between what they *can* produce and what their organization can consume.

## The surplus is a political problem

It is tempting to treat this as a scheduling issue, a matter of aligning roadmaps and smoothing handoffs. It isn't. The surplus is a political problem. Someone is going to capture it, and the question is who.

There are really only three outcomes. **First**, upper management captures it, either in headcount reduction or in drastic changes to process. **Second**, teams capture it and invest it in work that benefits themselves but requires fewer review gates. Or **third**, engineers quietly pocket it as slack, doing the same work with less effort and hoping no one notices.

I have led layoffs, and I have a good sense of what the conversations look like on the management side. They start with a spreadsheet and a question: "What are we getting for this spend?" When the answer is legible, the conversation is about investment. When it isn't, the conversation is about cuts. The engineers who survive a reduction are the ones whose work is visibly, obviously valuable and enthused. The ones who don't meet that bar, don't.

The surplus accelerates this calculus. When your tools can demonstrably produce more, the distance between what you're producing and what you *could* be producing becomes a visible gap. If you value your role, it probably isn't ideal to be on the wrong side of that gap when someone pulls up a dashboard.

## Fowler's thesis meets a budget line

Martin Fowler argued years ago that [you cannot measure developer productivity](https://martinfowler.com/bliki/CannotMeasureProductivity.html). The reasoning was _and is_ sound: the output of software development is too heterogeneous, too dependent on context, and too entangled with organizational factors to reduce to a single metric. Any attempt to do so puts Goodhart's Law into action: the metric becomes the target, and the target stops measuring what you cared about.

That argument has been tested before, but never this hard.

When a meaningful fraction of engineering work is mediated by LLM calls, and those calls cost money, token spend becomes a line item. It isn't a productivity metric, but it looks like one, and it has a dollar sign next to it. Finance doesn't need to understand the philosophy of software measurement to notice that Team A spent $40,000 in tokens last month and Team B spent $8,000, and to start asking questions.

The same tools that create the surplus make it visible. Managers can use AI to summarize PR activity, track story throughput, monitor commit frequency; not because they woke up one morning and decided to build a [panopticon](https://en.wikipedia.org/wiki/Panopticon), but because the tools are *right there*, and the temptation to vibe-code a dashboard during a meeting is exactly the kind of thing these tools are good at, and yes, I've personally done this. Agentic coding is a phenomenal boon to experienced people in [continuous partial attention](https://en.wikipedia.org/wiki/Continuous_partial_attention) roles. They will use it.

This doesn't mean Fowler was wrong, but the *political* environment has shifted. You can't measure developer productivity in any philosophically rigorous way, but you can now produce charts that *look like* productivity metrics, and those charts will be produced, and they will influence decisions. The philosophical argument about measurement validity loses to the political reality of a budget review.

## Don't pocket the slack

When you can do the same work with less effort, it's natural to want to take the difference as free time. You've earned it; you're producing the same output. And in a sane world, some of that surplus *would* redound to employees. Yegge gestured at this: the gains from AI-driven productivity should benefit the people using the tools, not just the companies deploying them.

I'm sympathetic to the principle, but I'm skeptical it survives contact with American business culture, because the power dynamics don't support it. If your manager believes that you're now theoretically capable of 10x, but that you're delivering 3x, the response is not going to be "well, you've earned a lighter workload." It's going to be "why aren't you delivering 8x?" The tools that create the surplus also make the surplus measurable, and anything measurable will eventually be optimized by someone with a spreadsheet.

Engineers who pocket the slack are betting that nobody will notice. That bet gets worse every quarter as the tooling improves and the visibility increases. Do not make this bet.

## Stay substantively busy

Instead of pocketing the surplus or waiting for someone else to make up their mind, direct it yourself. Invest it in work that's genuinely valuable, doesn't block on the rest of the organization, and is hard to argue against.

**Quality infrastructure.** I argued in "[Accumulated ignorance at scale](/p/accumulated-ignorance-at-scale/)" that AI-generated code accumulates a kind of debt that's invisible until it hits users:. Tests, observability, monitoring, and error tracking all help to mitigate this, and AI has made it cheaper to build than ever. There is enormous room here, and it doesn't require a product spec or a design review.

**Operational self-disruption.** Every engineering organization has shit work: manual deployments, flaky pipelines, copy-paste config management, toil that everyone hates and nobody prioritizes. The surplus is an opportunity to systematically eliminate it. Build the internal tools. Automate the workflows. Take the drudgery out of your own hands. This has always been good practice, and now it's good fun.

Both of these have a common property: they're work that compounds, that makes the team better over time, and that is legible to anyone looking at what you're doing. Building the monitoring system that caught the outage or the deployment pipeline that cut release time in half is a good way to demonstrate impact, and always has been. This is visible value. Convert the surplus into it.

## The ratchet

This is a sinister step-function. The tools that create extra capacity also create extra visibility, and the combination forms a ratchet: you can produce more, management can *see* more, and the expectation adjusts upward in one direction only.

You cannot rely on philosophical arguments about the invalidity of productivity metrics when someone has a dashboard and a budget meeting, or assume that the institutional knowledge in your head makes you indispensable. Let me be blunt: I have cut deeply, _personally_, and institutional knowledge turned out to be less important than I believed, or feared.

What you can do is stay substantively busy and direct the surplus toward work that compounds, that's visible, and that makes the organization better in ways that are hard to argue with.

And if you're a leader, and you're scrambling to stay ahead, the very least you can do is embrace and reward teams who do stay ahead of _you_.
