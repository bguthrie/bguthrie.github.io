---
title: "Software architecture after AI"
description: "AI has moved the boundary of what counts as architecture. Code isn't in it anymore."
date: 2026-03-31T18:00:00-05:00
image: d-brz-gNCUqxJM3oU-unsplash.jpg
image_credit_url: "https://unsplash.com/photos/an-abandoned-building-with-lots-of-windows-and-debris-gNCUqxJM3oU"
image_credit: Photo by D Brz on Unsplash
draft: false
hidden: true
categories:
  - sdlc
  - ai
  - architecture
---

Software architecture has always been a fuzzy category. We know it exists—firms employ architects, ergo there is software architecture—but what exactly it constitutes has always been a matter for debate. You might reasonably argue (and I do, with varying degrees of reasonableness) that all software development is also architecture work; to write software is to be an architect. However, some decisions are harder and have more long-lasting consequences than others.

One of the more useful definitions of software architecture comes from [Building Evolutionary Architectures](https://evolutionaryarchitecture.com/): architecture is definitionally the stuff that's hard to change.[^1] I've always found this definition to be the most honest framing available, to say nothing of the simplest. It doesn't pretend architecture is about beauty or correctness or your resident architect's favorite stalking-horse. It acknowledges that what makes a decision "architectural" is not its conceptual weight but its *cost to reverse*.

[^1]: They were building on Ralph Johnson's earlier observation, relayed by Martin Fowler, that "architecture is about the important stuff. Whatever that is."

The implication is that software architecture has always been a labor problem dressed up as a design problem. But AI has now collapsed the wall-clock time required to make substantial code-level changes. Things that used to take months now take days.

What happens to architecture when the cost to reverse most code-level decisions drops by something like an order of magnitude?

## When every line of code was clean, and real engineers refactored

For decades, code-level decisions were legitimately architectural. Languages, frameworks, module structures, and persistence strategies were decisions worth debating and committing to, because reversing them could cost a staggering amount of time. Changing these things could cost months or even years of time and effort, and companies lived and died in the time it took large firms to reverse course on these kinds of decisions.

The entire patterns movement was a rational response to this. The Gang of Four, Fowler's *Patterns of Enterprise Application Architecture*, the rise of "clean architecture" and domain-driven design and hexagonal ports-and-adapters was engineering discipline applied to decisions that were genuinely expensive to get wrong, and which becom easier to fix when they are mutually legible to other developers. Similarly, *Refactoring* was predicated on the idea that code-level change was possible but costly; restructuring code took skill and real time, and you needed techniques to manage that cost[^nocode].

[^nocode]: Much later, Kelsey Hightower's visionary [no-code](https://github.com/kelseyhightower/nocode) movement, and his more recent his work around [zero-token architecture](https://bsky.app/profile/kelseyhightower.com/post/3mhirl4fvnc2y), took the notion to its logical and correct extreme.

However, AI has made code labor cheap in a way that I'm thoroughly convinced by. A recent personal example: I wrote my (now-dead) startup against a NoSQL database whose vendor was also a startup, which—you'll never believe this—*also* died. I wanted to explore what it would take to port the data layer to a conventional RDBMS, so I pointed Claude Code at it using [superpowers](https://github.com/obra/superpowers), gave it some guidance, and... it just _did it_. The whole migration, accomplished essentially flawlessly, in _hours_. I know this has become commonplace, but it still surprised me, and I still talk to engineers who haven't had the same lightbulb moment yet: between the tedium of the work and my day job, I might never have accomplished it before the heat-death of the universe.

In some ways, this proves the rule that good structure matters: I built my data layer against a clean interface boundary, because I didn't start writing code yesterday, so in some sense, _of course_ swapping the implementation was straightforward. But even without a clean boundary, what would it have taken? Well, the change is fundamentally mechanical: find all the call sites, change all the implementations, verify correctness. More tokens, more time, and yeah, more human intervention, but we're not talking about a vast difference—maybe days instead of hours. And the second-order effect of agentic development is that you can automate things like a quality check on top of it; you can build verification into the process itself. That places this kind of change squarely in the category of "not architecture anymore."

## If it takes time or impacts users, it's still hard

If code has moved outside the boundary, what's still inside it?

First, **data**, which _still has gravity_. It accumulates mass over time; the more you have, the harder it is to move, and the more things depend on its current shape. Migrations of large, mission-critical datasets remain potentially-risky operations and a source of operational issues, and while AI can likewise automate correctness checking here, it has not eliminated the problem. You can use AI to rewrite the code that *accesses* your data, but the data itself, its schema, its relationships, and its implicit contracts with every system that reads from it (hopefully not many of them) still matter.

Second, **service boundaries and integration contracts**, particularly _external_ service boundaries. A service boundary is not a code-level decision; it's an organizational and contractual one. When you get it wrong, every downstream consumer has to deal with it, and the problems compound across time and teams. However, AI can likewise help here: it is good at identifying call sites, good at using APIs to explore live observability data, and you could imagine using it to orchestrate a breaking API change safely, given guidance. Even here, at least within the boundaries of a system, the walls are starting to fall.

Finally, **user trust and security posture**. A breach of user trust can be effectively irreversible (though large corporations get away with a shocking amount of this). A security vulnerability that gets exploited is not something you can refactor your way out of. Regulatory commitments create genuine lock-in. Cross-functional requirements still matter enormously. These are the decisions that, once made (or once broken), shape everything that follows. But it's not like humans were particularly good at this before.

You could reasonably argue here that code structure is the enforcement mechanism for precisely the things I'm calling architectural. Good module boundaries help enforce API contracts, and good type systems help protect data invariants. If you stop caring about code structure, don't you risk undermining the contracts you claim to care about? I think this confuses the decision with its implementation. The _shape_ of the contract, and its guarantees, are the hard part; changing them costs real time, because you have to coordinate with human beings to do it. The code that _enforces_ them is _implementation_, and implementation is now cheap. You can swap out the enforcement mechanism without touching the contract it enforces; that's what the my startup migration work did. Confusing the two is a mistake.

What's changed is that the contrast between these decisions and more mechanical changes has sharpened considerably. When code-level decisions were also hard to change, they competed for the same pool of architectural attention. Now that code is cheap to change, the hard stuff stands in sharper relief. It deserves the serious, disciplined thinking that we used to spread across everything.

## The process trap of the moment

Okay, so maybe you _can_ fold on some code decisionmaking. _Should_ you? Fowler's [Design Stamina Hypothesis](https://martinfowler.com/bliki/DesignStaminaHypothesis.html) argued that internal quality *drives* speed, rather than existing in tension with it, and [DORA](https://dora.dev/) later backed this up with empirical data. Elite teams aren't fast _despite_ being disciplined, they're fast _because_ they're disciplined. If that's true, and I think it is, then making refactoring cheap doesn't make quality optional, because quality was never a trade-off to begin with.

The problem is that teams who aspire to be elite often confuse _markers_ of quality with quality itself, particular as end users perceive it. Do not mistake ceremony for discipline. Turning quality into a gate instead of a habit leaves you slower, not faster, because you lose the ability to iterate on process, and challenging your process is now a matter of survival. Quality gates are a difficult organizational pathology to deconstruct, because challenging them makes people worry that you're lowering the bar. This is especially exacerbated at engineering organizations that reward engineers for technical achievement and intellectual derring-do rather than business impact.

As a response, you sometimes hear old hats reference [The Timeless Way of Building](https://onluminousgrounds.wordpress.com/2010/04/24/the-quality-without-a-name-part-one/) and its notion of "quality without a name" (QWAN)—the idea that quality is not reducible to a narrow internal aesthetic. QWAN is still a compelling metaphor for thinking how to guide elite teams towards incorporating a quality-first mindset, but time and attention remain precious even in an agentic world, and people cannot be everywhere at once. I like to think that my teams build with quality, but there are decisions I care more about and decisions I care less about—decision velocity also matters.

I instead try to internalize Kent Beck's ordering: make it work, make it right, make it fast. Beck was talking about the design of the code, and here I'm generalizing somewhat. But I think the generalization is correct, and maybe it always has been. "Right" ultimately means *behavioral correctness and business value*: software is what it does. Internal structure is at best a predictor of that, not a value in itself. Companies that understood "right" expansively, as a question of market value and user need rather than technical elegance, have shipped rough software and won markets over and over again. Technical excellence is neither necessary nor sufficient for market success; it is, at best, a predictor.[^contributing] When restructuring was expensive, investing in internal elegance *looked like* investing in behavioral correctness, because the two were hard to separate. Now that restructuring is cheap, the gap between them is visible.

[^contributing]: I'm sick of working at companies that prized technical excellence at the expense of market success. Many of those companies are now dead. [Real artists ship](https://folklore.org/Real_Artists_Ship.html).

The discipline that quality demands still matters, but I'd argue that its object has shifted rather dramatically.

## What the engineering leader's job looks like now

Some decisions still deserve serious architectural review; other decisions do not. Internal code structure, framework choice, module organization, and most implementation patterns are worth punting on, since the cost of being wrong is measured in days, maybe hours, of AI-assisted restructuring. Stop arbitrating these and running them through review boards, and allow teams a little leeway. You are spending your most expensive resources—your own attention, to say nothing of your team's patience—on the cheapest category of problem.

This is not permission to be reckless; if anything, it's a call to be *more* disciplined about the hard stuff. Recklessness is still catastrophic, but moving fast on code structure is not recklessness, it's iterating. Live a little.

The engineering leader's job is no longer "ensure we build it right," measured by some amorphous definition of line-level craft. It's "ensure we're investing careful thought where change is still expensive, and adding value quickly everywhere else." Redirect that energy to the problems that are still hard.

Be thoughtful about your boundaries and coupling points, and apply that rigor there. If everyone is now to be an architect, upskill line engineers on that aspect of the craft, and treat them accordingly. Those are the things where getting it wrong still costs you months and where discipline genuinely pays for itself. Code that can be rewritten on a Tuesday afternoon does not warrant the same investment.
