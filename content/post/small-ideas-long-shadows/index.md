---
title: 'Small ideas cast long shadows'
description: 'Markdown is now the lingua franca of the AI age'
date: 2026-02-05T10:00:00-05:00
draft: false
hidden: true
categories:
  - history
  - industry
---

Every time I interact with an LLM, whether it's through a chat interface, an API call, or reading documentation, I'm using Markdown. Outputs are stored as markdown. Context is transferred in markdown. It's become the universal format for human-AI communication, the lingua franca of the LLM age.

Which means that, in a very real sense, John Gruber and Aaron Swartz are the godfathers of how we talk to machines.

## A brief history

Markdown was created in 2004, at the dawn of the blogging era, by John Gruber of Daring Fireball, with significant contributions from Aaron Swartz. The goal was simple: create a text-to-HTML conversion tool that would let people write using an easy-to-read, easy-to-write plain text format. No angle brackets or closing tags, just simple syntax that's as readable to humans as it is to machines.

It was a small idea for solving a modest problem: making writing for the web marginally less painful.

Aaron worked on the initial implementation, particularly the syntax and parser. Incredibly, he would have been 17 or 18 at the time.[^1] The project was released as open source, free for anyone to use, modify, or extend. It caught on gradually; first with bloggers, then with programmers, then with everyone who had to write documentation or README files or technical specs (but frankly mostly programmers).

By the 2010s, it was everywhere: GitHub, Stack Overflow, Reddit, Slack. Every developer knew Markdown, even if they still had to double-check the syntax for referencing images every single time, not naming any names here. It became the default format for writing on the internet.

## A personal connection

I knew Aaron, and was a tech lead on the project, [VictoryKit](https://github.com/victorykit/victorykit), he was running at Thoughtworks. He was young—will always have been young—brilliant, tetchy, principled to a fault, and often frustrating to work with, in the way that people who have strong opinions tend to be. VictoryKit was petition-signing and political movement-gathering software, and I remember being struck by how seriously he took the ethics of what we were building, in a way that shaped every technical decision.

When Aaron died in 2013, I started the project to build his [memorial website](http://www.rememberaaronsw.com/). It was a small thing, a way to collect remembrances and tributes from the people who knew him and whose lives he'd touched. I built it with Markdown, naturally, because that's what Aaron would have done, I hope. Simple, readable, no unnecessary complexity.

He would've built the bones of it in Python, though. I picked Ruby; ah well.

## The unexpected arc

When John and Aaron created Markdown in 2004, the world they were solving for was blogs and web forums. They were making it easier for humans to write HTML. That was the entire scope of the problem.

They could not have known—there's no way they could have known—that twenty years later, their format would become the standard interface between humans and artificial intelligence.

But it makes perfect sense in retrospect. LLMs need a format that's:
- Human-readable (because humans are still writing the prompts)
- Structured enough to parse (because machines need to understand intent)
- Flexible enough to handle code, prose, lists, and links
- Simple enough that it doesn't create cognitive overhead

Markdown is all of those things. It's the perfect format for the job, even though the job didn't exist when it was created.

## What this means

Small, focused ideas can cast shadows far longer than their creators could imagine. Markdown wasn't trying to change the world. It was trying to solve a specific, annoying problem for people who wrote on the internet. That focus, and its constraints, is part of why it succeeded. It did one thing well, and in doing so became foundational.

This is the opposite of how we usually think about innovation. We valorize the big swings, the moonshots, the people who set out to change everything. And sometimes those work. But more often, I think, the things that matter most are the small tools built by people who just wanted to make their own lives a little easier.

Aaron took some big swings, Lord knows. But a lot of his tools (Markdown, RSS, web.py, Open Library) were built not because he was trying to create a legacy, but because he saw problems that needed solving and he had the skills to solve them. The impact came later, often in ways he couldn't possibly have predicted.

## The long arc

Every time I an LLM, I'm reminded that Aaron's work is still here, still shaping how we think and communicate, still making the internet a little more human-readable. His name is in the commit history of a file format that now defines how billions of humans and machines talk to each other.

You can't always see where small ideas will lead. The best you can do is build something good, something focused, something that solves a real problem for real people. You have to trust in some sense that if you've done it well, the arc of its impact will surprise you.

It surprised me. I'm using Markdown to write this post about Markdown, which will be rendered to HTML just like John and Aaron intended, and which might also be fed into an LLM context window somewhere, fulfilling a purpose they never imagined.

Small ideas cast long shadows. I wish he'd lived to see just how long.

[^1]: He was 26 when he died, which is an incredible arc no matter how you slice it.
