# Research: Prospero announcement

## Critique session 2026-04-30

Critic-phase research conducted against the outline at `/Users/bguthrie/Projects/bguthrie.github.io/drafts/prospero/outline.md`.
Sources used: hn.algolia.com (per audience Research Sources), martinfowler.com/bliki, broader web.
WebSearch tool was returning 400 errors during this session; relied on HN Algolia API and direct fetches.

### Prior art: Superpowers (load-bearing reference in the outline)

- "A Rave Review of Superpowers (For Claude Code)" — <https://emschwartz.me/a-rave-review-of-superpowers-for-claude-code/> (50 points, 2026-04-03). Schwartz describes the pipeline as `Brainstorming → Options and Tradeoffs → Plan Sketch → Design Doc → Implementation Plan → Implementation Steps`. Quote: design docs are "markdown file[s] in your repository that you can read, comment on, and edit in your own editor." Quote on subagents: Superpowers "can launch subagents to implement each part of the plan, and it automatically reviews their work against the implementation plan." User-facing framing in the review: "I feel better about tradeoffs being made and much more confident that the code written does what I want." This is directly parallel to the outline's confidence pitch; the lift risk is real.
- Superpowers repo: <https://github.com/obra/superpowers>. HN coverage since Oct 2025; multiple Show HN posts by obra/Schwartz etc. Community is familiar with the pattern.
- "I don't read code anymore - creator of Superpowers" — <https://www.claudecodecamp.com/p/why-jesse-doesn-t-read-code-anymore> (2026-02-03). The Superpowers creator has strong opinions the HN audience may already know; Prospero inheriting the name "shape" from Superpowers is a known reference frame.

### Prior art: Sycophancy and "AI that argues back" (load-bearing in the outline's synthesis)

- "Sycophancy is the first LLM dark pattern" — <https://www.seangoedecke.com/ai-sycophancy/> (167 points, 2025-12-01). HN has already thoroughly internalized this concept. Key quote: "The model is rewarded for making the user click thumbs-up and punished for making the user click thumbs-down." And: "Most users are really, really not going to like it if the AI then turns around and is critical." This is the meme the outline leans on; the audience will not need convincing that in-session LLMs are sycophantic, but they will want the "fresh-context critic" claim backed by more than assertion.
- "The LLM Sycophancy Antidote" — <https://photostructure.com/coding/sycophancy-antidote/> (12 points, 2026-02-27). HN-audience awareness that prompt-engineering antidotes exist. (Content could not be retrieved via WebFetch on this session.)
- "Conversations with an AI That Argues Back" — <https://luisfernandoyt.makestudio.app/blog/878-conversations-with-ai> (2026-02-19). **The exact phrase "argues back" is not novel.** The Prospero announcement's title/thesis borrows a framing already used. Low points (1), so the HN audience hasn't seen it widely, but a careful reader who googles the phrase will find it.
- "Show HN: Perspectives – I wanted AI to challenge my thinking, not validate it" — <https://getperspectives.app> (2026-01-22). Directly competing framing. Perspectives uses personas ("Scenario Planner, Contrarian, Systems Thinker, Insider, Risk Analyst") that "make their cases, challenge each other's reasoning, update their positions, and vote." It's for predictions, not writing, but the "structured adversarial analysis" pitch is identical. The outline does not acknowledge it.
- "Show HN: DebateDevil – Challenge Your Beliefs with GPT-based AI" — <https://www.debate-devil.com/> (4 points, 2023-03-23). Older, but shows the oppositional-AI concept predates Prospero.
- "Old Advocacy, New Algorithms: How 'Devil's Advocates' Shaped AI Red Teaming" — <https://royapakzad.substack.com/p/old-advocacy-new-algorithms> (20 points, 2023-05-11). Relevant lineage.
- "LLM Sycophancy Benchmark: Opposite-Narrator Contradictions" — <https://github.com/lechmazur/sycophancy> (2026-03-10). Shows active benchmarking work; the outline's capability claim ("LLMs are good at oppositional critique when prompted accordingly") is contested in the research community.
- "Are you the asshole? Of course not – quantifying LLMs' sycophancy problem" — <https://arstechnica.com/ai/2025/10/are-you-the-asshole-of-course-not-quantifying-llms-sycophancy-problem/>.
- Sean Goedecke thread is the canonical HN reference. Any outline leaning on "fresh-context critic" needs to either cite benchmarks showing cross-session independence works, or acknowledge that this is an engineering hypothesis rather than a proven property.

### Prior art: Writing with LLMs (audience-familiar)

