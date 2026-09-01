---
title: "Product engineering is the future of software craft"
slug: product-engineering-software-craft
description: "Code as craft is dead, but people still care about their work. What's next?"
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

A friend of mine is a solo nontechnical founder. For years he employed engineers in Ukraine to build his product, but he wasn't a programmer, so he couldn't read the code they wrote, or apply much scrutiny to their technical decisions; functionally, he had to trust their judgment on things he couldn't verify.

You've likely had a boss like this, even if you didn't know it. Somewhere up your reporting chain there's usually someone—a GM, a CEO, maybe a board member or investor—who doesn't read code and doesn't care about its test coverage. They have to trust, on some level, that you do, but they're assessing progress against things they _can_ evaluate: is the business moving faster? Are we shipping, and focused on the right thing?

He doesn't employ a lot of those guys anymore. They haven't become worse coders, but LLMs have become way better at writing code.

I love that I can now nerd out with my friend on optimizing token costs or choosing the right harness; suddenly, to my surprise and delight, we're speaking the same language. But the economic implications aren't particularly reassuring: what does it _mean_ to practice engineering as a discipline when the discipline itself has become so aggressively automated? And for those of us who've spent their careers dedicated to software, what is craft practice now?

## Craft is fundamentally about caring

To practice craft is to value the _making_, sometimes in irrational or inefficient ways, as an intrinsic good. We often romanticize it, but it is difficult to separate it from either the commercial imperative—we all gotta eat—or the role that automation plays in it. There are still carpenters out there who make furniture by hand, and the people who practice it at a high level are legitimately excellent at something worth being excellent at. But there are also dramatically fewer _of_ them than there used to be. Even the ones still making chairs "by hand" probably aren't pushing each saw-stroke back and forth across the wood with their pathetic human muscles; people like automation.

