# Mohamad Sabbagh — AI Research Portfolio
## Research Dossier + Portfolio Website

---

## What This Repository Is

This repository serves two roles:

1. **Research dossier** — documentation, evidence traceability, project briefs, research statement, and verified project state for all five project repositories.
2. **Portfolio website** — a single-page React + TypeScript site (Vite) presenting the five finalized projects to academic reviewers.

All five external project repositories are finalized with research evidence packs. No further repository hardening is planned unless a specific defect is found.

---

## Tech Stack (Website)

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite 5
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Dev server:** `vite --host 0.0.0.0 --port 5000`
- **No backend, no secrets, no live inference**

---

## Running Locally

```bash
npm install
npm run dev      # http://localhost:5000
npm run build    # production build → dist/
```

---

## Repository Structure

```
README.md                         — Overview and reading guide
index.html                        — HTML entry point
src/
  App.tsx                         — Portfolio website (single component)
  main.tsx                        — React entry point
  index.css                       — Design tokens and global styles
data/projects.json                — Structured project metadata
docs/                             — 7 research dossier documents
  RESEARCH_STATEMENT.md           — Research statement
  ONE_PAGE_RESEARCH_DOSSIER.md    — Reviewer-facing one-pager
  PROJECT_MATRIX.md               — Cross-project comparison
  PROFESSOR_READING_PATH.md       — Reading guide by time budget
  EVIDENCE_TRACEABILITY_MATRIX.md — Claim-to-evidence mapping
  SOURCE_OF_TRUTH.md              — Verified project state
  AI_RESEARCH_READINESS_SCORECARD.md — Honest per-project assessment
project_briefs/                   — One brief per project
  ECG_BRIEF.md
  SATELLITE_BRIEF.md
  WASTE_BRIEF.md
  AIRCRAFT_BRIEF.md
  RAINFALL_BRIEF.md
```

---

## Five External Projects (Do Not Modify)

| Review Order | Project | Repository |
|---|---------|------------|
| 1 | Medical ECG Image-to-Signal Reconstruction Pipeline | https://github.com/ezedeem223/medical-ecg-image-to-signal-reconstruction-pipeline |
| 2 | Satellite Land Classification CNN + CNN-ViT | https://github.com/ezedeem223/satellite-land-classification-cnn-vit |
| 3 | Waste Classification using VGG16 | https://github.com/ezedeem223/waste-classification-transfer-learning |
| 4 | Aircraft Damage Classification + BLIP Reports | https://github.com/ezedeem223/aircraft_damage_vgg16_blip |
| 5 | Rainfall Prediction in Australia | https://github.com/ezedeem223/rainfall-prediction-classifier |

---

## Website Sections

1. **Hero** — Name, subtitle, description, GitHub + Research Dossier links
2. **Research Focus** — Six research areas as cards
3. **Featured Projects** — Five project cards (title, role, summary, tech, evidence artifacts, responsible framing, GitHub link)
4. **Evidence and Responsible Framing** — Four explanation cards
5. **Reviewer Reading Path** — Four timed paths (60s / 3min / 10min / deep)
6. **Contact / Links** — Seven GitHub links

---

## Design Principles

- Academic, clean, minimal, professional
- No fabricated metrics, publications, or deployment claims
- All metrics carry their provenance caveats (see `docs/EVIDENCE_TRACEABILITY_MATRIX.md`)
- No live inference, no backend, no secrets
- Dark design system inherited from original scaffold; startup-jargon copy fully replaced
