# Rainfall Project Brief
## Rainfall Prediction in Australia using Classical Machine Learning

**Repository:** https://github.com/ezedeem223/rainfall-prediction-classifier
**Portfolio Role:** Tabular/environmental ML breadth; methodology range outside CV; fifth in review order
**Final Status:** FINALIZED — Rainfall Research Evidence Pack complete
**Source Confidence:** Repo surface inspected — README, metrics.json, model_comparison.csv, results/ structure verified

---

## Project Goal

Predict next-day rainfall occurrence in Australia using classical ML classifiers (LR, RF, XGBoost) on weather feature data. Primary contribution is a reproducible multi-model comparison with metric provenance, temporal validation protocol, and leakage/split risk audit.

---

## Verified Implementation

| Component | Details | Source |
|-----------|---------|--------|
| Models | Logistic Regression, Random Forest, XGBoost | Inspected README |
| LR test accuracy | 0.8424 (historical) | Inspected metrics.json |
| RF test accuracy | 0.8428 (train 0.9999 — severe overfitting) | Inspected metrics.json |
| XGBoost test accuracy | 0.8519 (XGBoost cells not in current tracked notebook) | Inspected metrics.json |
| Metrics label | "original README-reported metrics preserved during refactor" | Inspected metrics.json |
| feature_importance.png | Preserved in results/ from original workflow | Inspected README (results/ structure) |
| CITATION.cff | Confirmed present | Inspected README |

---

## Finalized Strengthening — Rainfall Research Evidence Pack

| Component | What Was Built |
|-----------|---------------|
| Academic Research Brief | Multi-model comparison framing, methodology breadth, environmental context |
| Model Card | Models, dataset (weatherAUS.csv), historical metrics with provenance caveats, RF overfitting disclosure, XGBoost caveat |
| Metric Provenance Matrix | Maps each metric to results/metrics.json source; historical provenance label |
| Dataset and Task Card | Australian weather dataset; binary: RainTomorrow yes/no |
| Temporal Validation Protocol | Documents time-leakage risk in random train/test splits on time-series weather data |
| Leakage and Split Risk Audit | Systematic review of leakage risk in data splitting approach |
| Interpretability Protocol | Feature importance interpretation using existing results/feature_importance.png |
| Calibration and Thresholding Protocol | Threshold selection for binary prediction use case |
| Error Analysis Playbook | How to investigate specific misclassifications |
| Reproducibility Checklist | Environment, dataset location, configs, script execution |
| Validation tooling and tests | Confirm evidence pack present; smoke checks |

---

## Safe Claims (With Required Caveats)

- "LR test accuracy: 0.8424 (historical metrics preserved during refactor)"
- "RF test accuracy: 0.8428, train 0.9999 — severe overfitting documented (historical metrics preserved during refactor)"
- "XGBoost test accuracy: 0.8519 (historical metrics; XGBoost cells not in current tracked notebook)"
- "feature_importance.png preserved in results/ from original workflow; interpretation protocol produced"
- "Temporal validation protocol and leakage/split risk audit completed — documenting time-leakage risk in random splits"

## What Must Not Be Claimed

- Metrics without their historical-metrics provenance caveat
- XGBoost metrics without their additional provenance caveat
- Operational weather forecasting capability
- Climate science novelty
- Leakage-free evaluation (temporal leakage risk is documented — not claimed to be resolved)

## Future Extensions (Not Current Claims)

- Fresh training rerun: replaces historical metrics — requires weatherAUS.csv at data/raw/
- Temporal cross-validation: addresses documented leakage risk
- Deep learning baseline for comparison

---

## Why These Evidence Pack Components Matter

**Temporal Validation Protocol:** Random train/test splits on weather time-series data create time-leakage risk — test points may be temporally adjacent to training points, inflating apparent generalization. Documenting this risk is more credible than ignoring it.

**Leakage and Split Risk Audit:** Systematically reviews the data splitting approach. Acknowledging a potential methodological limitation is a research maturity signal.

**Metric Provenance:** The historical metrics in metrics.json are labeled "original README-reported metrics preserved during refactor" — the file itself warns that running training scripts replaces them. Citing these with their provenance is the only honest approach.

**CV framing:** "Reproducible multi-model comparison (LR, RF, XGBoost) for rainfall prediction; historical test accuracies 0.8424/0.8428/0.8519 (original README-reported metrics preserved during refactor); Rainfall Research Evidence Pack with metric provenance matrix, temporal validation protocol, leakage audit, and interpretability protocol."
