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

AI companies face the same structural problem: their constraint on inference revenue is the volume of tasks that flow through models. From where they sit, _every piece of software that still runs without model calls is unrealized market_. They are going to to expand that market by building software, acquiring software, or making AI-native alternatives so compelling that the old versions wither. In the process, they [commoditize the existing software layer, which is now a complement to inference](https://www.joelonsoftware.com/2002/06/12/strategy-letter-v/).

But the commoditization isn't the goal, it's the byproduct. If your business is built on software, this will be an unpleasant inversion. Their goal is to make the market for tokens bigger, and software is the means.

## AI companies are building software to sell tokens

The present narrative, especially in SaaS, goes like this: AI is a _feature_. You sprinkle it hither and yon to make the product better—maybe stickier, maybe richer—and maybe to please the board. Every SaaS company on earth is scrambling to add an AI layer, under the premise that AI capabilities will drive retention and upsells and margins. Likewise, a hundred thousand software engineers have rediscovered their inner maker[^maker] and are shipping their side projects. In this story, AI is the lever.

[^maker]: Which is delightful, by the way. And also, same.

This story gets the causality backwards. From the model vendor’s perspective, software is not the product; it is the surface that drives inference demand. Claude Code is free; it is also, by a wide margin, the most aggressive token-consuming product Anthropic has shipped so far. OpenAI [hired the creator of OpenClaw](https://www.cnbc.com/2026/02/15/openclaw-creator-peter-steinberger-joining-openai-altman-says.html) not because they needed a task-automation agent but because those products burn tokens.

And it's working. Even skeptics are coming around, because the spend is real; the bull case for AI is showing up in their own firms' invoices. Every feature the model vendors ship, every tool they acquire, every agent built by them or someone else is a mechanism for converting engagement into inference calls, and corporations are engaging. The product serves the meter.

## The market is being rewritten around inference

The entrepreneurs flooding the market have figured this out from the other direction. The gold rush is not just about chat replacing the interface; it is about the chance to rebuild existing products with a radically different cost structure: cheaper development, cheaper operations, cheaper support, and more automation throughout. Even where the interface barely changes, the economics already do.

Thin wrappers are the simplest version of this. They’re a fast way to prove that users will route intent through a model, and ideally generate a lot of hype (and a quick exit for some) for doing so. But wrappers are not moats; they’re proof-points for inference demand. The broader pattern is that AI-native products are being built to route work through models by default. Sometimes that means a chat interface; sometimes it’s the same old dashboard with a different cost structure underneath. In both cases, software becomes a vehicle for inference demand.

A vertical SaaS company with proprietary workflow, embedded compliance, operational lock-in, and a decade of domain-specific data may _look_ like it’s in a fundamentally different position. But AI doesn’t just eat feature work; it eats the operational work that surrounds it. Consider what a compliance-heavy SaaS product actually does day to day: it generates audit evidence, routes exceptions to the right human, maps data between systems that don’t talk to each other, and trains new users on workflows that exist because the old ones were too brittle to change. None of that is proprietary logic: it’s _organizational friction reified in code_, and it’s exactly the kind of work these models are getting good at. The moat was never the feature set; it was the operational complexity that made switching expensive. That complexity is becoming cheaper to replicate every quarter.

The question isn’t whether your software is complex; the question is whether it’s *yours* in some way the model can’t readily replicate and operationalize. For most feature-centric software, the answer is simply no.

## Jevons paradox is their growth strategy, not your safety net

I've seen a lot of software people (including me) take comfort in Jevons paradox: the observation that when a resource becomes cheaper to use, total consumption increases rather than decreases. The argument goes that as AI makes software cheaper to build, more software gets built, and therefore the demand for software engineering goes up, not down.

This is probably true about *volume*, but it's the wrong thing to find comforting.

Jevons paradox isn't a counterargument to the AI companies' strategy; it *is* the AI companies' strategy. More software gets built, all of it consumes tokens, every line metered. The model providers get paid for every inference call regardless of whether the application succeeds or fails. The volume increase in software construction is, from their perspective, TAM expansion working as intended.

The natural objection to the idea that entrenched firms face structural risk is that this is how energy markets work, and energy companies have done fine without cutting into their customers. Exxon doesn't build cars any more than Saudi Aramco runs a taxi service. They sell the fuel, let other people build whatever they want on top, and do spectacularly well because everything downstream depends on them. AI companies could, in theory, follow the same playbook: sell the tokens, collect revenue on every API call, stay neutral otherwise.

But there's a difference between oil and tokens. Oil is fuel: you need it to run the car, but you can't use it to *design* the car, manufacture the car, or improve the car. Tokens are commoditized _thought work_: you can use them to run software, and you can _also_ use them to build software, design software, and replicate software. The AI company doesn't just sell the fuel; it sells the thing that can replace the factory. Exxon never threatened GM because oil can't build cars. Anthropic and OpenAI are already building software products that compete with their own customers, using the same resource they're selling to those customers. The complement doesn't just drive demand for the core product; the complement can be *generated by* the core product.

The company expanding the market also has the means, _and the incentive_, to eventually capture the margins on the expanded market. Jevons paradox suggests more software gets built. It does not guarantee that you're the one building it, or that you're the one getting paid.

## The inversion is already underway

I manage lots of software engineers at a company that writes a lot of software. I don’t think the situation's unsalvageable, but I do think it calls for honest self-assessment and a willingness to cannibalize what’s working before someone else does it for you.

AI companies make money when more work flows through models. That gives them a clear incentive to turn software into a better vehicle for inference demand: to build it, subsidize it, and make it easier for everyone else to build too. As the cost of creating AI-first products falls, more software gets rebuilt around token consumption, and more of the value flows upstream to the model layer.

If you're an entrenched software business, you have a few clear choices. You can ignore the whole thing, use AI sparingly, and try to ride it out; you can sprinkle AI on your product tactically and call it a day; or you can disrupt yourself by reimagining your business. That last is the only meaningful option. This is an extinction-level event for complacent firms.

Software businesses built on older economics will eventually get replaced by those built on better ones. You don’t need a new category to lose your market: "same product, lower price" will do just fine. The defensible position is the one you’re actively rebuilding, not the one you’re sitting on.
