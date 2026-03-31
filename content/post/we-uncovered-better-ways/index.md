---
title: "What if we uncovered better ways of writing software, and nobody cared?"
description: "Agile briefly made some teams serious students of delay. AI may create another such window, and the industry may once again prefer the costumes to the theory."
date: 2026-03-22T12:00:00-04:00
image: ashin-k-suresh-mkxTOAxqTTo-unsplash.jpg
image_url: https://unsplash.com/photos/a-lit-up-box-sitting-on-top-of-a-table-mkxTOAxqTTo
image_attribution: Photo Ashin K Suresh on Unsplash
slug: "better-ways-nobody-cared"
draft: false
hidden: true
categories:
  - sdlc
  - ai
---

The idea that "coding was never the bottleneck" is exasperating.

I'm an old XP guy. From my frame of reference, [Extreme Programming](https://en.wikipedia.org/wiki/Extreme_programming) addressed most major bottlenecks in software delivery almost thirty years ago by outlining a series of prescriptions to eliminate them. I worked this way for years, I worked without it for many years afterward, and my judgment now is that _it worked_[^effective]. But while the broader industry adopted a kind of Agile pidgin, they mostly ignored the theory; software delivery got better, but not as good as it could be.

[^effective]: Many XPers were genuinely flabbergasted by the early popularity of PR review and complicated branching models. These tools solved a problem that our teams simply didn't have. I'm not trying to sound snide; it's true.

XP accelerated delivery by reorganizing the rest of the process around the coding team instead of forcing the coding team to wait on the rest of the process. Bring the bottlenecks _to_ the code, elevate them there, and you wind up with a development team that can stay more or less saturated.

At a lot of firms, the lesson is getting lost: it's clear the bottleneck is shifting, but it's not clear if they'll have what it takes to adapt. Incentive structures are difficult to change, and they inflect roles and process bottlenecks, means the mass disruption in work promised by the rise of AI may be several years further in the future than some folks are projecting.

## Your process is a system, and the system should serve an end

Agile grew out of enterprise consulting, not startups, and never really got over that impedance mismatch. Consultants billed by the hour, which made the cost of waiting visible in a way it rarely was for salaried employees. When everyone in the room costs $200 an hour, a meeting that could've been an email isn't just annoying; it’s a major optics problem. Product companies have extremely different incentive structures.

XP optimized for a lot of high-synchrony processes—team rooms, pair programming, TDD, on-site customers, collective code ownership, continuous integration—as targeted, opinionated answers to a specific question: how do we ship faster? These practices, and the technical systems that enabled them (Selenium, CruiseControl, early Kanban board software) came out of agile, not startups. They came out of shops whose business was, and is, software process expertise.