Automation has always served to redraw the line between what requires care and attention and what doesn't. Desktop publishing didn't destroy typesetting, but it thoroughly eliminated the part of it that consisted of tediously placing [sorts](https://en.wikipedia.org/wiki/Sort_(typesetting)), which was itself the product of a series of technological innovations focused on replicating data. The decline of that sort of craft led to other sorts of investment in design, information hierarchy, and visual communication, even as the mechanical skill stopped being a useful differentiator. Ironically, the death of manual typography probably dramatically expanded the number of people who care about the craft of good type design.

AI Coding harnesses are, _at least_, a bandsaw for software. Consequently, many traditional markers for craft are obsolete. You _could_ TDD your own code, there's nothing stopping you, but we're sort of in a John Henry situation here: why would you give yourself a heart attack? Let the LLM do it.

And indeed, an awful lot of traditional software craftspeople have always used automation pretty happily; heavyweight IDEs have included automated refactoring tools for decades. We were never above automation if it served our purposes, and didn't think of ourselves as any less caring because we didn't hand-edit every file with a text editor with syntax highlighting turned off. Tools matter; the way you practice and think about your craft informs the choices you make.

What constitutes the craft now are the parts that, as we keep saying, require judgment: about materials, fit, structure, and purpose. And so let's start by making this a big-tent argument for software craft, and dial back from a specific set of practices. When I think of craft practitioners, I think of the community of people who genuinely care both about the _making_ and about _what is made_. I think it's as simple as that.

## Craft has always been a product of the technological present and its past

Software is now facing the same transition as the carpenter, but it's precisely because it's happened that I now share more language in common, not less, with my friend. LLMs have brought him closer to the act of crafting software, and they in turn have brought many engineers closer to the product and the business.

There is an argument that software creation is fundamentally non-automatable with loose, high-level descriptions of features, like PRDs, because code is definitionally there to express precise behavior; any human language capable of that kind precision is itself a programming language. You can't trust LLMs to infer every intent.

To which I say: have you forgotten how inconsequential many of these decisions are? Is a user going to notice exactly how you opened and closed a file handle, as long as it was done safely? Whether you use a for-loop or a map function? Will they notice your hexagonal architecture, your repository pattern, your elegant type abstractions? They _will not_, unless it affects the way their software _works_. This category of decision has fallen below the line of commercial legibility; even programmers won't notice. [It is no longer "architecture."](https://brianguthrie.com/p/software-architecture-after-ai/)

Craft _practices_ likewise served to sharpen judgment and improve outcomes; I'll always be thankful for the time I spent doing full-time pairing and test-driven development. And those craft practices will continue to be observed in the same way a traditional carpenter _would_ use a hand-saw. Absent a commercial driver, no one's stopping you from driving code in any way you please.

The craft practices that informed the creation of code made sense when humans were the primary producers of it, even though such practices have always been more widely discussed than used. The cost of human error was a meaningful constraint on what could be shipped, and as professionals, we were ethically obliged to reduce that error if we could. 

But it seems clear at this point that humans are no longer the primary producers of code. As of this writing, Chinese open-weight models have reached near state-of-the-art capabilities at a price point that's one to two orders of magnitude cheaper than frontier ones, much more quickly than even the more bullish analysts expected. The gap between what these tools can produce and what a skilled specialist can has been closing steadily and is perhaps now gone. The claim that LLM code quality is too poor to change what disciplines matter is an argument about the present state, and the present state is already not quite what it was six months ago when everyone woke up one morning in the winter of 2025, hungover on egg nog, and took a poke at Opus 4.5.

Notably, all of this will still be true even if the bubble pops. The models are already out there.

Traditional craft practices are a hard thing to lose, because mindful practice _develops_ judgment; TDD, for example, is a design tool, not (primarily) a quality reinforcement mechanism. But, good news! Mistakes are still emphatically available to anyone writing software with LLMs, and mistakes are an important way to develop judgment.

So where does craft go next?

## Software craft is dead; long live software craft

To see the new software craft emerging, you only have to look at Reddit, or HN, or spend time with a software engineer or founder. There's obsessive discussion of model quality, harness, plugin selection, prompt approach. You'll also find renewed, intense discussion of high-level system design, and thorny product problems like onboarding, retention, and design.

Notably, _not everyone is obsessed with this stuff._ For every engineer obsessively comparing the merits of each new model, there are four others taking their cues from folks who are closer to the frontier. The focus of earnest, engaged practitioners has shifted.

In the part of the industry where I spend my time and focus, this has been a tremendous boon for the notion of [product engineers](https://posthog.com/blog/product-engineer-vs-software-engineer). Product engineering is meant to be outcome-oriented and therefore outward-facing: does this software solve the problem, does it fit the business need, is the system observable enough to know when it's failing? In the model of software my friend inhabits, these practitioners have little to lose and much to gain: they are more aligned with the business, not less, but businesses are now newly empowered by aggressive automation.

And so my sense is that the future of craft be defined by teams who are relentlessly focused on automation that serves high-quality _outcomes_: what is harness engineering if not a way to control quality at pace? Observability and testing _still_ matter in a way that feels increasingly urgent. Fitness to form—systems of delivery _designed_ for end to end delivery, like monorepos—become a bigger deal. Prospering means building features that meet a business need, knowing what good looks like from the outside and working backwards from there. Craft will then increasingly focus on the way humans experience our software, and less on the micro-decisions that led us there.

The practices that don't especially matter in this frame are the ones that were always primarily about legibility and taste _at the level of the individual lines of code_, but structure and behavior matter more than ever. Software craft is dead; long live software craft.

## This is meant to be helpful, sort of

Fewer people will practice traditional software craft construction practices, in the same way that fewer people build benches today than did a century ago, or fewer people farm, or typeset; and the ones who eschew modern tools for traditional ones will be fewer still.

And while I don't think demand has gone down all that much, I wish I could say I felt more secure in my own career. The economic signal from my founder friend is not reassuring on this point and isn't particularly meant to be.

Which is why I think it's important to stake out a new craft, and to embrace the new normal, for however long it lasts, and ditch the stuff that doesn't matter much anymore. Truth be told, I won't miss the time I spent arguing over function signatures while the business burned down around us.

Among those practitioners who'll still do excellent work, what will that work look like, what will it comprise? I think it'll look increasingly like product work: owning problems end to end, moving from a user need through to a shipped solution without losing the thread, knowing whether what they've built actually works because they're talking to users and watching the data. Depth will still be valuable in some places, and laudable for its own sake, and necessary for those pushing the frontiers of specific areas. But with each new model release and harness improvement, the frontiers are pushed further and further by the tools themselves.

The person sitting in the chair you made doesn't know how you cut the wood; similarly, unless you've audited every line of code of every software product you've ever used, you probably judge that software in terms of its observable behaviors. And to re-embrace software craft, we must become that CEO hovering above us, the one who cared about business outcomes. What we need to refine our taste and judgment on is whether the stuff we make solves our users' problems. There is still room for excellence here, and the pursuit of craft for its own sake. My ardent hope is that what's left is a closer commitment to the human beings who actually use the stuff you're making.