- "Lessons Learned Writing a Book Collaboratively with LLMs" — <https://news.ycombinator.com/item?id=43758459> (16 points, 2025-04-22). HN commenter summary: the author's framing that "LLMs made writing 'a hell of a lot more fun' and enabled project completion" resonated more than speed claims. Another commenter: "Could two sufficiently motivated people produce the same thing in the same time?" This is the exact skeptical question the Prospero pitch must survive. The specific critiques: "The 'AI Voice' is Pervasive" and "Combat AI-isms. Prompt specific tones; edit out filler/hedging/repetition." Also: warning against letting "AI erode voice" through endless iteration — this is exactly the "blunting" problem the outline names.
- Key HN sentiment quote from that thread: "AI excellence at language masks fundamental limitations in verification and originality, making it a powerful but ultimately labor-intensive assistant rather than a game-changer."
- "Tropes.fyi – Name and shame AI writing" — <https://tropes.fyi/> (5 points, 2026-02-20). Evidence that HN is increasingly hostile to identifiable AI writing tics.

### Prior art: Martin Fowler on writing

- "Say Your Writing" (2025-05-28) — Fowler advocates reading drafts aloud, conversational tone. Relevant frame.
- "Excessive Bold" (2026-01-28) — <https://martinfowler.com/bliki/ExcessiveBold.html>. Key quote: "I'm increasingly seeing a lot of technical and business writing make heavy use of bold font weights, in an attempt to emphasize what the writers think is important. LLMs seem to have picked up and spread this practice widely." Prospero's announcement, if drafted by `/author`, needs to not make this exact mistake. The outline itself bolds plenty of key phrases — a warning sign for the eventual draft.

### Prior art: Outline/critique/staged agentic writing patterns

- "Arxitect – Claude Code plugin for software design principles" — <https://github.com/andonimichael/arxitect> (March 2026). Applies Superpowers-style staging to architecture/design. Direct evidence of the "staged subagent plugin for X" pattern being a category that's forming on HN.
- "Superpowers-UML" — <https://github.com/takaakit/superpowers-uml> (2026-04-11). Same pattern for another domain.
- "Claude Code Plugin Marketplaces" HN discussion (2025-12-04) and "Stop Claude Code from forgetting everything" (202 points, 2025-12-29) suggest the Claude Code marketplace/plugin ecosystem is very noisy; differentiation is critical. The outline's install section needs to survive the "another Claude Code plugin" reaction.

### Audience context (Hacker News, per `.prospero/audience.md`)

- Technically literate, skeptical, ahead of the ball. Known to have seen Superpowers, the sycophancy dark-pattern piece, the book-writing-with-LLMs thread, and Fowler's recent anti-LLM-style posts. Will recognize the Superpowers reference. Will notice if it is not acknowledged.
- The install footprint (Claude Code + subagents + disk artifacts) is audience-appropriate. Pitch to a broader "writers" audience would not be.
- HN is increasingly hostile to AI-generated prose tells (em dashes, bold overuse, "In today's rapidly evolving landscape..."). Voice.md already bans these, which is the right move, but the announcement draft will be scrutinized hard for any slippage.

### Key claims in the outline that need external verification

1. "Subagent invoked in a new session has not seen the back-and-forth that produced the outline, has no sympathetic inclination toward its author, and will oppose the argument on its merits." — This is plausible and consistent with how Claude Code subagents are documented to work, but it is a mechanism claim, not a measured outcome. No public benchmark of "fresh-context critics produce more independent critique than same-session critics" exists that I could locate. The sycophancy-benchmark work (lechmazur/sycophancy) measures sycophancy across prompts but not across fresh-context-vs-same-context on the same artifact. The outline should either present the receipt ("here is a case where the fresh-context critic contradicted the same-model draft") or name it as a design bet.
2. "LLMs are [good enough at oppositional critique], when prompted accordingly and given a clean slate." — This is the audience's capability prior; it's contested at the edges (LLMs are known to produce "flattened steelmen" — the outline already names this). Leaning on the reader's experience with Superpowers is reasonable for this audience.
3. "'Software architecture after AI' is the receipt." — The post is published at `content/post/software-architecture-after-ai/index.md`. The outline would have actual artifacts (`drafts/software-architecture-after-ai/outline.md`, `research.md`, `research-update.md`) available as receipts. Whether those receipts are shown in the announcement or just referenced matters for the "prompt engineering with extra steps" objection.

### Gaps the research could not fill

- No HN thread specifically on "AI for argumentative rigor in essays." Closest is the book-writing thread.
- No public benchmark comparing same-session vs fresh-session critic quality.
- No strong prior art for the specific "interrogate → critique → author → revise" shape applied to essays. The shape is novel in its domain even if the Superpowers lineage is not.

