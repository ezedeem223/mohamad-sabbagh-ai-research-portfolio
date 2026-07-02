# Project Matrix
## Cross-Project Comparison — Mohamad Sabbagh Portfolio
## Final State — Post-Project Upgrade Sync

**Purpose:** Single-table comparison showing final portfolio hierarchy, evidence maturity, and reviewer priorities.

---

## Primary Comparison Table

| Dimension | ECG Reconstruction | Satellite CNN+ViT | Waste VGG16 | Aircraft VGG16+BLIP | Rainfall Classical ML |
|-----------|-------------------|-------------------|-------------|--------------------|-----------------------|
| **Review Order** | 1 (Flagship) | 2 | 3 | 4 | 5 |
| **Domain** | Medical AI / Signal | Remote Sensing | CV / Sustainability | CV / Vision-Language | Tabular / Environmental |
| **Core Methods** | YOLO, EffB3 U-Net, ResNet50 fallback, Viterbi, calibration | CNN baseline, CNN-ViT hybrid | VGG16 fine-tuned | VGG16 + BLIP | LR, RF, XGBoost |
| **Problem Type** | Image-to-signal reconstruction | Binary land classification | Binary waste classification | Classification + captioning | Binary weather prediction |
| **Technical Depth** | Very High | High | Medium | Medium-High | Medium |
| **Research Value** | Very High | High | Medium-High (strongest inference) | Medium-High | Medium |
| **Evidence Pack** | ECG Research Workbench Seed | Satellite Research Evidence Pack | Waste Model Release Evidence Pack | Aircraft Research Evidence Pack | Rainfall Research Evidence Pack |
| **Key Evidence Artifacts** | Synthetic benchmark, QC checks, Failure Atlas, Academic Research Brief | Model Comparison Brief, Metric Provenance, Limitation Matrix, CNN-ViT Explainer | Model Card (0.83 acc stored outputs), Release Card, Sustainability Boundary | Model Card, Inspection Protocol, VL Limitations, Failure Mode Matrix | Model Card, Metric Provenance, Temporal Protocol, Leakage Audit |
| **Reproducibility** | High — archived provenance, dual-anchor policy, synthetic benchmark | High — preserved evaluation artifacts, reproducibility checklist | Very High — bundled checkpoint, predict.py, inference reproducibility guide | High — installable package, archived notebooks, reproducibility checklist | High — historical metrics preserved, leakage audit, reproducibility checklist |
| **Research Maturity** | High — workbench seed adds evaluation framework | High — evidence pack adds comparison framework | High — model release pack adds honest inference framing | Medium-High — evidence pack adds inspection boundaries | Medium-High — evidence pack adds provenance and temporal awareness |
| **Research Relevance (self-assessed)** | Very High | High | Medium | Medium-High | Medium |
| **Metrics Status** | Synthetic-only benchmark metrics | Preserved historical evaluation artifacts | Test acc 0.83 (stored outputs, 100 images) | Classification accuracy not published | LR 0.8424 / RF 0.8428 / XGB 0.8519 (historical, with caveats) |
| **Reviewer Attention** | Primary — most time | Secondary — strong academic | Tertiary — strongest inference demo | Quaternary — multimodal breadth | Quaternary — methodology breadth |

---

## Portfolio Role Summary

| Project | Final Portfolio Position | Evidence Pack |
|---------|--------------------------|---------------|
| ECG Reconstruction | **Flagship** — highest research depth | ECG Research Workbench Seed |
| Satellite CNN+ViT | **Second academic pillar** — comparative architecture | Satellite Research Evidence Pack |
| Waste VGG16 | **Strongest model release** — direct-inference demo | Waste Model Release Evidence Pack |
| Aircraft VGG16+BLIP | **Multimodal breadth** — VL inspection workflow | Aircraft Research Evidence Pack |
| Rainfall ML | **Tabular/environmental breadth** — methodology range | Rainfall Research Evidence Pack |

**Why Waste is ranked third (before Aircraft):** Waste has the strongest direct-inference story — bundled checkpoint, predict.py, verified metrics — making it the most immediately runnable project for a reviewer. Aircraft is ranked fourth for its multimodal VL contribution.

---

## Research Alignment Hypotheses (Not Verified with Current Faculty Pages)

| Research Theme | Best Project Match | Alignment Strength |
|---------------|-------------------|-------------------|
| Medical AI / Biomedical Signal Processing | ECG | Very High |
| Earth Observation / Remote Sensing | Satellite | High |
| Vision-Language Systems | Aircraft | Medium-High |
| AI for Sustainability | Waste | Medium |
| Environmental / Climate ML | Rainfall | Medium |
| Reproducible AI Systems | All five | High (cross-cutting) |
| Evaluation Methodology | ECG, Satellite | High |


---

## What This Matrix Tells Us (Final State)

1. All five projects now have research evidence packs — no hardening remains.
2. ECG and Satellite are the primary academic pillars of the portfolio.
3. Waste is the strongest runnable demo project — surface it clearly in CV and GitHub profile.
4. Aircraft and Rainfall are breadth signals — one paragraph each in CV.
5. Next action: packaging (GitHub profile, pinned repos, CV, portfolio website).
