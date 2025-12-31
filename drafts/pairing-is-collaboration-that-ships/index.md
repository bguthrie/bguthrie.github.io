---
title: "Pairing Is Collaboration That Ships"
description:
date: 2025-11-11T23:10:14-05:00
image:
math:
license:
hidden: true
comments: true
draft: true
---
# Pairing Is Collaboration That Ships

I've come to believe that a lot of collaboration slows delivery, and [fast matters](/p/the-move-faster-manifesto/). Validating an approach by checking with others _often_ improves success and lowers risk, but it _always_ carries a cost: it delays validation from real usage, diffuses accountability, and saps time and attention. Cross-team collaboration, in particular, is a killer.

The fix is not to swear off working together. The fix is to match collaboration mode to system boundaries.

## Teams, code, and boundaries

Your architecture will in general come to reflect your organization structure, for the best reasons: good teams like to work together, and optimize for their own productivity. If a team can make most changes without outside permission, it will tend to move faster within the boundaries it controls.

Inside a team, results-oriented collaboration is extremely valuable: knowledge transfer reduces fragility, synchronous review speeds time to production for complex changes, and the opportunity to work with senior developers helps grow more junior ones quickly and efficiently.

The best kind of results-oriented collaboration is pairing: it is collaboration that gets shit done. I mostly use the term for technical work, but the term can be used broadly for any kind of aligned work in which the shared goal is to _accomplish something_. Unfortunately, pairing has gone somewhat out of fashion, which is a pity; when you do it right, pairing is fucking great.

## Pairing is the way

Pairing can come in lots of different forms, but to my taste, when I sit down next to someone I don't want to noodle or discuss or hem and haw. I want to _build something_—a self-contained improvement to a technical system, scoped appropriately—and ship it, ideally in a single sitting. Then we're done, and we've done something together.

A lot of people prefer deep work to pairing, which is fair. Solo deep work is real, but it is not a universal or reliable fuel source. For many people, deep work arrives in bursts. It is precious and uneven. A good workflow cannot depend on uninterrupted hours. It needs to convert short windows and shared presence into progress. Pairing replaces the fantasy of long focus blocks with short, concrete cycles that end in a merged change. It is collaboration calibrated to the human brain we actually have, not the idealized one in productivity books.

The same folks who will schedule a 60 minute design review with eight attendees will say pairing is wasteful. As if two engineers moving one change from idea to reality is inefficient, while eight people talking about a change that might never see the light of day is good stewardship. Spare me.

Why pairing works
1. Context transfer. Two brains on one diff move faster than any doc can. You learn the sharp edges of a system by steering around them together.
2. Bias toward action. Sitting side by side, in person or remote, kills bikeshedding. The unit of progress is a merged PR, not a meeting note.

How to pair so it ships
*	Start with a slice, not a saga. One test, one endpoint, one migration, one panel. If it does not fit in a morning or an afternoon, the slice is too big.
* Define done in code. A passing test, an observable metric, a visible UI change. No “we will write tests later.”
* Drive and navigate. One person types, the other holds direction. Swap every 20 to 30 minutes or at natural boundaries. No spectators.
* No taste debates mid flow. If it is not correctness or safety, optimize for momentum. Capture refactor ideas as TODOs or issues or linter plugins and revisit after merge.
* End with a merge. Not “almost there,” not “clean up tomorrow.” Use a flag if needed, but make the improvement real.

Craft practices that power both pairing and solo work
* Trunk based development with small PRs
* Fast CI under ten minutes and pre commit hooks
* Feature flags for safe iteration
* Hermetic dev envs with scripts or containers
* Tests that pull their weight. Unit where cheap, integration where meaningful, smoke in prod
* Observability so “works on my machine” ends quickly
* Clear interfaces with contracts and schemas

## Cross-team collaboration: why it feels similar, and why it isn't

Cross-team collaboration gets a better rap than it should. It's not always counterproductive, but it is expensive, and it's too easy to pretend otherwise. Every consensus round weakens ownership, and every meeting just becomes part of the background radiation. Its advocates point to the cost of rework, as if debating a change instead of shipping it is free.

It is not. The waiting is the expensive part.

Use cross-team collaboration when the boundary is real and the interface is stable. Avoid it when you are trying to co-own implementation. That route produces shared accountability and shared confusion.

When you must do it, treat cross-team work like a contract negotiation, not a co authoring session. Keep ownership singular and the surface area small. Agree on payloads, SLAs, and error contracts. Prefer RFCs with explicit decision windows over meetings. Break the effort into shippable team local steps. Integrate at thin seams with dates, not recurring ceremonies.

### Knowledge transfer that builds resilience

The right kind of knowledge transfer reduces fragility. Pairing creates overlapping understanding without creating shared ambiguity. Two people touch the code together, so both can answer pages, review changes, and mentor others. You eliminate single points of failure and make rotations less risky.

This is slack that helps. Not idle time, not bloated buffers, but distributed capability. Pairing seeds practical know how so more people can diagnose issues, recover from incidents, and keep momentum when someone is out. Docs matter, but embodied knowledge moves faster when it counts.

A resilient org is one where more than one person can change a critical system with confidence, and more than one person can debug it under pressure. Pairing grows that capability. Isolation grows depth. Together they add slack in the right place, inside the people and inside the code, so the system tolerates faults without cascading failures.

### When to isolate and when to pair

Isolate when the problem is well understood, the change is mechanical, or you need quiet for tricky reasoning such as performance tuning or gnarly refactors. Pair when the domain is unfamiliar, the risk of getting it wrong is high, the feedback loop matters, or you want to spread ownership. If delay costs more than a second set of eyes, pair.

Rules that keep collaboration honest:
1. Every session produces an artifact. A merged PR, an updated migration, a new panel. If not, the session did not need to happen.
2. Decisions live next to code. ADRs or comments in the repo beat slides in a drive.
3. Scope is a budget. If you blow it, cut scope, not quality, or stop and rethink the slice.
4. The calendar is guilty until proven innocent. Meetings need an agenda and an artifact to justify themselves.
5. Ownership is singular. Collaboration can advise, but only one owner decides.

## Collaboration should accomplish something

“Collaboration” as an abstract virtue is a trap. It tempts teams to replace engineering with ceremony, and outcomes with optics. Isolation respects the craft and the constraints. Pairing, done right, gives you the only collaboration that matters.

Pick work that fits in your hands. Build it with someone who wants to ship. Merge it. Repeat.
