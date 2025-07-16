---
title: 'Why I estimate'
description: Keep the process, kill the number.
date: 2025-07-15T10:00:34-04:00
image: 'image.png'
math:
license:
hidden: false
comments: true
draft: false
---

## The quest to kill meetings

About a decade ago I was leading the consumer product engineering division at a startup, and one of the teams I was leading was repeatedly flagging the same issue: too many meetings. Clawing back time to focus on day-to-day work is a recurring pain point for engineers, because for many of us it’s [difficult to regain our focus and concentration after an interruption](https://www.paulgraham.com/makersschedule.html). I started looking for opportunities to cut back on team rituals, and my gaze fell on estimation.

(By “estimation,” I mean the practice of assigning a numeric value—typically a relative measure like story points—to a unit of work, based on its expected effort, complexity, and risk.)

Estimation is a longstanding practice on agile teams meant to help them quantify work in a way that enables projection, alignment, and shared understanding with stakeholders. Like most engineers, I've often found it to be tedious and occasionally painful. It’s tough to pick a number that feels right, it’s a big timesink, and it’s sometimes unclear whether any of the effort was worth it.

Around that same time a school of thought had gained ground in agile project management called `#NoEstimates`. You can read some writeups by [Neil Killick](https://www.neilkillick.com/blog/noestimates-part-1-doing-scrum-without-estimates) and [Ron Jeffries](https://ronjeffries.com/xprog/articles/the-noestimates-movement/), but the argument for it goes something like this:

- Estimating is, as we know, a big time commitment and also kind of a bummer.
- Most task estimates fall within a predictable range, so if what you want is simply forward projection, counting stories is as good as counting estimates. Therefore, estimation is waste.
- You should be focusing on business outcomes in preference to deliverables _anyway_, so forward projection is itself problematic as a practice.

And I was sold! So I killed estimates on the team I was running.

## Taking risks to run lean

And it worked: we got a lot of time back, and I was still able to calculate reasonable delivery dates to share with stakeholders. I was and am confident that counting stories is no worse than stacking up estimates when trying to forward-project.

(I didn’t get anywhere with the argument that we should be iterating towards business outcomes; not every team and organization is set up to do that.)

But over time I started to notice some problems creeping in.

First, I started hearing questions from engineers about how work was being scoped. Was it getting specced right? What’s the actual expected deliverable or outcome? Had our product managers really thought this stuff through? What was the right forum to push back and reshape the work that was being surfaced for engineers to drive that could balance effort with impact?

So we started doing story review during sprint planning as a way of getting around this. It made sprint planning a bit of an uncomfortable scramble, we were trying to move fast and squeeze a lot into one meeting, but some folks enjoyed the pace.

Next, I started to see more friction between engineers on approach. Should we place the method in this class or that one? Do we drive this feature from the frontend backwards or is this a data-first problem? Where do the tests go? How can I be expected to review this PR if I don’t have context on the higher-level approach?

So we started doing occasional architecture reviews. They felt a little heavyweight—after all, we'd embarked on this to reduce meetings, not add them—and not everyone enjoyed the scrutiny, but they helped get us aligned.

It came to a head, though, when a particular initiative—some deep refactoring work—got completely blown out of scope. What one engineer had promised would take a week became two, then four, then the better part of a quarter. I was busy and didn’t provide enough guidance and scrutiny, and by the time I stopped it I’d lost trust with both my stakeholders and my engineers. Everyone was upset.

## Estimation was providing value we didn't immediately understand

Here’s what I discovered I had been missing by removing that ritual.

First, estimation provides a **natural review point** for upcoming work. This is both an opportunity to clarify or push back on requirements and to size the work appropriately. Without this review point, you lose benefit that `#NoEstimates` was buying you—the premise that if all stories fall within a certain delta you can just stack them up—because there’s no engineering-led pushback on size.

Second, estimation provides an **opportunity to align on approach**. Asking engineers to talk through an estimate has a secondary purpose of causing them to think through architecture and swap context on pain points in the codebase. Gaps between team members in capability and understanding become clearly visible. On many teams, there isn’t a natural secondary venue for this to occur.

And finally, though this one is more fuzzy, I’ve come to believe that **the act of quantifying a complex thing is really valuable**. Tyler Cowen likes to talk about how [a good way to enjoy an art museum even if you don't find it intrinsically interesting is to pretend you’re an art thief](http://www.artblog.net/post/2007/09/cowen/) and, in every gallery, choose which painting you’d steal first. He suggests this not because you’ll ever have the opportunity to do so (probably), but because introducing ideas like price and risk causes you to engage with the art more critically. This is important not for what it does for the project but for what it does for the person. What ends up in your head is what matters.

Can you gain these things without estimation? Absolutely you can, and if you’re mindful about it and know what you’re missing, you can design a process around it—which I think is the point the `#NoEstimates` folks were trying to make all along.

## So I just estimate instead

These days, this is what I ask my teams to try to sharpen up their approach.

**You should probably estimate.** This is one painful ritual that’s I've come to believe is probably worth the effort, until and unless you have a way to account for those other processes.

**I won’t hold you accountable for the number.** We all know that estimating software work is hard; I’m not going to wander around with a rubber mallet whacking individual engineers if their estimate doesn’t pan out. It’s the job of team management to use that data in a way that sets expectations appropriately with stakeholders, and doing so should include a margin of error.

In fact, **I don’t even care about the number.** If the act of estimating forces the team to ensure that all the stories fall within a certain size range anyway, then simply counting stories is probably enough for me to satisfy my stakeholders. Pick a number and then discard it for all I care.

Therefore, when running the meeting, **keep it breezy.** Move quickly. Try not to get too hung up on details or argue over fine points. Take things offline if needed. Make it fun if you can. At the very least, don’t make it more painful than it has to be. Healthy discussions that get at the heart of the difficulty of a story are great, but when in doubt, keep up momentum. You’re not going to get them all right, but it usually comes out in the wash.

## How to run a good estimation session

**The people doing the work provide the estimates.** If you’re a manager that’s not driving stories day-to-day, you probably shouldn’t estimate. Conversely, someone with a backend specialty may be expected to provide an estimate for frontend work as a way of surfacing team gaps or delivery risks.

**Everyone on the team estimates at once** to ensure that people don’t bias each other. Usually I’ll use rock-paper-scissors for this; even distributed teams can do this over Zoom with some effort, and there are tools that can help.

**Stories and (tech debt) tasks get estimates; bugs don’t.** You can make an argument for estimating bugs, and I won’t mind if you do, but it makes the meeting shorter if you skip them.

**The higher estimate wins.** Err on the side of caution and bias towards the estimate of the team member with the least context. It’s important to move fast, but no one’s getting a prize for coming in under target on an individual story.

**Smaller stories are better; if a story is too big, _split it_.** I find it useful to use the INVEST principles to evaluate story quality; I will say for my part that I think “small” is the most underrated principle.

**Spike to reduce uncertainty.** Spikes are _short, time-boxed_ efforts to help understand and de-risk project delivery; if you can’t reach a conclusion on a approach in the context of an estimation session, it may be worth taking the discussion offline and writing some code to validate.

Pick a cadence that’s **less frequent than sprint planning**. Aim for every month or at most every couple of weeks; frequent enough that you’re getting the review you need but not so frequent that it’s more of a burden than it needs to be. Project kickoffs are a good time to run these.

## Bringing it back to what stakeholders actually want

The chief issue with story points is that they explicitly decouple effort and time—but your stakeholders mostly care about time, not complexity. Sometimes things that aren't complex take lots of time, and things that are can move surprisingly quickly. Running estimation sessions doesn't solve the problem of communicating expectations back to stakeholders.

But if you've built a process to review stories and align on approach with your engineers, you're back where you started with `#NoEstimates`—you can forward-project delivery based on past performance. And once _that_ feels safe, come back and reevaluate your meeting schedule—although for my part I start with other meetings first these days.
