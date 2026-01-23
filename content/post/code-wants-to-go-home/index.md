---
title: 'Code Wants To Go Home'
description: 'The Happy Gilmore theory of SDLC'
date: 2025-05-31T05:31:20-05:00
image: putt.jpg
image_credit: 'Photo by Thomas Park on Unsplash'
image_credit_url: 'https://unsplash.com/@thomascpark'
hidden: false
---

Happy Gilmore is a 1996 Adam Sandler movie about a guy who’s weirdly good at driving golf balls, and so becomes a golf celebrity even though the rest of his technique is terrible. I’m not into golf, but there’s a scene in the movie in which Happy's coach advises him to treat the ball like it wants to go home. (Happy fails to sink the putt, loses it, and yells at the ball instead.) I think of this scene whenever I see teams who seem more focused reviewing code than on shipping it.

<iframe width="700" height="400" src="https://www.youtube.com/embed/xc-WirFAY34?si=v8VB-4iWsGCOshGU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

I have a pretty simple theory of code: code wants to be committed and deployed. It wants to go home.

The goal is to ship. Trapping workable code in a branch to debate things that are trivial to change later doesn’t help anyone, but it's common on teams that make code review so onerous that each small decision feels irreversible. Merge it already, and fix it next. [Continuous integration is a process, not a tool.](/p/feature-branching-considered-harmful-2017)

In general, if you raise the price of a thing, you get less of it. Having a clean build is important, as is aligning on good practice, but making code harder to _ship_ also makes it harder to _fix_. One of the things I liked about [how we wrote code on XP teams](https://en.wikipedia.org/wiki/Extreme_programming) many years ago was that codebases weren't _kept_ clean by rigorous gated review; they were _made_ clean through continual small-scale refactoring. Those teams built safety and trust by leaning into change, not avoiding it.

A good way to speed up development without compromising on safety is to supplement human review with automated review. Replace debates over style with formatters and linters. Use automated vulnerability checkers. Write tests that enable rapid feedback loops.

If you want to [move fast](/p/the-move-faster-manifesto), make change safer, not slower.
