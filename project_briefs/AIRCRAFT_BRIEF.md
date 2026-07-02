# Aircraft Project Brief
## Aircraft Damage Classification and Report Generation using VGG16 and BLIP

**Repository:** https://github.com/ezedeem223/aircraft_damage_vgg16_blip
**Portfolio Role:** Applied CV + vision-language breadth; fourth in review order
**Final Status:** FINALIZED — Aircraft Research Evidence Pack complete
**Source Confidence:** Repo surface inspected — README, scripts, results/sample_predictions/ confirmed

---

## Project Goal

Build an inspection-support pipeline that classifies aircraft damage using VGG16 transfer learning and generates a natural language inspection report using BLIP captioning. The combined output assists a human inspector — it does not replace inspection judgment.

---

## Verified Implementation

| Component | Details | Source |
|-----------|---------|--------|
| Damage classification | VGG16 binary (transfer learning) | Inspected README |
| Report generation | BLIP captioning | Inspected README |
| Package | Installable Python (aircraft_damage) | Inspected README |
| Scripts | run_demo.py, run_predict.py, run_train.py | Inspected README |
| BLIP assets | Download on first use — internet required | Inspected README |
| Sample predictions | results/sample_predictions/ exists | Inspected README |
| Archived notebooks | Provenance only | Inspected README |

---

## Finalized Strengthening — Aircraft Research Evidence Pack

| Component | What Was Built |
|-----------|---------------|
| Academic Research Brief | Inspection-support framing, pipeline design, VL limitations, honest scope |
| Model Card | Task, architecture, intended use (inspection support), out-of-scope (aviation safety decisions), human-review boundary |
| Metric Provenance Matrix | Documents what classification metrics exist and their sources |
| Inspection Report Protocol | How reports should be interpreted; human-review required |
| Vision-Language Limitations | BLIP not fine-tuned; generic captions on unfamiliar inputs; BLIP downloads on first use |
| Failure Mode Matrix | Classification failure cases; BLIP caption quality failure cases |
| Dataset and Task Card | Task framing, dataset description, class definitions |
| Reproducibility Checklist | Environment, scripts, BLIP download dependency |
| Validation tooling and tests | Confirm evidence pack present; smoke checks |

---

## Safe Claims

- "VGG16 binary damage classification + BLIP captioning in a single inspection-support pipeline"
- "Explicit human-review boundary: assists review, does not replace inspection judgment"
- "Vision-Language limitations documented: BLIP not fine-tuned; generic captions on unfamiliar damage types"
- "BLIP assets download on first use — requires internet"
- "Installable Python package with config-driven scripts (run_demo.py, run_predict.py)"
- "No aviation regulatory compliance (FAA, EASA) — inspection-support only"

## What Must Not Be Claimed

- Aviation regulatory compliance or certified safety tooling
- BLIP fine-tuned on aircraft imagery (not implemented)
- Fabricated BLIP report examples (must be genuine model outputs)
- Production aviation inspection deployment

## Future Extensions (Not Current Claims)

- BLIP domain fine-tuning: requires labeled aviation imagery dataset
- Formal report quality evaluation: precision/recall of damage descriptors
- Multi-class damage severity classification

---

## Research Application Support

1. **Multimodal pipeline:** VGG16 + BLIP demonstrates vision-language integration thinking
2. **Limitations-first documentation:** Vision-Language Limitations doc and explicit human-review boundary show awareness of where generic VLMs break
3. **Honest scoping:** Inspection-support framing, not certified inspection system — models real-world deployment awareness

**CV framing:** "VGG16 + BLIP inspection-support pipeline for aircraft damage classification and report generation; installable Python project; Aircraft Research Evidence Pack with model card, inspection protocol, vision-language limitations, and explicit human-review boundary."
