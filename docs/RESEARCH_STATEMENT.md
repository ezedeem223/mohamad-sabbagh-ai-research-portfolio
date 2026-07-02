# Research Statement
## Mohamad Sabbagh

---

## Research Direction

My research interest sits at the intersection of computer vision, biomedical signal processing, and evaluation methodology for applied AI systems. I am particularly interested in how machine learning pipelines can be designed, evaluated, and understood in settings where ground-truth signals are difficult to acquire, data quality is variable, and failure modes have real-world consequences.

Five finalized projects form the foundation of this interest — each structured as a Python-first repository with a research evidence pack, honest limitation documentation, and metric provenance. The central thread is not the application domain alone, but the discipline of evaluation-honest AI: making assumptions explicit, documenting failure modes, and acknowledging the boundary between what a system demonstrates and what it validates.

---

## Flagship Research: ECG Image-to-Signal Reconstruction

The technically deepest problem I have worked on is reconstructing digital ECG waveforms from paper scan images — a non-trivial image-to-signal reconstruction task where the input is a degraded, spatially complex image of printed ECG paper, and the output is a calibrated, multi-lead waveform time series.

My pipeline addresses this through structured stages: YOLO-based lead region detection, EfficientNet-B3 U-Net segmentation with SCSE decoder attention as the primary path (ResNet50 U-Net as the explicit fallback), grid-based physical calibration, Viterbi-style trace extraction, and validated waveform export. Each stage has an explicit model-selection rationale defined in the configuration layer, and notebooks from the experimental phase are archived as provenance.

To address the primary limitation — the absence of a rigorous, published benchmark — I built the ECG Research Workbench Seed: a parametric synthetic ECG-like benchmark (generation-only and scoring modes), basic QC checks on waveform output arrays (NaN/Inf, flatline, length, amplitude, lead count), a seed Failure Mode Atlas documenting conceptual pipeline failure categories, and an academic research brief. This workbench is synthetic-only — no real patient ECG data is used — and all outputs are explicitly labeled as synthetic. The limitation of synthetic evaluation is documented prominently.

The core research question this opens is itself research-relevant: how do you benchmark an image-to-signal reconstruction pipeline honestly when clinical paired data is not available? This connects to evaluation methodology questions about synthetic-to-real transfer, benchmark design under distribution constraints, and reproducible quality assessment for biomedical signal pipelines.

---

## Supporting Research: Remote Sensing and Comparative Architecture Evaluation

My second strongest academic project is a comparative study of CNN and CNN-ViT hybrid architectures for satellite-based agricultural land classification. I implemented both architectures in Keras and PyTorch and preserved evaluation artifacts (confusion matrices, comparison tables) from the full experimental run.

To strengthen the research contribution, I produced a Satellite Research Evidence Pack: a model comparison brief drawing from preserved artifacts, a metric provenance matrix, an experiment limitation matrix (binary scope only, no multi-temporal analysis, no cross-dataset validation), a CNN-ViT architecture explainer, and an explainability protocol. The limitation matrix documents explicitly what this experiment does and does not claim — which is as important as the results themselves.

This project reflects my interest in comparative evaluation design: not just implementing models, but structuring experiments so that architectural differences are meaningfully interpretable and limitations are honestly scoped.

---

## Applied Range: Vision-Language, Sustainability, and Environmental ML

Three additional projects demonstrate methodology range. An aircraft inspection-support workflow combines VGG16 damage classification with BLIP-based captioning; its research evidence pack includes an explicit human-review boundary and a vision-language limitations document acknowledging that BLIP, without domain fine-tuning, produces generic captions on unfamiliar inputs. A waste classification project provides a model release evidence pack with a bundled checkpoint (fine-tuned VGG16 test accuracy: 0.83, from stored notebook outputs on 100 test images), metric provenance matrix, and sustainability use-case boundary. A classical ML comparison for rainfall prediction includes a metric provenance matrix, temporal validation protocol, and leakage/split risk audit — establishing that my experimental discipline extends to tabular methodology, not only deep learning.

---

## Where This Is Heading

The settings that most interest me now are the ones where perception is hardest and evaluation is least settled. Video understanding — including egocentric, first-person video — asks models to reason over long, noisy, temporally entangled streams, and asks evaluators to measure what a continually trained model retains versus quietly forgets. Generative world models raise the question of whether a model's predicted future stays coherent over long horizons and genuinely responds to conditioning. 3D understanding asks whether a model has learned geometry and viewpoint or has only memorized a dataset. I have not yet worked directly in these areas — my portfolio is 2D computer vision, vision-language systems, and classical machine learning — but they are natural extensions of the question that runs through everything I have built: how do we measure, honestly, what a model actually knows?

I want to pursue graduate-level research that moves beyond demonstrating that a pipeline works on a curated test set toward understanding when and why it fails — and building evaluation tools that make failure modes visible, quantifiable, and publishable. The ECG Workbench Seed is my first step in that direction. My aim is to develop these directions inside a research group: contributing evaluation discipline, reproducible experimentation, and careful documentation, while learning domain methods from researchers who define them.