### Notes on outline structure relative to explainer rubric

The outline is labeled as a release announcement but is being evaluated against an explainer rubric. This is a category mismatch that the critique flags — the rubric asks whether the reader will "walk away with something useful; can they apply what they learned?" A release announcement's payoff is "install it" or "update your mental model," not teaching a transferable skill. The antithesis section explicitly acknowledges this ("the piece is a release announcement"). The critique should note whether explainer is even the right rubric, and if not, what is being evaluated.

## Author session 2026-04-30

No new web research beyond what the critic session gathered. Verifications performed during drafting:

- README for Prospero fetched from <https://github.com/bguthrie/prospero> and used to confirm the install command form (`/plugin install prospero`), the four-phase framing, the preset list (Hugo, plain, Jekyll, Ghost), and the v0.2 status. No contradictions with the outline.
- Voice-calibration samples: `content/post/software-architecture-after-ai/index.md`, `content/post/we-uncovered-better-ways/index.md`, `content/post/what-to-do-with-the-ai-surplus/index.md`. Patterns internalized: argumentative section headers, no em dashes, sparing bold usage, footnotes for asides, first-person throughout, aphoristic section endings.
- Cross-references used in draft: "AI like a bicycle" (`/p/ai-like-a-bicycle/`), "Software architecture after AI" (`/p/software-architecture-after-ai/`). "Accumulated ignorance at scale" was flagged in the outline as a possible ladder-rung comparison but deferred; the current draft does not use it, on the judgment that the receipt claim is already carried by the "Software architecture after AI" reference and adding a second comparison would dilute. Author may want to add it back during editing.
- Prior-art acknowledgments kept in draft: Superpowers (obra/superpowers), Perspectives (getperspectives.app), DebateDevil (debate-devil.com), Fowler's Excessive Bold post. Sycophancy citation: Sean Goedecke's piece, via footnote.

## Critique session 2026-04-30 (draft vs outline)

Oppositional review of `content/post/prospero/index.md` against `drafts/prospero/outline.md`. Today's date verified: 2026-04-30. Verification sources used: GitHub README for Prospero v0.2 (install command and phase list confirmed), Sean Goedecke's sycophancy piece (confirmed; HN-canonical; NOTE: piece does NOT substantially cover cross-session sycophancy, which is load-bearing for Prospero's fresh-context-critic claim), Fowler's Excessive Bold (confirmed; does not frame bold as AI-tell explicitly, only notes LLMs "picked up and spread this practice"), Perspectives (confirmed — prediction tool not writing tool), DebateDevil page blank on fetch (cited in research.md's prior critic session as still live; draft's description as "monetized app with conceptually adjacent framing" is not externally re-verified in this session). HN Algolia returns nothing on Prospero itself (no prior announcement).

### Factual corrections needed

1. **Sycophancy footnote overclaims its source.** The draft footnote cites Goedecke as "the clearest short treatment." True for HN, but Goedecke's piece argues sycophancy within conversations and across RLHF-driven engagement cycles. It does NOT make the cross-session claim the draft rests on. The sentence "it cannot be sycophantic about history it does not have" uses Goedecke as backing for a mechanism he did not argue. This is a genuine citation stretch that a careful HN reader will catch. Either cite a source that actually supports cross-session independence (none was located in research.md — the critic's prior session flagged this as a gap) or reframe as a design bet grounded in the broader sycophancy pattern, as the outline explicitly requires (outline line 51: "Name this as an engineering commitment grounded in prior evidence, not as proven fact"). The draft does not name it as a bet; it asserts the mechanism.

2. **"We have all seen this" is a rhetorical smuggle.** The draft says "we have all seen this" about in-session critique-softening. HN will read that as "the author is substituting reader assent for evidence." The outline explicitly told the draft to frame this as a bet, not a fact. The draft collapses the bet into a claim.

