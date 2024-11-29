+++
date = '2024-11-26T17:47:44-05:00'
draft = false
title = 'What Made Thoughtworks Work, Part 1: The invention of modern software process'
image = 'muzammil-soorma-ayV1mD3HGyg-unsplash.jpg'
+++

Thoughtworks recently announced that their longtime CEO, Xiao Guo, was leaving. As their new CEO the board has hired Mike Sutcliff, a longtime veteran of Accenture. Xiao was a protégé of its founder, Roy Singham, and a 25-year veteran of the firm, and as such was deeply immersed in its unique culture. While it’s too soon to say what changes Sutcliff’s leadership will bring, this likely marks the end of an era, along with very likely turnover of the leadership team he built. Good or bad (and as a small Thoughtworks shareholder and friend of several employees, I hope it’s good), it will certainly be different.

This matters for a couple of reasons. First, it marks the first real break from the leadership culture of its founder; Mike is an outside hire. Second, that break matters because Thoughtworks’ way of working was deeply weird, and the innovations that weirdness made possible have had an outsize impact on the software industry. I worked there for six years, and have gone on to lead many technology teams since; I’m thoroughly convinced that, in its structure, aims, and ways of thinking about the world, it was unlike any other technology company in the industry. And my belief is that, while Martin Fowler is most commonly associated with the company, and his impact can’t be understated, no one’s more responsible for that weirdness than Roy.

I spent several years in my post-Thoughtworks career working with various firms trying to recreate some of that culture, because I’ve never experienced anything else like it. Thoughtworks’ magic was that they could walk into a firm, plop down a team of people who'd largely never worked with each other before, and absolutely _scream_ through a backlog—without compromising on quality. Agencies deliver quickly but often struggle to build a quality product; large enterprise IT firms vary wildly in both quality and velocity. But in their unity of culture and vision and focus on delivering value, Thoughtworks stands almost alone in the enterprise space. Only the late, great Pivotal Labs (another extraordinary firm, now defunct) and a handful of boutique players can, I think, make a comparable claim.

As someone who builds teams, my belief is that they were able to do this not out of some commitment to “A-player” talent, though a number of very talented folks cycled through there. But all the A-player talent in the world can’t help you if you fling them at the wrong problems, or organize them poorly, or fail to align their values and goals. What Thoughtworks had was a replicable system for software delivery that worked and that was competitively defensible and hence difficult to replicate, but for which the market has now largely disappeared. I spend a lot of time thinking about how to build software teams, and consequently, I’ve spent a long time thinking about that system. This is my attempt to lay it out.

## Thoughtworks made modern software engineering _process_

Thoughtworks was founded in the late 90s in Chicago by Roy Singham as a seller of bespoke solutions for accounting software. Roy was a serial entrepreneur; born a diplomat’s son to a West Indian father and midwestern American mother and raised in Jamaica, he had a global perspective but a rather more prosaic goal: to turn his IT chops into a business.

That goal grew in ambition rather considerably after Roy met Martin Fowler. Martin was part of a group of software pioneers trying to reform how the industry approached software development, and shortly after he joined Thoughtworks in 2000 he’d go on to become a signatory of the Agile Manifesto, which is the most significant single document about software process ever written. After that, Thoughtworks’ way of working and engine of growth would be defined by Agile software principles, as outlined in the document.

The other major philosophical commitment driving Thoughtworks’ strategy was the principles of its founder: Roy was (and is?), almost uniquely amongst founders of American-born global capitalist enterprises, a committed communist. Roy’s private, but sincere, commitment to leftist politics, and Martin’s very public commitment to Agile, would come to define Thoughtworks’ culture, values and strategy.

Those commitments arguably redefined an industry. The software industry is full of the detritus thrown off by transformations to Agile, or Agile-adjacent, processes: sprints and story points and retrospectives and standups and walls upon walls upon walls of sticky notes, at least before it all went remote. Thoughtworks certainly can’t claim sole credit (blame?) for that transformation, but what it did do, again and again, is demonstrate to blue-chip enterprises—banks and insurance companies and publishing houses and telcos—that those processes could work. Thoughtworks’ explicit focus on the enterprise meant that executives all over the world got introduced to Agile in a way they might never have otherwise. Those executives were paying particularly close attention because Thoughtworks, at a time when the industry was increasingly moving offshore to firms like TCS and Wipro in pursuit of cheap labor, cost a fucking fortune to hire.

Here is a short list of now-standard software delivery techniques that ThoughtWorkers either invented directly or pioneered in the nascent stages of their growth. I don’t want to give them sole credit; many of the books and projects listed have non-Thoughtworks coauthors or major collaborators, and it is not my intent to minimize their impact. But a number of technical and process innovations stand out for the role that current or past Thoughtworks employees played.

