---
title: "AI isn't a value-add for software; software is a value-add for AI"
description: "The model vendors aren't selling AI to software companies. They're commoditizing software to sell tokens."
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

AI companies face the same structural problem: their constraint on inference revenue is the volume of tasks that flow through models. From where they sit, _every piece of software that still runs without model calls is unrealized market_.

## Software and inference are in a demand loop

One way companies stimulate demand for their own products is by making complementary products cheaper and more abundant: cheaper cars mean more demand for gas. Joel Spolsky famously put his finger on the tech playbook for this back in 2002: you [commoditize your complements](https://www.joelonsoftware.com/2002/06/12/strategy-letter-v/).

The relationship between software and inference now reflects that dynamic. More software means more inference calls, and better inference means more software worth building. The two are locked in a demand loop, but the model vendors are on the side with pricing power. The rational move is to make the software layer as cheap and abundant as possible, because it shifts value toward the inference layer.

AI companies are doing exactly this. They are building software, acquiring software, and making AI-native alternatives so compelling that the old versions wither. The commoditization of the software layer isn't the goal; it's the byproduct. Their goal is to make the market for tokens bigger, and software is the means.

## The product serves the meter

The present narrative, especially in SaaS, goes like this: AI is a _feature_. You sprinkle it hither and yon to make the product better, maybe stickier, maybe richer, and maybe to please the board. Every SaaS company on earth is scrambling to add an AI layer, under the premise that AI capabilities will drive retention and upsells and margins. Likewise, a hundred thousand software engineers have rediscovered their inner maker[^maker] and are shipping their side projects. In this story, AI is the lever.

[^maker]: Which is delightful, by the way. And also, same.

This story gets the causality backwards. From the model vendor's perspective, software is not the product; it is the surface that drives inference demand. Claude Code is free; it is almost certainly the most aggressive token-consuming product Anthropic has shipped so far. OpenAI [hired the creator of OpenClaw](https://www.cnbc.com/2026/02/15/openclaw-creator-peter-steinberger-joining-openai-altman-says.html) not because they needed a task-automation agent but because those products burn tokens. The entrepreneurs flooding the market have figured this out from the other direction: the gold rush is not just about chat replacing the interface; it is about the chance to rebuild existing products with a radically different cost structure, one where AI-native products route work through models by default.

Every feature the model vendors ship, every tool they acquire, every agent built by them or someone else is a mechanism for converting engagement into inference calls. The product serves the meter.

## The oil builds the cars

The natural objection here is that this is just how commodity markets work, and commodity producers do fine without encroaching on their customers. Exxon doesn't build cars any more than Saudi Aramco runs a taxi service. They sell the fuel, let other people build whatever they want on top, and do spectacularly well because everything downstream depends on them. AI companies could, in theory, follow the same playbook: sell the tokens, collect revenue on every API call, stay mostly neutral otherwise.

But there's a difference between oil and tokens. Oil is fuel: you need it to run the car, but you can't use it to _design_ the car, manufacture the car, or improve the car. Tokens are commoditized _thought work_[^thoughtworks]: you can use them to run software, and you can _also_ use them to build software, design software, and replicate software. The AI company doesn't just sell the fuel; it sells the thing that can replace the factory.

[^thoughtworks]: Shoutout to all my commoditized Thoughtworkers out there.

Exxon never threatened GM because oil can't build cars. Anthropic and OpenAI are already building software products that compete with their own customers, using the same resource they're selling to those customers. Cursor is built on Claude's API; Claude Code competes with Cursor. The complement doesn't just drive demand for the core product; the complement can be _generated by_ the core product.

## Jevons paradox is their growth strategy, not your safety net

Jevons paradox isn't a counterargument to the AI companies' strategy; it *is* the AI companies' strategy. More software gets built, all of it consumes tokens, every line metered. The model providers get paid for every inference call regardless of whether the application succeeds or fails. The volume increase in software construction is, from their perspective, TAM expansion working as intended.

The company expanding the market has the means, _and the incentive_, to eventually capture the margins on the expanded market. Jevons paradox suggests more software gets built. It does not guarantee that you're the one building it, or that you're the one getting paid.

## The inversion is already here

Most of the industry is still treating AI as a feature you add to software, but the model vendors are treating software as a feature you add to AI. Those are not the same bet. The product is inference; the software is the surface area. And the surface area has gotten very, very cheap to produce, because the product can produce it.