The [Theory of Constraints](https://en.wikipedia.org/wiki/Theory_of_constraints) gives a useful language for what XP was attempting to do: the throughput of a system is limited by its tightest constraint, and optimizing anything other than that constraint is mostly waste. XP applied that logic to software with startling directness: each practice existed to collapse a handoff that was slowing the system down.

Consequently, I used to watch ThoughtWorks teams walk into enterprises and [absolutely tear through a backlog](/p/thoughtworks-and-the-invention-of-modern-software-engineering/) in ways that the client's own teams couldn't replicate. The reason they couldn't replicate it wasn't talent; it was that the methodology required a level of discipline and commitment that most organizations couldn't sustain.

Pairing deemphasized solitary authorship; TDD and continuous integration made it harder to push quality and integration into some downstream phase owned by QA; on-site customers pulled decision-making into the room instead of leaving it at a decorous distance. These things are _systemically hard_, and they require that people change not just their habits but their _self-conception of impact_, that managers enforce novel expectations[^managers], and that organizations restructure incentives around collective flow instead of individual output.

[^managers]: Although ThoughtWorks in that era didn't actually have managers, really. It nonetheless worked, weirdly.

Early in my stint at ThoughtWorks, the company hosted a night out and a lot of us stayed out too late. I stumbled into work late, at 10am or something, and at any rate well after standup. Later that day, our project manager took me aside and stared me down. I don't care how hung you are, he said; standup is at 8:30. I don't care if you stumble out of it and throw up in the bathroom afterwards; I need you there on time.

Shortly after leaving ThoughtWorks I flipped into engineering management. One of my reports was a young engineer who was genuinely astonished that I similarly expected him to arrive on time every day. "You mean, like, even if I go out to a late night show?" Yes, I said; like that. 

In the XP (and consulting) world, the discipline was important. The product we were _selling_ was _software excellence_, which give us a particular incentivize structure, and many elements of the discipline itself were non-negotiable because _the process fell apart without it_. Thoughtworks successfully optimized for collective throughput, and got paid handsomely by larger firms to drive the same change. But that young engineer was right, in that context, and I was wrong. In-house, at the kind of presitigous startup I was then working at, I had entered into a world where it genuinely didn't really matter as much, and where he had sufficient bargaining power to push back.

[Scrum](https://en.wikipedia.org/wiki/Scrum_(software_development)) won the methodology wars in those environments not because it was better but because it was [worse-is-better](https://www.dreamsongs.com/RiseOfWorseIsBetter.html): it wasn't _very_ helpful, but it provided some marginal gains, and was _much_ easier to claim you were doing it. The world won't come to an end if you skip standup.

What got lost was the underlying insight. Not "iterate frequently" or "have daily standups," but: *your process is a system, the system has a bottleneck, and if you aren't identifying and elevating that bottleneck you are wasting time*.

## The pressure is different this time, but the logic is the same

Everyone seems to agree that the constraint has moved, but the mechanism here is not the same thing that drove Agile. LLMs create a different kind of visibility: implementation has gotten so cheap that everything *other* than implementation is now exposed; the design review that takes a week, the stakeholder alignment meeting that takes three, the deployment gate that exists because someone got burned in 2019. These were always there, but they were hidden behind the comfortable fiction that coding was the hard part. That fiction is over.

The systems logic, though, is the same: a constraint moved, and the organizations that notice will outperform the ones that don't. And except for the companies which are explicitly and visibly self-disrupting, much of the industry's response has been tepid so far: to optimize each step in isolation instead of optimizing the system.

If you look at the current crop of startups or AI launches, it sometimes seems like every role is fleeing into its own version of "AI but for me": [AI for designers](https://www.figma.com/ai/), [AI for product managers](https://airfocus.com/), [AI](https://claude.ai/) [for](https://chatgpt.com/codex) [coding](https://cursor.com/), [AI for QA](https://momentic.ai/). Each silo gets its own tool, its own workflow optimization, its own little acceleration, and none of it answers the question that matters: *where is the actual bottleneck, and are we even working on it?*

Systems produce work, not individuals, and optimizing a non-bottleneck does not improve the total throughput of the system. Goldratt figured this out in the 1980s, the Agile movement applied it to software in the 2000s, and we're watching everyone speed-run it in realtime all over again.

## The discipline this time is harder because the incentives are worse

Systemic process change always asks people to give up some local autonomy in exchange for better total throughput. That is hard enough on its own. The LLM version may be harder, because it does not just ask people to work differently; it asks organizations to revisit the boundaries between roles.

Part of what made XP effective was that it refused to treat a number of familiar organizational boundaries as inevitable.  The gain in throughput came from collapsing handoffs, but many of those handoffs existed because organizations grow accustomed to them, not because the work requires them.

This makes _truly_ collaborative work—not meetings, but collective delivery—both powerful and fragile. It does not merely ask people to work with more discipline; it asks organizations to accept a different _distribution of ownership_. Worse-is-better works because it preserves more of the old boundaries while offering a language of adaptation that managers can live with.

The current AI moment seems likely to create a similar pressure in slower-moving organizations. If a product manager can prototype a working feature with an LLM instead of writing a spec and waiting two sprints for engineering to build it, should they? If a designer can ship a working component instead of handing off a Figma file, should they? If an engineer can write the monitoring, the tests, and the feature in the same session because AI made the quality infrastructure cheap, should the org restructure to let that happen without three layers of review?

If your goal is to maximize throughput, then answer is clearly yes, and startups have already made their decision. The reason many established organizations are struggling with it, however, isn't mysterious. Role boundaries don't only organize work; they also help determine compensation, prestige, and the way the industry prices expertise. A serious attack on bottlenecks tends to make some of those boundaries look less necessary, which in turn makes certain ways of valuing work feel less stable.

Bottlenecks are often where prestige accumulates, and handoffs can persist not just because they are technically justified but because they preserve an arrangement people have become accustomed to being paid for. But if your design review process adds a week to every feature without adding a week's worth of value, and your competitor's designer ships working code in a day, the market will not care about the internal value your company places on its process and role boundaries.

Every role in the software delivery process should be asking itself a pointed question: am I adding value to the journey to production, or am I a bottleneck on it?

## The Agile for AI hasn't been written yet

It's clear that the next generation of startups will be born with entirely different organizational models, cost structures, and probably role definitions, and we'll learn from what they do the same way the industry eventually learned from what ThoughtWorks and Pivotal Labs did. It's been entertaining to watch other engineers treat process like an engineering challenge for a change.

The melancholy thing about XP is not that its ideas failed: it is that many of them worked, quite well, but the industry mostly chose to copy the surfaces. Some people talk about a mourning period as they watch LLMs eat the craft of software, but I already did my mourning years ago: it's very difficult to find shops which work the way I used to love to work. But between when Agile proved the point and when Scrum eroded its impact, an entire industry moved. Enterprises that took the hard version seriously shipped faster, at higher quality, and won markets. The window was open for years.

That window is open again. LLMs have made it impossible to pretend that coding is the bottleneck, which means every other part of the process is now under scrutiny in a way it hasn’t been before. You can treat this as an opportunity to get serious about your process, to identify the actual constraints, and to do the hard work of removing them. Or you can buy everyone a bunch of tokens, add an AI tag to your Jira board, and wait for the startups that did it right to walk over you.

Get cerebral about your stupid process. Take it seriously as an optimization problem and not received wisdom. The window's wide open right now, but it won't stay that way forever.
