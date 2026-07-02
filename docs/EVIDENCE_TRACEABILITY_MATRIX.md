# Evidence Traceability Matrix
## Claim Control — Mohamad Sabbagh AI Research Portfolio
## Final State — Post-Project Upgrade Sync

**Purpose:** Map every major portfolio claim to its evidence source, allowed wording, and forbidden wording. Consult before writing CV entries, research statements, professor emails, or any portfolio document. Updated to reflect finalized evidence packs.

---

## Evidence Confidence Levels

| Level | Meaning |
|-------|---------|
| **Verified from inspected repo** | Confirmed from direct inspection of README, config files, CITATION.cff, or results/ |
| **Verified — stored outputs** | Confirmed from repository-preserved artifacts labeled as historical/stored — not a fresh rerun |
| **Verified — evidence pack** | Confirmed as produced by the research evidence pack in the finalized repository |
| **Planning hypothesis** | Reasonable inference not confirmed by inspection |
| **Not verified — do not state** | Cannot be confirmed; must not appear in any portfolio document |

---

## ECG Claims

| Claim | Evidence Source | Confidence | Allowed Wording | Wording to Avoid |
|-------|----------------|------------|-----------------|-----------------|
| Multi-stage pipeline architecture | Inspected README | Verified from inspected repo | "YOLO → EfficientNet-B3 U-Net → ResNet50 fallback → calibration → Viterbi trace → CSV export" | "clinical ECG pipeline" |
| EffB3 primary segmentation model | Inspected configs/models.yaml | Verified from inspected repo | "EfficientNet-B3 U-Net primary segmentation (phase-9 DDP checkpoint, SCSE decoder)" | Omitting source citation |
| ResNet50 phase-10 fallback | Inspected configs/models.yaml | Verified from inspected repo | "ResNet50 U-Net fallback (phase-10, SCSE decoder)" | "ResNet50 clinical fallback" |
| Config-driven model selection | Inspected README | Verified from inspected repo | "Explicit config-driven model selection; notebook-style auto-discovery forbidden" | "adaptive clinical model selection" |
| Dual-anchor design | Inspected README | Verified from inspected repo | "Dual-anchor design: structural anchor (v57) and performance anchor (v50)" | "clinical dual-anchor" |
| Viterbi trace extraction | Inspected README | Verified from inspected repo | "Viterbi-based waveform trace extraction" | "Viterbi with clinical accuracy" |
| Competition-style CSV output | Inspected README | Verified from inspected repo | "Deterministic id,value CSV export" | "clinical diagnostic output" |
| MIT license / CITATION.cff | Inspected CITATION.cff | Verified from inspected repo | "MIT license; CITATION.cff present (version 0.1.0)" | — |
| Synthetic ECG benchmark | Evidence pack (tools/synthetic_benchmark/) | Verified — evidence pack | "Parametric synthetic ECG-like benchmark with generation-only and scoring modes" | "clinical benchmark"; "clinically validated evaluation" |
| Synthetic cases are not real ECG | Evidence pack design | Verified — evidence pack | "Synthetic ECG-like cases from parametric waveforms" | "real patient ECG data"; "clinical ECG dataset" |
| QC checks on waveform output | Evidence pack (tools/quality/) | Verified — evidence pack | "QC checks: NaN/Inf, flatline, length, amplitude, lead count, inter-lead variance" | "clinical QC validation" |
| Failure Mode Atlas | Evidence pack (docs/research_pack/) | Verified — evidence pack | "Seed Failure Mode Atlas with conceptual failure categories" | "validated failure analysis" |
| Academic Research Brief | Evidence pack (docs/research_pack/) | Verified — evidence pack | "Academic research brief with pipeline framing, limitations, and research extensions" | "clinical research brief" |
| No clinical validation | Verified framing | Verified from inspected repo | "No clinical validation — research implementation only" | Never omit this caveat |

---

## Satellite Claims

| Claim | Evidence Source | Confidence | Allowed Wording | Wording to Avoid |
|-------|----------------|------------|-----------------|-----------------|
| Binary classification task | Inspected README | Verified from inspected repo | "Binary: class_0_non_agri vs class_1_agri" | "production geospatial system" |
| Keras and PyTorch both implemented | Inspected README | Verified from inspected repo | "Dual-framework: Keras and PyTorch" | "framework-agnostic" (too vague) |
| CNN + CNN-ViT hybrid comparison | Inspected README | Verified from inspected repo | "CNN baseline and CNN-ViT hybrid comparative study" | "novel CNN-ViT architecture" |
| Results/ directory preserved | Inspected README | Verified from inspected repo | "Confusion matrices, ROC curves, comparison tables preserved in results/" | "independently reproduced benchmark" |
| CITATION.cff MIT v1.0.0 | Inspected CITATION.cff | Verified from inspected repo | "MIT license; CITATION.cff v1.0.0, 2026-04-21" | — |
| Model Comparison Brief | Evidence pack | Verified — evidence pack | "Model Comparison Brief from preserved evaluation artifacts" | "independently benchmarked" |
| Metric Provenance Matrix | Evidence pack | Verified — evidence pack | "Metric Provenance Matrix documenting preserved historical metrics" | "independently verified metrics" |
| Experiment Limitation Matrix | Evidence pack | Verified — evidence pack | "Experiment Limitation Matrix: binary scope, no multi-temporal, no cross-dataset" | — |
| Attention visualization | Not confirmed | Not verified — do not state | "Attention visualization is future-only; requires checkpoint support" | "attention maps demonstrate model reasoning" (unless genuinely generated) |

---

## Waste Claims

