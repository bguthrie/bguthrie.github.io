---
date: "2024-11-26T17:47:44-05:00"
draft: false
title: "Thoughtworks and the invention of modern software engineering"
image: "muzammil-soorma-ayV1mD3HGyg-unsplash.jpg"
categories:
  - history
  - industry
---

## The end of an era

It's been rough couple of years for Thoughtworks. After a long-awaited IPO in 2021, their stock price declined steadily, prompting the board to replace longtime CEO Xiao Guo with Mike Sutcliff, who has now taken the firm private again. Xiao was a protégé of Thoughtworks' founder Roy Singham and a 25-year veteran of the firm, and as such was deeply immersed in its unique culture, while Sutcliff is a longtime Accenture veteran. While it’s too soon to say what further changes this will bring (though common consensus seems to eventual acquisition by a larger firm), this marks the end of an era and the likely turnover of the leadership team.

This matters for a couple of reasons. First, it marks the first real break from the leadership culture of its founder. Second, that break matters because Thoughtworks’ way of working was deeply weird, and the innovations that weirdness made possible have had an outsize impact on the software industry. My goal is to describe how it worked, and why you should care.

This is personal for me. I worked there for six years (2007-2013), made many friends, and have gone on to lead technology teams and start several firms since. I’m thoroughly convinced that, in its structure, aims, and ways of thinking about the world, it was unlike any other technology company in the industry in both culture and impact.

## Why this matters

Like many alumni of the firm, I spent the first several years of my post-consulting career trying to recreate some of that magic, because I’ve never experienced anything else like it. Thoughtworks could walk into a firm, plop down a team of people who'd mostly never worked with each other before, and absolutely _scream_ through a software backlog—without compromising on quality. In contrast, large enterprise contracting firms (TCS, Wipro, Infosys) vary wildly in both quality and velocity, and smaller agencies (e.g. Huge) deliver quickly but often struggle to build a quality product. In their unity of culture and vision and focus on delivering value, Thoughtworks stands almost alone in the enterprise space. Only the late Pivotal Labs and a handful of boutique firms can make a comparable claim.

The reason I spent so much time trying to recreate this culture is because I want teams as good as their teams. I don't want to hire _devops engineers_ with _continuous integration skills_; I want to hire people who understand _in their bones_ why anything like a continuous integration server was _ever necessary to begin with_. Not engineers who live downstream of innovation, but engineers who create it.

The usual reason why teams adopt practices is tools. Pull requests reified the traditional OSS practice of reviewing patches over email, and continuous integration _servers_ reify the continuous integration _practice_ of continually committing changes to a mainline. What makes Thoughtworks notable to me, starting with Martin's interest in pattern languages, is that Thoughtworks made their contributions by _process_.

They didn't do it purely out of commitment to “A-player” talent, though a number of very talented folks cycled through there. But all the A-player talent in the world can’t help you if you fling them at the wrong problems, or organize them poorly, or fail to align their values and goals. What Thoughtworks had was a replicable system for software delivery that worked and that was competitively defensible and hence difficult to replicate, but for which the market has now eroded dramatically. I spend a lot of time thinking about how to build software teams, and consequently, I’ve spent a long time thinking about that system. This is my attempt to lay it out.

### Martin & Roy

Thoughtworks was founded in the late 90s in Chicago by Roy Singham as a seller of bespoke solutions for accounting software. Roy was a serial entrepreneur; born a diplomat’s son to a Sri Lankan father and midwestern American mother and raised in Jamaica, he had a global perspective but a rather more prosaic goal: to turn his IT chops into a business.

