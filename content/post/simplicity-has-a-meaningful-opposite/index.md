---
title: "Simple made hard again"
description: "Engineers treat simplicity as an intrinsic good and complexity as a failure to be corrected. But the force pushing against simplicity has a name, and pretending otherwise is how you end up rewriting your Rails app into microservices and calling it an architectural improvement."
date: 2026-05-29T12:00:00-04:00
image:
draft: true
hidden: true
categories:
  - sdlc
---
# Simple made hard again

Once upon a time, I led SoundCloud's monetization engineering team (subscriptions, payments, ads) in their New York office. SoundCloud, like a lot of consumer web companies of its era, was built on Rails and gained its early traction that way. But SoundCloud was in many regards much like Twitter or YouTube: it is consumer-oriented, highly social, vertically scaled, and media-rich. It needed to serve massive read volume and near-real-time audio delivery, and an ORM doesn't buy you much there. The Rails monolith had done its job but wasn't buying it much by the time I got there.

So they started moving to microservices. The reasons were many: genuine technical constraints, architectural conviction (a number of people there, including me, had come up through Thoughtworks and had worked with Sam Newman on the kinds of projects that would come to inform *Building Microservices*), and a quiet strategic effort, as I recall, to align the stack with Twitter's Finagle framework in hopes of an eventual acquisition. The move to Scala and Finagle was good engineering work, and it legitimately bought them some scale.

But it took _years_. Product momentum stalled while everyone retooled and argued over backpressure strategies and binary serialization formats and Turing-complete type systems, and a lot of very smart engineers got nerd-sniped by shiny tech[^nerd] at a moment when the company needed those people thinking about product. And by the end of it, I'm not at all convinced that, from a cycle time standpoint, the company was shipping any faster than it had before. The monetization work I was hired to help with suffered for it; it's hard to build a culture of revenue focus when the engineering organization's attention is absorbed by replatforming.

[^nerd]: Julius Volz wrote Prometheus while at SoundCloud, which is genuinely one of the most impactful pieces of open source infrastructure of the last decade. Peter Bourgon took inspiration from SoundCloud's scala-kit in writing go-kit. The point isn't that this work was bad; it's that it was locally rational but structurally costly. The organization got exactly the engineers it had hired, doing exactly what those engineers were equipped and motivated to do.

I've thought about this move a lot since. The people who made it were not fools, and I'm sure plenty of them would dispute this reading; they'd argue the architecture was necessary, that the scale required it, that the business would have failed without the migration. And well, maybe? I don't think that replatforming alone kneecapped SoundCloud; copyright is genuinely hard, and monetizing copyright-encumbered remixes is a different problem entirely from payments or SaaS subscriptions. But I do think the migration is a clear example of what it looks like when implementation strategy consumes the attention product strategy needed. You can fix a database table without rewriting a system.

And there were other strategic bets available. Podcasting was starting to grow in popularity in the early 2010s, and SoundCloud had early organic traction as a hosting platform. Can you imagine how the trajectory of that company could have changed with a catalog of content unencumbered by music industry ownership rights?[^rights]

[^rights]: Maybe you can't imagine. But I can: a lot.