3. **"I was not familiar with either tool before I began this work; Prospero helped me flush them out."** This is a small but load-bearing self-disclosure that sits oddly placed. It reads as defensive ("I didn't copy") rather than as a differentiator. The outline asked for: "Name them in a sentence and move on" plus a specific differentiator. The draft names them, names the differentiator (free, plugin, persistent artifacts, focused on author's own argument), but then tacks on a personal aside that weakens the section. Cut the last sentence.

### Criterion-by-criterion

**1. Promise delivery — adequate**

The opening promises a tool that unblocks paralyzed perfectionists (epigraph: "No man but a blockhead ever wrote, except for money" + the hem-and-haw frame). It delivers: the "Throughput is not the goal" section earns the promise clearly, and the phase walkthrough shows what the tool does. However, the opening also implicitly promises the piece will justify why this particular tool (vs. a prompt template) is needed — that promise is fulfilled only in the fifth section ("Why the dialectical shape needs tooling"), which arrives after Install and after the phase description. The install block in section 3 front-runs the argument; a busy reader who skims and bails at the install command will never see the reason the tool exists. Consider: move Install to the end, or foreshadow the "why a tool" argument in the opening.

**2. Evidence gaps — weak**

Multiple assertions lack substantiation in the draft despite being named as problems in the outline:

- "we have all seen this" — no citation for cross-session softening (see factual correction #1 above). The outline explicitly required this to be framed as a bet.
- "the sycophancy literature has by now thoroughly documented it" — Goedecke footnote does not document cross-session effects. One citation is doing the work of a literature review and the citation is mis-targeted.
- "AI writing now reads as transparently artificial to most critical readers absent revision" — asserted without evidence. HN may agree, but "most critical readers" is the kind of universalizing claim this audience pushes back on. A link to tropes.fyi (already in the critic's research), or Fowler, would ground it.
- "LLMs turn out to be genuinely good at [oppositional critique] when prompted accordingly and given a clean slate" — core capability claim of the piece, offered without receipt. The outline committed to leaning on the reader's Superpowers experience; the draft does not make that lean explicit. There's no "here's a case where the critic caught something I missed." Research.md notes the option of showing the "Software architecture after AI" receipts (`drafts/software-architecture-after-ai/outline.md`, `research-update.md`) — the draft does not use them. This is the single strongest evidence gap: the piece is an announcement for a critic-based tool and contains zero examples of the critic critiquing anything.
- Testimonials block: three quotes, no attribution (not even first-name, role, or "a reader"). HN will treat unattributed testimonials as noise at best, suspicious at worst. If they must stay, they need at minimum "a reader of [piece]" or "an early user." If attribution is unavailable, delete the block; the piece is stronger without it.
- "AI like a bicycle" is invoked as the design principle but only linked, not quoted or summarized. A single sentence of what the bicycle frame commits you to would do the cross-reference actual work.

**3. Entry point — adequate**

The epigraph + opening paragraph earn the first-screen attention for writers who recognize the hem-and-haw problem. The Samuel Johnson quote is a genuine hook and frames the piece as being about the motivation to publish, not just the mechanics of publishing. The second paragraph pivots to Superpowers, which is HN-audience bait in the good sense — it flags lineage immediately. The third paragraph names the tool, lists the four phases, and states the thesis ("amplify argument, not prose" in different words).

The weakness: the opening paragraph runs long (seven sentences of throat-clearing before the thesis emerges), and the second paragraph on Superpowers is a digression, not a continuation. A skeptical reader on the second paragraph has been told the author is paralyzed about publishing, then abruptly pivoted to a different plugin. The pivot is necessary (Superpowers is load-bearing as lineage), but it breaks the rhythm of the self-frame. Consider: merge the Superpowers reference into paragraph 3 at the point where the tool is introduced, rather than giving it its own paragraph between the personal frame and the tool itself.

The "It's a little embarrassing to make the argument for an AI-driven writing tool" sentence in paragraph 4 is a defensive hedge that weakens the pitch. The outline asked the piece to stand behind the tool with confidence; this sentence apologizes for it.

**4. Section discipline — adequate to weak**

- **Opening (unnamed)** — advances the thesis. Keep.
- **"Throughput is not the goal"** — advances the thesis. The section earns the shape-dependence claim the outline required. Keep.
  - **"Testimonials" subsection** — does NOT advance the thesis. Unattributed quotes in an announcement post are weak evidence and pattern-match to marketing copy. The outline does not request or allow testimonials. This is net-negative and should be cut or radically reframed with attribution.
- **"Install it"** — advances. But see structural note under Coherence: placing Install before the justification-for-tooling section means the reader is asked to install before being told why this needs to be a tool.
- **"Interrogate, critique, author, revise"** — advances. Densest section and earns its length. Keep.
- **"Why the dialectical shape needs tooling"** — advances. This is the load-bearing section for answering the "prompt engineering with extra steps" objection. It lands, except for the evidence gaps noted above (especially the sycophancy footnote).
- **"Amplify argument, not prose"** — partly redundant with "Throughput is not the goal." Both sections argue the prose-is-the-cheap-layer claim. The first frames it as "throughput is not the goal"; the last frames it as "prose is the cheap layer." These are two angles on the same point and the piece loses steam from repeating it. The final section also reintroduces the "what it doesn't do" material (limitations, blunting) that was implied in the throughput section. Consider: consolidate. The "amplify argument, not prose" frame is stronger and more memorable; the "throughput is not the goal" frame can be folded into it. The "what it doesn't do" content (blunting in particular) is strong and should survive the consolidation, but currently lives in the same final section and that section is doing too many jobs.

**5. Coherence — weak**

The argument meanders in the final third. Order of sections: (1) personal opening, (2) throughput-is-not-the-goal, (2a) testimonials, (3) install, (4) phase walkthrough, (5) why tooling is needed, (6) amplify argument not prose + limitations. The flow that would be coherent: (1) personal opening + thesis, (2) phase walkthrough (what it is), (3) why tooling (what makes it more than a prompt template), (4) throughput / limitations / honest frame (what it doesn't do, blunting), (5) install + try it. The current draft puts install in the middle, splits the "what it doesn't do" content across two sections, and repeats the prose-is-cheap claim in both. A reader following the argument has to double back at the end.

Specific coherence break: the "what it doesn't do" material in the final section is structurally what the outline had as a dedicated "What it doesn't do" section. The draft absorbed it into "Amplify argument, not prose" and lost the section-level framing that would have made the honest-frame visible. The blunting paragraph in particular — genuinely the most interesting paragraph in the piece, because it names an unsolved design tension — is buried in a section titled "Amplify argument, not prose" where a reader scanning headings would miss it.

### Summary judgment

**Needs revision.**

The piece delivers on the core promise, names the tool clearly, and survives most of the secondary objections the outline committed to closing. The voice is consistent with the calibration samples. The Superpowers acknowledgment lands. Perspectives and DebateDevil are named with differentiation.

But the piece has three defects that will cost it with the HN audience:

1. **The core capability claim is unsupported.** A tool whose pitch is "the critic catches what you miss" contains no example of the critic catching anything. The outline's "Software architecture after AI" receipt is referenced but not shown. This is the single largest revision.
2. **The sycophancy citation does not support the load it's asked to carry.** The footnote points at an in-session argument; the text makes a cross-session claim. HN will flag this. Either reframe as a bet (per the outline's explicit instruction) or cite a source that actually supports cross-session independence.
3. **The final third meanders.** "Throughput is not the goal" and "Amplify argument, not prose" are two sections doing one job, with the "what it doesn't do" material split across them.

The testimonials block is a fourth defect, smaller but embarrassing: unattributed praise in an announcement post is the kind of thing the audience allergies to.

### Prioritized revisions

1. **(Highest priority) Add a receipt for the critic.** One concrete example of the critic catching something the author missed. Options: quote a finding from the critique of "Software architecture after AI" (the drafts directory has the artifacts); or quote a finding from the critique of this very post (recursive, but fitting). Without this, the piece asks the reader to take the tool's central capability on faith.
2. **(Highest priority) Reframe the sycophancy claim.** Either cite a source that supports cross-session independence, or reword to "this is an engineering bet grounded in the broader sycophancy pattern" per the outline's explicit instruction. The draft currently asserts a mechanism it does not have external evidence for.
3. **(High priority) Delete or attribute the testimonials block.** Unattributed testimonials are worse than no testimonials on HN.
4. **(High priority) Consolidate "Throughput is not the goal" and "Amplify argument, not prose."** One section, probably under the "amplify argument, not prose" title. Pull the blunting paragraph into its own headed subsection ("What it doesn't do" or similar) so the honest-frame is visible to a scanner.
5. **(Medium priority) Move Install to the end.** Currently placed between the "what is it" setup and the "why a tool" payoff; belongs after the argument is complete. Keep the install block; move it.
6. **(Medium priority) Cut the "I was not familiar with either tool" sentence** in the Perspectives/DebateDevil paragraph. It reads as defensive; the differentiator sentence already does the work.
7. **(Medium priority) Delete the "a little embarrassing" hedge** in paragraph 4 of the opening. The tool's case is strong enough not to apologize for it.
8. **(Low priority) Tighten the opening paragraph.** Seven sentences of personal frame is long for an HN reader's patience. Could be four.
9. **(Low priority) Give "AI like a bicycle" a one-sentence summary at its cross-reference point.** A reader who has not clicked the link needs to know what the frame commits to.

### What the piece does well (worth preserving)

- The epigraph is a genuine hook and frames the piece by motivation, not mechanics.
- The four-phase walkthrough is clean, dense, and earns its length.
- The Superpowers acknowledgment lands correctly, with appropriate epistemic humility (the draft says "popularized," not "proved").
- The blunting paragraph is the most honest and interesting paragraph in the piece; it is genuinely rare in release announcements to name an unsolved design tension. It should survive any restructuring.
- The voice is consistent with the calibration samples. No em dashes, no excessive bold (the draft has essentially zero bold in body prose — a deliberate counter to Fowler's warning).
- "Prospero is tied to Claude Code because the subagent/skill model is load-bearing" — appropriate, non-defensive framing of the platform constraint.

## Critique session 2026-04-30 (second pass, oppositional reviewer)

Second oppositional review of `content/post/prospero/index.md` against `drafts/prospero/outline.md`. Today's date: 2026-04-30 (verified against system context). Prior critique session from earlier today is above; this pass re-reads the current draft state and checks whether the high-priority revisions from that session have landed.

### Verifications performed this pass

- **Goedecke sycophancy piece** (<https://www.seangoedecke.com/ai-sycophancy/>): re-fetched. Confirmed: the piece covers in-session RLHF dynamics, engagement maximization, arena benchmarks, and memory features — but **does not address cross-session sycophancy**. The draft's footnote now correctly notes this ("Goedecke's argument concerns in-session RLHF dynamics rather than cross-session independence specifically, so the cross-session case I'm invoking is reasoned from the same mechanism, not benchmarked"). This hedge has been added since the first critique pass and resolves the largest factual-citation concern from that pass.
- **Fowler, "Excessive Bold"** (<https://martinfowler.com/bliki/ExcessiveBold.html>): confirmed 28 January 2026. Fowler attributes the bold-overuse trend partly to LLMs ("LLMs seem to have picked up and spread this practice widely"). The draft has near-zero body bold, consistent with this.
- **Perspectives** (<https://getperspectives.app>): confirmed. Prediction tool (multi-persona adversarial analysis for probability estimates), not a writing tool. Has paid product framing ("Get Started" / "Log in"). Draft's characterization as a tool in an adjacent category is fair.
- **Prospero GitHub README** (<https://github.com/bguthrie/prospero>): confirmed v0.2, four-phase pipeline, four preset list (Hugo / plain / Jekyll / Ghost). Draft matches.
- **Software-architecture-after-ai artifacts**: confirmed present at `/Users/bguthrie/Projects/bguthrie.github.io/drafts/software-architecture-after-ai/` — `outline.md`, `research.md`, `research-update.md`. These receipts exist and could be shown but still are not shown in the draft.

### Author-dismissal constraint

The author has explicitly dismissed Perspectives and DebateDevil as prior art to flag — neither inspired Prospero, neither is a free Claude Code plugin, and the author has no knowledge of a similar free Claude Code plugin. Per instruction, this pass does not flag the absence of those two tools as a prior-art gap. (They are, however, named in the draft's current revision.) Other prior-art concerns surveyed in the earlier critic session stand where they found issues that do not depend on those two tools.

### Check against prior-session revision priorities

Cross-referencing the previous session's prioritized revisions:

- **(1) Add a receipt for the critic.** NOT landed in current draft form. Wait — re-reading: the draft DOES now include two findings from the critic's review of this very post (the "sycophancy footnote is a citation stretch" and "a little embarrassing is a defensive tell" examples, with explicit accept/override judgments). This is a receipt, and it is a well-chosen one (recursive, honest, shows the tool catching something the author accepted AND something the author overrode). The earlier-session critique that asked for a receipt has been substantially addressed. Good.
- **(2) Reframe sycophancy claim.** Partly landed. The footnote now explicitly concedes Goedecke is about in-session RLHF dynamics and that the cross-session case is "reasoned from the same mechanism, not benchmarked." However, the body text still says "the sycophancy literature has documented the in-session reward dynamics that produce this" and then "running the critic in a fresh context is a structural bet grounded in the same mechanism rather than a separately measured property" — which is the outline's instruction followed faithfully. The body is now consistent with the footnote. Concern resolved.
- **(3) Delete or attribute testimonials.** NOT landed. The three unattributed testimonial quotes are still in the draft as a subsection of "Throughput is not the goal." They remain unattributed. See below.
- **(4) Consolidate "Throughput is not the goal" and "Amplify argument, not prose."** NOT landed. Both sections still exist; the prose-is-cheap claim is still made in both.
- **(5) Move Install to end.** NOT landed. Install is still placed between "Throughput is not the goal" and the phase walkthrough.
- **(6) Cut "I was not familiar with either tool" sentence.** Cannot re-flag: the current draft does not name Perspectives or DebateDevil at all. The prior-art paragraph the outline planned has been cut entirely. Per the author-dismissal constraint this pass does not treat that absence as a defect.
- **(7) Delete "a little embarrassing" hedge.** NOT landed. The sentence "It's a little embarrassing to make the argument for an AI-driven writing tool" is still in paragraph 4. The draft explicitly defends it in the critique-finding block as a deliberate override of the critic.

### New findings this pass

- **Install command discrepancy.** The draft shows `/plugin install bguthrie/prospero` but the project README shows `/plugin install prospero`. This may reflect a Claude Code marketplace-prefix convention (bare names require a registered marketplace, owner/repo form works without), or it may be a documentation drift. Either way: a reader who copy-pastes the README form or the draft form and gets an error on the other will be briefly confused. Worth reconciling before publication — either update the draft to match the README, update the README to match the draft, or add a one-sentence explanation of when to use each form.

- **The testimonials block is still the weakest artifact in the piece.** On re-read: three quotes, no attribution, no context, placed immediately after the "Throughput is not the goal" argument. On an HN-skeptical audience, this reads as marketing-copy lift and undermines the preceding paragraph's honest frame. The outline does not call for testimonials anywhere. Recommend deletion, or minimum attribution ("from three early readers of 'Software architecture after AI'" or similar). The block is net-negative in its current form.

- **The "Testimonials" heading as a third-level heading under "Throughput is not the goal" is structurally odd.** Either it deserves its own H2 (unlikely — this audience is hostile to testimonial-heavy marketing copy) or it should be moved inline as a single sentence + quote ("One reader wrote: ..."). The ### subsection treatment gives the quotes more structural weight than the evidence warrants.

- **Epigraph-author attribution is missing.** The Samuel Johnson quote "No man but a blockhead ever wrote, except for money" is presented without attribution. On HN, a fraction of readers will recognize the line, most will not. Adding "— Samuel Johnson" (or a footnote with date/context) would strengthen it. Currently reads as an unattributed flourish.

- **"I tend to think of myself as a better editor than an author" is strong — but never re-landed.** The opening commits to this self-image and the piece promises the tool lets the author play editor on AI-authored prose. The phase walkthrough demonstrates this, but the piece never returns to the editor/author frame after the opening. A one-sentence callback in the final section ("I still ship work I am proud of, and I ship it from the editor's seat rather than the author's") would close the loop. Currently the opening's animating image is orphaned.

- **"Superpowers" reference strength check.** The second paragraph does acknowledge Superpowers and does not over-claim what it proved ("struck by how effective it is at interrogating me on my intent"). This is appropriately epistemically humble per the outline's explicit warning. But the draft does not name what Superpowers actually is (a Claude Code plugin) for readers who haven't seen it. The repo link is there, so the motivated reader can find out, but a four-word clarification ("another Claude Code plugin") would save the uninitiated reader from pattern-matching Superpowers as a product, a company, or something else. Minor.

- **"Along the way, agents perform research on the topic" is an unsupported factual claim the draft does not show.** The phase walkthrough later demonstrates research during `/critique`, but the opening's blanket claim that "agents perform research" is vague. A reader who skims and bails on section 3 will have the concept of the tool but no concrete instance of what "research" means. The phase walkthrough does land this later. Not a serious defect; consider tightening.

- **"three of your existing posts" in the `/author` description is the only mention of voice-calibration samples.** This is interesting technical detail and buried. Audience readers who have written their own Claude Code plugins will notice this as a nice design choice. Worth surfacing slightly — e.g., "three of your existing posts (chosen to span topic and length)" or similar — to make the design choice visible.

### Criterion-by-criterion (second pass)

**1. Promise delivery — adequate (unchanged)**

The opening still promises a tool for paralyzed perfectionists and delivers on that via "Throughput is not the goal" and the phase walkthrough. The core promise is met. The secondary promise ("why this needs to be a tool, not a prompt template") is also met, in the fifth section, though the structural order still buries the payoff behind Install. Busy readers who skim the first three sections will know what Prospero is but not why it matters structurally, because the "why tooling" section lives after Install.

**2. Evidence gaps — adequate (improved from weak)**

The critic-catches-something receipt has been added since the previous session, resolving the largest gap. The sycophancy framing has been corrected. Remaining gaps are smaller:

- "AI writing now reads as transparently artificial to most critical readers absent revision" — asserted, not substantiated. One link (tropes.fyi, Fowler, anywhere) would do.
- "LLMs turn out to be genuinely good at all three when prompted accordingly and given a clean slate" — the outline committed to leaning on the reader's Superpowers experience for this capability claim. The draft does not make that lean explicit. The reader is asked to take the capability claim on faith; the critic-catches-something receipt earlier helps with this, but not fully.
- Testimonials remain unattributed (see above).
- Epigraph remains unattributed (see above).
- The opening's "agents perform research on the topic" is a claim deferred to the later walkthrough.

**3. Entry point — adequate (unchanged)**

The epigraph + hem-and-haw frame still work. The opening paragraph is still seven sentences (a little long for an HN reader's patience but earned by the self-frame). The pivot to Superpowers in paragraph 2 still breaks rhythm; the prior critique's suggestion to fold it into paragraph 3 remains reasonable but is a judgment call. The "a little embarrassing" hedge is still a defensive tell — the author has chosen to keep it, per the critic-finding block, and that is a legitimate voice call, but it still weakens the paragraph it opens.

**4. Section discipline — weak (unchanged from prior pass)**

The structural issues flagged in the prior critique session have not been addressed:

- Testimonials subsection still does not advance the thesis. It pattern-matches to marketing copy.
- "Throughput is not the goal" and "Amplify argument, not prose" still make the same argument twice.
- The blunting paragraph is still buried in "Amplify argument, not prose" where a scanner will miss it.
- Install is still mid-piece, not end.

The testimonials subsection is the single easiest fix and the highest-value: cutting it is a one-line revision that removes the weakest artifact in the piece.

**5. Coherence — weak (unchanged)**

Same concerns as the prior pass: install is mid-piece, the "what it doesn't do" material is split across two sections, and the prose-is-cheap claim is made twice. The piece reads coherently on a linear read but its structure invites a scanner to miss the most interesting paragraphs (blunting; why-a-tool). The final ordering the prior pass suggested — (1) opening + thesis, (2) phase walkthrough, (3) why tooling, (4) what it doesn't do + blunting, (5) install — still holds.

### Summary judgment

**Needs revision (same verdict, reduced severity).**

The piece has meaningfully improved between sessions. The critic-catches-something receipt is now present and well-chosen. The sycophancy framing is now honest about the citation stretch. The voice is consistent with the calibration samples. The four-phase walkthrough is clean and earns its length.

What remains are structural defects and one easy cut:

1. **Testimonials block is still unattributed and structurally over-weighted.** This is the single most embarrassing artifact in the piece for an HN audience. One-minute fix: delete. Alternative: attribute minimally.
2. **Section ordering still front-runs Install before the "why a tool" argument.** A skimmer who bails at paragraph 5 sees an install command before the case for tooling. Move Install to end or restructure.
3. **"Throughput is not the goal" and "Amplify argument, not prose" still double-argue the same point.** Consolidating is a 30-minute structural edit with a large payoff.
4. **The blunting paragraph — the single most interesting paragraph in the piece — is buried in a section titled "Amplify argument, not prose."** A scanner will miss it. Giving it its own heading or subsection is the second-easiest high-value fix.
5. **Install command inconsistency with README.** `bguthrie/prospero` in the draft vs. `prospero` in the README. Reconcile.
6. **Epigraph is unattributed.** One-line fix (attribution to Samuel Johnson).

### Prioritized revisions (second pass)

1. **(Highest) Delete or attribute the testimonials block.** Single highest-return fix; no restructuring required.
2. **(Highest) Reconcile install command with README.** Factual consistency.
3. **(High) Move Install to the end of the piece.** Restructuring, but substantial coherence payoff.
4. **(High) Consolidate "Throughput is not the goal" into "Amplify argument, not prose," with blunting as its own visible subsection.** Structural, high-payoff.
5. **(Medium) Attribute the epigraph to Samuel Johnson** (footnote or em-dash attribution).
6. **(Medium) Add one line of what "AI like a bicycle" commits to** at the cross-reference point, so a reader who has not clicked through still gets the frame.
7. **(Low) Tighten the opening paragraph from seven sentences to four or five.**
8. **(Low) Clarify that Superpowers is a Claude Code plugin** on its first mention, for uninitiated readers.
9. **(Low) Add a one-sentence callback to the editor-not-author frame** in the closing section, to close the loop the opening opened.

### What the piece does well (unchanged from prior pass, re-confirmed)

- Epigraph as hook still works.
- Four-phase walkthrough remains the strongest section.
- Superpowers acknowledgment lands with appropriate epistemic humility.
- The added critic-finding block (the piece critiquing itself, with accept/override judgment) is a strong demonstration of the tool's value and is a meaningful improvement since the prior pass.
- The blunting paragraph remains the most honest paragraph in the piece and should survive restructuring.
- Voice is consistent with calibration samples (no em dashes, no excessive bold, argumentative section headers).
- The sycophancy footnote now correctly discloses the citation stretch rather than papering over it.
