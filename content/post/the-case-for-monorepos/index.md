---
title: "The Case for Monorepos"
description:
date: 2025-05-06T12:03:13-04:00
image:
math:
license:
hidden: true
comments: true
draft: false
---
Yes, it should be a single repo, with proper tooling. You can solve all of the deploy problems Pau mentioned deterministically, without hoping a human being will deploy things in the right order, with the right tools; if you couldn't, then no credible software orgs would do it almost by definition, but many do. (You can also decouple merges from deploys and retain manual control, and again, many orgs do. They are unrelated problems.)
I have a Justworks deck on this for people who like decks. Here's a somewhat old private article by Simon "Webdriver" Stewart with comments from Chris "Strangler Fig" Stevenson for people who like articles.
Many complex systems are easier to work with when they're self-contained; most successful large systems grow from successful small ones. The problem you obviously run into as a codebase grows is that cross-coupling makes it hard to maintain; it no longer fits in your head (or anyone's head). Rails at scale is damn near unsalvageable. A monorepo build tool forces you towards certain architecture constraints that avoid many of these problems. The rules are:
Codebases are split into independent, logically contained modules (packages). Most tools draw a distinction between libraries and apps (deployable, runnable units). So far, so good.
Each module must be buildable—produce an artifact. For languages that don't compile anything, think of the artifact as the output of a test suite, or something—whatever "thing" certifies the suitability of the module for production use, like any build pipeline.
Builds must be idempotent and deterministic. The same set of input files must produce the same output artifact every time. No network calls.
Modules can depend on other modules. But:
Only in a single direction, no cycles: the build must produce a DAG.
For a visualization of this, see the deck, slides 9-15.
If you do this, builds become fast, because you don't need to build as much anymore: the build tool walks the DAG and determines the minimum set of things that need to be built. It forces modules to be smaller, because they build faster; there's a built-in virtuous feedback loop. Ensuring dependencies are one-directional forces (certain) beneficial architecture choices. Your defined build order can help you control deploy order, for example by defining a direct dependency between the frontend and the backend, such the backend must be built and deployed first. It also fully decouples the units of build from the units of deploy. (The term I like is "cookie-cutter scaling": different operational units of a system, like particular subsets of endpoints, can be scaled according to their needs, rather than all at once.)
The tradeoff here is that if you're going to couple everyone to the same set of tools, the tools need to be good. Ensuring a high-quality devx is a first-class consideration, because if you allow the devx to decay, everyone is dragged down. But the reverse is also true: an excellent devx lifts everyone up. But coordinating action on this is truly difficult; you are no longer fully decoupled on a team level and you need to build alignment on what good looks like.
But if you get over the hump, the promise is compelling: fast, deterministic builds and a relatively clean architecture model, scalable all the way from raw startup to Google.
Thanks for coming to my TED talk. (edited)
