# Source of Truth
## Verified Project State — Mohamad Sabbagh AI Research Portfolio
## Final State — Post-Project Upgrade Sync

**Purpose:** Ground truth for all five project repositories in their finalized state. Every claim below carries a verification label so a reviewer can see exactly what is confirmed, from which artifact, and with what caveat.

---

## Ground Rules

1. All five projects are now **finalized** with research evidence packs committed to their repositories.
2. Claims marked **[VERIFIED]** are confirmed from direct repository surface inspection.
3. Claims marked **[VERIFIED — stored outputs]** are from repository-preserved artifacts, not fresh reruns.
4. Claims marked **[HYPOTHESIS]** remain unconfirmed planning assumptions.
5. Claims marked **[FUTURE ONLY]** must not be presented as completed work.
6. Claims marked **[DO NOT STATE]** must never appear in portfolio documents.

---

## Project 1 — ECG Image-to-Signal Reconstruction Pipeline

**Repository:** https://github.com/ezedeem223/medical-ecg-image-to-signal-reconstruction-pipeline
**Portfolio Role:** Flagship. Most technically complex. Highest academic depth.
**Final Status:** FINALIZED — ECG Research Workbench Seed complete.
**Inspection status:** `repo surface inspected` — README, CITATION.cff, configs/models.yaml verified.

### Finalized strengthening [VERIFIED]

- Runtime pipeline: YOLO → EfficientNet-B3 U-Net primary → ResNet50 U-Net fallback → calibration → Viterbi trace extraction → validated CSV export
- Model policy from `configs/models.yaml`: detector `best.pt` (YOLO); primary `best_model_effb3_phase9_ddp (2).pth` (EffB3, SCSE); fallback `best_model_phase10.pth` (ResNet50, SCSE)
- ECG Research Workbench Seed: parametric synthetic benchmark, scoring utility, QC checks
- Seed Failure Mode Atlas: 5–8 conceptual failure categories
- Academic Research Brief: 2–3 pages, honest limitations
- Pipeline Compatibility Max Pass and asset readiness inspector
- Synthetic-to-runtime compatibility tooling with SKIPPED_ASSETS_MISSING graceful failure
- MIT license; CITATION.cff version 0.1.0

### Safe claims

- "Multi-stage ECG image-to-signal reconstruction pipeline with YOLO detection, EfficientNet-B3 U-Net segmentation, calibration, and Viterbi trace extraction"
- "Explicit config-driven model selection; notebook-style auto-discovery forbidden in core runtime"
- "Synthetic ECG-like benchmark (parametric waveforms) with generation-only and scoring modes"
- "QC checks on waveform output arrays (NaN/Inf, flatline, length, amplitude range, lead count)"
- "Seed Failure Mode Atlas documenting conceptual pipeline failure categories"

### What must not be claimed [DO NOT STATE]

- Clinical validation or diagnostic accuracy of any kind
- Real ECG reconstruction accuracy (no paired real data benchmark)
- Production medical device or deployment
- Synthetic benchmark results as clinical evaluation
- PhysioNet or external ECG dataset comparisons

### Future only [FUTURE ONLY]

- Real clinical ECG benchmark with paired image/signal data
- Extended failure atlas from actual pipeline runs on edge cases
- Comparison against published ECG digitization methods

---

## Project 2 — Satellite Land Classification with CNN and CNN-ViT

**Repository:** https://github.com/ezedeem223/satellite-land-classification-cnn-vit
**Portfolio Role:** Second strongest academic project. Primary remote sensing pillar.
**Final Status:** FINALIZED — Satellite Research Evidence Pack complete.
**Inspection status:** `repo surface inspected` — README, CITATION.cff verified; results/ confirmed.

### Finalized strengthening [VERIFIED]

- Binary land-use classification: class_0_non_agri vs class_1_agri
- CNN baseline and CNN-ViT hybrid comparative study; Keras and PyTorch both implemented
- Research Evidence Pack: academic brief, model comparison brief, metric provenance matrix, experiment limitation matrix, CNN-ViT explainer, dataset and task card, explainability protocol, reproducibility checklist
- Preserved evaluation artifacts in results/: confusion matrices, ROC curves, comparison tables
- MIT license; CITATION.cff version 1.0.0, dated 2026-04-21
- Neutral academic naming; no state-of-the-art claims

### Safe claims

- "Comparative CNN vs CNN-ViT evaluation for binary agricultural land classification from satellite imagery"
- "Dual-framework implementation (Keras, PyTorch) with preserved evaluation artifacts"
- "Metric provenance matrix and experiment limitation matrix documenting binary scope, dataset constraints, no multi-temporal analysis"

### What must not be claimed [DO NOT STATE]

- State-of-the-art performance
- Production geospatial or real-time satellite analysis capability
- Attention maps not produced from actual model outputs
- Cross-dataset generalization

### Future only [FUTURE ONLY]

- Attention visualization (only if checkpoint supports extraction without retraining)
- Multi-class extension or multi-temporal analysis

---

## Project 3 — Aircraft Damage Classification and Report Generation

