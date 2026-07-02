# Professor Reading Path
## Guide for Academic Reviewers — Mohamad Sabbagh Portfolio
## Final State — Five Finalized Repositories with Evidence Packs

**Purpose:** A professor or academic reviewer should not have to guess where to look. This document provides structured reading paths by time budget and research interest, reflecting the finalized state of all five repositories.

---

## 60-Second Path — "Is this candidate worth a closer look?"

1. Read `docs/ONE_PAGE_RESEARCH_DOSSIER.md` (this repository)
2. Skim ECG repository README: https://github.com/ezedeem223/medical-ecg-image-to-signal-reconstruction-pipeline
3. Skim Satellite repository README: https://github.com/ezedeem223/satellite-land-classification-cnn-vit

**Decision signal:** If the ECG pipeline architecture and Research Workbench Seed (synthetic benchmark, QC, failure atlas) show structured evaluation thinking, the candidate is worth 10 minutes.

---

## 3-Minute Path — "What is the strongest work?"

1. `project_briefs/ECG_BRIEF.md` — flagship project, finalized with research workbench
2. `project_briefs/SATELLITE_BRIEF.md` — second academic pillar, finalized evidence pack
3. `project_briefs/WASTE_BRIEF.md` — strongest direct-inference project (bundled checkpoint, verified metrics)
4. `docs/PROJECT_MATRIX.md` — cross-project comparison with evidence maturity

**Decision signal:** Look for: synthetic benchmark design in ECG, comparative evaluation structure in Satellite, and honest metric provenance in Waste.

---

## 10-Minute Path — "Is this candidate research-ready?"

1. `docs/ONE_PAGE_RESEARCH_DOSSIER.md`
2. `docs/RESEARCH_STATEMENT.md`
3. `docs/PROJECT_MATRIX.md`
4. `project_briefs/ECG_BRIEF.md`
5. `project_briefs/SATELLITE_BRIEF.md`
6. `docs/AI_RESEARCH_READINESS_SCORECARD.md`

**Decision signal:** Look for: awareness of limitations (synthetic vs clinical distinction in ECG), research direction clarity, evaluation methodology thinking, and honest metric provenance across all projects.

---

## Reproducibility Path — "Can I trust these results?"

1. `docs/SOURCE_OF_TRUTH.md` — verified claims for each project
2. `docs/EVIDENCE_TRACEABILITY_MATRIX.md` — claim-to-evidence mapping with provenance caveats
3. ECG repository: `configs/models.yaml` (model policy), `docs/research_pack/REPRODUCIBILITY_CHECKLIST.md`
4. Satellite repository: `results/` directory (preserved confusion matrices, comparison tables)
5. Waste repository: `notebooks/main.ipynb` (stored metrics source), `predict.py` (direct inference)
6. Rainfall repository: `results/metrics.json` (historical metrics with provenance note)

**What to look for:** Whether metric provenance is documented, whether limitations are acknowledged explicitly, and whether synthetic outputs are clearly labeled as synthetic.

---

## Medical AI Path

1. `project_briefs/ECG_BRIEF.md`
2. ECG repository README and `docs/research_pack/ACADEMIC_RESEARCH_BRIEF.md`
3. ECG repository `docs/research_pack/FAILURE_MODE_ATLAS.md` — documented failure categories
4. ECG repository `docs/research_pack/SYNTHETIC_BENCHMARK_PROTOCOL.md` — why synthetic, what it proves and doesn't
5. `docs/RESEARCH_STATEMENT.md` — evaluation methodology direction

**What to look for:** Whether the candidate frames ECG reconstruction as a research problem with defined evaluation challenges, not just an engineering exercise. Whether synthetic-vs-clinical distinction is understood and documented.

---

## Remote Sensing Path

1. `project_briefs/SATELLITE_BRIEF.md`
2. Satellite repository README and `docs/research_pack/MODEL_COMPARISON_BRIEF.md`
3. Satellite repository `docs/research_pack/EXPERIMENT_LIMITATION_MATRIX.md`
4. Satellite repository `results/` (confusion matrices, comparison tables)

**What to look for:** Comparative experimental design (CNN vs CNN-ViT), dual-framework implementation, metric provenance documentation, and honest scope limitation (binary only, no multi-temporal).

---

## Vision-Language Path

1. `project_briefs/AIRCRAFT_BRIEF.md`
2. Aircraft repository README
3. Aircraft repository `docs/research_pack/VISION_LANGUAGE_LIMITATIONS.md`
4. Aircraft repository `docs/research_pack/INSPECTION_REPORT_PROTOCOL.md`

**What to look for:** Whether BLIP's limitations are proactively documented (not fine-tuned, generic captions on unfamiliar inputs) and whether the human-review boundary is explicit.

---

## Breadth Path — "Does the candidate work outside comfort zone?"

1. `project_briefs/WASTE_BRIEF.md` — direct-inference transfer learning with model release pack
2. `project_briefs/RAINFALL_BRIEF.md` — tabular ML with temporal validation and leakage audit
3. `project_briefs/AIRCRAFT_BRIEF.md` — vision-language multimodal workflow

**What to look for:** Methodological range (tabular, transfer, multimodal) and whether each project is honestly scoped — not overselling classical ML or transfer learning applications.

---

## What to Expect — Honest Framing for Reviewers

| Expectation | Reality |
|-------------|---------|
| Peer-reviewed publications | None claimed — five structured applied research implementations with evidence packs |
| Production-deployed systems | None — research implementations with honest scope boundaries |
| Clinical validation | None — ECG is a reconstruction pipeline; synthetic benchmark explicitly labeled synthetic |
| Novel architectural contributions | Comparative study and applied pipeline design; ECG Workbench adds evaluation methodology |
| Reproducible, structured implementations | Yes — reproducibility checklist, metric provenance, and validation tooling in each repository |
| Honest limitation documentation | Yes — limitation matrices, failure mode atlases, and provenance caveats throughout |

The candidate's strength is structured, evaluation-honest applied AI systems. The research gap being pursued: rigorous evaluation methodology for perception systems — beginning with medical image-to-signal pipelines where clinical paired data is unavailable, and extending toward video, generative, and 3D settings where evaluation is least settled.