- Continuous integration ([Martin Fowler](https://martinfowler.com/articles/continuousIntegration.html), [James Shore](https://www.jamesshore.com/v2/blog/2006/continuous-integration-on-a-dollar-a-day) et al; Matt Foemmel, [CruiseControl](https://wiki.c2.com/?CruiseControl), ca. 2000; [Go](https://martinfowler.com/articles/continuousIntegration.html), Jez Humble et al, 2007)
- Database migrations ((Pramod Sadalage)[https://www.amazon.com/Refactoring-Databases-Evolutionary-Database-Design/dp/0321293533/], 2006)
- Behavior-driven development ((Dan North)[https://dannorth.net/introducing-bdd/], 2006)
- Browser-based end-to-end testing (Huggins, Selenium, 2004; Stewart, WebDriver + Selenium 2+, 2007)
- Dependency injection (Walnes, Hammant, PicoContainer)
- Continuous delivery and deployment ((Jez Humble, Dave Farley)[https://www.amazon.com/Continuous-Delivery-Deployment-Automation-Addison-Wesley/dp/0321601912], 2011)
- Microservices ((Sam Newman)[https://www.amazon.com/Building-Microservices-Designing-Fine-Grained-Systems/dp/1491950358], (James Lewis)[https://martinfowler.com/articles/microservices.html], 2015)
- Evolutionary architecture ((Ford, Kua, Parsons, Sadalage)[https://www.amazon.com/Building-Evolutionary-Architectures-Support-Constant/dp/1491986360], 2017)
- DORA metrics ((Jez Humble)[https://medium.com/@jezhumble/doras-journey-an-exploration-4c6bfc41e667], 2014)
- Data Mesh ((Zhamak Dehghani)[https://martinfowler.com/articles/data-mesh-principles.html], 2020)

Some of these came from employees actively working at Thoughtworks, and some came from further contributions of Thoughtworks alumni, who’ve gone on to substantial leadership roles at most major tech firms. In particular, Jez Humble’s work with Dr Nicole Forsgren on DORA and Accelerate stands out as a contribution from a Thoughtworks alumnus seeking to expand upon and validate the consulting work he’d done with the firm prior.

Thoughtworks represented a parallel track for tech: Chicago and Bangalore, not Silicon Valley or New York; egalitarianism married to good old-fashioned capitalism; working from the enterprise inward rather than from startups outward, evangelizing a process (Agile software development) that wasn’t invented on the West Coast but would nonetheless come to define the way many of those firms do business.

While there’s a lot to unpack about the Thoughtworks model that I think is unique and worth discussing, I’m going to spend the balance of this article making a systems-first argument: about how the intersection of Thoughtworks’ work model and the industries that they catered to allowed them to have outsized impact. In subsequent installments I’ll be discussing hiring, culture, and the specifics of their delivery model, but I’m going to front-load this series with my most controversial claim, and one my former colleagues likely won’t love: I don’t think “talent,” as conventionally understood, had much to do with it.

## The waiting is the hard part

One thing to understand about Agile from the jump: the most successful flavors of Agile in the wild today were invented by consultants who focused broadly on “legacy” (by which I mean not necessarily tech-native) enterprises. Agile came out of enterprise consulting, not Silicon Valley, which is a culture justly celebrated for its ability to write software and cultivate talent but not much interested in process in the abstract. So why?

Software consultants are, or were, (1) generally expensive and (2) expensive by the hour, which makes the expense _visible_ in a way that it isn’t for salaried employees. Few companies are, as a rule, tabulating the cost associated with an hourlong meeting for their salaried employees, but if everyone in the room bills by the hour then the math becomes pretty simple.

The key insight of Agile isn’t “we are constantly uncovering better ways of working, et cetera.” Yes, continuous improvement is great, but we don’t run retrospectives for our health. Agile was born out of the observation that the waiting is the most expensive part of the business, as it is in so many industries. That’s what makes sequenced processes like waterfall tricky to make work: it sequenced work in a way that forced a lot of people to wait unproductively. (Ask me what I think about SOA.)

The reason why the Agile manifesto differs so wildly from Agile-as-practiced is that it was written by a bunch of people with a common view on the broad strokes but frankly wildly divergent views on the particulars of the insights they were uncovering, and the manifesto was an attempt to find points in common to align on. (Regarding contractors, note that “customer collaboration over contract negotiation” is nothing if not an artifact of that origin; when’s the last time a salaried employee made that argument to their employer?)

The specific methodologies that won out of that process don’t represent all of the signatories, and so the points in the manifesto don’t really get at the things that made those methodologies successful in the marketplace of ideas. And that key insight—waiting is expensive and feedback loops matter—drove many of the most important innovations above.

Thoughtworks (and similar firms like Pivotal Labs) subscribed to a strict, heavily technical school of Agile thought called Extreme Programming, which was laser-focused on using a combination of process and technical techniques to improve feedback loops and reduce waiting time. Scrum, with its certifications and visible process ceremonies, won in the marketplace of ideas. But it wasn’t how the good stuff got baked.

### The elements of Agile in practice

Most of the major innovations in the Agile space came out of those three elements: visible expense, the cost of waiting, and a methodological focus on improved feedback loops. Thoughtworks (1) hired a lot of smart people who really believed in Agile, (2) integrated technical practices into that understanding, (3) charged a lot of money for them, and (4) targeted a certain kind of firm: upmarket legacy enterprise—finance, insurance, commerce, publishing.

They worked with these firms mostly because those firms could or would not hire technical talent competitively in the early-mid-2000s, and needed help very badly. Many of them had tried contracting with IBM or offshore firms and struggled accordingly. It seemed increasingly clear that those which could not find a way to ship enterprise software fast were going to rapidly become obsolete.

Consequently, most Thoughtworks engagements carried an element of process change or upskilling. This value proposition—”enablement,” software delivery coupled to change management—was attractive to these enterprises because focusing on process instead of talent is a kind of _moneyball proposition_: Silicon Valley results without Silicon Valley prices (or geographical talent constraints).

Those enablement projects, by dint of their garish multicolored stickies and eye-watering prices, made Agile a conversation topic in virtually every Fortune 500 boardroom at some point in the last twenty years. (That my spouse, a corporate lawyer who has nothing to do with software, had to undergo Agile training a few years ago suggests that there are evidently still a few pockets of the enterprise it hasn’t yet touched.)

Those innovations didn’t come out of Silicon Valley because Silicon Valley has a very different set of constraints. They nonetheless absorbed its lessons indirectly but eagerly.

### Managing systems, not people

Silicon Valley has always been focused on a talent narrative, not a systems and process narrative, of success. The received wisdom is that enterprises succeed not by aligning incentives but by hiring the brightest minds; if your process isn’t very good or your people aren’t very aligned, isn’t that itself a talent problem? Hire better managers. If you've ever heard the phrase "A players hire A players, B players hire C players," you're familiar with that framing.

This drives a particular incentive structure up and down the org chart: engineers are rewarded by dint of others' perception of their talent, which in turn often rewards a mastery of technical arcana instead of business impact. I’m a tech founder myself, and I understand the outsize role talent plays in making or breaking a venture; nevertheless, Gladwell’s (The Talent Myth)[https://www.newyorker.com/magazine/2002/07/22/the-talent-myth] lives rent-free in my head, sloshing around uncomfortably with arguments over how many story points can fit on the head of a pin and how to implement half a dozen sorting algorithms on a whiteboard instead of sensibly plucking them out of a library somewhere.

This doesn’t matter, mostly, because broadly speaking Silicon Valley firms are spectacularly successful at doing the thing they need to be successful at. The net result is work that’s often difficult to assess and manage effectively _as a system_, because all the programmers are running around trying to demonstrate how talented they are by implementing sorting algorithms on whiteboards instead of discussing revenue, or whatever. Enter Agile.

The innovations that came out of the Agile ecosystem, and Thoughtworks especially, scan like talent to a hiring manager; consequently, many Agile process innovators went on to lucrative careers at larger software firms. What those firms failed to grasp was that those innovations were a product of business constraints, and if you take those same people and fling them heedlessly into an enterprise with an entirely different set of constraints, you won’t get the same impact. The fundamental dynamics are different. Meta hired Kent Beck, not a Thoughtworks alumnus but a well-regarded engineer and one of the most important software process thinkers of the Agile movement, and instead of letting him run the place it apparently spat him out again a few years later.

## The trouble with success

So why is Thoughtworks struggling? A few reasons: first, the insight that waiting is expensive, combined with a bunch of work around process and technical tooling to reduce that waiting, produced a lot of interesting results, but much of the low-hanging fruit is gone. You can’t reinvent continuous integration or refactoring or database migrations or continuous delivery. People have figured out that faster is better.

Second, the market that Thoughtworks served—anxiety-riven legacy enterprises struggling to deliver software effectively—isn’t what it used to be, either because the firms failed and disappeared, or because they succeeded and didn’t and consequently don’t need as much help, or because the prior constraints around talent and hiring don’t exist anymore, particularly in a post-COVID era. I spent much of my Thoughtworks career in a plane every week, flying somewhere just to write software in pairs _in person_; it’s difficult to imagine a job like that now, in 2024.

Finally, while I still think that the software delivery processes espoused by firms like Thoughtworks are pound-for-pound better than what most shops are able to do in-house, the juice is simply not worth the squeeze in many cases. For example: XP Agile teams often pair-program on every change, which ensures that each change is peer-reviewed instantly; this skips a lot of waiting on code review and changes wind up in production much, much more quickly. But this synchronous way of working has largely been subsumed by the asynchronous model, even though it’s faster; it’s difficult to coordinate that effort in teams that encompass multiple timezones and embrace the idea of autonomy in tooling choices for individual developers.
Also, it’s harder to demonstrate mastery and talent on highly collaborative teams.

## Recap

- Thoughtworks invented or described many of the most important early innovations in software engineering.
- It did this not as a function of the talent they hired but instead as a function of the market they served (legacy enterprise), the product they sold (time-to-value software delivery), and the culture of the firm (flat, egalitarian, Midwest-pragmatic).
- What they did is difficult to replicate for two reasons: the process they pioneered runs counter to the talent narrative most firms hire with, and the market for the high-end delivery-oriented consulting product they were selling has declined significantly.

Next time I’ll discuss Thoughtworks’ hiring bar and culture, and how these eventually came to inform its delivery model.

> Photo by [muzammilo](https://unsplash.com/@muzammilo) on [Unsplash](https://unsplash.com/)
