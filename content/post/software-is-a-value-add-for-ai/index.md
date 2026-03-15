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

When a company hits a ceiling on its core business, it often tries to grow demand. The Michelin Guide wasn't about restaurants; it was about miles driven. Facebook's [internet.org](https://about.fb.com/news/2013/08/technology-leaders-launch-partnership-to-make-internet-access-available-to-all/) wasn't about connecting the developing world; it was that Facebook's remaining growth was locked behind internet penetration itself. The ceiling on the business was the medium, so they set out to expand the medium.

AI companies face the same structural problem: their constraint on inference revenue is the volume of tasks that flow through models. From where they sit, _every piece of software that still runs without model calls is unrealized market_. They are going to to expand that market is by building software, acquiring software, or making AI-native alternatives so compelling that the old versions wither. In the process, they commoditize the existing software layer, which is now a complement to inference.

Joel Spolsky [wrote the definitive essay](https://www.joelonsoftware.com/2002/06/12/strategy-letter-v/) on why tech companies do this, but the commoditization isn't the goal, it's the byproduct. The goal is to make the market for tokens bigger, and software is the mechanism.

## AI companies are building software to sell tokens

The present narrative, especially in SaaS, goes like this: AI is a feature. You integrate it into your product to make the product better—maybe stickier, maybe richer. Every SaaS company on earth is scrambling to add an AI layer; the pitch to the board is that AI capabilities will drive retention and upsells and margins. Likewise, a hundred thousand software engineers have rediscovered their inner maker[^maker] and are shipping their side projects. In this story, AI is the lever.

[^maker]: Which is delightful, by the way. And also, same.

This story gets the causality backwards. From the model vendor’s perspective, software is not the product; it is the surface that drives inference demand. Claude Code is free; it is also, by a wide margin, the most aggressive token-consuming product Anthropic has shipped. OpenAI [hired the creator of OpenClaw](https://www.cnbc.com/2026/02/15/openclaw-creator-peter-steinberger-joining-openai-altman-says.html) not because they needed a coding tool and a task-automation agent but because those products burn tokens. Every feature they ship, tool they acquire, or agent that’s built is a mechanism for converting engagement into inference calls. The product serves the meter.

## The market is being rewritten around inference

The entrepreneurs flooding the market have figured this out from the other direction. The gold rush is not just about chat replacing the interface; it is about the chance to rebuild existing products with a radically different cost structure: cheaper development, cheaper operations, cheaper support, and more automation throughout. Even where the interface barely changes, the economics already do.

Thin wrappers are the simplest version of this. They’re a fast way to prove that users will route intent through a model, and they often generate a lot of hype for doing so. But wrappers are not moats; they’re proof-points for inference demand. The broader pattern is that AI-native products are being built to route work through models by default. Sometimes that means a chat interface; sometimes it’s the same old dashboard with a different cost structure underneath. In both cases, software becomes a vehicle for inference demand.

A vertical SaaS company with proprietary workflow, embedded compliance, operational lock-in, and a decade of domain-specific data may _look_ like it’s in a fundamentally different position. But AI doesn’t just eat feature work; it eats the operational work that surrounds it. Consider what a compliance-heavy SaaS product actually does day to day: it generates audit evidence, routes exceptions to the right human, maps data between systems that don’t talk to each other, and trains new users on workflows that exist because the old ones were too brittle to change. None of that is proprietary logic. It’s organizational friction reified in code, and it’s exactly the kind of work these models are getting good at. The moat was never the feature set; it was the operational complexity that made switching expensive. That complexity is becoming cheaper to replicate every quarter.

The question isn’t whether your software is complex; the question is whether it’s *yours* in some way the model can’t readily replicate and operationalize.

## Jevons paradox is their growth strategy, not your safety net

I've seen a lot of software people (including me) take comfort in Jevons paradox: the observation that when a resource becomes cheaper to use, total consumption increases rather than decreases. The argument goes that as AI makes software cheaper to build, more software gets built, and therefore the demand for software engineering goes up, not down.

This is probably true about *volume*, but it's the wrong thing to find comforting.

Jevons paradox isn't a counterargument to the AI companies' strategy; it *is* the AI companies' strategy. More software gets built, all of it consuming tokens, every line metered. The model providers get paid for every inference call regardless of whether the application succeeds or fails. The volume increase in software construction is, from their perspective, TAM expansion working as intended.

The natural objection is that this is how energy markets work, and energy companies have done fine. Exxon doesn't build cars any more than Saudi Aramco runs a taxi service. They sell the fuel, let other people build whatever they want on top, and do spectacularly well because everything downstream depends on them. AI companies could, in theory, follow the same playbook: sell the tokens, collect revenue on every API call, stay neutral otherwise.

But there's a difference between oil and tokens. Oil is fuel: you need it to run the car, but you can't use it to *design* the car, manufacture the car, or improve the car. Tokens are commoditized _thought work_: you can use them to run software, and you can _also_ use them to build software, design software, and replicate software. The AI company doesn't just sell the fuel; it sells the thing that can replace the factory. Exxon never threatened GM because oil can't build cars. Anthropic and OpenAI are already building software products that compete with their own customers, using the same resource they're selling to those customers. The complement doesn't just drive demand for the core product; the complement can be *generated by* the core product.

The company expanding the total addressable market also has the means, and the incentive, to eventually capture the margins on the expanded market. Jevons paradox suggests more software gets built. It does not guarantee that you're the one building it, or that you're the one getting paid.

## The conversion is already underway

I manage lots of software engineers at a company that writes a lot of software. I don’t think the situation is hopeless, but I do think it calls for honest self-assessment and a willingness to cannibalize what’s working before someone else does it for you.

AI companies make money when more work flows through models. That gives them a clear incentive to turn software into a better vehicle for inference demand: to build it, subsidize it, and make it easier for everyone else to build too. As the cost of creating AI-first products falls, more software gets rebuilt around token consumption, and more of the value flows upstream to the model layer.

Software businesses built on older economics eventually get replaced by those built on better ones. You don’t need a new category to lose your market. Same product, better economics, lower price. The defensible position is the one you’re actively rebuilding, not the one you’re sitting on.
