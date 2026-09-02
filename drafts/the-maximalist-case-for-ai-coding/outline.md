# The Maximalist Case for AI Coding

## Thesis

Software is what it does. We have always judged it this way, even when we pretended otherwise. Professional software engineers have not read the source code for the vast majority of software they use; they rely on a web of trust underpinned by deterministic harnesses for verifying quality. As those harnesses improve and the cost of rewriting approaches zero, human review of individual lines of source code will become a ceremonial bottleneck rather than a quality gate. The organizations that accept this first will win; the ones that insist on line-level human review as a prerequisite for shipping will be outcompeted by those who direct human attention toward intent, boundaries, and verification instead.

## Audience

HN readers: technically literate, skeptical, many of whom are deeply committed to craft and code review. They will resist this argument. The piece must earn its provocations.

## Structure

### 1. Software is what it does

**Claim:** The pragmatic and philosophical case that software's identity is its behavior, not its source code.

**Argument:**
- You use macOS, Instagram, 1Password. You trust your life with closed-source code you've never read.
- Even with OSS, engineers trust npm packages they haven't audited as readily as they trust the Linux kernel. The "web of trust" is real, but it's far less discriminating than the craft community pretends.
- Philosophically, this is behaviorism applied to software: if it passes all tests, serves users, and withstands adversarial probing, questions about its internal structure are metaphysical. The tests are the spec; the monitoring is the proof; the users are the jury.
- Pragmatically, we've always acted this way. The craft narrative is a story we tell ourselves; it doesn't describe how we actually evaluate most software.

**Counterargument to engage:** "But readable code is how we *maintain* software." (Addressed in section 3.)

### 2. The harness is the thing

**Claim:** Deterministic verification infrastructure (not human line-by-line review) is and always has been the real quality gate.

**Argument:**
- Test suites, type systems, static analysis, security scanners, observability, monitoring, and increasingly formal verification: these are what actually catch defects at scale.
- Human code review catches a narrow band of issues (naming, design preference, some logic errors) but misses entire categories that automated tools catch reliably. It is also slow, expensive, and does not scale with the rate of generation that AI enables.
- The organizations that invested in harnesses over review culture shipped faster and with comparable or better quality. CI/CD was the first wave; AI-assisted verification is the second.
- Reference the "architecture after AI" argument: observability and behavioral verification are ascending precisely because they work regardless of whether anyone reads the source.

**The specification problem (engage directly):**
- The strongest pro-review argument isn't "humans catch bugs in code"; it's "humans catch bugs in *intent*." A reviewer who says "this doesn't match what PM actually wants" is doing real work.
- But code review catches intent mismatches *accidentally*, not systematically. It's the wrong tool for the job. If you want to verify intent, you need better specification practices: design docs, acceptance criteria, behavioral contracts, and the observability to confirm them in production.
- The human role is directing attention: scoping intent, defining what success looks like, interrogating boundaries. That's not code review; it's design review and specification. Conflating the two is how review becomes a gate rather than a habit.
- The guardrail paradox from the Hugging Face incident (July 2026) reinforces this: when an autonomous agentic attacker compromised production at machine speed (thousands of actions, self-migrating C2), human review of diffs was categorically irrelevant. The defense required AI-driven forensic analysis — and the defenders' own commercial AI tools were blocked by safety filters that couldn't distinguish responder from attacker. Security is a harness problem regardless of your position on code review.

**Counterargument to engage:** "Tests can't catch everything; you need a human to evaluate design." (Yes — but design evaluation is specification work, not implementation review. Do it upstream where it matters, not downstream where it's already too late.)

### 3. Maintainability is dissolving

**Claim:** The concept of maintainability as traditionally understood is losing its meaning because the cost of rewriting approaches zero.

**Argument:**
- "Who cares if it's unmaintainable in two years? The models will be better in two years." Look at trajectory, not just current state.
- Every entrepreneur who started with LLMs writing crappy code has discovered that newer models wallpaper over the mistakes of the old. Code is tech; the commercial incentives for LLMs to improve remain overwhelming.
- Fowler's "Vibe Coding" piece (May 2026) draws the line at "well-structured code helps LLMs too." He makes a broader argument: that LLMs are probabilistic inferrers, not compilers of natural language, and that developer judgment remains essential for evaluating output. This is partially true at the code level. But his argument conflates *developer judgment* (which remains essential) with *line-by-line review of implementation* (which does not scale and increasingly doesn't need to). Structure is instrumentally useful, not architecturally necessary. And LLMs can improve code quality rapidly, at scale.
- The cost-to-reverse argument from "Software architecture after AI" applies here with even more force: if rewriting code is cheap, then the *maintainability* of the current code is a minor optimization concern, not a design constraint.

