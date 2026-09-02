# You Don't Want Simplicity. You Want Leverage.

## Thesis

Engineers treat simplicity as an intrinsic good and complexity as a failure to be corrected. But simplicity and leverage are in tension, and engineers who chase simplicity without naming that tension are making a category error. Complexity that buys leverage isn't failure; it's a trade. The right question isn't "is this simple?" — it's "does this get me where I'm going?"

## Antithesis

The strongest counterargument is that leverage is a false economy: complexity added for speed today becomes the maintenance burden someone else inherits tomorrow. Simple systems compose; complex ones don't. And even granting that every system should start small, Gall's Law cuts both ways — every successful complex system started as a successful *simple* system, which means simplicity is the right starting point regardless of ambition.

## Synthesis

Simplicity is the goal of the *system*; leverage is a property of the *implementation* that helps you achieve it. These are not in conflict at the system level — they operate on different axes. The error engineers make is treating them as opposites when they're orthogonal. Rails isn't the opposite of a simple system; it's an implementation that compresses the path to getting there. You can build a simple product with a high-leverage framework. You can build a complex, unmaintainable mess with a "simple" one. SoundCloud's rewrite is the proof: they spent years achieving simplicity at the implementation level while forfeiting it at the product level.

## Entry Point

> SoundCloud, like a lot of firms, was built on Rails and gained its traction that way. But SoundCloud was in many regards more like Twitter — consumer-oriented, vertical scale. Not exactly a back-office SaaS app. In part due to genuine technical constraints, in part due to architectural conviction (a number of folks there, including me, had worked with Sam Newman at Thoughtworks) and in part due to a quiet attempt to explicitly align with Twitter's Finagle stack in hopes of an eventual acquisition, they started to move their Rails app to microservices. The way I perceive that move is that it genuinely bought them some scale, but: it took years, product momentum stalled, a lot of engineers got nerd-sniped by Scala, they struggled to build a culture of monetization of the platform (I led their Monetization — subs/payments/ads — team in their NYC office), and by the end of it, I'm not at all convinced that, from a total cycle time standpoint, they were shipping any faster than they had before. Not dissimilar to Twitter, actually, as I perceive it from the outside. Why not do the Shopify thing and grow Rails, or the Stripe thing and keep the Ruby monorepo but ditch Rails?

This is the author's account verbatim — use it as voice and framing reference for the draft, not necessarily as literal text.

## Sections

### The categories we inherited don't work

- **Claim:** The essential/accidental complexity framing — from Brooks and extended by the Hickey tradition — is inadequate for the actual decisions engineers face. Dan Luu argued this in 2020; the outline agrees, but goes further. Luu's critique is that the categories are fuzzy and unhelpfully defined. This piece's claim is sharper: even well-defined categories don't help, because the question engineers actually face isn't "which kind of complexity is this?" but "what does this complexity buy me?" The essential/accidental framing is diagnostic; what we need is economic.
- **Evidence:** Essential complexity is "inherent to the problem"; accidental complexity is "implementation noise." But Rails conventions are neither: they're deliberate, load-bearing complexity that buys leverage. No existing category names this well. Calling it "accidental" predisposes engineers to treat it as a problem. Calling it "essential" misappropriates a term of art. The frame fails at the point of decision.
- **Objection:** This is just a terminology argument. Call it whatever you want; the tradeoff is still there.
- **Resolution:** Terminology arguments matter when the terminology shapes the decision. "This is accidental complexity we should eliminate" and "this is leverage we should preserve" are different directives that produce different outcomes. Words do work.

### The thing pushing against simplicity has a name

- **Claim:** "Leverage" — the ratio of problems solved to implementation complexity added — is the right name for the force that pushes against simplicity in practice. Not productivity, not developer experience, not abstraction: leverage, with its specific mechanical connotation of force multiplication.
- **Evidence:** Type systems add complexity and add safety — every type you don't have to write is leverage. ORMs add complexity and eliminate a class of boilerplate. Rails adds convention and eliminates a class of decisions. The common thread is the ratio: more problem-solving per unit of complexity added.
- **Analogy:** The coupling/cohesion distinction is instructive here. The classic framing — cohesion is good, coupling is bad — collapses under inspection, because the structural difference between them is often nil. A more honest definition: cohesion is coupling you like. The bonds that create leverage are good; the ones that don't are noise. But you can't tell which is which from structure alone — only from whether they served you. "Leverage" names the same evaluative move for complexity: not complexity you've rationalized, but complexity whose ratio of work-done to effort-applied you can actually defend.
- **Objection:** "Leverage" is just a flattering word for complexity you've decided to tolerate. Every over-engineered system got justified as leverage by the team that built it.
- **Resolution:** Yes — which is why naming the trade explicitly matters. "This adds leverage" is a claim that can be evaluated against the ratio; "this is appropriately complex" is a vibes-based assertion. The word does work precisely because it can be wrong.

