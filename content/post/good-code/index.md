---
title: 'Code style is a mirror, not a metric'
description: 'The myth of objectively good code'
date: 2025-07-31T08:54:11-04:00
image:
math:
license:
hidden: false
comments: true
draft: false
---

## The myth of objectively good code

For as long as people have been writing software, people who write software have been arguing about how to write it. Because code has to balance the need to _do something_ with the need to communicate to humans _what it does_, we say that it must _express intent_: good code makes it easy to understand. Consequently, programmers often make aesthetic choices which help explain the code's purpose but do not substantially alter it.

I've been arguing with other programmers about how to define objectively good code for twenty years, and where I've landed is that there's no such thing, at least in any universal sense. Choices are heavily influenced by the proclivities, habits, and, frankly, comfort levels of their creators and early adopters, and the core elements of the language in question. [Sapir-Whorf](https://en.wikipedia.org/wiki/Linguistic_relativity) in silicon: the structure of your programming language shapes how you think about programming, and vice versa.

What underlies these preferences are _schools of thought_, which are themselves influenced by the selection bias of the language itself: languages make choices intended to empower (or disempower) certain ways of thinking about writing software. Those schools of thought in turn stem from profound differences in competing theories of computation.

A lot of disagreement over style boils down to a fundamental disagreement about what code is _meant to be_.

## Two philosophies of computation

There remains a divide in computer science between **imperative** programmers, who think of programming as fundamentally about the _mechanics_ of computation and its physical relationship to the underlying hardware, and **declarative** programmers, who think of programming as fundamentally about the _theory_ of computation and for whom the idea of addressing specific memory registers seems almost gauche. If you think that programming is about instructing computers to do things, for-loops are a pretty sensible construct. If you think it's about manipulating symbols, then the mechanics of dictating iteration seem almost silly.

These differences go all the way back to the birth of the field: Alan Turing and Alonzo Church arrived at the same place (the Church-Turing Thesis) from very different directions, and early programming languages were heavily influenced by their work: Church's lambda calculus formed the basis for Lisp and subsequent research into functionally-oriented programming, while Turing's model proved more practical from an engineering and commercial standpoint, and the subsequent von Neumann architecture formed the basis for all modern computers. Eventually, commercial incentives led to imperative languages winning in the market, because they were designed for, and more performant on, the underlying hardware.

I've written production code in a lot of different languages, but I was exposed to functional programming early, and it's shaped my understanding of code ever since. Consequently, I've spent a lot of time arguing with folks over the value of practices like immutability (I like it) and for-loops (nope). I've come to view this at least in part as a _cultural_ disconnect: some people think code is clear when it expresses the mechanics of computation, and some people think it's clear when it expresses intent about output and elides the implementation. I’m not saying I’m right and they’re wrong (although I am and they are), only that code I found legible often wasn’t clear to others. The same can be true in reverse: some people are _really_ comfortable with long methods. Code that [fits in one person's head](https://www.youtube.com/watch?v=4Y0tOi7QWqM) may not fit in another's.

### Comparing styles

To make the argument more concrete, look at `return`. To a declarative programmer, all sensible functions _must_ return values; an explicit `return` statement is redundant, and serves no clear purpose. Ruby's "last statement wins" convention seems deeply sensible, to their (and frankly my) taste; so do arrow functions in Javascript. An imperative programmer would claim that the _mechanics_ of the algorithm are critical to understanding how it operates and would argue for an explicit, structured `return` statement.

Or consider iteration. To an imperative programmer, the humble for-loop seems straightforward, simple, and most of all, clear:

```ts
let sum = 0
for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
}
```

It's like following the steps of a recipe: you can follow the mechanics plainly from reading the code. The same code in declarative style:

```ts
const sum = arr.reduce((acc, x) => acc + x, 0)
```

This approach is not concerned with the mechanics of computation (and indeed might be implemented or optimized a number of different ways); instead, it expresses the _intent_ of the programmer to reduce a list to a single value.

These approaches sometimes seem so fundamentally at odds that each camp's style guides are practically mutually illegible: if you think programming is about "what" and not the "how", it will guide you towards fundamentally different aesthetic judgments than the reverse. It is also perfectly possible to get burnt badly by either approach, and so debates over what constitutes best practice can get heated.

Consequently, there are rarely objectively correct answers to the question of what constitutes good practice. Advances in hardware and compilers have largely erased the practical performance difference, and programmers hence often value mostly what they trust and understand.

## Multi-paradigm languages muddy the waters

The most important language shift in the last decade of programming has been towards [hybrid](https://en.wikipedia.org/wiki/Hybrid_language) or multi-paradigm languages, which fully embrace both object-oriented and functional styles. A good example is Scala, which is happy for you to write code however you please as long as it passes the type-checker, although the community has settled on a very particular FP-adjacent style. Other languages have followed: Javascript embraced _both_ classes _and_ tighter function syntax and is now embracing types; Kotlin joined Scala in a similar JVM niche; Swift followed in a similar vein; Rust adopted Go's systems-oriented perspective with a more declarative style; even Java now includes `map` and `reduce` in its standard idioms.

Predominantly functional languages, like Clojure, F#, Haskell, OCaml and others established toe-holds in certain technical subcultures but never broke into the mainstream; Go, an aggressively imperative language, is inarguably mainstream but may never supplant the languages it competes with for mindshare, in part because it has in the past resisted the community's tug towards tools like generics. The schism doesn't seem as significant as it used to be, and there has been widespread covergence on the acceptability of certain styles that seemed outlandish to mainstream commercial programmers twenty years ago.

However, as languages become more permissive, honing in on a particular philosophy becomes harder; Go, to its credit, has a stake in the ground, but most languages have drifted in the other direction, so the problem has gotten worse as they proliferate. The distinction between declarative and imperative styles grows fuzzier with each passing year, and style guides have to either pick a side or sit uncomfortably between them.

### Picking a style means having a perspective, not pleasing everyone

I am not a relativist: there is a difference between inviting clarity and concealing it behind familiarity. I prefer the declarative, functional style, and have always been wary of objections to it on readability grounds; `reduce` is perfectly readable if you understand what it's meant to do. However, my advice to those who engage in this debate is to understand that while there's value in aligning on a standard, context is not universal. What seems simple and readable to you may seem redundant, or downright _irresponsible_, to someone from a different school of thought (and vice versa).

It's always freeing to remember that you can't make everyone happy.

When I started [Orgspace](https://orgspace.io), I adopted a functional programming style in Typescript, and I was perfectly happy to reject candidates who didn't like or understand it on the basis of the idea that they simply weren't a good fit for the technical culture I wanted to build. In fact, I went out of my way to make it more challenging than the industry standard precisely _because_ it helped me set a hiring bar. I like the way I write my code and find it reliably maintainable, but I don't claim that it wouldn't bother some number of other programmers. And that's fine; indeed, it's the point.

For my part, I've become more comfortable standing by my own convictions, and educating others about the value of embracing new styles. The idea that you have to pick a style that suits the lowest common denominator in your organization has always struck me as both condescending and lazy: it lowers the bar rather than raising it, it expects less of your programmers and gets it, and it removes the onus on more experienced programmers to lift up those around them.

But either way, you can't win a debate about style, or set a bar for your own organization, if you don't understand what animates your opinions and why. Good code depends on the observer. Understand your goals, pick a style and run with it.
