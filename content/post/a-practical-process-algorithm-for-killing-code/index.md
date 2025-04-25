---
title: 'A Practical Process Algorithm For Killing Code'
description: 'How to deprecate all your systems without burning all your bridges'
image: 'spencer-watson-p0Yupww_SNM-unsplash.jpg'
date: 2025-04-23T19:08:00-04:00
---

I used to run an internal software platform department (infrastructure, tooling, devops), and every so often, it was our immense honor—and, indeed, joy—to delete old code. But the trouble with old code is that it sometimes still _does_ things, and even the undesirable things often matter to someone somewhere. The practical mechanics for doing so without irritating the bejesus out of everyone were thus a source of concern. This is a case where, unfortunately, some amount of lead time is, if not entirely unavoidable, probably preferable on balance.

If you're on a platform or infrastructure team and you'd like to kill a thing without causing a kind of passive-aggressive organization-wide brain spasm, this guide may be of use.

Amateurs may call this "change management," but I am a professional and so prefer the term "algorithm," because it sounds way more hardcore. This, then, is my algorithm for deprecating with intent to kill:

1. Publicly announce your intent to deprecate a thing as widely and loudly as possible. **Give a hard date for when you plan to finally delete it.** Make it far enough in the future that people have time to address it but not so far that they don't feel a healthy, productivity-inducing sense of panic tingle down their spine. I like **three months**; your mileage may vary.
2. In the announcement, tell people about **why you're doing it, what would cause you to reconsider, and where to ask questions**. Make someone accountable for answering them, preferably someone else.
3. Place the thing **behind a feature flag** (if feasible). Add analytics or tracing for measuring usage (if needed).
4. **Two weeks before the date**, remind everyone. If you have usage data, identify any active users and poke them specifically. Important: identifying active users may be hard. **There may in fact be no currently-employed human beings associated with the usage in question.** Anyway, good luck. Fortune favors the bold!
5. **One day before the date**, remind everyone again.
6. **A week _after_ the date**, flip off the feature flag. No one ever has their shit ready on time and if you're prepared in advance to flex on date it makes you look super chill about the whole thing. Important: **Don't _not_ flip off the feature flag.** They had their chance.
7. **One month later,** delete the flag, delete the code, and order the cake. You did it. You pulled a [reverse XKCD 927](https://xkcd.com/927/), you legend, you.

You'd be surprised how much trust, to say nothing of awe and perhaps a touch of fear, you build by simply following through on that last bit.

If this works out for you, reach out and let me know. I'd be delighted to hear about it.

> Photo by <a href="https://unsplash.com/@thebrownspy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Spencer Watson</a> on <a href="https://unsplash.com/photos/black-high-trees-under-white-and-black-sky-at-golden-hour-p0Yupww_SNM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