### Hickey was right and it didn't matter

- **Claim:** Rich Hickey's "Simple Made Easy" correctly diagnosed the confusion between simplicity and ease, and Clojure is a genuinely simple language by his own definition. Neither observation changed the revealed preferences of the industry. This piece does not argue against Hickey; it argues that Hickey was fighting on the wrong terrain.
- **Evidence:** "Simple Made Easy" has been reposted to HN for fifteen years to audiences who nod and go back to shipping Django apps. Clojure did not win. The reason is not that engineers are stupid; it's that Hickey was arguing about epistemology — the right way to think about simplicity — while engineers were optimizing for something else: the ratio of problems shipped to effort spent.
- **Objection:** That's an indictment of the industry's priorities, not of the argument for simplicity.
- **Resolution:** It's an argument that the industry's priorities are rational. Simplicity-as-terminal-value loses to leverage-seeking behavior in competitive markets, and that's not a failure of virtue; it's incentive structure. The piece that names the incentive is more useful than the piece that diagnoses the confusion.

### The graveyard without headstones

- **Claim:** The graveyard of startups that chose low-leverage simplicity and died before they could ship is longer than the graveyard of startups that chose high-leverage frameworks and later suffered for it. The second graveyard is visible because those companies survived long enough to write the postmortem.
- **Evidence:** Survivorship bias means the costs of leverage are documented and the costs of under-leverage are not. We have postmortems about Rails monolith migrations. We do not have postmortems from startups that wrote hand-rolled SQL, kept their options open, and ran out of runway before v1. SoundCloud's story is instructive in the other direction: the costs of *trading away* leverage are equally invisible, because the counterfactual — what they might have shipped if they'd stayed on Rails — has no headstone either.
- **Objection:** "Move fast and break things" gave us a decade of unmaintainable software and technical debt that crushed teams.
- **Resolution:** That's not an argument against leverage; it's an argument against carelessness. Choosing a high-leverage framework deliberately, with an understanding of what you're incurring, is not the same as accumulating a big ball of mud accidentally. Your framework becoming a liability is a champagne problem: it means you built a business. Dying before you ship means you made the careful, principled choice and it didn't matter.

### Gall's Law is an argument about systems, not implementations

- **Claim:** The steelman for simplicity is Gall's Law: every successful complex system started as a successful simple system, so start simple. This is correct. But it argues for simple *systems*, not low-leverage *implementations*. The law is about what you're building, not what tools you use to build it. Rails is not a complex system; it's a high-leverage implementation of a convention for building systems. The simplicity Gall requires is in the domain model and the product scope, not in the framework.
- **Evidence:** Stripe kept its Ruby monorepo and became one of the most valuable fintech companies on earth. The system — payments infrastructure — started simple and grew deliberately. The implementation stayed high-leverage throughout. Gall's Law held. SoundCloud attempted to simplify the implementation and complicated the system; product scope ballooned while the team was preoccupied with the migration. The law cut the other way.
- **Objection:** Stripe is a monolith handling global payment infrastructure — it must be incomprehensibly complex by now.
- **Resolution:** Probably. That's the champagne problem. Stripe survived to have it.

## So What?

The dichotomy is wrong. Simplicity is a property of a system; leverage is a property of the implementation that serves it. When you argue for simplicity, name what implementation you're endorsing and what leverage you're forgoing. When you argue for a high-leverage tool, name what system property you're protecting. Most engineering arguments about simplicity are leverage arguments in disguise. They would be shorter and more honest if people admitted it.

## Open Questions

- Verify that Stripe has not substantially migrated off the Ruby monorepo. The claim is based on public statements from 2016–2019; confirm it is still accurate before drafting.
- The Luu engagement in Section 1 needs to name what this piece adds beyond Luu's critique. As written: Luu says the categories are fuzzy; this piece says even precise categories ask the wrong question. That distinction should be stated explicitly in the draft.

## Author's Notes on the SoundCloud Example

The claim is not that the architecture migration killed SoundCloud — the music industry is famously hard, copyright is hard, and monetizing copyright-encumbered remixes is genuinely harder than most SaaS problems. Reasonable people who were there would push back and argue the move was worth it.

The claim is narrower: SoundCloud did not obviously succeed as a business, and the architecture migration was a costly distraction at a moment when the company needed to be focused on growth and monetization. The relevant question is not whether the new architecture was technically superior, but whether the trade — years of engineering attention, product momentum, team focus — was worth it given what the business actually needed. The comparison to Stripe is not meant to be fair on the business merits; it's meant to illustrate that staying high-leverage was a viable path that went untaken.