I've come to admire the discpline that Stripe had: they kept the Ruby stack but ditched the bits they didn't need. Stripe runs a [50-million-line Ruby monorepo](https://stripe.dev/blog/selective-test-execution-at-stripe-fast-ci-for-a-50m-line-ruby-monorepo) in 2026 and processes something like a trillion dollars in payments annually. Their stack would likely make a certain kind of engineer shudder, and at a guess, several of them already work there. It is, by any measure, a beast. But the way they've managed it is instructive: rather than rewriting away from Ruby, they've built increasingly sophisticated tooling *around* it — selective test execution, internal platform machinery, type systems — that lets them maintain velocity at scale. That is not simplicity. That is _leverage_, applied deliberately and repeatedly to the part of the system that needed it. It's also one of the most successful fintech companies ever built. Why don't more companies do that?

The problem wasn't that the engineers were wrong about the architecture. It's that the vocabulary available to argue for it didn't let them name what they were trading.

## The categories we inherited don't work

The standard vocabulary for this kind of decision comes from Fred Brooks: essential complexity (inherent to the problem) and accidental complexity (implementation noise that can and should be eliminated). The idea is that good engineering is about stripping away the accidental, leaving only the essential. Hickey's "Simple Made Easy" builds on this tradition; so does virtually every engineering principles document that lists simplicity as a virtue.

Dan Luu [argued in 2020](https://danluu.com/essential-complexity/) that the essential/accidental framing is inadequate for the actual decisions engineers face — that the categories are fuzzy, that the same complexity can be essential or accidental depending on context, that the framework doesn't give you enough to work with at the point of decision. He was right, but I think the problem is worse than fuzziness. Luu's critique is diagnostic—the categories are imprecise—but even if you define them precisely, they ask the wrong question. The right question is what it buys you.

Rails conventions are not essential complexity, because they are not inherent to the problem of building a web application. They are not accidental complexity, because they are not noise, they are deliberate, load-bearing design choices that buy real things. "Accidental" implies the complexity was a mistake, but it wasn't; quite the opposite. The vocabulary has no clean word for complexity that'd earned its place.

I want to propose one: *leverage*.

## The thing simplicity is in tension with

Leverage, in the mechanical sense, is force multiplication: the ratio of work accomplished to effort applied. A lever lets you move more weight than your muscles could lift directly. A high-leverage framework lets you ship more functionality per engineer-hour than hand-written code could accomplish directly. Every type you don't have to write because the type system infers it is leverage. Every query you don't hand-author because an ORM handles it is leverage. Every architectural decision that has a sensible default because the framework assumes it is leverage.

"Productivity" is too vague. "Developer experience" is about feelings. "Abstraction" is about structure. Leverage is about *ratio*, which is to say, output per unit of complexity introduced. And unlike "appropriate complexity," which is what engineers often say when they want to defend a complex choice, leverage is a claim that can be evaluated and falsified.

There is a useful analogy in the coupling and cohesion distinction. Every introductory software engineering course teaches that cohesion is good and coupling is bad, but the structural difference between them is often difficult to tease apart. Tight dependencies between a set of components can be coupling or cohesion depending on whether those dependencies serve the system—I've always been fond of defining cohesion as just "coupling that you happen to like." The bonds that create leverage are cohesion; the ones that don't are noise. But it is often difficult, at a distance, to tell which is which from structure alone. You can, however, tell whether they served a purpose.

Leverage names the same evaluative move for complexity. The complexity in a batteries-included framework is not good because it is well-organized or elegantly structured; it is good when it produces more per unit of effort than the alternative. "This adds leverage" is a claim that can be evaluated against the ratio.

Moreover, simplicity is a property of a *system* — the product scope, the domain model, the number of problems you're trying to solve at once—while leverage is a property of an *implementation* — the ratio at which your tools convert effort into output. You can have a simple system built on a high-leverage implementation; that is, in fact, the goal.

## The graveyard without headstones

Hickey's [Simple Made Easy](https://www.youtube.com/watch?v=SxdOUGdseq4) correctly distinguished simplicity — the absence of entanglement — from ease — the absence of effort. It is a real and important distinction. Clojure is a genuinely simple language by his definition, and still one of my favorites, one of the languages you're thankful you learned because it forced you to think differently about software.

But the talk gets endlessly reposted and recirculated in online forums and corporate Slack channels, and then we go back to shipping Rails apps. Clojure has not yet won, much to my sorrow. The diagnosis did not change the revealed preferences of the industry.

This is not because engineers are lazy[^lazy]. It is because Hickey was arguing about epistemology — the right way to think about simplicity — while working engineers were optimizing for something else: the ratio of problems shipped to effort spent. The battle Hickey was fighting was real, but it was not the battle that determins what gets adopted. Simplicity-as-terminal-value loses to leverage-seeking behavior in competitive markets. [Real artists ship](https://folklore.org/Real_Artists_Ship.html).

[^lazy]: Well, maybe the [good ones](https://thethreevirtues.com/) are.

The canonical complaint against high-leverage frameworks is that they generate legacy and make it difficult to scale organizations. This is true, but it is a mark of success, not failure. The leverage it bought the business successfully generated the revenue to hire you in the first place.

What you don't often see is the postmortem from the other kind of startup, that chose the simpler stack, kept its options open, and ran out of runway before it hit PMF. That graveyard does not have headstones, because few people write (or, perhaps more to the point, read) postmortems for companies that never made it.[^postmortems] The costs of under-leverage are invisible by definition; survivorship bias means only the companies that survived long enough to suffer their technical debt lived to publish about it.

[^postmortems]: If postmortems for companies that never made it _is_ actually your jam, I recommend the aging but still very entertaining [Dreaming in Code](https://www.amazon.com/Dreaming-Code-Programmers-Transcendent-Software/dp/1400082471).

A framework becoming a liability is a champagne problem; the company built something worth scaling, and can now afford to hire professional engineers, the kind who are now angry enough at all those stupid ActiveRecord callbacks to do something about them. Many of those same engineers have never lived the counterfactual. But I have, and my takeaway is that doing excellent engineering work at a company no one's ever heard of is much worse for your career than doing crappy engineering work at a company they have.

Neither is it much fun staring down the barrel of a decade of high-leverage, move-fast engineering culture. The argument that shit code is a marker of success can feel like pretty thin gruel when it's now your job is deal with it. But that is an argument against carelessness, not against leverage; the question is whether you are deliberate about the tradeoff. SoundCloud's migration was not careless; it was deliberate and carefully executed. The failure I'm describing is the one where engineers mistake *implementation* simplicity for *system* simplicity, and trade leverage for purity at the wrong moment.

Companies who reach this stage often reach for microservices because their search for simplicity leads to composability, which is a nice strategy for building platforms. Composability is a real and useful property, but it is at best a predictor for leverage: the argument is that components that compose let you build more with less. However, they are not the same thing. Lisps are famously both highly composable and deeply unpopular; composability without leverage doesn't win markets. The goal is implementations that compose *and* multiply force, which _do exist_. Rails conventions compose _well_ within the framework's assumptions. Type systems compose in the way type systems compose. The answer to "does this compose?" is one input to the leverage question, but it is not a substitute for it.

## Gall's Law is still true, sort of

Gall's Law is that every successful complex system started as a successful simple system. (I first learned about this, entertainingly, when I was an intern at IBM Lotus on a team rewriting Lotus Notes into the Eclipse UI framework wholesale, and the irony wasn't lost on the senior engineer who taught it to me.) So start simple; if you can't get the simple version working, you definitely can't get the complex version working. This is correct, and it is frequently and incorrectly invoked as an argument against high-leverage implementations.

Gall's Law is about *systems*, not implementations. It says that you cannot design a complex system successfully from scratch — you have to grow it from a working simple one. It says nothing about what tools to use. The simplicity it requires is in the domain model and the product scope: start with the narrowest version of the problem you can actually solve. Start with the snowboard shop, not the general commerce platform.

Stripe started with payments, not global financial infrastructure. The system was simple; the implementation was high-leverage Ruby from day one. Gall's Law held. Rails — or Ruby, once they outgrew Rails — did not violate it; it is what made it possible to keep the *system* simple while the team was small, because the implementation absorbed the complexity that would otherwise have leaked into the system design. The 50-million-line monorepo is the champagne problem. Stripe survived to have it.

SoundCloud, conversely, attempted to simplify the implementation while the system was still finding its shape. The migration absorbed engineering attention that was needed for product definition. The law did not cut in their favor.

## The dichotomy is wrong

You can build a successful product with a complex implementation if it provides you leverage, and you can also build an incoherent, unmaintainable mess with a simple stack. The question is where you want to spend your engineering time and attention.

The confusion between the two is where most engineering arguments about simplicity go wrong. When someone calls for simpler systems and means simpler tools, they are conflating the goal with the implementation. When someone defends a complex framework by claiming it reduces complexity, they are usually right, but only if they mean system complexity, and frequently they lack the language or nuance to say so. Naming the distinction forces the argument into the open: what are we actually trying to simplify, and does this implementation choice help us get there?

When you argue for simplicity, name what implementation you're endorsing and what leverage you're forgoing. When you argue for a high-leverage tool, name what system property you're protecting and what complexity you're incurring. Most arguments about simplicity in software are leverage arguments in disguise. They would be shorter, sharper, and more honest if people said so.

Simplicity is not the goal; it's a tactic for achieving leverage. Treating it as an inherent virtue confuses means for ends. When you ask for simplicity you should be asking whether it buys you something, and what it costs you.