**Repository:** https://github.com/ezedeem223/aircraft_damage_vgg16_blip
**Portfolio Role:** Applied CV + vision-language breadth. Third in review order.
**Final Status:** FINALIZED — Aircraft Research Evidence Pack complete.
**Inspection status:** `repo surface inspected` — README, scripts, results/sample_predictions/ verified.

### Finalized strengthening [VERIFIED]

- VGG16 binary damage classification + BLIP captioning pipeline
- Research Evidence Pack: academic brief, model card, metric provenance, inspection report protocol, VL limitations, failure mode matrix, dataset and task card, reproducibility checklist
- Explicit human-review boundary throughout all documentation
- Installable Python package (aircraft_damage); config-driven scripts (run_demo.py, run_predict.py)
- BLIP downloads assets on first use; no domain fine-tuning (documented as limitation)
- No aviation certification or production inspection claims

### Safe claims

- "VGG16 + BLIP inspection-support workflow: classification label + generated inspection text from visual input"
- "Explicit human-review boundary: assists review, does not replace inspection judgment"
- "Vision-language limitations documented: BLIP generic captions on unfamiliar damage types"

### What must not be claimed [DO NOT STATE]

- Aviation regulatory compliance (FAA, EASA)
- Certified or safety-critical inspection tooling
- BLIP fine-tuned on aircraft imagery
- Fabricated BLIP report examples

### Future only [FUTURE ONLY]

- BLIP domain fine-tuning (requires labeled aviation dataset)
- Formal report quality evaluation

---

## Project 4 — Waste Classification using Transfer Learning

**Repository:** https://github.com/ezedeem223/waste-classification-transfer-learning
**Portfolio Role:** Strongest direct-inference project. Sustainability framing.
**Final Status:** FINALIZED — Waste Model Release Evidence Pack complete.
**Inspection status:** `repo surface inspected` — README, predict.py, stored metrics verified.

### Finalized strengthening [VERIFIED]

- Fine-tuned VGG16 binary classifier: Organic (O) vs Recyclable (R)
- Verified metrics from stored notebook outputs: test accuracy 0.83, best validation accuracy 0.8854 (100 test images: 50 O, 50 R)
- Bundled checkpoint: models/vgg16_waste_classifier.keras; direct inference via predict.py (150×150 input)
- Waste Model Release Evidence Pack: model card, release card, checkpoint and inference card, metric provenance matrix, dataset and task card, sustainability use-case boundary, failure mode matrix, calibration and thresholding protocol, interpretability protocol, inference reproducibility guide, reproducibility checklist
- CI import-path guard; validation tooling and tests

### Safe claims (with required caveat)

- "Fine-tuned VGG16 test accuracy: 0.83 (stored notebook outputs on 100 test images — 50 Organic, 50 Recyclable)"
- "Best validation accuracy: 0.8854 (stored notebook outputs)"
- "Bundled checkpoint with predict.py for direct inference; no retraining required"
- "Sustainability use-case boundary documented: waste sorting support, not operational deployment"

### What must not be claimed [DO NOT STATE]

- Metrics without stored-notebook-outputs provenance caveat
- Production recycling facility deployment
- Measured environmental impact

### Future only [FUTURE ONLY]

- Multi-class waste extension
- Fresh benchmark rerun (replaces historical metrics)

---

## Project 5 — Rainfall Prediction in Australia

**Repository:** https://github.com/ezedeem223/rainfall-prediction-classifier
**Portfolio Role:** Tabular/environmental ML breadth. Methodology range signal.
**Final Status:** FINALIZED — Rainfall Research Evidence Pack complete.
**Inspection status:** `repo surface inspected` — README, metrics.json, model_comparison.csv verified.

### Finalized strengthening [VERIFIED]

- LR, RF, and XGBoost comparison for binary rainfall prediction on weatherAUS.csv
- Historical metrics from results/metrics.json: LR test 0.8424; RF test 0.8428, train 0.9999 (severe overfitting); XGBoost test 0.8519
- XGBoost provenance caveat: cells not in current tracked notebook
- feature_importance.png already exists in results/ as preserved artifact
- Rainfall Research Evidence Pack: model card, metric provenance matrix, dataset and task card, temporal validation protocol, leakage and split risk audit, interpretability protocol, calibration and thresholding protocol, error analysis playbook, reproducibility checklist
- CITATION.cff confirmed

### Safe claims (with required caveats)

- "LR test accuracy 0.8424; RF test accuracy 0.8428 (train 0.9999 — severe overfitting documented); XGBoost test accuracy 0.8519 — historical metrics preserved during refactor"
- "feature_importance.png preserved in results/ from original workflow"
- "Temporal validation protocol and leakage/split risk audit completed"
- "XGBoost metrics carry provenance caveat: cells not in current tracked notebook"

### What must not be claimed [DO NOT STATE]

- Metrics without historical-metrics provenance caveat
- Operational weather forecasting capability
- Climate science novelty

### Future only [FUTURE ONLY]

- Fresh training rerun with weatherAUS.csv (replaces historical metrics — requires dataset confirmation)
- Temporal cross-validation addressing leakage risk

---

## What This Repository Must Not Do

- Modify any of the five project repositories
- Fabricate metrics, affiliations, or validations
- Name specific faculty without current web verification
- Present synthetic ECG benchmark as clinical evaluation
- Start new repo hardening unless a specific defect is found