| Claim | Evidence Source | Confidence | Allowed Wording | Wording to Avoid |
|-------|----------------|------------|-----------------|-----------------|
| Fine-tuned VGG16 test accuracy 0.83 | Inspected README (stored notebook outputs) | Verified — stored outputs | "Fine-tuned VGG16 test accuracy: 0.83 (stored notebook outputs on 100 test images)" | Stating without provenance caveat |
| Best validation accuracy 0.8854 | Inspected README (stored notebook outputs) | Verified — stored outputs | "Best validation accuracy: 0.8854 (stored notebook outputs)" | Stating without provenance caveat |
| Bundled checkpoint | Inspected README | Verified from inspected repo | "Bundled checkpoint: models/vgg16_waste_classifier.keras" | "production-ready checkpoint" |
| predict.py inference | Inspected predict.py | Verified from inspected repo | "Direct inference via predict.py (150×150 RGB, Organic/Recyclable)" | "real-time waste sorting" |
| Test set: 100 images (50/50) | Inspected README | Verified from inspected repo | "100 held-out test images: 50 Organic, 50 Recyclable" | "large-scale evaluation" |
| Model Release Evidence Pack | Evidence pack | Verified — evidence pack | "Waste Model Release Evidence Pack: model card, release card, metric provenance, limitation documentation" | "production release" |
| Sustainability framing | Evidence pack | Verified — evidence pack | "Sustainability use-case boundary: waste sorting support — not operational deployment" | "production recycling facility deployment" |

---

## Aircraft Claims

| Claim | Evidence Source | Confidence | Allowed Wording | Wording to Avoid |
|-------|----------------|------------|-----------------|-----------------|
| VGG16 + BLIP pipeline | Inspected README | Verified from inspected repo | "VGG16 binary damage classification + BLIP captioning inspection-support pipeline" | "certified inspection system" |
| Installable Python package | Inspected README | Verified from inspected repo | "Installable Python package (aircraft_damage) with config-driven scripts" | "production inspection software" |
| BLIP downloads on first use | Inspected README | Verified from inspected repo | "BLIP assets download on first use — requires internet on first run" | — |
| Human-review boundary | Evidence pack | Verified — evidence pack | "Explicit human-review boundary: assists reviewers, does not replace inspection judgment" | "automated inspection system" |
| VL limitations documented | Evidence pack | Verified — evidence pack | "Vision-Language limitations: BLIP not fine-tuned; generic captions on unfamiliar damage types" | "BLIP fine-tuned on aircraft imagery" |
| No aviation certification | Verified framing | Verified — evidence pack | "No aviation regulatory compliance (FAA, EASA) — inspection-support only" | Never omit this caveat |

---

## Rainfall Claims

| Claim | Evidence Source | Confidence | Allowed Wording | Wording to Avoid |
|-------|----------------|------------|-----------------|-----------------|
| LR test accuracy 0.8424 | Inspected metrics.json | Verified — stored outputs | "LR test accuracy: 0.8424 (historical metrics preserved during refactor)" | Stating without provenance caveat |
| RF test accuracy 0.8428; train 0.9999 | Inspected metrics.json | Verified — stored outputs | "RF test accuracy: 0.8428, train 0.9999 — severe overfitting documented" | Stating RF accuracy without overfitting note |
| XGBoost test accuracy 0.8519 | Inspected metrics.json | Verified — stored outputs | "XGBoost test accuracy: 0.8519 (historical metrics; XGBoost cells not in current tracked notebook)" | Stating without XGBoost provenance caveat |
| feature_importance.png exists | Inspected README (results/ structure) | Verified from inspected repo | "feature_importance.png preserved in results/ from original workflow" | "newly generated feature importance" |
| Temporal Validation Protocol | Evidence pack | Verified — evidence pack | "Temporal validation protocol documenting time-leakage risk in random train/test splits" | "temporally validated model" |
| Leakage and Split Risk Audit | Evidence pack | Verified — evidence pack | "Leakage and split risk audit completed" | "leakage-free evaluation" |
| No operational forecasting | Verified framing | Verified — evidence pack | "No operational weather forecasting — tabular ML benchmark study" | Never omit this caveat |

---

## Portfolio-Level Claims

| Claim | Evidence Source | Confidence | Allowed Wording | Wording to Avoid |
|-------|----------------|------------|-----------------|-----------------|
| Five Python-first repositories | All inspected | Verified from inspected repo | "Five Python-first repositories with CITATION.cff, MIT licenses, and CI workflows" | "published research" |
| Reproducibility culture | All evidence packs | Verified — evidence pack | "Each project includes a reproducibility checklist and validation tooling" | "peer-reviewed reproducibility" |
| No publications | Verified absence | Verified from inspected repo | "Applied research implementations — no peer-reviewed publications claimed" | Any publication claim |
| No clinical validation | Verified framing | Verified from inspected repo | "No clinical validation in any project" | Any clinical validation hint |
| No production deployment | Verified framing | Verified from inspected repo | "Research and educational implementations" | "production-deployed systems" |

---

## Hallucination Red Lines — Never Include in Any Portfolio Document

1. Clinical validation, diagnostic validity, or IRB approval of any kind
2. Specific accuracy figures without their exact provenance caveat
3. Named faculty interest without current web verification
4. Production deployment claims for any project
5. Aviation regulatory compliance (FAA, EASA)
6. Measured environmental impact quantification
7. Peer-reviewed publication citations (none exist)
8. Comparison against named baselines without verified access
9. Synthetic benchmark results labeled as clinical evaluation
10. BLIP fine-tuned on aircraft imagery (not done)
11. Attention maps not produced from actual model outputs
12. Fabricated BLIP report examples or predict.py CLI outputs
13. XGBoost metrics without provenance caveat
14. Waste metrics without stored-notebook-outputs caveat
15. Rainfall metrics without historical-metrics-preserved caveat
