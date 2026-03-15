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

In 2002, Joel Spolsky wrote what remains one of the sharpest essays on technology strategy: [Strategy Letter V](https://www.joelonsoftware.com/2002/06/12/strategy-letter-v/). The core argument is simple. In economics, complementary goods are products that are consumed together; cars and gasoline, printers and ink, operating systems and applications. When the price of a complement falls, demand for the primary product rises. Spolsky's insight was that smart technology companies exploit this deliberately: they try to commoditize their own products' complements.

IBM commoditized PC add-in hardware by using open architecture, boosting demand for PCs. Microsoft commoditized PC hardware to sell operating systems. Netscape gave away the browser to sell server software. Each company identified its complement and worked to make it cheap, plentiful, and interchangeable, because that's what drives demand for the thing you actually charge for. The Michelin brothers understood this in 1900 when they published a free restaurant guide to get people to drive more and wear out more tires.[^michelin] The only question is which side of the equation you're on.

[^michelin]: This example gets passed around at cocktail parties to the point where it's almost lost its force, but the lesson isn't about content marketing, it's about who captures the value.

AI companies are running the same play, and the complement they're commoditizing is software.

## AI companies are building software to sell tokens, not software

The present narrative, especially in SaaS, goes like this: AI is a feature. You integrate it into your product to make the product better, stickier, more valuable. Every SaaS company on earth is scrambling to add an AI layer; the pitch to the board is that AI capabilities will drive retention and upsells. Likewise, a hundred thousand software engineers have rediscovered their inner maker[^maker] and are shipping their side projects. In this story, AI is the value-add for software.

[^maker]: Which is delightful, by the way. And also, same.

I think the story is now inverting. Model vendors subsidize software surfaces when those surfaces increase high-margin inference demand. Claude Code is free; it is also, by a wide margin, the most aggressive token-consuming product Anthropic has shipped. OpenAI [hired the creator of OpenClaw](https://www.cnbc.com/2026/02/15/openclaw-creator-peter-steinberger-joining-openai-altman-says.html) not because they needed a coding tool and a task-automation agent but because those products burn tokens. Every feature they ship, tool they acquire, or agent that's built is a mechanism for converting engagement into inference calls. The product serves the meter.

This isn't nefarious; it's rational. If you're an AI company, your core asset is the model and the infrastructure to run it. Everything else is distribution. You will build whatever you need to build, for free if necessary, to make people consume more tokens.

## The model can build your product, and the model vendor knows it

The most obvious targets are thin wrappers: a chatbot bolted onto an existing product, an "AI-powered" feature whose main job is forwarding prompts to an API. The software company builds the integration, bears the engineering cost, and takes on the support burden; the model provider collects the inference revenue. Prompt-forwarding is not a business model, but if your goal is to get acquired, this is a quick path to wealth for some.

But the scope is wider than wrappers. A vertical SaaS company with proprietary workflow, embedded compliance, operational lock-in, and a decade of domain-specific data may _look_ like it's in a fundamentally different position, but it's not different enough. AI doesn't just eat feature work: it eats coordination work, exception handling, systems integration, documentation, training, support, compliance evidence generation, and increasingly procurement itself. A lot of what software companies call "deep domain complexity" is organizational friction reified in code, and organizational friction is exactly the kind of thing these models are getting good at.

As AI expands from code generation into organizational execution, more of what software companies call defensibility gets downgraded from moat to delay. The question isn't whether your software is complex; the question is whether it's *yours* in some way the model can't readily replicate and operationalize. For most feature-centric software, the answer is no.

## Even if more software gets built, AI captures the margin

I've seen a lot of software people (including me) take comfort in Jevons paradox: the observation that when a resource becomes cheaper to use, total consumption increases rather than decreases. The argument goes that as AI makes software cheaper to build, more software gets built, and therefore the demand for software engineering goes up, not down.

This is probably true about *volume*, but it is dangerously silent about *value capture*.

Jevons paradox tells you that total demand for software increases, but it does not tell you who benefits from that increase. If the increased demand is channeled through AI-powered tools that meter usage by the token, then the _volume_ increase accrues to the AI companies while software companies compete on thinner margins to build applications that are increasingly interchangeable. More software gets built; the model providers get paid for every line.

The natural objection is that this is how energy markets work, and energy companies have done fine. Exxon doesn't build cars any more than Saudi Aramco runs a taxi service. They sell the fuel, they invest their margins in companies that consume the product, and they do spectacularly well, because everything downstream depends on them. AI companies could, in theory, follow the same playbook: sell the tokens, let other people build whatever they want on top, and collect revenue on every API call regardless of whether the application succeeds or fails.

But there's a difference between oil and tokens. Oil is fuel: You need it to run the car, but you can't use it to *design* the car, manufacture the car, or improve the car. Tokens are commoditized *thought*: You can use them to run software, and you can _also_ use them to build software, design software, and replicate software. The AI company doesn't just sell the fuel; it sells the thing that can replace the factory. Exxon never threatened GM because oil can't build cars. Anthropic and OpenAI are already building software products that compete with their own customers, using the same resource they're selling to those customers. The complement doesn't just drive demand for the core product; the complement can be *generated by* the core product. The threat of vertical integration is real for software in a way it never was for oil.

## Switching costs are low today, but the trajectory is clear

One framing I considered and rejected is platform economics: AI as the new Windows, with software companies as dependent developers. That's not quite right yet, because platform lock-in requires high switching costs, and switching costs are low. ["We have no moat,"](https://newsletter.semianalysis.com/p/google-we-have-no-moat-and-neither) famously. Microsoft controlled the entire development stack and eventually learned they could snipe competitors more or less at will; Anthropic can't.

But that's a snapshot, not a trajectory. AI companies are investing heavily in ecosystem tools, proprietary features, fine-tuning workflows, and developer experiences that create stickiness. Every time Cursor gets better at understanding your codebase, every time a team builds workflows around a specific model's capabilities, the switching costs inch up. The platform play isn't here yet, but the infrastructure for it is being laid.

The history of technology platforms is pretty clear on what happens next: when a platform owner decides to vertically integrate into your market, you generally lose. Microsoft infamously did it with browsers. Google did it with maps, email, and productivity software. Amazon did it, and is still doing it, with everything from cloud computing to diapers. AI companies that currently position themselves as neutral infrastructure providers have every incentive to move up the stack once they've established distribution.

## The surviving moats are structural, and probably outside the software

I manage software engineers at a company that writes a lot of software. I don't think the situation is unrecoverable, but I do think what survives is uglier and more political than us software people like to admit. An agent can help migrate the system; it does not make the CFO indifferent to failure. An agent can generate compliance artifacts; it does not become the regulated entity. An agent can smooth procurement; it does not decide who the enterprise blames when things break.

What's left is not "our workflow is deeply embedded." It's closer to: we own the risk surface, the customer relationship, and the permission to operate.

First, **responsibility.** Somebody still has to be on the hook when payroll is wrong, a diagnosis is bad, a sanctions screen misses, or a safety incident happens. AI can compress the implementation burden around accountability, but it does not erase the underlying institutional fact that someone needs to be liable. Whether that will hold up as the cost to procure judgment services via AI collapses remains to be seen; a legal advice token costs the same as any other kind of token, and small business owners aren't famous for their profligacy. But for now, accountability is a moat.

Second, **power.** Real organizations are full of turf, incentives, legal boundaries, and decision rights. Replacing software is often easier than replacing the coalition around the software. This is not a technical defense; it's a political one, and it's durable precisely because it has nothing to do with code.

And finally, **scarce access**—exclusive data rights, contractual position, regulated approvals, physical operations, entrenched channel relationships, and brand trust, especially in high-stakes domains. If your product generates data that makes the product better, and that data can't be replicated by a competitor starting from scratch, you have something real. But "we have a database" is not the same as "we have a data network effect." If your data is commodity, it's not a differentiator; it's just storage.

Notice what's *not* on this list: features, workflow complexity, or execution speed. If your competitive advantage is a set of software features then you're in trouble, because the marginal cost of replicating features is collapsing to something close to zero, and the company most motivated to replicate them is the one selling the tokens that power the replication.

## The uncomfortable math

If you're a software company integrating AI into your product, you are increasing your own costs (API fees, engineering time, infrastructure) to deliver capabilities that your customers could increasingly get directly from the model provider. You're adding a margin layer to someone else's core product. As the model providers' own software gets better, the case for your intermediation gets weaker.

And the companies being commoditized rarely see it coming, because the thing replacing their margin looks, at first, like a feature they're excited to integrate.

Translating user intent into model calls is not the escape hatch it seems. You are not building a winning solution on someone else's platform. You are training your customers to buy from it instead.
