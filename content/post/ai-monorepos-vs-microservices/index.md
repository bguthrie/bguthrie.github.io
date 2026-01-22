---
title: "Does AI do better with monorepos or small services?"
description: "Exploring the paradox of unified context vs. focused boundaries in the LLM era"
date: 2026-01-21T11:46:49-05:00
image:
math:
license:
hidden: true
comments: true
draft: false
robots: "noindex, nofollow"
categories:
  - platform
  - sdlc
---

LLMs now have context windows measured in the hundreds of thousands of tokens, and should in principle be able to absorb context over a large codebase, and make end-to-end changes across services. But they also struggle when given _too much context_: retrieval quality degrades, token limits matter, and more information doesn't always mean better suggestions. There are ways to compensate—topological and cross-repository search strategies can help build context that's both targeted and comprehensive—but they require additional effort, and do not fully resolve the issue. This tension has sparked a debate: if you believe (as I do) that agentic coding represents a fundamental shift in how we build software, and you're choosing a macro architecture to transition to, is it better to steer towards more unified context through monorepos, or narrow, focused context through small services?

Both monorepo and polyrepo strategies are viable alternatives to the big balls of mud of eras past, and both approaches are a sensible and now well-trodden path. Microservices momentarily dominated as the replatforming strategy of choice, but large tech companies born out of west-coast startup culture have always preferred monorepos as their primary architecture, and tools for managing them have become more sophisticated, accessible, and widespread. The debate predates AI by at least a decade, and both models have their defenders.

But that was before AI coding assistants became a primary part of the development workflow. Does the calculus change when developers are working with Claude, Copilot, or Cursor as coding partners? My sense is that monorepos should be better for AI, for much the same reason that they're useful for humans: more unified context should mean better suggestions, and architecture constraints borne out in Conway's law will start to fade as AI becomes more capable. But I wanted to understand the case better, and figure out if there's a consensus.

## The case for monorepos with AI

The unified context argument seems compelling on its face. When an AI assistant has access to your entire system, it can:

- Suggest changes that properly account for downstream effects across service boundaries
- Navigate seamlessly between API definitions and their implementations
- Understand shared types, utilities, and conventions across your entire stack
- Refactor across what would otherwise be service boundaries when appropriate

