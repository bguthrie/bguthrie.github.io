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

AI has moved the boundary of what counts as software architecture. Most code-level decisions are no longer inside it; data, service boundaries, user trust, and business strategy are. If you're an engineering leader still spending architectural energy on code structure, you're over-investing in the wrong layer.

One of the more useful definitions of software architecture comes from [Building Evolutionary Architectures](https://evolutionaryarchitecture.com/): architecture is definitionally the stuff that's hard to change.[^1] I've always found this definition to be the most honest framing available, to say nothing of the simplest. It doesn't pretend architecture is about beauty or correctness or your resident architect's favorite stalking-horse. It acknowledges that what makes a decision "architectural" is not its conceptual weight but its *cost to reverse*. And "hard to change" has always been, at root, about wall-clock time: coordination cost, incident mitigation, cognitive load, handoff friction. Software architecture has always been a labor problem dressed up as a design problem.

[^1]: They were building on Ralph Johnson's earlier observation, relayed by Martin Fowler, that "architecture is about the important stuff. Whatever that is."

AI has now collapsed the wall-clock time required to make substantial code-level changes. Things that used to take months now take days. What happens to architecture when the cost to reverse most code-level decisions drops by something like an order of magnitude?[^magnitude]

[^magnitude]: As of this writing, the strongest public quantitative evidence I've seen is that the gap is at best 5x. But we've all seen much higher for particular use-cases, which suggests that some combination of risk profile, the skill of the practitioner, and the quality of tooling and model make a substantial difference. Since some of these are likely to improve with time, "order of magnitude" seems more than reasonable.

## When every line of code was clean, and real engineers refactored

For decades, code-level decisions were legitimately architectural. Languages, frameworks, module structures, and persistence strategies were decisions worth debating and committing to, because revisiting them could cost a staggering amount of time, and had long-term implications for the productivity of the team. Changing these things could cost months or even years of time and effort, and companies lived and died in the time it took large firms to reverse course.

The entire patterns movement was a rational response to this. The Gang of Four, Fowler's *Patterns of Enterprise Application Architecture*, the rise of "clean architecture," domain-driven design, and hexagonal ports-and-adapters was engineering discipline applied to decisions that were genuinely expensive to get wrong, and which become easier to fix when they are mutually legible to other developers. Similarly, *Refactoring* was predicated on the idea that code-level change was possible but costly; restructuring code took skill and real time, and you needed techniques to manage that cost[^nocode].

[^nocode]: Much later, Kelsey Hightower's visionary [no-code](https://github.com/kelseyhightower/nocode) movement, and his more recent work around [zero-token architecture](https://bsky.app/profile/kelseyhightower.com/post/3mhirl4fvnc2y), took the notion to its logical and correct extreme.

## Automation has always changed the balance of specialists and generalists

But software practitioners have been collapsing architectural decisions into routine ones for decades. The effect of [leaning into pain, rather than avoiding it](https://martinfowler.com/bliki/FrequencyReducesDifficulty.html) is to incentivize teams to build tooling that addresses it, turning what used to be architecture into something a general-purpose engineer handles as a matter of course.

Before database migrations were commonplace, schema decisions were irreversible, and presumptively architectural; they often required DBAs to orchestrate them[^dbas]. Then Pramod wrote [Evolutionary Database Design](https://martinfowler.com/articles/evodb.html), migrations got folded into every major framework, and the DBA role started to become less visible. The judgment and expertise they provided were real (and substantial), but its market value was inflated by the mechanical bottleneck. Once the bottleneck was removed, the costs of a dedicated gate became more visible and the judgment got absorbed into the general engineering role, which gave many teams more leverage. Continuous delivery did the same thing for deployment and release engineers. There may be no silver bullets (until now?), but each small shift in tool efficiency took a category of decision that **used to require a specialist** and made it mechanical. Each one revealed that a supposedly specialized judgment was really general engineering skill trapped behind mechanical cost.

[^dbas]: Shoutout to the many, many battle-scarred DBAs out there who wish they still did.

AI is simply the latest example of this, but it's the most dramatic, because it collapses most remaining code-level decisions at once rather than one category at a time. A recent personal example: I wrote my (now-dead) startup against a NoSQL database whose vendor was also a startup, which (surprise, surprise) *also* died. I pointed Claude Code at it, gave it some guidance, and it ported the entire data layer to a conventional RDBMS, essentially flawlessly, in _hours_. I know this sort of thing has become commonplace, but it still surprised me: between the tedium of the work and my day job, I might never have accomplished it before the heat-death of the universe.

This is not an isolated example. Cloudflare's team [reimplemented 94% of the Next.js API surface](https://blog.cloudflare.com/vinext/) in under a week for roughly $1,100 in API costs. Christopher Chedeau [ported 100,000 lines of TypeScript to Rust](https://blog.vjeux.com/2026/analysis/porting-100k-lines-from-typescript-to-rust-using-claude-code-in-a-month.html) in a month. Many of you have experienced similar shifts.

In some ways, these examples prove the rule that good structure matters: I built my data layer against a clean interface boundary, because I didn't start writing code yesterday, so in some sense, _of course_ swapping the implementation was straightforward. But even without a clean boundary, the change is fundamentally mechanical: find all the call sites, change all the implementations, verify correctness. More tokens, more time, and yeah, more human intervention, but we're not talking about a vast difference; maybe days instead of hours. And the second-order effect of agentic development is that you can automate verification on top of it; you can build correctness-checking into the process itself.

These examples are admittedly biased toward the easy case: clean interfaces, well-defined boundaries, mechanically verifiable correctness. Systems with subtle semantics, unclear boundaries, and deeply entangled business logic remain harder to change, even with AI. But the trend line matters. AI does not erase coupling, migration risk, or rollout complexity, but it does _demote_ a lot of code-shaping decisions that used to feel permanent, and make the rest dramatically easier to monitor and fix. That places a growing category of change squarely in the territory of "not architecture anymore."

## If code has moved outside the boundary, what's still inside it?

It's definitionally impossible to create a comprehensive taxonomy of software architecture, but I've broken out ten categories below that I think capture roughly what we think of as encompassing software architecture _right now_, and attempted to classify them along two axes: **business impact** of getting a decision wrong (or revisiting one), and **remediation cost** to address it. This is gut-level stuff, not hard data, so bear with me, but I think the exercise is worth doing - try it for yourself if you like.

{{< architecture-chart >}}

{{< architecture-table >}}

Three broad categories emerge: some things are **still hard**, some things are **newly important** and emerge into view for a variety of reasons, and some things get **firmly demoted**.

First, **data still has gravity**. It accumulates mass over time; the more you have, the harder it is to move, and the more things depend on its current shape. Migrations of large, mission-critical datasets remain potentially-risky operations and a source of operational issues, and while AI can likewise automate correctness checking here, it has not eliminated the problem. You can use AI to rewrite the code that *accesses* your data, but the data itself, its schema, its relationships, and its implicit contracts with every system that reads from it (hopefully not many of them) still matter.

Second, **service boundaries and integration contracts**, particularly _external_ service boundaries, remain hard because it requires human, wall-clock-time coordination cost. A service boundary is not a code-level decision; it's an organizational and contractual one. When you get it wrong, every downstream consumer has to deal with it, and the problems compound across time and teams. AI can help here (it's good at identifying call sites, good at using APIs to explore live observability data), and you could imagine using it to orchestrate a breaking API change safely, given guidance. So while I'm including it as architecture, even here the walls are starting to fall.

Third, **user trust and security posture** remain important not because reversibility or mitigation is hard (it might or might not be) but because the business impact can be catastrophic and effectively irreversible (though large corporations do get away with a shocking amount of this). A security vulnerability that gets exploited is not something you can refactor your way out of. Regulatory commitments create genuine lock-in. These are the decisions that, once made or once broken, shape everything that follows. It's not like humans were particularly good at this before, but it remains the category where getting it wrong costs you the most.

Finally, if user trust is genuinely architectural, then **observability, alerting, SLOs, and the verification harnesses**—the practices that protect it—are newly interesting, and deserve more of your attention budget than they currently get. This is especially critical in an AI-amplified world where code volume is up and comprehension is down: you need to be able to verify what the system does regardless of whether you understand every line. The implementation of monitoring is cheap; the decision about what to watch and when, and what constitutes a violation of trust by way of an SLO, remains intensely important.

## Even domain boundaries are easier than they used to be

You could reasonably argue here that code structure is the enforcement mechanism for precisely the things we call architectural. Good module boundaries help enforce API contracts, and good type systems help protect data invariants. If you stop caring about code structure, don't you risk undermining the contracts you claim to care about? I think this confuses the decision with its implementation. The _shape_ of the contract, and its guarantees, are the hard part; changing them costs real time, because you have to coordinate with human beings to do it. The code that _enforces_ them is _implementation_, and implementation is now cheap. You can swap out the enforcement mechanism without touching the contract it enforces; that's what my startup migration work did.

Designing a good abstraction is not mechanical, and while AI can do it, the long-term health of a system nonetheless benefits immensely from human judgment. But abstraction design is a small fraction of what teams currently treat as "code architecture." Much of what fills architectural review boards is implementation pattern choice, framework selection, and structural bikeshedding.

There's a related objection worth engaging: mid-level design decisions ("should this business logic live in service A or service B?") accumulate over time into the overall malleability of a system, and those accumulated decisions are genuinely hard to untangle. This is true, but it's _always_ been true. It was never centrally controllable in the first place: teams generally put shit where it seems like it should go, optimizing for local autonomy and throughput no matter how much you try to govern it centrally, and the result is always some degree of drift. What's changed is that an LLM strapped to a codebase search index (which is rapidly becoming table stakes) can actually _find_ all of it, reason about how it ended up there, and help you reorganize it. The accumulated impact of mid-level decisions, while still important and probably still architectural, are more tractable with AI, not less; the cost of untangling it has dropped, even if it hasn't vanished.

However, the contrast between these decisions and more mechanical changes _has_ sharpened considerably. When code-level decisions were also hard to change, they competed for the same pool of architectural attention. Now that code is cheap to change, the hard stuff stands in sharper relief. It deserves the serious, disciplined thinking that we used to spread across everything.

## Pattern amplification is not destiny

You will hear the counterargument that AI makes code quality _more_ important, not less, because it amplifies both good and bad decisions at volume. Addy Osmani [reports](https://addyosmani.com/blog/code-review-ai/) that AI-generated code has 75% more logic errors and 2.74x more XSS vulnerabilities than human-written code; PRs are 18% larger; change failure rates are up roughly 30%[^mythos]. Rachel Thomas at fast.ai [argues](https://www.fast.ai/posts/2026-01-28-dark-flow/) that we've "automated coding, but not software engineering." Osmani's [framing of comprehension debt](https://addyosmani.com/blog/comprehension-debt/) is sharp: developers using AI scored 17% lower on comprehension quizzes, and "making code cheap to generate doesn't make understanding cheap to skip." But I think it locates the risk at the wrong layer.

[^mythos]: As I write this, Anthropic has just announced [Project Glasswing](https://www.anthropic.com/glasswing) and the associated system card for Claude Mythos, which is well worth a read. The space is changing so fast that I take any attempt to quantify impact at scale using previous-generation models with a hefty grain of salt, but I include them here for completeness.

AI can see within the light-cone of a context window, but it cannot yet see the whole product. It cannot tell you whether the feature you just shipped actually solves the problem your customer has, or whether the subtle behavioral regression you introduced last Tuesday is slowly eroding trust. This is what I've elsewhere called the [accumulated ignorance](/p/accumulated-ignorance-at-scale/) of product debt, as distinct from tech debt: the gap between what the system does and what users need it to do.

But the answer to accumulated ignorance isn't better code structure; it's better harnesses, better observability, better verification of _behavior_. The discipline that this demands is in ensuring you can verify what the system does, or rather what it should be doing, regardless of whether you understand every line. Code structure is one possible input to behavioral verification, but it's no longer the most cost-effective one, and it's no longer the bottleneck. Even the skeptics, if you read them carefully, locate the remaining hard work at the judgment, verification, and system-design level. Osmani himself [puts it plainly](https://addyosmani.com/blog/factory-model/): generation is not the bottleneck anymore. Verification is.

There's an argument that good code structure remains important because it makes AI agents more effective; well-structured code is easier for agents to navigate, reason about, and modify. This is true, and it's a perfectly good reason to care about structure. But this value is *instrumental*, not architectural. Structure that exists to make agents faster is an optimization, and optimizations are cheap to revisit. You can restructure the code to make agents more effective, *using agents*, and the cost is tokens and a little time. Instrumental value is real, but it doesn't make a decision hard to reverse, and "hard to reverse" is the only definition of architecture that's ever been crisp.

## Don't apply old-world rules to new-world economics

Okay, so maybe you _can_ fold on some code decisionmaking. _Should_ you? Fowler's [Design Stamina Hypothesis](https://martinfowler.com/bliki/DesignStaminaHypothesis.html) argued that internal quality *drives* speed, rather than existing in tension with it, and [DORA](https://dora.dev/) later backed this up with empirical data. Elite teams aren't fast _despite_ being disciplined, they're fast _because_ they're disciplined. If that's true, and I think it is, then making refactoring cheap doesn't make quality optional, because quality was never a trade-off to begin with.

The problem is that teams who aspire to be elite often confuse _markers_ of quality with quality itself, particularly as end users perceive it. Do not mistake ceremony for discipline. Turning quality into a gate instead of a habit leaves you slower, not faster, because you lose the ability to iterate on process, and challenging your process is now a matter of survival. Quality gates are a difficult organizational pathology to deconstruct, because challenging them makes people worry that you're lowering the bar. This is especially exacerbated at engineering organizations that reward engineers for technical achievement and intellectual derring-do rather than business impact. I've [written before](/p/good-code/) about how code quality debates often reflect aesthetic preference masquerading as engineering discipline; the dynamic here is the same, just at the organizational level.

I instead try to internalize Kent Beck's ordering: make it work, make it right, make it fast. I'm generalizing here somewhat to "make it right" meaning "fit to purpose, proportional to your understanding of business need" but I think the generalization is correct, and maybe it always has been. "Right" ultimately means *behavioral correctness and business value*: software is what it does. Internal structure is at best a predictor of that, not a value in itself. Companies that understood "right" expansively, as a question of market value and user need rather than technical elegance, have shipped rough software and won markets over and over again. Technical excellence is neither necessary nor sufficient for market success; it is, at best, a predictor.[^contributing] When restructuring was expensive, investing in internal elegance *looked like* investing in behavioral correctness, because the two were hard to separate. Now that restructuring is cheap, the gap between them is visible.

[^contributing]: I'm sick of working at companies that prized technical excellence at the expense of market success. Many of those companies are now dead. [Real artists ship](https://folklore.org/Real_Artists_Ship.html).

The discipline that quality demands still matters, but I'd argue that its object has shifted rather dramatically.

## Architects should put the business back in business domain

The pattern this essay has been tracing is one of progressive elevation. Database migrations pushed schema work into the general engineering role; CI/CD did the same for deployment; AI is doing it for most remaining code-level decisions. Each time, everyone moved up a level. ICs absorbed what used to be specialist work, and the specialists had to find something more entertaining to do with their time.

That process has now reached the architect. If the remaining architectural decisions are boundaries, contracts, trust, and data, then the skill required to make good decisions about them is no longer primarily technical, it's strategic: which boundaries create competitive advantage, which contracts enable new markets, and which capabilities need to be independently configurable and sellable? When code-level guidance was closer to the focus of the job, architects could spend most of their attention on it and dabble in strategy. Now much that work is automatable, and the strategic gap is exposed; it's no longer something you can fill with framework debates.

Architects like to throw around the term "business domain," but in practice the discipline often seems more focused on modeling entities and aggregates than on understanding what commercial problem a component is attempting to solve. Amazon's original SOA strategy remains the Rosetta Stone here: Bezos treated platform architecture as a strategic decision, not a technical one, and the mandate wasn't "use good abstractions" but "every team exposes its functionality through service interfaces, because that's how we become a platform company." That insight is now ancient, if still under-appreciated; it now feels fresh again. A decade ago, an architect could nod at business strategy and then go back to ports-and-adapters. There is much less room for that now.

As you explore your domain, ask: does this service reduce operational overhead? Does it open new markets? Does it improve retention within a specific segment? What problem are we solving, and (quite literally) who cares?

## Elevate your ICs, and focus even harder on the business

Some decisions still deserve serious architectural review; other decisions do not. Internal code structure, framework choice, module organization, and most implementation patterns are worth punting on, since the cost of being wrong is measured in days, maybe hours, of AI-assisted restructuring. Stop arbitrating these and running them through review boards, and allow teams a little leeway. You are spending your most expensive resources—your own attention, to say nothing of your team's patience—on the cheapest category of problem.

This is not permission to be reckless; if anything, it's a call to be *more* disciplined about the hard stuff. Recklessness is still catastrophic, but moving fast on code structure is not recklessness, it's iterating. Live a little.

The engineering leader's job is no longer "ensure we build it perfectly," measured by some amorphous definition of line-level craft. It's "ensure we're investing careful thought where change is still expensive, and adding value quickly everywhere else." Redirect that energy to the problems that are still hard. Embrace the idea of proportionality and decision velocity.

Be thoughtful about your boundaries and coupling points, and apply that rigor there. If everyone is now to be an architect, upskill line engineers on that aspect of the craft, and treat them accordingly. Those are the things where getting it wrong still costs you months and where discipline genuinely pays for itself. Code that can be rewritten on a Tuesday afternoon does not warrant the same investment.
