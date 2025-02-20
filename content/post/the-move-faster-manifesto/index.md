---
title: "The Move Faster Manifesto"
description:
date: 2025-02-19T09:00:00-05:00
image: "cara-fuller-34OTzkN-nuc-unsplash.jpg"
categories:
  - sdlc
---

I've worked in the software industry for over twenty years. I have been a consultant, a line engineer, a director, a founder, and a CTO. I have worked at firms as small as two engineers and as large as fifty thousand. I frequently get asked how to move faster in software. This is what I tell them. It is easier to describe than it is to do.

## Rules for moving faster

I am not some kind of software process relativist. Every team has a process, some have more process than others, and that process matters. Some teams likewise ship software more quickly and at higher quality than others, and I think that all else being equal, good teams think a lot about how to move quickly.

Here are my rules for moving fast:

1. It Is Possible To Move Fast, And Fast Matters
2. Fast Is Measured By What Other People See
3. It Is Possible To Be Both Fast And Good
4. It Is Everyone's Responsibility To Move Fast
5. Fast Is More Important Than Efficiency Or Utilization
6. Fast Does Not End When You Ship
7. To Move Fast, Be Prepared To Change
8. You Must Have Clarity, You Must Have Courage

### It Is Possible To Move Fast, And Fast Matters

The world is full of examples of things that moved quickly when everyone involved decided that they had to. The [Berlin Airlift](https://history.state.gov/milestones/1945-1952/berlin-airlift). The [construction of the Empire State Building](https://chrisgagne.com/1255/mary-poppendiecks-the-tyranny-of-the-plan/). Stripe's Patrick Collison has a [whole page of this stuff](https://patrickcollison.com/fast).

Some people argue that it is silly to optimize for moving fast, since not all features move the needle, and instead you should focus a lot on getting each individual feature right. I disagree. The mental model I use for most features is that each one represents a _bet_ on a some future payoff. They will not all pay off, nor will the ones that do pay off all do so to the same degree. But all else being equal, shipping more frequently means more turns at-bat, which means your expected total return is higher.

Moving slowly is often an (implied) choice: everyone involved has decided that fast is a subordinate requirement to talking to all the right people, writing all the right documents, and ticking all the right boxes. Sometimes they are right; part of gaining experience is experiencing the pain of others' mistakes. The hardest part of moving fast is deciding that it is necessary, and then subsequently convincing everyone that it is possible.

### Fast Is Measured By What Other People See

Lead time—the **wall-clock time** between when a feature is requested and when it is delivered in a way that adds **value**—is the right way to think about moving faster. The right measure is _not_ efficiency or typing speed or utilization or velocity or burn. It is the time between an _outside observer_ believes you have begun working on something and when it is complete enough to be **valuable**.

Lead time is a model. Like all models, it is wrong but sometimes useful. It is not hard to identify its holes; in no particular order: (1) your team may not have an outside observer who cares; (2) "value" has an amorphous definition that is hard to measure; (3) "valuable" has an amorphous definition is that is hard to measure; (4) many other things also turn out to matter; and last but not least, (5) even if you ship software fast, the business can still fail. Fast is not the same thing as successful.

Pragmatically, the other reason why lead time is useful is because one of your jobs as a working engineer or EM is to _manage eyeballs_ by creating a _perception_ that you are moving fast. Managing eyeballs matters.

### It Is Possible To Be Both Fast And Good

In fact, it is very difficult to be fast if you are bad. Software which is delivered quickly but is not **valuable** does not count for much, and any necessary rework counts against the lead time of the feature. You have to be both.

Most software engineers have a nightmare story of long hours and unrealistic expectations. The fastest teams I've ever worked did not suffer from these problems, because everyone involved optimized for lead time and spent a lot of time thinking about how to improve it. Grinding to move fast is neither necessary nor sufficient.

Shipping software fast is not the same thing as shipping software at (1) a high degree of functional or build quality or (2) with a particularly strong match to user desire or business goals. Nonetheless, I see many teams making the mistake of insisting that you must move slowly and deliberately in order to move quickly. This is false, or at best misleading.

### It Is Everyone's Responsibility To Move Fast

Everyone involved in an SDLC process—from management to product to security to infrastructure to line engineer to tester—has a responsibility to understand how to create and nurture flow in order to get things out the door. The most counterintuitive and profound lesson in software process is that many of the gating processes we erect to prevent errors instead do the opposite: deferring code merges does not make the code better, deferring deploys does not make the releases safer, deferring security audits does not make the system more secure, deferring unit testing does not make writing the initial code easier, and deferring delivery of features to perform more analysis does not reliably make those features more successful. (Broken legs heal better if you walk on them within weeks, not months)[https://www.scientificamerican.com/article/broken-legs-and-ankles-heal-better-if-you-walk-on-them-within-weeks/]. Padding reduces sensation. You have to ship, and to learn, and to adjust.

Individual contributors often see themselves as victims of bad process, and forget that they have enormous agency. Craft matters. On most teams, engineers have quite a lot of latitude—how and then they'll test, which pieces to work on first, the quality of their tooling. Believing that management has a responsibility to encourage faster work does not obviate anyone else of the responsibility.

### Fast Is More Important Than Efficiency Or Utilization

Busy is not the same thing as fast. _Waiting is expensive_. An engineer that picks up a unit of work, partially completes it by opening a pull request, moves on to a different feature for two days, and then merges the feature is not moving very fast, even if they've been busy the entire time, because to an outside observer, _the feature has gone nowhere_. The engineer who opens a pull request, taps a colleague on the shoulder, twiddles their thumbs for half an hour until the review is done, and then merges it immediately has moved faster: to an outside observer, the feature is ready more quickly.

Through this lens, you can see how some engineers become so obsessed with pair programming. Two people working together in tandem to give each other instaneous code review will often be able to ship much faster than the same two people working alone. The feature might seem to cost twice as much, because two people are driving it, but it ships much more quickly and without skipping any necessary peer review processes along the way.

### Fast Does Not End When You Ship

Work is only done when you learn whether or not it was worth doing. Learning whether it was worth doing only matters if you adjust your approach on the basis of what you learn. It matters how fast you learn, and it matters how fast you adjust on the basis of what you've learned. Adjusting fast on the basis of what you learned is important even if it can seem jarring. Your reaction time should be fast.

### To Move Fast, Be Prepared To Change

Learning (in business) is not an intrinsic good. Learning only matters if you can use what you've learned to improve your product and your business. The ability to respond to change is a competitive advantage.

The processes you're using today and the things that you're working on are almost definitionally not correct. Entrepreneurs sometimes like to remind themselves that their competition is Big Company X; it's some product manager and some understaffed development team at some Big Company X who may or may not be incentivized adequately and in all the right ways to respond to change quickly enough to sense and address competitive threat.

Change can hurt, but change hurts less than failure. Change fast.

### Build Clarity, Reward Courage

It is difficult to reward courage if someone important makes the wrong decision and people suffer. It is difficult to build clarity in an unclear world: we must all sometimes demonstrate resilience in the face of ambiguity.

Nevertheless, one of the most difficult parts of moving fast is that it is sometimes safer to build consensus. It can be difficult to gain the courage of one's convictions to act, especially if to act is to risk causing harm. To grow old is to understand the gap between what you believed to be true and what was.

Build clarity that risk-taking is a necessary part of action is important. Reward people who have the courage to take risks, and who retain the courage of their convictions. Act to limit the downsides of risks gone wrong. Build a culture of introspection and iteration towards success. Leaders who cannot build clarity, and who lack courage, will struggle to guide their teams with conviction.

> Photo by <a href="https://unsplash.com/@caraventurera?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Cara Fuller</a> on <a href="https://unsplash.com/photos/cheetah-running-on-brown-field-34OTzkN-nuc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>.
