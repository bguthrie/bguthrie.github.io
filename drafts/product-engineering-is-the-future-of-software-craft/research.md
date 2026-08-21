# Research

## Interrogation session 2026-08-11T00:00

### Product engineer definition
- PostHog: "a software engineer owns the code, a product engineer owns the product" — https://posthog.com/blog/product-engineer-vs-software-engineer
- PostHog handbook entry: https://posthog.com/product-engineer/what-is-a-product-engineer
- Atlassian on product engineering: https://www.atlassian.com/agile/product-management/product-engineering
- IBM definition (end-to-end product lifecycle framing): https://www.ibm.com/think/topics/product-engineering

### Notes
- The term is reasonably settled in current usage; no significant ambiguity to address in the post.
- The inward/outward orientation framing (software engineer = owns the code, product engineer = owns the product) is the most useful distillation.

## Critique session 2026-08-11T12:00

### HN prior art on LLM + craft
- Active HN discussions exist on LLM coding quality degradation: "We charge $10k a week to delete AI-generated code" (https://news.ycombinator.com/item?id=48823359), "Verification debt: the hidden cost of AI-generated code" (https://news.ycombinator.com/item?id=47289406), "What AI coding costs you" (https://news.ycombinator.com/item?id=47194847).
- These represent a strong HN counternarrative the outline does not address: LLM output creates maintenance and quality debt that requires experienced engineers to remediate — i.e., the craft doesn't disappear, it gets redistributed to cleanup.
- "2x, not 10x: coding with LLMs in 2026" (https://news.ycombinator.com/item?id=49047839) — skeptical HN take on productivity claims, relevant to the economic signal argument.
- Staff engineer LLM usage piece (2026): https://www.seangoedecke.com/how-i-use-llms-in-2026/ — notes LLMs now produce entire PRs but in areas the engineer already knows well. Suggests deep technical judgment is a prerequisite, not a casualty.

### Martinfowler.com
- "Engineering Practices for LLM Application Development" (https://martinfowler.com/articles/engineering-practices-llm.html) — argues lean engineering practices remain fundamental with LLMs. This is canonical Fowler prior art that cuts against the outline's framing that craft practices become scaffolding.

### Notes
- The HN audience has been marinating in LLM-coding discourse for 18+ months. The outline treats the AI disruption claim as novel; HN readers will not. The differentiation needs to come from the craft/product-engineering reframing, not from the "LLMs are changing things" premise.
- The cleanup/debt counternarrative is the most dangerous gap: if LLM code creates quality debt requiring expert remediation, the "scaffolding" argument collapses.

## Author session 2026-08-12T00:00

### Open-weight model trajectory
- HuggingFace Spring 2026 State of Open Source: https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026 — open-weight models now production-quality for coding, reasoning, and agentic workflows
- DeepSeek V4 variants (V4-Pro: 1.6T params, 49B active; V4-Flash: 284B total, 13B active) — open-weight, competitive with proprietary models on coding benchmarks
- Kimi K2.6: strong open-weight model for front-end generation, full-stack prototypes, repo-level coding, and agent orchestration
- Best Open-Source LLM Models 2026 survey: https://huggingface.co/blog/daya-shankar/open-source-llms

### Notes
- Used in post to support the trajectory argument: the quality gap between open-weight and proprietary is closing, direction of travel is clear even if present state is contested.
- Handled the "quality debt" counternarrative in a footnote: located the real debt problem at the product/behavioral level, not the code-structure level.
