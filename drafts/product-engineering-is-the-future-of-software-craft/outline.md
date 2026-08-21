# Product Engineering Is the Future of Software Craft

## Thesis

The practices currently treated as markers of software craftsmanship — TDD, Clean Code discipline, frontend/backend specialization — are losing their centrality, not because quality stops mattering, but because they were scaffolding for human code production and LLMs are displacing humans as primary code producers. What persists and becomes dominant is the outward-facing orientation: owning the product, shaping software to meet business needs, integrating systems, knowing whether things actually work. This is product engineering, and it is what craft will mean.

## Antithesis

You can't separate the discipline from the judgment. TDD doesn't just catch bugs — it forces you to reason about interfaces before implementation. Clean Code isn't just style — it encodes thinking about maintainability. Developers who never practiced these disciplines won't be able to evaluate whether LLM output is actually good. Automate away the practice and you automate away the taste needed to supervise the automation.

## Synthesis

You don't need to push a hand saw to understand how to use an electric one. Judgment develops through experience and mistakes — and mistakes remain emphatically available. You can still ship the wrong thing, integrate badly, instrument nothing, miss what the user actually needs. Those failure modes are still there; they just operate at a different level. What shifts is the emphasis: away from line-level scrutiny of particular code choices, toward whether the software actually solves the problem. The discipline doesn't disappear; it migrates. The chair doesn't know how you cut the wood.

## Entry Point

The historical analogy: industrial automation changed what carpentry craft meant. Fewer people practice it; some practice it as a hobby; what mastery means has shifted. The trade didn't die, it transformed. Software is not special.

A concrete instance: a nontechnical founder who used to employ engineers in Ukraine to write his code now doesn't. His ability to read code hasn't changed. What changed is that his business grows faster and at lower structural cost. That's the signal.

## Sections

### Craft has always meant mastery of the current best tools, not the previous ones
- **Claim:** Every major shift in tooling has redefined what craft means in a trade without eliminating craft itself.
- **Evidence:** Industrial carpentry, manufacturing automation, desktop publishing displacing typesetting.
- **Objection:** Software is different because it's cognitive work, not physical — the tool can now do the thinking, not just the cutting.
- **Resolution:** The cognitive work that matters is reasoning about what to build and whether it works, not the particulars of how to express it in a language. That work remains human.

### The practices we called craftsmanship were scaffolding for human code production
- **Claim:** TDD, Clean Code, layer specialization, and similar practices were valuable because humans needed structure to produce consistent, correct code at scale. They were compensating mechanisms.
- **Evidence:** LLMs already write code across platforms without needing to specialize, and the trajectory — open-weight models as capable as proprietary ones, continuous new releases — makes this more true over time, not less. The direction of travel is clear even if the present state is contested.
- **Objection:** These practices also developed judgment, not just output quality.
- **Resolution:** Judgment develops through experience and mistakes, not through the specific disciplinary substrate. Mistakes remain available at the product level — shipping the wrong thing, integrating badly, missing what users need. Taste migrates to where the failure modes are.

### The craft that survives is the outward-facing one
- **Claim:** Product engineering — owning the product end-to-end, shaping software to business needs, observing whether systems work — is what distinguishes excellent practitioners going forward. Product engineers often ship faster than code-focused engineers not because they possess more expertise but because they see the full picture and own the outcome.
- **Evidence:** The PostHog/industry framing: software engineer owns the code, product engineer owns the product. End-to-end ownership is what LLMs cannot substitute for; they can write the code but they cannot own the consequence.
- **Objection:** This just means fewer engineers are needed overall, which isn't a craft story, it's a labor story.
- **Resolution:** Yes, fewer people will practice it — as with carpentry. That doesn't change what craft means for those who do.

## So What?

N/A — this is a polemic, not advice. The argument stands as a description of where things are going, not a prescription for what engineers should do about it.

## Open Questions

- The headcount contraction point is acknowledged but not dwelt on. Worth deciding in the draft how much weight to give it — too much and the post becomes a labor-market piece; too little and it looks like you're avoiding the uncomfortable implication.
- The nontechnical founder example is strong but proves something slightly different (non-engineers can now ship software). Frame it as evidence of the economic signal, not as the central argument.
- The LLM-quality-as-trajectory argument needs to be made without sounding like a promissory note. Anchor it in the direction of evidence, not in a bet on future capability.
