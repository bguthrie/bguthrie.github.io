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

## They don't have to attack you

In the 1940s, a holding company called National City Lines acquired controlling interests in urban transit systems across dozens of American cities and converted their electric streetcar lines to diesel buses. They were convicted of antitrust violations in 1949. The fine was five thousand dollars.[^dollars]

[^dollars]: And urbanists like myself are still salty about it. I live in Brooklyn. Would it kill us to have a tram or two?

The most widely understood version of this story is as collusion: NCL was backed by GM, Firestone, and Standard Oil, who deliberately destroyed rail-based transit to sell cars and gasoline. However, most of those streetcar systems were already failing: fare structures had been frozen since the 1890s, wartime maintenance had been deferred, and postwar suburbanization was making radial rail networks obsolete. The jury  _acquitted_ on the charge of intentional destruction. What the backers did was structural: they ensured that when the distressed systems failed, the replacements ran on their technology.

You don't need a conspiracy to produce systematic infrastructure capture. Aligned incentives operating on structurally vulnerable systems produce the same outcome as deliberate attack. Model vendors don't need to attack healthy software; they just need to ensure that when structurally pressured software fails, the replacement routes through inference.

Stack Overflow, the poster child for early AI disruption, was already arguably in decline before the current wave of AI tools. Check out [this graph of StackExchange questions asked over time](https://data.stackexchange.com/stackoverflow/query/1926661#graph): the peak is in 2021. When LLM vendors shipped improved coding models and their value functionally evaporated, software engineers barely looked back, although the long-term implications are unsettling. That's not an attack, really. That's an infrastructure provider ensuring the natural successor runs on tokens.

Which means the segments most exposed aren't necessarily the ones facing the most direct AI competition, but the ones already under structural pressure. On platforms where growth has plateaued and users are staying due to inertia and high switching costs, the natural replacement becomes inference-native. The list of vulnerable firms here is notably different from "whatever AI is best at today."

## The inversion is already underway

I manage a lot of software engineers at a company that writes a lot of software. I think about this a lot.

The structural argument resolves into two questions. First, is your segment worth direct attack—is there a version of your product whose core workflow converts cleanly into repeated inference calls at scale? If yes, the model vendors have both the means and the incentive to build it, subsidize it, or fund someone who will. And second, is your segment already under structural pressure independent of AI? If yes, you don't need to be attacked by the model vendors. There's an AI-native startup coming for you already.
