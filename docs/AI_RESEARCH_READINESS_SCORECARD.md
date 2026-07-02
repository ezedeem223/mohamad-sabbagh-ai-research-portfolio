# AI Research Readiness Scorecard
## Qualitative Assessment — Mohamad Sabbagh Portfolio
## Final State — Updated After Evidence Pack Completion

**Purpose:** Honest qualitative evaluation of each project across research dimensions, updated to reflect the finalized evidence packs. Labels: Very High / High / Medium-High / Medium

---

## ECG Image-to-Signal Reconstruction Pipeline

| Dimension | Rating | Justification |
|-----------|--------|---------------|
| **Problem Clarity** | Very High | Image-to-signal reconstruction from ECG paper scans is concretely defined and clinically motivated; synthetic benchmark clarifies evaluation scope |
| **Technical Depth** | High | Multi-stage pipeline (YOLO → EffB3/ResNet50 → calibration → Viterbi → export); explicit model-selection policy; dual-anchor design verified |
| **Reproducibility** | High | Config-driven model selection; archived notebooks as provenance; reproducibility checklist; synthetic benchmark seed committed |
| **Research Maturity** | High | Workbench Seed adds evaluation framework (synthetic benchmark, QC, failure atlas, academic research brief) — moves from engineering demo to research artifact |
| **Documentation Quality** | High | Research evidence pack: synthetic protocol, evaluation protocol, failure atlas, academic research brief, reproducibility checklist |
| **Future Research Potential** | Very High | Real clinical benchmark, failure mode quantification, synthetic-to-real transfer, comparison methodology — all natural extensions |
| **Risk/Limitation Awareness** | High | Synthetic-vs-clinical distinction explicit throughout; no clinical validation claimed; SKIPPED_ASSETS_MISSING semantics documented |
| **Portfolio Value** | Very High | Strongest and most distinctive project; highest research relevance; workbench seed substantially elevates research credibility |

**Overall:** Flagship. Primary investment is complete. Ready for academic presentation.

---

## Satellite Land Classification with CNN and CNN-ViT

| Dimension | Rating | Justification |
|-----------|--------|---------------|
| **Problem Clarity** | High | Binary land classification with comparative architecture study is clearly scoped |
| **Technical Depth** | High | CNN vs CNN-ViT comparative study; dual-framework (Keras + PyTorch); preserved evaluation artifacts |
| **Reproducibility** | High | Preserved evaluation artifacts; reproducibility checklist; dual-framework design |
| **Research Maturity** | High | Evidence pack adds model comparison brief, metric provenance, limitation matrix, CNN-ViT explainer, and explainability protocol |
| **Documentation Quality** | High | Research evidence pack covers comparison, provenance, limitations, explainability, and reproducibility |
| **Future Research Potential** | High | Attention visualization (if checkpoint supports), multi-class extension, multi-temporal analysis |
| **Risk/Limitation Awareness** | High | Experiment Limitation Matrix explicitly documents binary scope, no multi-temporal, no cross-dataset |
| **Portfolio Value** | High | Second academic pillar; strong remote sensing relevance |

**Overall:** Second pillar. Evidence pack complete. Ready for academic presentation.

---

## Waste Classification using Transfer Learning

| Dimension | Rating | Justification |
|-----------|--------|---------------|
| **Problem Clarity** | High | Binary recyclable vs organic with sustainability framing; use-case boundary documented |
| **Technical Depth** | Medium | Established transfer-learning method, executed cleanly with full metric provenance and release documentation |
| **Reproducibility** | Very High | Bundled checkpoint + predict.py + inference reproducibility guide — most immediately runnable project |
| **Research Maturity** | High | Model Release Evidence Pack adds model card, release card, metric provenance, and inference framing |
| **Documentation Quality** | High | Release pack covers model card, metric provenance, sustainability boundary, failure modes, calibration, interpretability |
| **Future Research Potential** | Medium | Multi-class extension and domain adaptation possible |
| **Risk/Limitation Awareness** | High | Stored-outputs provenance caveat on all metrics; sustainability use-case boundary explicit |
| **Portfolio Value** | Medium-High | Strongest direct-inference demo; best for showing a reviewer something immediately runnable |

**Overall:** Strongest model-release project. Model Release Evidence Pack complete. Third in review order.

---

## Aircraft Damage Classification and Report Generation

| Dimension | Rating | Justification |
|-----------|--------|---------------|
| **Problem Clarity** | High | Inspection-support workflow combining classification and captioning; human-review boundary explicit |
| **Technical Depth** | Medium-High | VGG16 + BLIP multimodal pipeline; BLIP limitations documented |
| **Reproducibility** | High | Installable package; archived notebooks; reproducibility checklist; config-driven scripts |
| **Research Maturity** | Medium-High | Evidence pack adds model card, inspection protocol, VL limitations, failure mode matrix |
| **Documentation Quality** | High | Evidence pack documents VL limitations, inspection boundaries, failure modes |
| **Future Research Potential** | Medium-High | BLIP domain fine-tuning; formal report quality evaluation |
| **Risk/Limitation Awareness** | High | Human-review boundary explicit; VL limitations documented; no aviation certification claimed |
| **Portfolio Value** | Medium-High | Adds multimodal VL breadth; distinctive evidence pack; fourth in review order |

**Overall:** Applied multimodal breadth project. Evidence pack complete.

---

## Rainfall Prediction in Australia

| Dimension | Rating | Justification |
|-----------|--------|---------------|
| **Problem Clarity** | High | Multi-model comparison for binary rainfall prediction; historical metrics with provenance caveats |
| **Technical Depth** | Medium | Classical ML comparison, methodologically clean; deliberately scoped to tabular methods |
| **Reproducibility** | High | Historical metrics preserved; leakage audit; temporal protocol; reproducibility checklist |
| **Research Maturity** | Medium-High | Evidence pack adds metric provenance, temporal validation, leakage audit, interpretability protocol |
| **Documentation Quality** | High | Evidence pack covers metric provenance, temporal risk, leakage audit, calibration, error analysis |
| **Future Research Potential** | Medium | Temporal cross-validation; deep learning baseline; fresh rerun with dataset |
| **Risk/Limitation Awareness** | High | RF overfitting documented; XGBoost provenance caveat; temporal leakage risk audited |
| **Portfolio Value** | Medium | Demonstrates tabular ML breadth and methodology range; fifth in review order |

**Overall:** Well-executed breadth project. Evidence pack complete. Demonstrates methodology range.

---

## Portfolio-Level Assessment (Final)

| Dimension | Portfolio Rating | Notes |
|-----------|----------------|-------|
| **Technical Range** | High | Medical signal, remote sensing, VL, classical tabular, sustainability |
| **Reproducibility Culture** | Very High | Reproducibility checklists, metric provenance, validation tooling across all five projects |
| **Research Depth** | High | ECG + Satellite have genuine depth; others are competent applications with honest framing |
| **Evaluation Rigor** | High | Synthetic benchmark for ECG; metric provenance matrices for all projects; temporal validation for Rainfall |
| **Honest Limitation Awareness** | Very High | Limitation matrices, failure mode atlases, provenance caveats, and use-case boundaries throughout |
| **Application Readiness** | High | Five finalized repositories with evidence packs; ready for academic application packaging |

**Priority action:** Packaging — GitHub profile README, pinned repos, CV bullets, portfolio website.
