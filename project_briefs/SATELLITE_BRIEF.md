# Satellite Project Brief
## Satellite Land Classification with CNN and CNN-ViT Models

**Repository:** https://github.com/ezedeem223/satellite-land-classification-cnn-vit
**Portfolio Role:** Second strongest academic project — comparative remote sensing study
**Final Status:** FINALIZED — Satellite Research Evidence Pack complete
**Source Confidence:** Repo surface inspected — README, CITATION.cff, results/ directory confirmed

---

## Project Goal

Conduct a comparative evaluation of CNN and CNN-ViT hybrid architectures for binary land-use classification (agricultural vs. non-agricultural) from satellite imagery. Primary contribution is the comparative experiment design, metric provenance documentation, and experiment limitation framing — not a novel architecture.

---

## Verified Implementation

| Component | Details | Source |
|-----------|---------|--------|
| Task | Binary: class_0_non_agri vs class_1_agri | Inspected README |
| Baseline model | CNN | Inspected README |
| Comparison model | CNN-ViT hybrid | Inspected README |
| Frameworks | Keras and PyTorch | Inspected README |
| Evaluation artifacts | Confusion matrices, ROC curves, comparison tables in results/ | Inspected README |
| License | MIT | Inspected CITATION.cff |
| Version | 1.0.0, 2026-04-21 | Inspected CITATION.cff |

---

## Finalized Strengthening — Satellite Research Evidence Pack

| Component | What Was Built |
|-----------|---------------|
| Academic Research Brief | Problem framing, comparative design rationale, limitations, research extensions |
| Model Comparison Brief | CNN vs CNN-ViT comparison from preserved evaluation artifacts (confusion matrices, tables) |
| Metric Provenance Matrix | Maps each metric to its preserved artifact source |
| Experiment Limitation Matrix | Binary scope only; no multi-temporal; no cross-dataset; no attention visualization confirmed |
| CNN vs CNN-ViT Architecture Explainer | Architectural difference, why hybrid, what the comparison tests |
| Dataset and Task Card | Task framing, dataset scope, class definitions |
| Explainability Protocol | What interpretability approach is valid; why attention visualization is future-only |
| Reproducibility Checklist | Environment, configs, dataset download, evaluation replication |
| Validation tooling and tests | Confirm evidence pack files present and consistent |

---

## Safe Claims

- "Comparative CNN vs CNN-ViT evaluation for binary agricultural land classification from satellite imagery"
- "Dual-framework implementation (Keras, PyTorch) with preserved evaluation artifacts"
- "Metric Provenance Matrix tracing preserved historical evaluation metrics to results/ artifacts"
- "Experiment Limitation Matrix documenting binary scope, no multi-temporal, no cross-dataset validation"
- "MIT license; CITATION.cff version 1.0.0"

## What Must Not Be Claimed

- State-of-the-art performance
- Production geospatial or real-time satellite analysis capability
- Attention maps not produced from actual model outputs
- Cross-dataset generalization

## Future Extensions (Not Current Claims)

- Attention visualization: future-only; requires checkpoint support without retraining; abandon if not achievable
- Multi-class land-use extension
- Multi-temporal analysis
- Cross-dataset validation

---

## Research Application Support

1. **Comparative evaluation discipline:** CNN vs CNN-ViT isolates the effect of transformer attention — experimental design thinking, not just implementation
2. **Dual-framework proficiency:** Keras and PyTorch across one project demonstrates adaptability
3. **Honest scope documentation:** Experiment Limitation Matrix is as important as the results — shows a researcher who understands what their data can and cannot prove

**CV framing:** "Comparative CNN vs CNN-ViT evaluation for binary agricultural satellite land classification; dual-framework (Keras, PyTorch); Satellite Research Evidence Pack with model comparison brief, metric provenance matrix, experiment limitation matrix, and CNN-ViT architecture explainer."
