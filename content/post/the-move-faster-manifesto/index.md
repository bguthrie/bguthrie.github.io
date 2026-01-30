---
title: 'The Move Faster Manifesto'
description: 'Lessons for shipping software quickly by skipping the grind'
date: 2025-02-19T09:00:00-05:00
image: 'cara-fuller-34OTzkN-nuc-unsplash.jpg'
image_credit: 'Photo by Cara Fuller on Unsplash'
image_credit_url: 'https://unsplash.com/@caraventurera'
categories:
  - sdlc
aliases:
  - /faster
---

I've worked in the software industry for over twenty years. I have been a consultant, a line engineer, a director, a founder, and a CTO. I have worked at firms as small as two engineers and as large as fifty thousand. I frequently get asked how to move faster in software. This is what I say.

It is easier to describe than it is to do.

## Rules for moving faster

I am not some kind of process relativist; process matters. Some teams ship software more quickly and at higher quality than others, and that's not an accident; it's a choice.

Here are my rules for moving fast:

1. It Is Possible To Move Fast, And Fast Matters
2. Fast Is Measured By What Other People See
3. You Can Be Both Fast And Good
4. It Is Everyone's Responsibility To Move Fast
5. Moving Fast Takes Courage
6. Busy Is Not Fast
7. Change Fast Or Die

### It Is Possible To Move Fast, And Fast Matters

History is full of things that moved fast when everyone involved decided that they had to. The [Berlin Airlift](https://history.state.gov/milestones/1945-1952/berlin-airlift). The [construction of the Empire State Building](https://chrisgagne.com/1255/mary-poppendiecks-the-tyranny-of-the-plan/). Stripe's Patrick Collison has a [whole page of this stuff](https://patrickcollison.com/fast).

Some people argue that you shouldn't optimize for speed, and focus a lot on getting each individual feature right instead. I disagree. Every feature is a _bet_ on a some future payoff. Some pay off, some don't, but all else being equal, shipping more frequently means more turns at-bat. More swings means more hits.

Moving slowly is often a **choice**: everyone involved has decided that speed is a subordinate requirement to talking to all the right people, writing all the right documents, and ticking all the right boxes. Sometimes that's necessary. But the hardest part of moving fast isn't execution; it's deciding that it's necessary, and then convincing people that it's possible.

### Fast Is Measured By What Other People See

Speed isn't about effort; it's about **lead time**. Lead time is the **wall-clock time** between when someone asks for something and when they get it. The right measure is _not_ efficiency or typing speed or utilization or velocity or burn. **It's about what the outside world experiences.**

Lead time is a model. Like all models, it is wrong but sometimes useful. It is not hard to identify its holes; most notably, even if you ship software fast, the business can still fail. Fast is not the same thing as successful.

But perception matters. One of your jobs—whether you're an engineer or a manager—is managing expectations. The perception of speed builds **trust**.

### You Can Be Both Fast And Good

In fact, it is very difficult to be fast if you are bad. Software which is delivered quickly but is not **valuable** does not count for much, and any necessary rework counts against the lead time of the feature. You have to be both.

Most software engineers have a nightmare story of long hours and unrealistic expectations. The fastest teams I've ever worked did not suffer from these problems, because everyone involved optimized for lead time and spent a lot of time thinking about how to improve it. Grinding to move fast is neither necessary nor sufficient.

Shipping software fast is not the same thing as shipping software at (1) a high degree of functional or build quality or (2) with a particularly strong match to user desire or business goals. Nonetheless, I see many teams making the mistake of insisting that you must move slowly and deliberately in order to move quickly. This is false, or at best misleading.

### It Is Everyone's Responsibility To Move Fast

The most profound lesson in software process is that many of the gating processes we erect to prevent errors do the opposite: deferring code merges does not make the merge easier, deferring deploys does not make the releases safer, deferring security audits does not make the system more secure, deferring unit testing does not make writing the initial code easier, and deferring delivery of features to perform more analysis does not reliably make those features more successful. [Broken legs heal better if you walk on them within weeks, not months](https://www.scientificamerican.com/article/broken-legs-and-ankles-heal-better-if-you-walk-on-them-within-weeks/). Padding reduces sensation. You have to ship, and to learn, and to adjust.

Everyone involved in the process—from management to product to security to infrastructure to line engineer to tester—has a responsibility to understand how to create flow to get things out the door safely.

Engineers often see themselves as victims of bad process, and forget that they have enormous agency. Craft matters. On most teams, engineers have quite a lot of latitude—how and then they'll test, which pieces to work on first, the quality of their tooling. Believing that management has a responsibility to encourage faster work does not obviate anyone else of the responsibility.

### Moving Fast Takes Courage

Moving fast means making decisions without perfect information.

The best teams act to create clarity, especially about who's in charge and authorized to make a call. They trust their instincts, ship, and course-correct when needed. They reward boldness, not just caution.

It can be difficult to gain the courage of one's convictions to act, especially if to act is to risk causing harm. To grow old is to understand the gap between what you believed to be true and what was. If you're in a leadership role, building this is important. People won't take risks if they think they'll be punished for it. If you want a fast-moving team, you have to build a culture where trying, failing, and adjusting is normal.

Leaders who cannot build clarity, and who lack courage, will struggle to guide their teams with conviction.

### Busy Is Not Fast

Being overloaded isn't the same as being productive. Effort isn't outcomes. It's waiting, _which is slow and expensive_. Waiting on reviews. Waiting on decisions. Waiting on other teams.

Someone who picks up a feature, partially completes it by submitting a pull request, moves on to else for a couple of days, and _then_ ships it is not moving very fast, even if they've been busy the entire time. To an outside observer, _the feature has gone nowhere in the two days after it was supposedly done_. The engineer who opens a pull request, _taps a colleague on the shoulder immediately_, twiddles their thumbs for half an hour, and then revises and merges immediately has done the same amount of work, but _much faster_.

This is why practices like pair programming, continuous deployment, and cross-functional teams tend to work well: they reduce the time when work just sits idle. If you want to move fast, don't just focus on the hours worked; look at the dead space between them.

### Change Fast Or Die

Learning (in business) is not an intrinsic good. Learning only matters if you can use what you've learned to improve. The ability to respond to change is a competitive advantage.

Work is only done when you learn whether or not it was worth doing. Learning whether it was worth doing only matters if you adjust based on what you learned. It matters how fast you learn, and it matters how fast you adjust. Adjusting fast is important even if it can seem jarring. Learn how to react quickly.

Your real competition, in tech, usually isn't a giant slow-moving corporation—it's a smaller, scrappier team that's changing twice as fast as you are. Change can hurt, but change hurts less than failure. Change fast.
