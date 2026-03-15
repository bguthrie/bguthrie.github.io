---
name: create-blog-post
description: Create a new blog post following Brian's conventions, voice, and style
disable-model-invocation: true
allowed-tools: Bash(hugo new:*), Bash(mkdir:*), Write, Read, Glob, WebFetch
---

# Blog Post Creator

Create a new blog post for brianguthrie.com following established conventions for structure, frontmatter, and voice.

## Usage

```
/create-blog-post <slug> [topic description]
```

Example:
```
/create-blog-post tyranny-of-the-plan Transcript of Mary Poppendieck's talk
```

## Directory Structure

Posts live in `content/post/<slug>/index.md`. Each post is a directory containing:
- `index.md` - the post content
- Any images (co-located, not in a separate assets folder)

Create the directory first, then the index.md file.

## Frontmatter Template

```yaml
---
title: 'Title in Sentence Case'
description: 'Short, punchy summary for social sharing'
date: YYYY-MM-DDTHH:MM:SS-05:00
image: 'photographer-name-unsplash-id-unsplash.jpg'
image_credit: 'Photo by Photographer Name on Unsplash'
image_credit_url: 'https://unsplash.com/@username'
draft: false
categories:
  - category-slug
---
```

### Frontmatter Notes

- **title**: Declarative statement or imperative. Sentence case, not title case.
- **description**: Optional but recommended. One sentence, no period.
- **date**: ISO 8601 with timezone (-05:00 for EST, -04:00 for EDT)
- **image**: Filename only. Download from Unsplash; choose beautiful, evocative images loosely related to the content.
- **categories**: At least one. Available: `sdlc`, `platform`, `history`, `industry`, `agile`
- **aliases**: Optional. Use for short URLs like `/faster`
- **hidden**: Set to `true` for posts that shouldn't appear in listings but are accessible via URL

## Image Sourcing

Images come from Unsplash. Choose images that are:
- Beautiful and evocative
- Loosely/metaphorically related to the content (not literal)
- High quality photographs, not illustrations

Example: For the ThoughtWorks post, the image is Chicago's Aon Center (TW's headquarters). For event sourcing, an abstract pattern image.

When sourcing an image:
1. Search Unsplash for relevant terms
2. Download the image
3. Name it: `photographer-firstname-lastname-unsplash-id-unsplash.jpg`
4. Include credit in frontmatter

## Voice & Style Guide

When reviewing past articles for examples of voice, do not include articles with `draft: true` or `hidden: true`.

Brian's writing voice has these characteristics:

### Opening with Authority
Posts often open with personal credentials or experience to establish credibility:

> "I've worked in the software industry for over twenty years. I have been a consultant, a line engineer, a director, a founder, and a CTO."

> "I built an entire startup on top of an event-sourced data architecture."

> "I worked there for six years (2007-2013), made many friends, and have gone on to lead technology teams and start several firms since."

### Strong, Declarative Thesis Statements
Don't hedge excessively. Take a position:

> "I am not some kind of process relativist; process matters."

> "I've been arguing with other programmers about how to define objectively good code for twenty years, and where I've landed is that there's no such thing."

> "Moving slowly is often a **choice**."

### Structured Arguments
Use numbered lists for key principles, headers for major sections:

```markdown
## Rules for moving faster

1. It Is Possible To Move Fast, And Fast Matters
2. Fast Is Measured By What Other People See
3. You Can Be Both Fast And Good
```

### Footnotes for Asides
Use footnotes for tangential observations, personal color, or humor:

> "My first project at Thoughtworks in 2007 was for McKinsey. We used Ruby on Rails to bake slide decks, which was, yes, probably a bad idea, but it wasn't _my_ money."

> "Leftists would probably lose fewer elections if we stopped using phrases like _prima facie_."

### Historical and Technical Depth
Reference specific dates, names, projects, and give credit:

> "Continuous integration ([Martin Fowler](link), [James Shore](link) et al; Matt Foemmel, CruiseControl, ca. 2000)"

### Conversational but Confident
Use "I" frequently. Be direct. Don't over-qualify:

> "I like the way I write my code and find it reliably maintainable, but I don't claim that it wouldn't bother some number of other programmers. And that's fine; indeed, it's the point."

### Willingness to Be Provocative
Take positions others might find uncomfortable:

> "I'm not saying I'm right and they're wrong (although I am and they are)"

> "For my part, I've become more comfortable standing by my own convictions"

### Acknowledge Tradeoffs
Present both sides fairly, then take a position:

> "Is writing any software ever worth it? Unclear."

> "It's not for every team, but it works. Consider trying it for your next build."

### Concrete Examples
Always ground abstract ideas in specifics. Use code samples, historical examples, or personal anecdotes.

## Structural Patterns

### Typical Post Structure

1. **Opening hook**: Personal experience or provocative claim
2. **Context/Background**: Why this matters, historical grounding
3. **Main argument**: Structured with headers, often numbered points
4. **Nuance/Tradeoffs**: Acknowledge complexity
5. **Conclusion**: Restate thesis, call to action or summary

### Formatting

- Use `##` for major sections, `###` for subsections
- **Bold** for emphasis on key terms
- _Italics_ for emphasis in prose
- Markdown links inline, not reference-style
- Code blocks with language hints when including code
- Footnotes with `[^1]` syntax

## What NOT to Do

- Don't use corporate buzzwords without irony
- Don't hedge everything ("I think maybe perhaps...")
- Don't write without a clear point of view
- Don't skip the personal grounding—connect to your experience
- Don't forget to credit sources and collaborators

## Example Opening Paragraphs

**Move Faster Manifesto:**
> I've worked in the software industry for over twenty years. I have been a consultant, a line engineer, a director, a founder, and a CTO. I have worked at firms as small as two engineers and as large as fifty thousand. I frequently get asked how to move faster in software. This is what I say.
>
> It is easier to describe than it is to do.

**Event Sourcing:**
> I built an entire startup on top of an event-sourced data architecture. In the end we didn't win in the market, but I walked away from the experience thoroughly convinced by the power of the model. In this post I want to sketch out the essential elements of the pattern, and what makes it so compelling; in particular, I want to make an argument that more teams should take it seriously, even in simplified form.

**ThoughtWorks:**
> This matters for a couple of reasons. First, it marks the first real break from the leadership culture of its founder. Second, that break matters because Thoughtworks' way of working was deeply weird, and the innovations that weirdness made possible have had an outsize impact on the software industry. My goal is to describe how it worked, and why you should care.
>
> This is personal for me.
