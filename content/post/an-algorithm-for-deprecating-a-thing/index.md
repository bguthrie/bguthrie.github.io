---
title: 'An Algorithm for Deprecating a Thing Internally'
description: 'How to delete code, eventually'
image: 'spencer-watson-p0Yupww_SNM-unsplash.jpg'
date: 2025-04-23T19:08:00-04:00
---

I used to run a bunch of platform teams—infrastructure, legacy monoliths, developer experience stuff—and periodically it was our joy and honor to delete code with extreme prejudice. However, the practical mechanics for doing so without irritating the bejesus out of everyone else were a frequent source of concern. This is a case where, unfortunately, some amount of lead time is, if not entirely unavoidable, probably preferable on balance.

In case it's useful, this is the algorithm I use for deprecating a major thing internally:

1. Publicly announce your intent to deprecate a thing. **Give it a hard date.** Make it far enough in the future that it gives affected teams time to plan for it and fix it but not so far that they don't feel a mild sense of panic tingle down their spine. I like **two months**; your mileage may vary.
2. In the announcement, tell people about **why you're doing it, what would cause you to reconsider, and where to ask questions**. Make someone accountable for answering them.
3. Place the thing **behind a feature flag** (if feasible). Add analytics or tracing for measuring usage (if feasible).
4. **Two weeks before the date**, remind everyone. If you have analytics, poke the specific people in question.
5. **A day before the date**, remind everyone again.
6. **A week after the date**, flip off the feature flag. No one ever has their shit ready on time and if you're prepared in advance to flex on date it makes you look super chill about the whole thing. Important: **Don't _not_ flip off the feature flag.** They had their chance.
7. **A month later,** delete the code and the feature flag and buy everyone a "we killed code" cake, or something.

If this works out for you, reach out and let me know. I'd be delighted to hear about it.

> Photo by <a href="https://unsplash.com/@thebrownspy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Spencer Watson</a> on <a href="https://unsplash.com/photos/black-high-trees-under-white-and-black-sky-at-golden-hour-p0Yupww_SNM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