That goal grew in ambition rather considerably after Roy met [Martin Fowler](https://martinfowler.com/). Martin was part of a group of software pioneers trying to reform how the industry approached software development and was a member of the seminal [C3 team](https://en.wikipedia.org/wiki/Chrysler_Comprehensive_Compensation_System) ([Martin's writeup](https://www.martinfowler.com/bliki/C3.html), [C2 wiki](https://wiki.c2.com/?WasChryslerComprehensiveCompensationSuccess)), and shortly after he joined Thoughtworks in 2000 he’d go on to become a signatory of the Agile Manifesto, which is the most significant single document about software process ever written. After that, Thoughtworks’ way of working and engine of growth would be defined by Agile software principles.

The other major philosophical commitment driving Thoughtworks’ strategy was the principles of its founder: Roy was (and is?), almost uniquely amongst founders of American global capitalist enterprises, a committed communist. Roy’s private, but sincere, commitment to leftist politics, and Martin’s very public commitment to Agile, would come to define Thoughtworks’ culture, values and strategy.

Those commitments redefined an industry. The software industry is full of the detritus thrown off by transformations to Agile, or Agile-adjacent, processes: sprints and story points and retrospectives and standups and walls upon walls upon walls of sticky notes, at least before it all went remote. Thoughtworks certainly can’t claim sole credit (blame?) for that transformation, but what it did do, again and again, is demonstrate to blue-chip enterprises—banks and insurance companies and publishing houses and telcos—that those processes could work. Thoughtworks’ explicit focus on the enterprise meant that executives all over the world got introduced to Agile in a way they might never have otherwise. Those executives were paying particularly close attention because Thoughtworks, at a time when the industry was increasingly moving offshore to firms like TCS and Wipro in pursuit of cheap labor, cost a fucking fortune to hire.

### A brief, incomplete summary of impact

Here is a short list of now-standard software delivery techniques that ThoughtWorkers either invented directly or pioneered in the nascent stages of their growth. I don’t want to give them sole credit; many of the books and projects listed have non-Thoughtworks coauthors or major collaborators, and it is not my intent to minimize their impact. But a number of technical and process innovations stand out for the role that current or past Thoughtworks employees played, and I claim that outside of Google and Microsoft and a handful of other tech-first West Coast firms you'd struggle to find similar impact.

- Continuous integration ([Martin Fowler](https://martinfowler.com/articles/continuousIntegration.html), [James Shore](https://www.jamesshore.com/v2/blog/2006/continuous-integration-on-a-dollar-a-day) et al; Matt Foemmel, [CruiseControl](https://wiki.c2.com/?CruiseControl), ca. 2000; [CC.net](https://github.com/ccnet/CruiseControl.NET) (Rogers, Roberts et al, 2004), [Go](https://martinfowler.com/articles/continuousIntegration.html), Jez Humble et al, 2007)
- Enterprise application patterns, including Active Record, Unit of Work, Data Mapper, MVC ([Martin Fowler](https://martinfowler.com/articles/mocksArentStubs.html), 2002)
- Database migrations ([Pramod Sadalage](https://www.amazon.com/Refactoring-Databases-Evolutionary-Database-Design/dp/0321293533/), 2006)
- Behavior-driven development ([Dan North](https://dannorth.net/introducing-bdd/), 2006)
- Browser-based end-to-end testing (Huggins, Selenium, 2004; Stewart, WebDriver + Selenium 2+, 2007)
- Formalized methods of unit testing, including the London School (most particularly [Freeman, Pryce](https://www.amazon.com/Growing-Object-Oriented-Software-Guided-Tests/dp/0321503627))
- Dependency injection (Picocontainer) ([Walnes, Hammant, Tirsen, Hellesøy](http://picocontainer.com/introduction.html), 2010 _at least_)
- REST (not invented, but popularized as an enterprise pattern by [Webber, Robinson](https://www.amazon.com/REST-Practice-Hypermedia-Systems-Architecture/dp/0596805829), 2010)
- DSLs (I recall vividly the entire company becoming obsessed by these thanks to Ruby and [Fowler, Parsons](https://martinfowler.com/books/dsl.html), 2010)
- Continuous delivery and deployment ([Jez Humble, Dave Farley](https://www.amazon.com/Continuous-Delivery-Deployment-Automation-Addison-Wesley/dp/0321601912), 2011)
- Graph databases ([Robinson, Webber](https://www.amazon.com/Graph-Databases-Ian-Robinson/dp/1449356265), 2013)
- DevOps Research & Assessment metrics ([Jez Humble](https://medium.com/@jezhumble/doras-journey-an-exploration-4c6bfc41e667), 2014)
- Microservices ([Sam Newman](https://www.amazon.com/Building-Microservices-Designing-Fine-Grained-Systems/dp/1491950358), [James Lewis](https://martinfowler.com/articles/microservices.html), 2015)
- Infrastructure as code ([Kief Morris](https://www.oreilly.com/library/view/infrastructure-as-code/9781098114664/), 2016)
- Evolutionary architecture ([Ford, Kua, Parsons, Sadalage](https://www.amazon.com/Building-Evolutionary-Architectures-Support-Constant/dp/1491986360), 2017)
- Data meshes ([Zhamak Dehghani](https://martinfowler.com/articles/data-mesh-principles.html), 2020)

Some of these came from employees actively working at Thoughtworks, and some came from further contributions of Thoughtworks alumni, who’ve gone on to substantial leadership roles at most major tech firms. In particular, Jez Humble’s work with Dr Nicole Forsgren on DORA and Accelerate stands out as a contribution from a Thoughtworks alumnus seeking to expand upon and validate the consulting work he’d done with the firm prior.

Thoughtworks represented a parallel excellence track for tech: Chicago and Bangalore, not Silicon Valley or New York; egalitarianism married to good old-fashioned capitalism; communitarianism in harmony with top-tier talent; working from the enterprise inward rather than from startups outward, evangelizing a process that wasn’t invented on the West Coast but would nonetheless come to define the way many of those firms do business.

While there’s a lot to unpack about the Thoughtworks model that I think is unique and worth discussing, I’m going to spend the balance of this article making a systems-first argument: about how the intersection of Thoughtworks’ work model and the industries that they catered to allowed them to have outsized impact. In subsequent installments I’ll be discussing hiring, culture, and the specifics of their delivery model, but I’m going to front-load this series with my most controversial claim, and one my former colleagues likely won’t love: I don’t think “talent,” as conventionally understood, had much to do with it.

## The waiting is the hardest part

One thing to understand about Agile from the jump: the most successful flavors of Agile in the wild today were invented by consultants who focused broadly on “legacy” (by which I mean not necessarily tech-native) enterprises. Agile came out of enterprise consulting, not Silicon Valley, which is a culture justly celebrated for its ability to write software and cultivate talent but not much interested in process in the abstract. So why?

Software consultants are, or were, (1) generally expensive and (2) billed _by the hour_, which makes the expense _visible_ in a way that it isn’t for salaried employees. Few companies are, as a rule, tabulating the cost associated with an hourlong meeting for their salaried employees, but if everyone in the room bills on a time & material basis then the math becomes pretty simple.

The key insight of Agile isn’t “we are constantly uncovering better ways of working, et cetera.” Yes, continuous improvement is great, but we don’t run retrospectives for our health. Agile was born out of the observation that the waiting is the most expensive part of the business, as it is in so many other industries. What makes sequenced processes like waterfall tricky is that it often leads to a lot of people waiting unproductively.[^1]

[^1]: Ask me what I think about services-oriented architecture sometime.

The reason why the Agile manifesto differs so wildly from Agile-as-practiced is that it was written by a bunch of people with a common view on the broad strokes but frankly wildly divergent views on the particulars of the insights they were uncovering, and the manifesto was an attempt to find points in common to align on.[^2] The specific methodologies that won out of that process don’t represent all of the signatories, and so the points in the manifesto don’t really get at the things that made those methodologies successful. And that key insight—waiting is expensive and feedback loops matter—drove many of the most important innovations above.

[^2]: Regarding contractors, note that “customer collaboration over contract negotiation” is nothing if not an artifact of that origin; when’s the last time a salaried employee made that argument to their employer?

Thoughtworks (and similar firms like Pivotal Labs) subscribed to a strict, heavily technical school of Agile thought called Extreme Programming, which was laser-focused on using a combination of process and technical techniques to improve feedback loops and reduce waiting time. Scrum, with its certifications and visible process ceremonies, won in the marketplace of ideas. But it wasn’t how the good stuff got baked.

### What Agile was built to accomplish

Most of the major genuine innovations in the Agile software space came out of those three elements: (1) visible expense, (2) the cost of waiting, and (3) a methodological focus on improved feedback loops. Thoughtworks consequently (1) charged a lot of money, because why not, (2) integrated technical practices that focused _a lot_ on reducing waiting, and (3) hired quite a lot of very smart, but most especially very impatient, people.

To make it all work, they targeted a certain kind of firm: upmarket legacy enterprise (finance, insurance, commerce, publishing)[^3]. They worked with these firms mostly because those firms could or would not hire technical talent competitively in the early-mid-2000s, and needed help very badly. Many of them had tried contracting with IBM or offshore firms and struggled accordingly. It seemed increasingly clear that those which could not find a way to ship enterprise software fast were going to rapidly become obsolete.

[^3]: To give you some sense of this, my first project at Thoughtworks in 2007 was for McKinsey. We used Ruby on Rails to bake slide decks, which was, yes, probably a bad idea, but it wasn't _my_ money.

Consequently, most Thoughtworks engagements carried an element of process change or upskilling. This value proposition—”enablement,” software delivery coupled to change management—was attractive to these enterprises because focusing on process instead of talent is a kind of moneyball proposition: Silicon Valley results without Silicon Valley prices (or geographical talent constraints).

Those enablement projects, by dint of their garish multicolored stickies and eye-watering prices, made Agile a conversation topic in virtually every Fortune 500 boardroom at some point in the last twenty years. (That my spouse, a corporate lawyer who has nothing to do with software, had to undergo Agile training only two years ago suggests that there are evidently still a few pockets of the enterprise it hasn’t yet touched.)

Those innovations didn’t come out of Silicon Valley because Silicon Valley has a very different set of constraints. They nonetheless absorbed its lessons indirectly but eagerly.

### Software process as moneyball

Silicon Valley has always been focused on a talent narrative, not a systems and process narrative, of success. The received wisdom is that enterprises succeed not by aligning incentives but by hiring the brightest minds; if your process isn’t very good or your people aren’t very aligned, isn’t that itself a talent problem? Hire better managers. If you've ever heard the phrase "A players hire A players, B players hire C players," you're familiar with that framing.

This drives a particular incentive structure up and down the org chart: engineers are rewarded by dint of others' perception of their talent, which in turn often rewards a mastery of technical arcana instead of business impact. I’m a tech founder myself, and I understand the outsize role talent plays in making or breaking a venture; nevertheless, Gladwell’s [The Talent Myth](https://www.newyorker.com/magazine/2002/07/22/the-talent-myth) lives rent-free in my head, sloshing around uncomfortably with arguments over how many story points can fit on the head of a pin and how to implement half a dozen sorting algorithms on a whiteboard instead of sensibly plucking them out of a library.

This doesn’t matter, mostly, because broadly speaking Silicon Valley firms are spectacularly successful at doing the thing they need to be successful at. The net result is work that’s often difficult to assess and manage effectively _as a system_, because all the programmers are running around trying to demonstrate how talented they are by implementing sorting algorithms on whiteboards instead of discussing revenue, or whatever. Enter Agile.

The innovations that came out of the Agile ecosystem, and Thoughtworks especially, scan like talent to a hiring manager; consequently, many Agile process innovators went on to lucrative careers at larger tech firms. What those firms failed to grasp was that those innovations were a product of business constraints, and if you take those same people and fling them heedlessly into an enterprise with an entirely different set of constraints, you won’t get the same impact. The fundamental dynamics are different. Meta hired Kent Beck, not a Thoughtworks alumnus but one of the most important software process thinkers of the Agile movement and a [first-rate engineer in his own right](https://wiki.c2.com/?MakeItWorkMakeItRightMakeItFast), and instead of letting him run the place it apparently spat him out again a few years later.

## The trouble with success

So why is Thoughtworks struggling? A few reasons:

First, the insight that waiting is expensive, combined with a bunch of work around process and technical tooling to reduce that waiting, produced a lot of interesting results, but much of the low-hanging fruit is gone. You can’t reinvent continuous integration or refactoring or database migrations or continuous delivery or the test pyramid. People have figured out that faster is better.

Second, the market that Thoughtworks served—anxiety-riven legacy enterprises struggling to deliver software effectively—isn’t what it used to be, either because the firms failed and disappeared, or because they succeeded and consequently don’t need much help, or because the prior constraints around talent and hiring don’t exist anymore, particularly in a post-COVID era. I spent much of my Thoughtworks career in a plane every week, flying somewhere just to write software in _pairs_ in _person_; it’s difficult to imagine a job like that now, in 2024.

Third, the ecological niche that XP-style Agile was looking to fill was largely won out by [Scrum](<https://en.wikipedia.org/wiki/Scrum_(software_development)>), a [worse-is-better](https://www.dreamsongs.com/RiseOfWorseIsBetter.html) methodology that asks less of the firms that use it but consequently spreads more easily. Scrum has few particular opinions about engineering practices or talent management, but the Scrum Alliance is happy to sell you certifications about process at a much lower price point than it would have taken to hire Thoughtworks or Pivotal Labs, and so consequently most of the firms doing some variation of Agile these days are functionally doing Scrum, which is largely taught by well-intentioned people who nonetheless have no idea how Agile is meant to work in the wild, often staffed in coaching jobs with accountability for outcomes but no actual power to effect change.

Finally, while I still think that the software delivery processes espoused by firms like Thoughtworks are pound-for-pound better than what most shops are able to do in-house, the juice is simply not worth the squeeze. For example: XP Agile teams often pair-program on every change, which ensures that each change is peer-reviewed instantly; this skips a lot of waiting on code review and changes wind up in production much more quickly. But this synchronous way of working has largely been subsumed; it’s difficult to coordinate that effort in teams that encompass multiple timezones and embrace the idea of autonomy in tooling choices for individual developers, and so consequently most teams work async.[^4]

[^4]: Also, not for nothing, it’s harder to demonstrate _individual_ mastery and talent on highly collaborative teams.

## Summary

- Thoughtworks invented or described many of the most important early innovations in software engineering.
- It did this not as a function of the talent they hired but instead as a function of the market they served (legacy enterprise), the product they sold (time-to-value software delivery), and the culture of the firm (flat, egalitarian, Midwest-pragmatic).
- What they did is difficult to replicate for two reasons: the process they pioneered runs counter to the talent narrative most firms hire with, and the market for the high-end delivery-oriented consulting product they were selling has declined significantly.

Next time I’ll discuss Thoughtworks’ hiring bar and culture, and how these eventually came to inform its delivery model.

## Acknowledgments

I'm indebted to Jenny Wong, Eric Schoenfeld, Zoe Gagnon, Saager Mhatre, Simon Brunning, Jason Yip, Steven Deobald, Ian Cartwright, Mike McCormack and Mike Roberts for their feedback on this article.

> Photo of Chicago's Aon Center, where Thoughtworks was (is?) headquartered, courtesy of [muzammilo](https://unsplash.com/@muzammilo) on [Unsplash](https://unsplash.com/).
