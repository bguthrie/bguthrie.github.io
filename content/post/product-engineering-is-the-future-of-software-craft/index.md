---
title: "Product engineering is the future of software craft"
description: "The practices we called craftsmanship were scaffolding for human code production. What survives is something older and more important."
date: 2026-08-20
image: will-suddreth-o54RjF-C7xo-unsplash.jpg
image_credit: Photo by Will Suddreth on Unsplash
image_url: https://unsplash.com/photos/man-sawing-in-room-o54RjF-C7xo
draft: false
hidden: true
categories:
  - sdlc
  - ai
---

A friend of mine is a nontechnical founder. For years he employed engineers in Ukraine to build his product, but he wasn't a programmer, so he couldn't read the code they wrote, or evaluate their technical decisions; functionally, he had to trust their judgment on things he couldn't verify (or pull in a friend occasionally to gut-check). He does not employ nearly as many those engineers anymore, but his business moves faster than it did, and its structural costs are lower. Notably, his ability to reason about code—which was limited to begin with—has not changed. The engineers he kept are the ones he can trust with outcomes, or more tactical work.

You've likely had a boss like this, even if you didn't know it. Somewhere up your reporting chain there's usually someone—a GM, a CEO, maybe a board member or investor—who doesn't read code and doesn't care about its test coverage. They have to trust, on some level, that you do, but they're assessing progress against things they _can_ evaluate: is the business moving faster? Are we shipping, and focused on the right thing?

My friend also drives a lot of code _personally_, and isn't better reading it than he used to be, but he has an immense amount of fun doing it; the logic for LLM codegen is clear. He knows he's carrying some amount of risk by doing this, but it isn't sufficiently offset by the gains for him to stop. But he _cares_ about what he's building; he wants it to matter, and he wants to get better at building it. And what is investing in getting better at building things if not craft?

For most businesses, the future of software craft looks a lot more like him, and the people he's hiring, than the TDD crowd I used to run with.

## Craft was ever thus

People still make furniture by hand. The pride carpenters have in their work is earned and genuine, and the people who practice it at a high level are legitimately excellent at something worth being excellent at. But there are also dramatically fewer of them than there used to be, and what mastery means has shifted substantially. Industrial automation did not eliminate carpentry; it eliminated the version of carpentry that consisted largely of making by hand what machines could make faster, and even the ones still making chairs by hand probably aren't pushing each saw-stroke back and forth with their weak, fallible human muscles. What constitutes the craft now are the parts that, as we keep saying, require judgment: about materials, fit, structure, and purpose. You don't need to push a hand saw to figure out why you might prefer an electric one, and the use of it doesn't make the resulting chair any less chair-y.

Indeed, the economics of tool improvement have always worked like this: each major shift in what tools can do redraws the line between what requires care and attention, and what doesn't. Desktop publishing didn't destroy typesetting, but it thoroughly eliminated the part of it that consisted of tediously placing [sorts](https://en.wikipedia.org/wiki/Sort_(typesetting)), which was itself the product of a series of technological innovations focused on improving our ability to replicate data.[^typography] The craft that emerged on the other side was about design, hierarchy, and visual communication, even as the mechanical skill stopped being a useful differentiator.

[^typography]: In a happy accident, desktop publishing (and subsequently the web) also dramatically expanded the number of people who care about typography.

Software engineers, I think, have been here before, but it's been a while since we've had to think about it.

## The disciplines we called craftsmanship

When I think of the traditional markers of software craft, I think of stuff like TDD, pair programming, (lowercase-C) clean code, trunk-based development. I think that, depending on role, you might reasonably argue that it encompasses elements of technical mastery specific to the problems you're solving: idiomaticity in style, mastery of syntax, micro-optimizations in performance. I spent years doing 100% pair-programming and TDD and benefited enormously for the effort.

All of this made sense when humans were the primary producers of code, even though such practices have always been more discussed than practiced. The cost of human error was a meaningful constraint on what could be shipped.

LLMs write code across platforms without specializing, and open-weight models at or near state-of-the-art capability are now broadly available. New releases continue at a pace that the skeptics predicted would not be viable a year ago, and the gap between what these tools can produce and what a skilled specialist can has been closing steadily and is perhaps now gone. The claim that LLM code quality is too poor to change what disciplines matter is an argument about the present state, and the present state is already not quite what it was six months ago when everyone woke up one morning in the winter of 2025, hungover on egg nog and ham, and took a poke at Opus 4.5.

TDD in particular is a tough one to lose, because it develops judgment; it is a design tool, not (primarily) a quality reinforcement mechanism. But judgment develops either way through experience and mistakes. And, good news! Mistakes are still emphatically available to anyone writing software with LLMs: you can still ship the wrong thing, integrate systems badly, instrument nothing, miss what users actually need, and build something [technically correct](https://www.youtube.com/watch?v=0ZEuWJ4muYc) that solves no real problem.

## Software craft is dead; long live software craft

So why product engineers? [A software engineer owns the code; a product engineer owns the product.](https://posthog.com/blog/product-engineer-vs-software-engineer) The distinction is about _orientation_. Software engineering is inward-facing (and occasionally hidebound). Product engineering is meant to be outcome-oriented and therefore outward-facing: does this software solve the problem, does it fit the business need, is the system observable enough to know when it's failing?

I've been attempting to build product-oriented teams since before it was cool, and took a lot of grief for it, and I regret nothing. Product-oriented teams often ship faster than code-focused ones even when they lack expertise (and therefore work more slowly) in specfic technical platforms: if you understand the business need, can verify that the system does what it's supposed to do, and can course-correct when it doesn't, you can iterate more effectively, because you understand [higher intent](https://medium.com/@productandrew/the-art-of-action-stephen-bungay-2010-5e0b988daabd). Such teams have faster lead time than than ones focused on language or platform, because a lot of the time those teams gain in implementation speed gets burned off in handoffs.[^handoffs]

[^handoffs]: Regrettably, this is often convenient for corporate politics.

The future will be won by teams who are relentlessly focused on automation that serves high-quality outcomes—**as they always were**. The new craft is already emerging, although perhaps transiently; what is harness engineering if not a way to control quality at pace? Observability and testing _still_ matter in a way that feels increasingly urgent. Fitness to form—systems of delivery _designed_ for end to end delivery, like monorepos—become a bigger deal. Prospering means building features that meet a business need, knowing what good looks like from the outside and working backwards from there.

The practices that don't especially matter in this frame are the ones that were always primarily about producing better code: line-level review of particular choices, strong opinions about function length, the question of whether this class name is expressive enough. Software craft is dead; long live software craft.

## This is meant to be helpful, sort of

Fewer people (although not zero) will practice traditional software craft, in the same way that fewer people practice carpentry professionally today than did a century ago, or fewer people farm, or typeset; and the ones who eschew modern tools for traditional ones are fewer still. The economic signal from my founder friend is not reassuring on this point and isn't particularly meant to be. Weirdly, many enterprises haven't fully reckoned with what it implies.

The craft question is: when the practitioners who remain are doing excellent work, what will that work look like? I think it'll look like product work: people who own problems end to end, move from a user need through to a shipped solution without losing the thread, know whether what they've built actually works because they've instrumented it to tell them. Depth will still be valuable in some places; the [demoscene](https://en.wikipedia.org/wiki/Demoscene) comes to mind. But that's art, not commerce. It matters, but it's where craft meets art, not where craft meets commerce.

The chair doesn't know how you cut the wood; similarly, the user doesn't know whether an LLM wrote the code. What they know is whether the resulting software solves their problem. That has always been what mattered. It is no longer possible to pretend otherwise.
