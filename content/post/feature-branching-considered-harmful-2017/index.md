---
title: "Feature Branching Considered Harmful (2017)"
description:
date: 2024-11-30T15:43:39-05:00
image: "steven-lewis-dmHnXJ-5ilQ-unsplash.jpg"
image_credit: "Photo by Steven Lewis on Unsplash"
image_credit_url: "https://unsplash.com/@airguitarbandit"
categories:
  - sdlc
---

> I originally wrote this [on Twitter in 2017](https://x.com/bguthrie/status/937750796334174209). I'm reposting it here, on my own site, to preserve it.

Rant time: today I'd like to talk about feature branching and GitHub—how we got here, what they are (and aren't) good for, why that matters, and what you can do instead. Join me, friends!

First, a definition: "Continuous Integration is the practice of merging all developer working copies to a shared mainline several times a day." That's from about 1998(!). [https://en.wikipedia.org/wiki/Continuous_integration](https://en.wikipedia.org/wiki/Continuous_integration)

That's what CI is: developers merging to master, often working in pairs, and shipping artifacts, _at least_ once a day. Here's what it's not: a piece of infrastructure, something your DevOps team does for you, or running tests against your feature branches.

Why talk about CI? Because most teams who feature branch aren't CIing. It's a process, not a tool. It is something that you as a team choose to do, or not. You don't need a CI server to do CI. You can have one and not do it. [http://jamesshore.com/Blog/Continuous-Integration-on-a-Dollar-a-Day.html](http://jamesshore.com/Blog/Continuous-Integration-on-a-Dollar-a-Day.html)

This definition has shifted so dramatically that advocates of the original practice had to coin a term—Trunk-Based Development—to capture and refine its essence. But there's a story in that term: the word "trunk" refers to Subversion.

So what happened between SVN and now? Git. More to the point, GitHub, which has probably done more than any piece of software now running to change the way teams think about software collaboration. Not always for the better!

GitHub's great for OSS. Open-source software presents a difficult set of collaboration problems: projects draw contributions from people who are widely distributed by both geography and time and have wildly different levels of experience, context, interest, and commitment.

OSS software development therefore makes sense as an asynchronous, big-tent process. Code is submitted and reviewed intermittently. People can reasonably work on somewhat different copies. Integration can be safely deferred.

All of you who work full-time on teams that sound like that, feel free to leave the room. This rant isn't for you.

However, most paid teams are the opposite: membership is well-defined, members are vetted and (hopefully) mentored, and everyone's being paid to show up, physically or online.

And many of those paid teams and larger orgs now adopt a feature branch collaboration model as a matter of course, and students are being taught in code schools that it's The Way—they'll use it in industry, so best learn now.

This is nuts. When full-time teams adopt, wholesale, a software development process built for casual ones, it doesn't come for free. There are tradeoffs! Some downsides, even! Viable alternatives exist!

Some tradeoffs that might not be visible: Deferred integration slows or delays refactoring. The review cycle for PRs may waste time in your shipping process. PR review is a lower-bandwidth collaboration model than pairing (for better or worse).

CI/TBD isn't magic, but the definition matters: it's what you'd arrive at yourself if you committed relentlessly to working incrementally and tightening every last damn feedback loop in your development process. That's hard, but it's not impossible.

Git may ship with a ton of features, but no one's forcing you to use them. Here's how I do trunk-based development with Git: `git commit && git pull --rebase && make test && git push`. You know what I never need? A branch visualization tool.

The secret sauce of software development—the philosophical origin of most advancements in thinking over the last 20 years—is incremental change, tight feedback loops, shared knowledge, and mutual respect.

Reconsider your feature branches. And git-flow is bonkers.
