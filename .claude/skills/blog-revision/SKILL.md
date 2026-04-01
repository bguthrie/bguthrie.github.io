---
name: blog-revision
description: Provide structural or line-level feedback on an edited blog post draft; optionally re-invoke the critic in draft mode
---

# Blog Revision

The author has edited their draft and wants feedback. Read the current version of `content/post/<slug>/index.md` carefully.

## Process

1. Assess whether the draft's primary need is structural or line-level:
   - **Structural:** Focus on argument ordering, cuts, thesis clarity, whether sections earn their place, whether the antithesis is genuinely engaged.
   - **Line-level:** Focus on tightening sentences, fixing awkward phrasing, improving transitions, catching voice violations.
2. Weight your feedback toward whichever the draft needs more.
3. Provide specific, actionable suggestions with line references. Do not rewrite the whole post.
4. Can go multiple rounds.

## Optional: Draft-Mode Critic

If the author asks for a formal review, or if you believe the draft has significant structural issues, offer to invoke `/blog-critic` in draft mode. This spawns a separate agent that evaluates the draft against the outline independently.

## Voice Reference

When checking for voice violations, refer to the voice guide in `/blog-author`. Key things to watch for:
- Em dashes (use semicolons or parentheses instead)
- Sentence fragments used for false punchiness
- Staccato fragment lists
- Throat-clearing cliches
- AI-sounding generalizations
- Hedging positions (hedging facts is fine)
- Sections that don't end with force
