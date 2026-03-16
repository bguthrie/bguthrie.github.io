---
title: "AI isn't a value-add for software; software is a value-add for AI"
description: "AI companies aren't building software because they love software. They're building it because software sells tokens."
date: 2026-03-14T10:00:00-04:00
image: katie-currier-J4TbPWYBc5s-unsplash.jpg
image_url: https://unsplash.com/photos/a-close-up-of-a-street-light-with-a-sunset-in-the-background-J4TbPWYBc5s
image_credit: Photo by Katie Currieron Unsplash
draft: false
hidden: true
categories:
  - industry
  - strategy
---

When a company hits a ceiling on its core business, it often tries to grow demand. The Michelin Guide wasn't about restaurants; it was about miles driven. Facebook's [internet.org](https://about.fb.com/news/2013/08/technology-leaders-launch-partnership-to-make-internet-access-available-to-all/) wasn't about altruism; it unlocked expansion by growing the size of the entire internet. The ceiling on the business was the medium, so they expanded it.

AI companies face the same structural problem: their constraint on inference revenue is the volume of tasks that flow through models. From where they sit, _every piece of software that still runs without model calls is unrealized market_. They are going to expand that market by building software, acquiring software, or making AI-native alternatives so compelling that the old versions wither. In the process, they [commoditize the existing software layer, which is now a complement to inference](https://www.joelonsoftware.com/2002/06/12/strategy-letter-v/).

But the commoditization isn't the goal, it's the byproduct. If your business is built on software, this will be an unpleasant inversion. Their goal is to make the market for tokens bigger, and software is the means.

## AI companies are building software to sell tokens

The present narrative, especially in SaaS, goes like this: AI is a _feature_. You sprinkle it hither and yon to make the product better—maybe stickier, maybe richer—and maybe to please the board. Every SaaS company on earth is scrambling to add an AI layer, under the premise that AI capabilities will drive retention and upsells and margins. Likewise, a hundred thousand software engineers have rediscovered their inner maker[^maker] and are shipping their side projects. In this story, AI is the lever.

[^maker]: Which is delightful, by the way. And also, same.

This story gets the causality backwards. From the model vendor's perspective, software is not the product; it is the surface that drives inference demand. Claude Code is free; it is almost certainly the most aggressive token-consuming product Anthropic has shipped so far. OpenAI [hired the creator of OpenClaw](https://www.cnbc.com/2026/02/15/openclaw-creator-peter-steinberger-joining-openai-altman-says.html) not because they needed a task-automation agent but because those products burn tokens.

And it's working. The winning AI surfaces are the ones that turn operational work into repeated inference calls, and even the skeptics can see it now. Every feature the model vendors ship, every tool they acquire, every agent built by them or someone else is a mechanism for converting engagement into inference calls, and corporations are engaging. The product serves the meter.

## The market is being rewritten around inference

The entrepreneurs flooding the market have figured this out from the other direction. The gold rush is not just about chat replacing the interface; it is about the chance to rebuild existing products with a radically different cost structure: cheaper development, cheaper operations, cheaper support, and more automation throughout. Even where the interface barely changes, the economics already do.

Thin wrappers are the simplest version of this — and the most legible. A wrapper that fails as a product still succeeds as a signal: it tells the model vendors which use cases route work through inference, at what volume, and at what price. The wave of undifferentiated AI apps isn't noise; it's sensing — venture-funded market research that identifies what converts to tokens at scale. The broader pattern is that AI-native products are being built to route work through models by default. Sometimes that means a chat interface; sometimes it's the same old dashboard with a different cost structure underneath. In both cases, software becomes a vehicle for inference demand.

A vertical SaaS company with proprietary workflow, embedded compliance, operational lock-in, and a decade of domain-specific data may _look_ like it's in a fundamentally different position. For some of them, the data asset is real: years of labeled decisions, proprietary workflow state, institutional memory that no model has touched. That's a genuine differentiator — as long as the operational layer that generated the data is itself irreplaceable. But AI doesn't just eat feature work; it eats the operational work that surrounds it. Consider what a compliance-heavy SaaS product actually does day to day: it generates audit evidence, routes exceptions to the right human, and maps data between systems that don't talk to each other. None of that is proprietary logic: it's _organizational friction reified in code_, and it's exactly the kind of work these models are getting good at. The moat was never the feature set; it was the operational complexity that made switching expensive. That complexity is becoming cheaper to replicate every quarter.

The question isn't whether your software is complex; the question is whether it's *yours* in some way the model can't readily replicate and operationalize. For most feature-centric software, the answer is simply no.

## Jevons paradox is their growth strategy, not your safety net

I've seen a lot of software people (including me) take comfort in Jevons paradox: the observation that when a resource becomes cheaper to use, total consumption increases rather than decreases. The argument goes that as AI makes software cheaper to build, more software gets built, and therefore the demand for software engineering goes up, not down.

This is probably true about *volume*, but it's the wrong thing to find comforting.

Jevons paradox isn't a counterargument to the AI companies' strategy; it *is* the AI companies' strategy. More software gets built, all of it consumes tokens, every line metered. The model providers get paid for every inference call regardless of whether the application succeeds or fails. The volume increase in software construction is, from their perspective, TAM expansion working as intended.

The natural objection to the idea that entrenched firms face structural risk is that this is how energy markets work, and energy companies have done fine without cutting into their customers. Exxon doesn't build cars any more than Saudi Aramco runs a taxi service. They sell the fuel, let other people build whatever they want on top, and do spectacularly well because everything downstream depends on them. AI companies could, in theory, follow the same playbook: sell the tokens, collect revenue on every API call, stay neutral otherwise.

But there's a difference between oil and tokens. Oil is fuel: you need it to run the car, but you can't use it to *design* the car, manufacture the car, or improve the car. Tokens are commoditized _thought work_: you can use them to run software, and you can _also_ use them to build software, design software, and replicate software. The AI company doesn't just sell the fuel; it sells the thing that can replace the factory. Exxon never threatened GM because oil can't build cars. Anthropic and OpenAI are already building software products that compete with their own customers, using the same resource they're selling to those customers. Cursor is built on Claude's API; Claude Code competes with Cursor. The complement doesn't just drive demand for the core product; the complement can be *generated by* the core product.

The company expanding the market also has the means, _and the incentive_, to eventually capture the margins on the expanded market. Jevons paradox suggests more software gets built. It does not guarantee that you're the one building it, or that you're the one getting paid.

## They don't even have to attack you

In the 1940s, a holding company called National City Lines acquired controlling interests in urban transit systems across dozens of American cities and converted their electric streetcar lines to diesel buses. They were convicted of antitrust violations in 1949; the fine was five thousand dollars.[^dollars] However, most of those streetcar systems were already failing: fare structures had been frozen since the 1890s, and wartime maintenance had been deferred. The jury  _acquitted_ on the charge of intentional destruction. What the backers did was structural: they ensured that when the distressed systems failed, the replacements ran on their technology.

[^dollars]: And urbanists like myself are still salty about it. I live in Brooklyn. Would it kill us to have a tram or two?

You don't need a conspiracy to produce systematic infrastructure capture. Aligned incentives operating on structurally vulnerable systems produce the same outcome as deliberate attack. Model vendors don't need to attack healthy software; they just need to ensure that when structurally pressured software fails, the replacement routes through inference.

The pattern is already visible. StackOverflow's [question volume peaked in 2021](https://data.stackexchange.com/stackoverflow/query/1926661#graph), before the current wave; when LLM vendors shipped better coding models, engineers barely looked back. Chegg's homework-help subscription was in structural decline before ChatGPT landed the killing blow. Neither was attacked by a model vendor. Both were already under pressure, and when the AI-native alternative appeared, switching costs hit zero overnight. The model vendors didn't have to do anything; they just had to exist.

Which means the segments most exposed aren't necessarily the ones facing the most direct AI competition, but the ones already under structural pressure. The list of vulnerable firms here is notably different from "whatever AI is best at today."

## The inversion is already underway

In February 2026, the market made the structural argument for me. Software and SaaS stocks lost somewhere between one and two trillion dollars in a single week, depending on how you count it—the [Wall Street Journal called it a meltdown](https://www.wsj.com/finance/stocks/the-1-6-trillion-meltdown-that-swept-through-software-stocks-86c8b3a2), Reuters said investors were debating an ["existential threat."](https://www.reuters.com/business/media-telecom/global-software-stocks-hit-by-anthropic-wake-up-call-ai-disruption-2026-02-04/) Forrester declared [SaaS as we know it dead](https://www.forrester.com/blogs/saas-as-we-know-it-is-dead-how-to-survive-the-saas-pocalypse/). The proximate cause was a new round of model capability announcements, but the real cause was a repricing: the market looked at the software layer and decided that a large share of its value was about to route through inference instead.

Chegg is the poster child—stock down 99% from peak, revenue falling 30% year over year, [45% of staff cut in late 2025](https://fortune.com/2025/10/28/chegg-ceo-poster-child-ai-shock/), CEO calling himself the "poster child for AI shock." But Chegg was already structurally vulnerable: a homework-help subscription dependent on students choosing to pay for answers they could get elsewhere. AI didn't have to beat them; it just had to become good enough that the switching cost hit zero. That's the streetcar pattern.

Klarna illustrates the inversion from the _customer_ side. They dropped Salesforce and Workday, preemptively cut headcount from 5,000 to 3,800, and reported that their AI assistant was doing the equivalent work of 700 full-time customer service agents. Their CEO's framing is worth quoting: "You can rebuild most enterprise SaaS functionality, host for super cheap, and get basically 90%+ functionality." That's a SaaS _customer_ deciding that the operational complexity the software was managing—routing exceptions, mapping data between systems, generating audit evidence—could be routed through inference instead. Their vendors' moats evaporated when the customer didn't need them anymore.

I manage a lot of software engineers at a company that writes a lot of software. I think about this a lot.

The structural argument resolves into two questions. First, is your segment worth direct attack—is there a version of your product whose core workflow converts cleanly into repeated inference calls at scale? If yes, the model vendors have both the means and the incentive to build it, subsidize it, or fund someone who will. And second, is your segment already under structural pressure independent of AI? If yes, you don't need to be attacked by the model vendors. You probably won't even see it coming. In February the market woke up to a trillion dollars' worth of that realization in a week. The firms on the other end of that repricing are still figuring out what hit them.
