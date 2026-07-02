# Mohamad Sabbagh — AI Research Portfolio
### Research Dossier · Applied AI/ML & Computer Vision

---

## What This Repository Is

This repository is the research dossier for Mohamad Sabbagh's applied AI/ML portfolio. It presents five finalized project repositories to academic reviewers, documents exactly what each project claims — and does not claim — and provides structured reading paths so a reviewer can evaluate the work in minutes.

**Portfolio website:** [mohamad-sabbagh-ai-research-portfolio--za9699185.replit.app](https://mohamad-sabbagh-ai-research-portfolio--za9699185.replit.app)

**Research statement:** [docs/RESEARCH_STATEMENT.md](docs/RESEARCH_STATEMENT.md)

**This repository is not:**
- A duplicate of the five project repositories
- A code repository for new models or experiments
- A source of unsupported claims

---

## Research Identity

**Name:** Mohamad Sabbagh

**Positioning:** Research-oriented applied AI/ML engineer focused on computer vision, medical AI, remote sensing, vision-language systems, and reproducible, evaluation-honest machine learning.

**Core narrative:** Five Python-first repositories spanning medical image-to-signal reconstruction, remote sensing architecture comparison, vision-language inspection workflows, sustainability classification, and environmental tabular ML — each with a research evidence pack, honest evaluation, and preserved provenance.

---

## The Five Projects

| Review Order | Project | Domain | Repository |
|---|---------|--------|------------|
| 1 | Medical ECG Image-to-Signal Reconstruction Pipeline | Medical AI / Signal Processing | [→ GitHub](https://github.com/ezedeem223/medical-ecg-image-to-signal-reconstruction-pipeline) |
| 2 | Satellite Land Classification with CNN and CNN-ViT | Remote Sensing / CV | [→ GitHub](https://github.com/ezedeem223/satellite-land-classification-cnn-vit) |
| 3 | Waste Classification using Transfer Learning | CV / Sustainability | [→ GitHub](https://github.com/ezedeem223/waste-classification-transfer-learning) |
| 4 | Aircraft Damage Classification and Report Generation | Computer Vision / Vision-Language | [→ GitHub](https://github.com/ezedeem223/aircraft_damage_vgg16_blip) |
| 5 | Rainfall Prediction in Australia using Classical ML | Tabular ML / Environmental | [→ GitHub](https://github.com/ezedeem223/rainfall-prediction-classifier) |

**Recommended review order:** ECG → Satellite → Waste → Aircraft → Rainfall

---

## How to Review This Portfolio

| Goal | Start Here |
|------|-----------|
| Understand the portfolio in 60 seconds | `docs/ONE_PAGE_RESEARCH_DOSSIER.md` |
| Read the research direction | `docs/RESEARCH_STATEMENT.md` |
| See final project status and comparison | `docs/PROJECT_MATRIX.md` |
| Verify what every claim is based on | `docs/EVIDENCE_TRACEABILITY_MATRIX.md` |
| Check the verified state of each project | `docs/SOURCE_OF_TRUTH.md` |
| Read an honest per-project self-assessment | `docs/AI_RESEARCH_READINESS_SCORECARD.md` |
| Follow a structured reading path | `docs/PROFESSOR_READING_PATH.md` |
| Read a per-project brief | `project_briefs/` |

---

## Evidence and Honesty Policy

Every metric in this portfolio traces to a repository artifact — a stored notebook output, a preserved results file, or a committed evaluation script — and carries its provenance caveat wherever it appears. Limitations are documented as deliberately as results: limitation matrices, failure-mode documentation, and use-case boundaries are part of each project's evidence pack.

These repositories do not claim clinical validation, certified inspection capability, production deployment, state-of-the-art status, or operational forecasting service status.

---

## Repository Map

| Path | Contents |
|------|----------|
| `docs/` | Research statement, one-page dossier, project matrix, evidence traceability, verified project state, readiness self-assessment, reading guide |
| `project_briefs/` | One brief per project (ECG, Satellite, Waste, Aircraft, Rainfall) |
| `data/projects.json` | Structured project metadata used by the portfolio website |
| `src/`, `index.html` | Portfolio website (React + TypeScript + Vite) |
