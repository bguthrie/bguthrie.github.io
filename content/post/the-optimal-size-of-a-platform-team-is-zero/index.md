---
title: "The Optimal Size of a Platform Team Is Zero"
description:
date: 2024-11-30T15:28:22-05:00
image: "patrick-robert-doyle-8mswK-LU5Vs-unsplash.jpg"
hidden: false
draft: false
categories:
  - sdlc
  - platform
---

I’ve been a customer of platform engineering teams as a product engineer, and I’ve also run them as a leader. Consequently, I’ve done a lot of observation and thinking about good and bad patterns of management.

This is the written version of a talk I give from time to time. It is an attempt at first-principles reasoning: I don’t believe that the correct _practical_ size is zero, but starting from nothing provides fresh insight about how platform teams should be structured and assessed—what they should care about.

## What Even Is A Platform Engineering Team

Platform Engineering is built around the idea that software engineers doing product work can do so more effectively when someone else is taking care of cross-cutting concerns: tooling, libraries, deployment. Some folks believe that infrastructure, ops, and security teams fall under the platform umbrella and some don’t; for the purposes of this argument, I’m going to lump them together.

Instead of asking the engineers who do the product work to take care of those concerns themselves, and to leverage economies of scale, companies above a certain size will often carve off a subset of their engineering headcount—20% gets thrown around a lot—and focus them on these cross-cutting concerns.

What’s relatively novel is the idea of pulling them all together into a coherent, internally-facing org, with its own guiding mandate and sets of relationships with product teams. These teams are often structured around the idea that “the platform is a product,” and that the relationship between platform teams and product teams should resemble the relationship between those product teams and external customers.

## Software Companies Are In The Business Of Making Sellable Software

If your company provides a service that involves software, either directly by selling it or indirectly by powering it, then one of the myriad ways your company will want to grow and sell _even more_ software is by expanding the feature set of the software—coupled, hopefully, to a strategy that makes prospective customers aware that _even more features_ are now available. This is true regardless of the kind of service your company provides: whether you provide internet services for booking airline tickets, listening to music, delivering food, or managing restaurants, you’re likely continually enhancing the software to grow the business.

Not every feature you ship is going to be a success. High-performing software companies have come to embrace the idea of an experimentation model, in which certain features are rolled out incrementally and split-tested against a narrow segment of the user base until they can gain more confidence about how the feature impacts users. In other words, companies place bets: they spin up lots of teams, running in parallel, each trying to expand the footprint (or improve the efficiency) of the software service.

The bets these companies make aren’t guaranteed to pay out, but in general, the incentive is to place as many as possible: you can’t get a return on a feature you don’t intend to sell.

### Companies Don’t Sell Platforms, Unless You’re A Platform Company

Look, if your company’s product _is a platform_, and you want to create a _platform team to sell a platform_, then go with God. No notes. But the kind of platform I’m thinking about here is internally-facing: it exists to serve other software engineers.

Every employee “pulled off” of the coal face to focus on cross-cutting concerns is an employee who’s not positioned to help the company place a bet that could pay off in growth. There are spectacular downsides to ignoring such concerns: in much the same way that you wouldn’t want to do business without legal advice, even if that legal advice is unlikely to be revenue-generating, you probably wouldn’t want to ship software without an eye to security, or quality, or scalability, or a myriad of other things. But the fact remains that these are probably not core to your business. In an _ideal world_, _every single bet you place_ would be around the prospect for more revenue.

## Platform Engineering Should Have a Multiplicative Effect

Companies understand this, and pursue versions of this reasoning all the time. Very few companies run their own data centers. Most rely on third parties for security audits. So where does this leave platform teams?

What I broadly characterize as platform work falls into three categories:

1. System operations: reducing the operating cost and improving the safety of running software.

2. Development infrastructure: providing shared infrastructure for SDLC concerns like builds, tests, process, and security.

3. Developer experience: providing common libraries and tools, leveraging economies of scale to reduce the friction involved in launching new things.

When I’m building a team around the first function, my primary concern is cost optimization. When I’m building around the last one, I’m thinking about time to market. The middle one sits somewhere in between.

Any of these functions could be driven out of the product teams themselves: these teams can, and do, operate their own services, tune their own builds, and write their own shared libraries. Such tools are often the hallmark of high-quality product teams: engineers can and do optimize for their own velocity by abstracting shared concerns and prioritizing (usually as “tech debt,” a misnomer here) improvements to the SDLC process. So when’s the right time to centralize these functions?

Let’s imagine for the sake of argument that we have a target for each product team for revenue growth; for a subscriptions team that’s optimizing a signup flow, let’s say that’s $100,000 per quarter. If the team has ten engineers on it, each hand-picked to solve this particular business problem, then, divided by the number of engineers on the team, we get a _revenue per employee_, or RPE, target of $10k of incremental growth.

What happens if we remove an engineer from the product team and move them to platform work? Well, if we don’t change the target, the RPE goes up. But in this model, we’ve built this team to spec for the problem it’s trying to solve. We should instead posit that removing an engineer from the team will present that team with fewer opportunities to ship experiments around revenue, and lower our prediction from $100k to $90k, leaving a constant RPE target of $10k.

That means that _in order to keep the target constant_, and continue to burn as hard as we can to improve revenue, what we want is a _multiplicative impact_ from that engineer that _at least_ compensates for the loss of their impact on the product side. We want our platform to make _each product engineer_ more impactful  by _raising their RPE target_. When I prioritize platform work, I find this lens useful.

There are several important implications of this model:

1. Adoption is a _necessary precondition_ for multiplicative impact. If the platform _is not being used_—maybe the documentation is poor, or adoption is low, or the library breaks compatibility all the time—then _the team is not succeeding_. Platform teams _cannot_ write off that work as irrelevant. As with any product work, it doesn’t count if no one shows up to use it.\
   \
   I once worked on a product team that was required to use shared microservices tooling provided by a centralized platform team. The library was great, but the team broke backwards compatibility _all the time_. The cost of fixing upgrades was borne by each individual product team; consequently the positive multiplicative impact of the library was counteracted by the negative multiplicative cost of maintenance.

2. It will become _harder_ for the team losing the engineer to fulfill this necessary function, and so you need to provide a _plausible path forward_ for that team. Teams naturally self-optimize for their own productivity; absent the prior help, you _should not be surprised_ when that team makes an unanticipated technology choice as a result.\
   \
   I once worked at an organization that consolidated their ops engineers into a shared team, with a goal of platformizing the path to production. The product teams, bereft of the help and saddled with a set of technical choices premised on ready access to expertise, started moving their software onto third-party platforms with lower operating costs. This counteracted the anticipated positive impact of an internal shared platform.

3. If you cannot point clearly to your model for multiplicative impact _before_ creating the platform team, then you _probably shouldn’t create the platform team_. Otherwise you’re pulling revenue-generating engineers off the coal face just to throw darts at the wall.

> Photo by <a href="https://unsplash.com/@teapowered?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Patrick Robert Doyle</a> on <a href="https://unsplash.com/photos/inside-train-with-no-people-8mswK-LU5Vs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