**Scope the claim (honest acknowledgment):**
- Code-level rewrites are approaching cheapness. System-level migrations — with state, integrations, contractual SLAs, and data gravity — remain hard, for reasons already identified: the hard part was never the code. Scrutinize application boundaries; interrogate one-way doors; but scrutinizing implementation details is buying you dramatically less than it used to. The humans direct attention to boundaries and intent; the machines handle the rest.
- Steering models is increasingly a matter of intent and focus, especially with frontier models like Fable.

**Counterargument to engage:** Fowler's position on developer judgment. Agree it's essential — then distinguish judgment (what to build, where the boundaries are) from review (reading every line of implementation). The former scales; the latter does not.

### 4. The dark factory is already winning

**Claim:** The competitive advantage of expediting or ignoring human code review is already being realized at the margins; the market will select for it.

**Argument:**
- The dark factory concept (autonomous AI codebases, fully automated development lifecycle) became popular early 2026, faded as orgs recovered from shock, but entrepreneurs and small startups are doing this now. It is already winning at the margins.
- If you want to see the change, look at the margins, not the incumbents. Small startups and solo entrepreneurs define what the future will become. The problems ThoughtWorks solves have always been caused by successful businesses that did not much care about the niceties of code craft on their path to competitive dominance.
- The competitive advantage is real and compounding: teams that accept this ship faster, iterate faster, and can afford to rewrite rather than maintain.
- The market selects for speed when quality is held constant by harnesses. Quality gates that slow delivery without measurably improving outcomes will be eliminated by competition.
- Grand poobahs of the software engineering establishment are earnestly committed to human code review. They are wrong, and the evidence is mounting at the edges of the market where competition is fiercest and survival depends on speed.

**Honest example (inoculation):**
- A friend maintains a parking ticket app. His background is VC and big tech PM, not engineering. Occasionally he gets embarrassed about the source code, asks me or someone for advice on how to steer the LLM, fixes it, and moves on. The business is growing; it works. The code is not pretty, and nobody reviews it, and the product serves its users. This is the future at the margins.
- The harness itself is code. Who reviews the harness? Answer: human attention concentrates on the verification layer — smaller surface area, higher leverage per hour of attention. You're not eliminating human judgment; you're focusing it where it matters most.
- Novel failure modes are definitionally novel; the evidence that old-fashioned review catches these is as scant as the evidence that it won't. The mitigation is iteration speed: when something breaks, you fix it fast. Observability catches the unknown; speed of response limits the blast radius.

**Counterargument to engage:** "Speed without quality is a race to the bottom." (Only if quality degrades. The argument is that harnesses hold quality constant while speed increases. The gate is the bottleneck, not the safeguard.)

### 5. The craft has changed (closing)

**Claim:** The craft you're defending is already dead, but the new craft is richer, not diminished.

**Argument:**
- We've invented the code equivalent of a bandsaw. The automation is real. You can still build by hand if you want, but as a commercial proposition, it's even more dead than most folks realize.
- Source code is becoming an intermediate representation: inspected for debugging, not crafted for beauty. The artifact of record is the intent and the harness that verifies it.
- The new craft is steering with intent and focus: knowing what to build, specifying it precisely, verifying it ruthlessly, and iterating at speed.
- Software built rapidly and without the old limits, with a different conception of what it means to build. The ceiling rises for everyone.
- The discipline hasn't gone away; its object has shifted. From "write clean code" to "specify clearly, verify completely, iterate fearlessly."

## Tone

Polemic. Confident, confrontational, earned. Not dismissive of the opposition (engage their best arguments) but unambiguous about where you stand. The reader should feel provoked but unable to dismiss the argument as uninformed.

## Key references

- Fowler, "Vibe Coding" (May 2026) — the establishment position to engage seriously
- Hugging Face security incident (July 2026) — the superhuman threat case (folded into section 2)
- MindStudio, "What is a Dark Factory" — the concept to claim is winning at the margins
- Your own "Software architecture after AI" — continuity and escalation
- Your own "Code style is a mirror, not a metric" — the aesthetics-as-engineering-masquerade argument
- Cloudflare/Vinext, Christopher Chedeau's TS-to-Rust port — concrete evidence of cost collapse (use judiciously, as bounded examples)
