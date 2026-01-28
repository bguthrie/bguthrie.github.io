---
title: "What the next year of software development looks like"
slug: "sdlc-predictions-2026"
description: "Predictions for 2026: agentic development becomes the new normal, architecture gets re-litigated, and software craft shifts up a conceptual level."
date: 2026-01-28
image: tin-lay-zin-nrDeTztwnBg-unsplash.jpg
image_credit: "Photo by Tin Lay Zin on Unsplash"
image_credit_url: "https://unsplash.com/@jem_lz"
draft: false
categories:
  - sdlc
---

By the end of 2025, a question that's hung over the industry for the past year—is agentic software development a novelty, or is it here to stay?—now has its answer: it is. In 2026, it becomes the new normal. [Credible](https://x.com/karpathy/status/2015883857489522876?s=20), [senior](https://x.com/ciphergoth/status/2006446942453387675) [engineers](https://blog.fsck.com/2025/10/09/superpowers/) [started](https://www.lennysnewsletter.com/p/ai-tools-are-overdelivering-results) making [real cases](https://nitter.net/bcherny/status/2007179832300581177#m) for productivity improvements: demonstrated improvements in throughput, fewer dead-end branches, less yak shaving, more time spent on the decisions that actually matter. And you see it in the artifacts: [Gas Town](https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04), [Superpowers](https://github.com/obra/superpowers), [Wiggum](https://blog.devgenius.io/ralph-wiggum-with-claude-code-how-people-are-using-it-effectively-1d03d5027285), [Spec Kit](https://github.com/github/spec-kit), and a dozen other code-specific plugins are more than just proofs of concept; they're evidence that LLM-driven development can drive nontrivial features without collapsing into chaos. [Figma's foray into the space](https://www.figma.com/ai/) is making ripples in the design community, and it's not hard to foresee some degree of movement towards end-to-end full-stack delivery.

Many engineers initially dismissed these reports as not credible because they came from people associated with LLM vendors or AI tools. Some of those statements were self-interested, sure, but they were also being made by people who were very close to the cutting edge. In 2026 they'll be proven right.

Here are my personal and unapologetic predictions for the coming year.

## Software volume goes up, and not just because we're shipping faster

The first-order effect is straightforward: these tools start to drive low-double-digit percentages of the software delivered. "Low" might be too conservative; within two years it'll be comfortably more than 50%. This has the effect of lowering the marginal cost of writing a line of code, and making it quantifiable.

The second-order effect is that total software volume increases because the threshold for "worth building" drops. When the marginal cost of a feature falls, you build things you used to rationalize away. You stop treating small papercuts as destiny. The backlog changes shape: more "nice-to-haves" become "fine, ship it." My third-order prediction is that [Jevon's paradox](https://en.wikipedia.org/wiki/Jevons_paradox) applies, and the total demand for software goes up as costs come down.

And yes, some of this will be waste. Welcome to software: we have always been bad at deciding what matters. The difference is that effort will cease to be buried behind estimation abstractions like story points and become more quantifiable, for better or worse.

## CLIs have a moment; IDEs gets squeezed; everyone ships a dev-tuned model anyway

CLI-driven workflows like [Claude Code](https://code.claude.com/docs/en/overview), [Cursor CLI](https://cursor.com/cli), [Codex CLI](https://chatgpt.com/features/codex), and [OpenCode](https://opencode.ai/) will dominate mindshare in the near term because outcome-oriented, agentic models that treat the *goal* as the unit of work, not the *code*, have proven out their value, and because these tools are incorporating robust and easily extensible plugin systems to permit a wide range of experiments. IDE-centric tools lose ground because, while it was initially easier to sell "pair programmer in your editor" than it is to change how teams actually execute work, that pitch is starting to feel small.

Software *creation* tools—not necessarily IDEs as we know them—regain ground as the market gets more sophisticated about model choice, fine-tuning, and organization-specific workflows. Once teams believe custom models tuned for their stack are plausible, visual tooling becomes a plausible development model again. Every major vendor releases a "software dev model." A few will become the default procurement line-item for engineering orgs in the same way CI became "just a thing you pay for."

At a higher level, we are going to stop talking about "AI coding tools" as a category and start talking about "your organization's software production system." The model is a component, not the product.

## Token cost stays flat or drops; the bubble doesn't burst yet

Cost per token remains the same or decreases. That doesn't mean total spend goes down. It means usage grows until finance notices. Which they will; demand for token consumption within software engineering is starting to look voracious.

The "AI bubble bursting" crowd is confusing a pricing curve with a value curve. Even if some vendors get obliterated, the primitive is too useful to un-invent, and per-token economics seem to be fundamentally sound. The economic question shifts from "is this real?" to "who captures the margin?" The answer will be: maybe not the people you think, and probably not for long.

## Architecture gets re-litigated, and monorepos get a serious second look

This is the prediction I feel most confident about because it's already happening quietly: engineering organizations start to reconsider architecture decisions in light of agentic workflows.

LLMs are probabilistic autocomplete machines that require context to be effective. They do better when the world they can see is coherent, the dependency graph is legible, and conventions are enforceable and discoverable. Microservice sprawl and polyrepo fragmentation were already expensive for humans; for agents, they're a tax you pay every time you ask for help.

So I expect an engineering leader at a major organization to publicly discuss a shift away from microservices/SOA towards a monorepo-led approach, explicitly citing improved LLM outcomes: better refactors, better cross-cutting changes, fewer "this repo doesn't know that repo exists" failures. Some people will call it regression, incorrectly. (I am personally fairly wary of microservices, though the model has its place.) It's about reducing entropy in the space the agents operate in.

To be clear: microservices aren't dead. But the default posture of "split it up because scale" is going to look increasingly fraught in a world where coherence is throughput.

## "Where's the explosion?" fades, because the explosion shows up in the boring places first

The "where is the explosion in new software?" question is a tell-on-yourself question. It assumes the only meaningful output is net-new consumer products.

The real impact shows up first in features that never would have been built otherwise: internal tooling, edge-case automation, weird integrations, UX polish, cleanup refactors, migrations, deprecations, guardrails. The stuff that makes a product feel mature, not just existent. [Claude Code's "ultrathink" feature](https://x.com/tinkerersanky/status/2012077268701438374) (now built into the tooling) is emblematic here: it's not magic; it's sustained attention you didn't have to rent from a senior engineer for a week, and it was probably trivial for an LLM to drive.

Once teams start shipping all the things they've been postponing for years, the question becomes less "where's the explosion?" and more "why does everything suddenly change faster than our organization can metabolize?"

## A language for LLMs gets announced, and it's mostly a bet on constraint, not syntax

Within a year, someone announces the first programming language designed specifically for LLM usage, paired with a fine-tuned model designed to write it. A good example of a nascent stab in this direction is [Toon](https://github.com/toon-format/toon).

This won't be about making code "easier to type." Humans can already type. It will be about making programs easier to maintain under high-throughput generation: fewer degrees of freedom, stronger affordances for refactoring, explicit structure for intent, and a standard way to declare invariants so agents stop "helpfully" breaking them. More generally, organizations will start using more aggressive tooling strategies to derive deterministic correctness outcomes from nondeterministic models.

My guess is it looks less like "a new Typescript" and more like "a buildable spec format with teeth." The model will be the point. The language is how you keep it from lying to you.

## Roles start to smear together, and new specializations emerge

LLMs can drive frontend code just as well as they can drive mobile code, backend code, TUIs, or even inference kernels. While they're not perfect at everything, they're trained on a wide array of technologies, can train themselves on the fly by reading technical documentation, and the large models include a broad range of general domain context that applies to a wide range of business problems.

I've never worked at a company that didn't veer wildly back and forth between organizational models structured around technical platforms (e.g., frontend vs backend) and ones structured vertically around business lines or domains, but in 2026 the pendulum swings hard towards generalist teams oriented around business problems, with more engineers driving product work, more product managers driving technical work, and designers doing some of both. But all else being equal, teams that understand their product, domain, and the needs of their customers will continue to excel.

## ROI becomes measurable enough to annoy everyone

Per-feature ROI becomes more quantifiable because we can now estimate the marginal cost of feature delivery in tokens, plus the human review time. That doesn't make ROI *easy*. It makes it *auditable*. Finance orgs will scrutinize token cost more closely as usage grows, not because they hate engineering, but because this is the first time engineering spend looks like a meter instead of a salary.

This will create a new kind of friction. Some teams will respond by hiding usage. Others will respond by over-optimizing prompts like they're gas mileage. The healthy path is to treat token spend like cloud spend: instrument it, attribute it, set guardrails, and accept that the purpose is leverage, not austerity.

## There will be a security, operations, and compliance whiplash

As code generation volume rises, so does the attack surface for mistakes: dependency injection of the literal kind, license leakage, secret handling, data boundary violations, subtle auth bugs, performance and scaling problems, misconfigured infrastructure. The orgs that win will be the ones that build automated constraint systems early: policy-as-code, provenance, reproducible builds, and aggressive static checks. "Trust but verify" becomes "verify or else."

However, the cost of building and enforcing these automated checks goes down dramatically. LLMs are perfectly happy to operate at a degree of tedium and precision that humans struggle with; they will happily refactor code until your automated checks pass without ever complaining about rework. Orgs which do not yet have these systems in place will invest heavily in both building and buying tooling to drive better outcomes; likewise, expect supply-chain management and vulnerability scanning tools to move out of nice-to-have and into essential territory for many engineering orgs.

## Software craft is dead; long live software craft

The old romance was about joinery: knowing your editor, polishing a function until it clicked, building a bookcase from raw lumber because that's what the job demanded. But we can buy bookcases at IKEA now, and we should—LLMs have commoditized the mechanics of assembly, and pretending otherwise is cosplay.

The craft that matters shifts up a conceptual step: from carving parts to designing spaces, from writing code to shaping systems that can be safely changed at speed. That makes reviewing changes the center of the profession again, not as a gatekeeping ritual, but as the primary act of engineering: judgment, constraints, tests that actually bite, interfaces that stay coherent under pressure, and the taste to say "no" when the model cheerfully offers "yes." We're not measuring excellence by how cleanly you sand a board; we're measuring it by whether the whole thing holds together when someone tries to live in it.

## So now what?

If you're a software professional in 2026 and all this feels like it's coming at you fast, I don't think you're alone. The wave is hitting; *I* certainly feel it. If I'm right and Jevon's paradox holds, then the value of software doesn't decrease; it goes up, but that doesn't mean that everyone will adapt. Here are things you can do right now to position yourself more effectively for the coming year.

If you're an engineer, **install a CLI-driven agentic codegen tool** (like [Claude Code](https://code.claude.com/docs/en/overview)) ***and one of the above plugins***. Don't just fire away a prompt in its direction; use a tool pushing a structured approach and *build something non-trivial*. This should get you close to the cutting-edge fairly quickly. Do it *immediately*. If you want a unified architecture that works well with LLMs, I recommend [Bun](https://bun.com/), [React](https://react.dev/), and [Typescript](https://www.typescriptlang.org/)—the leverage and speed you gain from the ability to isomorphically ship typesafe code across web, mobile and backend is just too compelling to ignore.

**Stop holding back for fear of a cost-per-token rug-pull after a burst bubble**. There are free *open-source* models available now that are roughly as capable as state-of-the-art models a year ago. The fundamental unit economics seems sound; the capital spend is seemingly going to DC buildout and model training. The model you're using today is the worst model you'll ever use. Get used to building this way.

Rather than discarding LLM-based tools because they don't fit your technical choices, **consider revisiting those choices to fit the tools**. Treat the question of whether you want to hang on to those choices with mindfulness and intentionality. A rewrite might be as simple as a test harness, an OpenAPI spec, and a little production traffic capture-and-replay.

**Ship something meaningful, but don't trust the outputs unquestioningly.** *Do* use it to build something real; *don't* treat it as an excuse to delegate your thinking or design decisions to the tool. These tools should reflect *your* tastes, needs, and understanding of the problem, not the pre-trained consensus of the broader internet. Review everything it builds if you're working in a critical production system.

Start to think about what it means if your job is about **creating value with software** instead of **implementing specific tasks.** Moving up a level conceptually means anchoring yourself against what your value is to the business, and elevating your skillset along with it. If you think you're an X engineer, and AI can do X now, you might be in trouble; start to think of yourself as a **maker** instead, with your own perspective on what your users need.

And finally, particularly if you're in leadership, **reexamine your org structure and interrogate your processes**. The fundamental economics of software delivery are shifting under our feet. Stop re-litigating old arguments on ownership silos and ask how to empower your teams *safely* to take on more ambition and responsibility.