Modern monorepo tools like [Bazel](https://bazel.build/), [Nx](https://nx.dev/), [Buck](https://buck2.build/), and [Turborepo](https://turborepo.dev/) provide dependency graphs that AI can traverse, consistent build patterns, and clear signals about what changed and what needs testing. Google maintains billions of lines of code in a single repository specifically because it provides ["a common source of truth"](https://research.google/pubs/why-google-stores-billions-of-lines-of-code-in-a-single-repository/) for tens of thousands of developers. [Monorepo](https://monorepo.tools) [advocates](https://trunkbaseddevelopment.com/monorepos/) emphasize benefits like atomic changes—"everything works together at every commit"—unified dependencies, and better code sharing.

The historical parallel matters here. We learned with microservices that "easy to understand in isolation" often means "impossible to understand in aggregate." Fowler & Lewis note in their [canonical microservices article](https://martinfowler.com/articles/microservices.html) that when "components do not compose cleanly, then all you are doing is shifting complexity from inside a component to the connections between components." AI doesn't eliminate this problem. If anything, it might make it worse—the AI can only work with what it can see, and polyrepo architectures create artificial blindness.

From a developer experience perspective, when you're pair-programming with an AI, having the whole codebase available means fewer "I don't have access to that file" moments. The AI can explore and discover, just like you would browsing a well-organized codebase.

## The case for small services

But the counter-argument has teeth too.

AI tools work better when the problem space is well-defined and bounded. When you're working on a specific service with clear interfaces, you get:

- Less noise and irrelevant code to filter through
- Fewer false positives when searching for relevant patterns
- Clearer ownership and conventions within each boundary
- Lower risk of cross-cutting changes that break distant parts of the system

The specificity advantage is meaningful: agents don't get confused by similar-but-different patterns across domains. When each service has its own idioms and clear contracts, there's less opportunity for the AI to suggest code that looks right but violates subtle cross-domain assumptions.

There's also a cognitive load argument, though it cuts both ways. Even if AI can theoretically handle massive context, that doesn't mean it should, or that it will do so with efficacy and grace. Maybe the right amount of context is "enough to be useful" rather than "everything." Small, focused codebases might let AI assistants be more precise and confident in their suggestions rather than hedging across too many possibilities.

And practically speaking, most AI coding tools still struggle with very large codebases. Token limits remain real constraints. Retrieval quality varies. Response times increase. Maybe working within well-defined boundaries is just more practical given the current state of the technology.

## What the evidence shows

### Official sources and large LLM vendors aren't saying much

My sense is that few large players are really talking about this yet. Maybe nobody knows.

I looked at AI company documentation, engineering blogs, tool announcements, and community discussions. Anthropic's [guidance on long context](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/long-context-tips) emphasizes structuring data well and "grounding in quotes" to help Claude "cut through the noise"—but says nothing specific about codebase architecture. GitHub's [Copilot tips](https://github.blog/developer-skills/github/how-to-use-github-copilot-in-your-ide-tips-tricks-and-best-practices/) stress having relevant files open and using the `@workspace` agent for project-wide awareness, but offer no guidance on monorepo vs. polyrepo strategies.

[Cursor's marketing](https://cursor.com/features) touts "codebase embedding models" that give their agent "deep understanding and recall," but provides no technical details about how this works with different architectures. Vercel's [case for Turborepo](https://vercel.com/blog/monorepos) emphasizes build performance and unified dependencies—written before AI coding tools became widespread—without mentioning how AI factors into the equation.

The [2025 Stack Overflow survey](https://survey.stackoverflow.co/2025) shows continued acceleration: 84% of developers now use or plan to use AI tools, up from 76% in 2024 and 44% in 2023. Nearly half (47%) use them daily. Yet trust is declining—46% of developers actively distrust AI tool accuracy versus 33% who trust it, with the primary frustration being "AI solutions that are almost right, but not quite" (66% of users).

GitHub's [2025 Octoverse report](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/) documents the transformation: nearly 80% of new developers use Copilot within their first week, commits jumped 25% to roughly 1 billion annually, and TypeScript became the most-used language—"the most significant language shift in more than a decade." That shift matters: developers are choosing typed languages that work better with AI code generation. Yet neither report addresses how codebase architecture affects AI effectiveness.

### Practitioners report good results at small-medium scale

But there's more direct evidence if you dig into developer discussions. On Hacker News, developers working with single-language monorepos report notably better AI outcomes. [One developer explained their success](https://news.ycombinator.com/item?id=46481814): "Consistent patterns throughout...once I learn how you do things in one area, it applies everywhere." [A startup shared their workflow](https://news.ycombinator.com/item?id=46292682) of assigning GitHub issues to Copilot within their monorepo, estimating "LLMs are worth about 1.5 excellent junior/mid-level engineers per engineer."

The pattern is consistent: developers with well-structured, single-language monorepos where conventions repeat throughout report significantly better results than those working across polyrepo setups. However, scale still matters—[one developer reported](https://news.ycombinator.com/item?id=44912035) Cursor "lost track after 250K tokens, broke unrelated modules" on a 1.2M-line monorepo, suggesting current tools have real limits.

### The implication is that monorepos win

That said, the indirect evidence seems to lean one way. AI tools universally emphasize context: GitHub Copilot works better when you have relevant files open. Cursor builds codebase embeddings to enable deeper understanding. Claude's 200K token context window exists specifically to handle large, interconnected documents. The entire pitch of these tools is that they can understand more of your system than fits in your working memory.

Monorepos provide exactly what these tools need: unified context, atomic changes across boundaries, consistent patterns that AI can learn, and dependency graphs that make relationships explicit. When you're working in a polyrepo architecture, the AI is fundamentally limited by what it can see—and it can't see across repository boundaries.

The cognitive load problem that Fowler & Lewis identified—[complexity shifting to the connections between components](https://martinfowler.com/articles/microservices.html#AreMicroservicesTheFuture)—gets worse with AI, not better. If emergent system behavior already requires sophisticated monitoring for humans to understand, asking an AI to reason about cross-service changes when it can only see one service at a time seems like a recipe for subtle bugs.

## The qualified judgment

Based on the available evidence, **I think monorepos are better positioned for AI-assisted development**, but with important caveats. I'll be transparent that I have a bias here—I prefer monorepos, and have in general built accordingly—but it's important to be honest about the tradeoffs.

The core advantage is straightforward: AI coding assistants work by understanding context and suggesting changes based on patterns. Monorepos make context available and patterns visible in ways that polyrepo architectures don't. The promise of AI tools is that they can hold more of your system in their "head" than you can—but only if that system is actually available to them.

However, this advantage only holds if:

1. **You have good monorepo tooling**. A giant repo with slow builds and unclear dependencies doesn't help anyone, AI or otherwise. You need a tool like Bazel to make the codebase navigable and maintainable. This is true either way; I'd argue that it's not a monorepo without the right kind of tooling.

2. **Your code is well-structured**. More context isn't inherently valuable if it's noisy or inconsistent. The same architectural discipline that makes monorepos work for humans—clear module boundaries, explicit dependencies, consistent conventions—makes them work for AI too.

3. **Your AI tools can handle the scale**. Current generation tools are improving fast, but context window limits and retrieval quality still matter. A 10-million-line monorepo might exceed what today's tools can effectively index and reason about. Build tools can help limit context by walking the dependency graph and providing a focused view of the codebase, and you can deploy subagents to handle specific parts of the codebase. But it's a real issue at scale.

4. **You're not using "monorepo" as an excuse to avoid architectural boundaries**. The best monorepos have clear module boundaries and explicit interfaces; they're just managed together. If your monorepo is actually an undifferentiated ball of mud, neither humans nor AI will understand it well.

### Does this hold at scale?

The most important caveat is about scale. The one data point we have—Cursor losing track after 250K tokens on a 1.2M-line monorepo—suggests the advantage might evaporate or even reverse as codebases grow. We have no evidence about whether AI helps or hurts when reasoning about Google-scale monorepos. And critically, we don't know whether today's AI-first startups will face the same organizational pressures that have driven a generation of startups born as Rails and J2EE monoliths to transition to polyrepo architectures.

Those transitions weren't just technical decisions. They were responses to team growth, organizational complexity, and the difficulty of coordinating changes across an increasingly large surface area. Will AI change that calculus? Can better AI tooling solve the coordination problems that microservices were meant to address? Or will we see the same pattern repeat—startups building unified codebases, then breaking them apart as they scale?

The case for polyrepo architectures in the AI era is weaker than I expected. The primary argument—focused, bounded context—sounds appealing but runs counter to how these tools actually work. They get better with more context, not less, as long as that context is structured well. The challenge of understanding distributed systems doesn't disappear because you've split them across repositories; it just becomes invisible to your AI assistant.

## What we need to learn

This feels like an important question that the industry hasn't seriously engaged with yet. As AI coding tools mature and architectural decisions increasingly factor in how well they'll work with assistants, we need:

**Better metrics on AI tool effectiveness across architectures**. Which setups actually make developers more productive? Where do AI assistants struggle or excel? Hard data would be a good next step, but is famously difficult to obtain at scale.

**Explicit guidance from AI tool makers**. Anthropic, OpenAI, and others should study and publish recommendations about codebase structures that optimize for their tools. Right now we're guessing.

**Case studies from companies using AI at scale**. Google, Vercel, and other large monorepo shops: how is AI working for you? Companies that have transitioned from monoliths to microservices: did it get harder or easier to use AI tools?

**Better tooling that bridges the gap**. Can we build better cross-repo code intelligence? Can AI tools get smarter about polyrepo architectures? The current tools implicitly favor monorepos, but maybe that's a limitation we can overcome.

Developers are already making technology choices based on AI effectiveness. I don't think that TypeScript's rise to become GitHub's most-used language was an accident: toolchains with strong guardrails, like robust type systems, work better with AI code generation, as indeed they do with humans. If you can solve the monorepo scale problem, there's a compelling argument that you should do so on the basis of AI effectiveness.

The architectural fashions of the 2010s assumed human developers were the primary interface to code. That assumption is changing. Whether the old patterns repeat or new ones emerge depends on questions we can't yet answer: Can fully autonomous AI coding agents truly scale in quality to enterprise codebases? Will better AI reduce the organizational friction that drove the microservices transition? For now, the evidence favors monorepos at the scales where most developers work—but the jury's still out on what happens when you grow up.
