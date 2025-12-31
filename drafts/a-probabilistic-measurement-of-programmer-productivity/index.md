---
title: "A Probabilistic Measurement of Programmer Productivity"
description: Why batting average matters more than perfect swings
date: 2025-05-05T18:21:55-04:00
image: 
math: 
license: 
hidden: false
comments: true
draft: true
---
Every feature is a bet. Every line of code represents a wager on some future payoff. Some bets pay off spectacularly, others fail quietly, but the math is simple: if you want to maximize your returns, you need to think like a baseball player, not a perfectionist.

There are exactly two ways to score more runs: take more swings at the plate, or improve your batting average. The same principle applies to software development, yet most teams obsess over perfecting individual features while ignoring the fundamental constraint that limits their success: **throughput**.

## The Probability Game

Traditional productivity metrics miss the forest for the trees. Lines of code, story points, velocity—these measurements focus on effort rather than outcomes. They treat software development like manufacturing when it's actually more like venture capital: a portfolio of bets with uncertain returns.

A probabilistic view changes everything. If each feature has some probability of success (let's call it *p*), and each success generates some value (let's call it *v*), then your expected return from *n* features is simply:

**Expected Value = n × p × v**

This formula gives us three levers for increasing productivity as measured by value:

1. **Ship more features** (increase *n*)
2. **Improve your hit rate** (increase *p*)  
3. **Build more valuable features** (increase *v*)

Most teams focus exclusively on the third lever—building more valuable features—while completely ignoring the first two. This is a mistake.

## More At-Bats, More Hits

The Move Faster Manifesto teaches us that speed isn't just nice to have; it's a competitive advantage. Every feature is a bet on some future payoff, and shipping more frequently means more turns at-bat. More swings means more hits.

Consider two teams:
- Team A ships one carefully crafted feature per month with a 70% success rate
- Team B ships four scrappy features per month with a 40% success rate

Over a year, Team A delivers 8.4 successful features (12 × 0.7). Team B delivers 19.2 successful features (48 × 0.4). Team B wins by more than 2x, despite having a much lower hit rate.

This isn't theoretical. History is full of products that won through iteration speed rather than initial quality. Facebook beat MySpace not because it was better designed, but because it could adapt faster. Google didn't launch with the world's best search algorithm; it got there by shipping improvements constantly.

## The Compound Interest of Learning

But there's a deeper insight here: *p* and *v* aren't fixed constants. They improve with each iteration. Every shipped feature teaches you something about your users, your market, and your product. The faster you ship, the faster you learn. The faster you learn, the better your next bet becomes.

This creates a compound effect. Team B doesn't just ship more features; each feature makes their subsequent features more likely to succeed. Their hit rate improves from 40% to 50% to 60% over time, while Team A's careful approach limits their learning opportunities.

Fast is measured by what other people see. Lead time—the wall-clock time between when someone asks for something and when they get it—is the only metric that matters for this compound learning effect. Internal efficiency metrics miss the point entirely.

## The Courage to Ship Imperfect Code

Moving fast requires courage. It means making decisions without perfect information. It means shipping features that aren't quite ready, knowing you can fix them later.

This terrifies many engineers, who've been trained to think that shipping buggy code is unprofessional. But the math doesn't lie: a feature that's 80% right and ships today will often outperform a feature that's 95% right and ships next month.

Code wants to go home. The goal is to ship. Trapping workable code in endless review cycles doesn't help anyone—it just reduces your number of at-bats.

## Measuring What Matters

If you accept this probabilistic view, traditional productivity metrics become obviously wrong. Story points measure effort, not outcomes. Velocity measures activity, not value creation. Bug counts measure perfectionism, not customer impact.

Better metrics focus on the three levers:

**Throughput (n):** How many features do you ship per unit time? This should be your primary productivity metric. Everything else is secondary.

**Success Rate (p):** What percentage of shipped features achieve their intended business goals? This requires defining success criteria upfront and measuring them consistently.

**Value per Success (v):** When features do succeed, how much value do they create? This is the hardest to measure but often the most important to optimize.

## The Paradox of Quality

Here's where it gets interesting: you can be both fast and good. In fact, it's very difficult to be fast if you're bad, because failed features count against your success rate and any necessary rework counts against your lead time.

The fastest teams I've worked with didn't sacrifice quality; they redefined it. Instead of preventing bugs through exhaustive upfront review, they built systems that made bugs cheap to fix. Instead of perfecting features before launch, they perfected their ability to iterate quickly based on user feedback.

This is why practices like continuous deployment, automated testing, and feature flags work so well: they increase your number of at-bats while maintaining (or even improving) your hit rate.

## Everyone's Responsibility

It's everyone's responsibility to move fast. Engineers who insist on perfect code before shipping are optimizing for the wrong variable. Product managers who demand exhaustive requirements upfront are reducing throughput. Leaders who punish failed experiments are destroying the courage needed to take more swings.

The most profound lesson is that many of the processes we erect to prevent errors actually make things worse. Deferring code merges doesn't make integration easier. Deferring deploys doesn't make releases safer. Deferring feature launches doesn't make them more successful.

## Change Fast or Die

Your real competition isn't a giant corporation with unlimited resources. It's a smaller, scrappier team that's changing twice as fast as you are. They're taking more swings, learning faster, and compounding their advantages every day.

Work is only done when you learn whether it was worth doing. Learning only matters if you can adjust based on what you learned. The ability to respond to change—to take what you've learned from your last bet and apply it to your next one—is the ultimate competitive advantage.

In the end, programmer productivity isn't about how much code you write or how few bugs you create. It's about how effectively you can place bets on the future and learn from the results. The teams that understand this will always outperform those that don't, regardless of their individual talent or resources.

More at-bats. Higher hit rate. That's the game.

---

*The math of software development is unforgiving, but it's also liberating. Once you understand that every feature is a bet, you can start optimizing for the things that actually matter: speed of iteration and quality of learning. Everything else is just keeping score.*
