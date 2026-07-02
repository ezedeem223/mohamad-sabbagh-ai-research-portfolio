# One-Page Research Dossier
## Mohamad Sabbagh — Applied AI/ML Research
## Final State — Five Finalized Repositories

---

**Research Identity**

Mohamad Sabbagh is a research-oriented applied AI/ML engineer who builds structured, reproducible machine learning systems across medical imaging, remote sensing, and computer vision. Five finalized Python-first repositories — each with a research evidence pack, metric provenance documentation, and honest limitation framing — demonstrate consistent evaluation discipline and a commitment to reproducibility over optimistic claims.

---

**Core Technical Strengths**

- Multi-stage computer vision pipelines (detection → segmentation → calibration → extraction → export)
- Synthetic benchmark design for controlled evaluation without clinical data
- QC and failure mode documentation for reconstruction pipelines
- Comparative architecture evaluation (CNN vs CNN-ViT) with preserved experimental artifacts
- Vision-language integration (classification + BLIP captioning workflows)
- Transfer learning with direct-inference deployment (bundled checkpoint + predict.py)
- Classical ML multi-model comparison with metric provenance and temporal validation
- Research evidence pack authoring: model cards, metric provenance matrices, limitation matrices, reproducibility checklists

---

**Flagship Project**

**Medical ECG Image-to-Signal Reconstruction Pipeline**
A finalized multi-stage pipeline that reconstructs digital ECG waveforms from ECG paper image scans: YOLO-based lead detection, EfficientNet-B3 U-Net segmentation (with ResNet50 fallback), grid-based calibration, Viterbi trace extraction, and validated waveform export. The ECG Research Workbench Seed adds a parametric synthetic benchmark, synthetic-only scoring, basic QC checks, a seed Failure Mode Atlas, and an academic research brief. No clinical validation is claimed.

*GitHub:* https://github.com/ezedeem223/medical-ecg-image-to-signal-reconstruction-pipeline

---

**Supporting Projects**

| Project | Domain | Final Research Contribution |
|---------|--------|-----------------------------|
| Satellite Land Classification (CNN + CNN-ViT) | Remote Sensing | Comparative CNN vs CNN-ViT study with metric provenance matrix, experiment limitation matrix, and CNN-ViT architecture explainer; dual-framework (Keras + PyTorch) |
| Waste Classification (VGG16 Transfer Learning) | CV / Sustainability | Bundled VGG16 checkpoint with predict.py; test accuracy 0.83 (stored notebook outputs); model release evidence pack with sustainability use-case boundaries |
| Aircraft Damage Classification + Report Generation | Computer Vision / VLM | VGG16 + BLIP inspection-support pipeline with research evidence pack, explicit human-review boundary, and vision-language limitations documentation |
| Rainfall Prediction (Classical ML) | Tabular / Environmental | LR/RF/XGBoost comparison with metric provenance, temporal validation protocol, and leakage/split risk audit; demonstrates methodology range outside CV |

---

**Research Interests**

- Medical image analysis and biomedical signal reconstruction
- Evaluation methodology: synthetic benchmarks, failure mode documentation, metric provenance
- Remote sensing and Earth observation via comparative deep learning
- Reproducible applied AI: archived provenance, honest limitation framing, research evidence packs
- Vision-language systems for domain-specific inspection and report generation

---

**Research Direction**

The central thread across these projects is evaluation-honest applied AI: pipelines that make their assumptions explicit, document failure modes, and acknowledge the boundary between demonstration and validation. The natural extension of the ECG work — rigorous evaluation methodology for reconstruction pipelines in the absence of clinical paired data — is itself a publishable research direction, connecting to synthetic-to-real transfer, evaluation under distribution shift, and reproducible benchmarking in medical AI.

---

**GitHub Portfolio**

| Project | Review Order | Link |
|---------|-------------|------|
| ECG Reconstruction (Flagship) | 1 | https://github.com/ezedeem223/medical-ecg-image-to-signal-reconstruction-pipeline |
| Satellite Classification | 2 | https://github.com/ezedeem223/satellite-land-classification-cnn-vit |
| Waste Classification | 3 | https://github.com/ezedeem223/waste-classification-transfer-learning |
| Aircraft Inspection | 4 | https://github.com/ezedeem223/aircraft_damage_vgg16_blip |
| Rainfall Prediction | 5 | https://github.com/ezedeem223/rainfall-prediction-classifier |

---

*All projects are applied research implementations with finalized evidence packs. No peer-reviewed publications are claimed. Research faculty fit is a hypothesis pending current web verification.*
