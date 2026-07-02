import { motion } from 'framer-motion';
import {
  Github, ArrowUpRight, BookOpen, ChevronRight,
  Activity, FileText, ShieldCheck, Clock
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const PROJECTS = [
  {
    order: 1,
    title: 'Medical ECG Image-to-Signal Reconstruction Pipeline',
    role: 'Flagship / Medical AI',
    summary:
      'Multi-stage ECG image-to-signal reconstruction pipeline with synthetic benchmark, QC checks, failure mode atlas, and pipeline compatibility tooling.',
    tech: ['Python', 'YOLO', 'EfficientNet-B3 U-Net', 'ResNet50 U-Net', 'Viterbi', 'Signal Processing'],
    evidence: [
      'Research Workbench Seed',
      'Synthetic ECG Benchmark',
      'QC / Scoring Utility',
      'Seed Failure Mode Atlas',
      'Pipeline Compatibility Max Pass',
      'Academic Research Brief',
    ],
    limitation: 'No clinical validation or diagnostic performance claim.',
    url: 'https://github.com/ezedeem223/medical-ecg-image-to-signal-reconstruction-pipeline',
    accent: 'var(--accent-cyan)',
  },
  {
    order: 2,
    title: 'Satellite Land Classification with CNN and CNN-ViT',
    role: 'Remote Sensing / Academic Pillar',
    summary:
      'Comparative satellite land-classification project using CNN and CNN-ViT workflows with preserved metric artifacts and research evidence documentation.',
    tech: ['Python', 'Keras', 'PyTorch', 'CNN', 'CNN-ViT Hybrid', 'Remote Sensing'],
    evidence: [
      'Metric Provenance Matrix',
      'Model Comparison Brief',
      'Experiment Limitation Matrix',
      'CNN vs CNN-ViT Architecture Explainer',
      'Explainability Protocol',
      'Reproducibility Checklist',
    ],
    limitation: 'No state-of-the-art or production geospatial deployment claim.',
    url: 'https://github.com/ezedeem223/satellite-land-classification-cnn-vit',
    accent: 'var(--accent-purple)',
  },
  {
    order: 3,
    title: 'Waste Classification using VGG16 Transfer Learning',
    role: 'Model Release / Sustainability',
    summary:
      'VGG16 organic-vs-recyclable waste classification project with bundled checkpoint, direct inference script, and model-release documentation.',
    tech: ['Python', 'TensorFlow / Keras', 'VGG16', 'Transfer Learning', 'Image Classification'],
    evidence: [
      'Model Release Card',
      'Checkpoint and Inference Card',
      'Metric Provenance Matrix',
      'Sustainability Use-Case Boundary',
      'Failure Mode Matrix',
      'Inference Reproducibility Guide',
    ],
    limitation: 'No measured environmental-impact or recycling-facility deployment claim.',
    url: 'https://github.com/ezedeem223/waste-classification-transfer-learning',
    accent: 'var(--accent-cyan)',
  },
  {
    order: 4,
    title: 'Aircraft Damage Classification and BLIP Report Generation',
    role: 'Applied CV / Vision-Language',
    summary:
      'Inspection-support workflow combining VGG16 damage classification with BLIP-based report and caption generation.',
    tech: ['Python', 'TensorFlow / Keras', 'VGG16', 'BLIP', 'Vision-Language'],
    evidence: [
      'Model Card',
      'Inspection Report Protocol',
      'Vision-Language Limitations',
      'Failure Mode Matrix',
      'Reproducibility Checklist',
    ],
    limitation:
      'Not certified aviation inspection tooling. Human review required. BLIP is not fine-tuned on aircraft imagery.',
    url: 'https://github.com/ezedeem223/aircraft_damage_vgg16_blip',
    accent: 'var(--accent-purple)',
  },
  {
    order: 5,
    title: 'Rainfall Prediction in Australia using Classical ML',
    role: 'Tabular ML / Environmental',
    summary:
      'Reproducible rainfall-prediction project comparing classical ML models with metric provenance, leakage awareness, and temporal-validation documentation.',
    tech: ['Python', 'scikit-learn', 'XGBoost', 'pandas', 'Tabular ML'],
    evidence: [
      'Metric Provenance Matrix',
      'Leakage and Split Risk Audit',
      'Temporal Validation Protocol',
      'Calibration and Thresholding Protocol',
      'Interpretability Protocol',
      'Error Analysis Playbook',
    ],
    limitation: 'Not an operational forecasting service.',
    url: 'https://github.com/ezedeem223/rainfall-prediction-classifier',
    accent: 'var(--accent-cyan)',
  },
];

const RESEARCH_FOCUS = [
  { label: 'Medical AI and ECG image-to-signal reconstruction' },
  { label: 'Remote sensing and satellite image classification' },
  { label: 'Computer vision and vision-language inspection support' },
  { label: 'Sustainability-focused transfer learning' },
  { label: 'Environmental and tabular machine learning' },
  { label: 'Reproducible ML systems and evidence packs' },
];

const READING_PATHS = [
  {
    time: '60 seconds',
    icon: <Clock size={16} />,
    path: 'ECG project README → Satellite project README. Look for: pipeline architecture and evidence pack scope.',
  },
  {
    time: '3 minutes',
    icon: <Clock size={16} />,
    path: 'ECG + Satellite + Waste. Look for: synthetic benchmark design, comparative evaluation structure, metric provenance.',
  },
  {
    time: '10 minutes',
    icon: <Clock size={16} />,
    path: 'All five projects + Research Dossier. Look for: evidence pack depth, limitation documentation, reproducibility discipline.',
  },
  {
    time: 'Deep technical',
    icon: <BookOpen size={16} />,
    path: 'Open each project repository README and docs/research_pack/ for full evidence packs, model cards, metric provenance matrices, and reproducibility checklists.',
  },
];

export default function App() {
  return (
    <div style={{ backgroundColor: 'var(--bg-base)', minHeight: '100vh', color: 'var(--text-primary)', overflowX: 'hidden' }}>
      <div className="hero-grid" />

      {/* ── Navigation ── */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 50,
        padding: '1.25rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-light)',
        backgroundColor: 'rgba(2,4,10,0.85)',
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.08em', fontSize: '1rem' }}>
          M. SABBAGH
        </span>
        <div style={{ display: 'flex', gap: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
          {[['#research', 'Research'], ['#projects', 'Projects'], ['#evidence', 'Evidence'], ['#contact', 'Links']].map(([href, label]) => (
            <a key={href} href={href}
              style={{ transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = 'var(--accent-cyan)')}
              onMouseOut={e => (e.currentTarget.style.color = 'var(--text-secondary)')}>
              {label}
            </a>
          ))}
        </div>
      </nav>

      <main style={{ paddingTop: '5rem' }}>

        {/* ── Hero ── */}
        <section style={{ minHeight: '92vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10%' }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeIn}
              style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: '0.85rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Activity size={14} /> Applied AI / ML Research Portfolio
            </motion.div>

            <motion.h1 variants={fadeIn}
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.8rem)', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
              Mohamad Sabbagh
            </motion.h1>

            <motion.p variants={fadeIn}
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(1rem, 2vw, 1.35rem)', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Research-oriented Applied AI / ML Engineer
            </motion.p>

            <motion.p variants={fadeIn}
              style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '640px', lineHeight: 1.85, marginBottom: '3rem' }}>
              Reproducible applied AI systems across medical AI, computer vision, remote sensing,
              vision-language workflows, sustainability applications, and environmental machine learning.
              Five finalized repositories — each with a research evidence pack, metric provenance
              documentation, and honest limitation framing.
            </motion.p>

            <motion.div variants={fadeIn} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://github.com/ezedeem223" target="_blank" rel="noopener noreferrer"
                style={btnPrimary}>
                <Github size={16} /> GitHub Profile
              </a>
              <a href="https://github.com/ezedeem223/mohamad-sabbagh-ai-research-portfolio" target="_blank" rel="noopener noreferrer"
                style={btnOutline}>
                Research Dossier <ArrowUpRight size={15} />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Research Focus ── */}
        <section id="research" style={{ padding: '7rem 10%', borderTop: '1px solid var(--border-light)', background: 'var(--bg-surface)' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <SectionHeader number="01" title="Research Focus" accent="var(--accent-cyan)" />

            <motion.div variants={stagger}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '3rem' }}>
              {RESEARCH_FOCUS.map((f, i) => (
                <motion.div key={i} variants={fadeIn}
                  style={{
                    background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-light)',
                    borderRadius: '10px', padding: '1.4rem 1.6rem',
                    display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                  }}>
                  <ChevronRight size={15} style={{ color: 'var(--accent-cyan)', marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>{f.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Featured Projects ── */}
        <section id="projects" style={{ padding: '7rem 10%' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <SectionHeader number="02" title="Featured Projects" accent="var(--accent-purple)" />
            <motion.p variants={fadeIn} style={{ color: 'var(--text-secondary)', marginTop: '1rem', marginBottom: '3.5rem', maxWidth: '620px', lineHeight: 1.7 }}>
              Five finalized repositories in recommended review order. Each includes a research evidence pack with model card, metric provenance matrix, limitation documentation, and reproducibility checklist.
            </motion.p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {PROJECTS.map((p) => (
                <motion.div key={p.order} variants={fadeIn}
                  style={{
                    background: 'var(--bg-surface)', border: '1px solid var(--border-light)',
                    borderRadius: '14px', padding: '2.5rem',
                    transition: 'border-color 0.25s',
                  }}
                  onMouseOver={e => (e.currentTarget.style.borderColor = p.accent)}
                  onMouseOut={e => (e.currentTarget.style.borderColor = 'var(--border-light)')}>

                  {/* Header row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          {String(p.order).padStart(2, '0')}
                        </span>
                        <span style={{
                          fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: p.accent,
                          border: `1px solid ${p.accent}`, borderRadius: '4px', padding: '0.15rem 0.55rem',
                          opacity: 0.85,
                        }}>
                          {p.role}
                        </span>
                      </div>
                      <h3 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', letterSpacing: '-0.02em', lineHeight: 1.3 }}>{p.title}</h3>
                    </div>
                    <a href={p.url} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', whiteSpace: 'nowrap', transition: 'color 0.2s' }}
                      onMouseOver={e => (e.currentTarget.style.color = p.accent)}
                      onMouseOut={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                      <Github size={15} /> View on GitHub <ArrowUpRight size={13} />
                    </a>
                  </div>

                  {/* Summary */}
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.75rem', fontSize: '0.97rem', maxWidth: '780px' }}>
                    {p.summary}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                    {/* Tech Stack */}
                    <div>
                      <Label>Technical Stack</Label>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.6rem' }}>
                        {p.tech.map((t, i) => (
                          <span key={i} style={tag}>{t}</span>
                        ))}
                      </div>
                    </div>

                    {/* Evidence Artifacts */}
                    <div>
                      <Label>Evidence Artifacts</Label>
                      <ul style={{ marginTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                        {p.evidence.map((e, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                            <FileText size={12} style={{ color: p.accent, marginTop: '3px', flexShrink: 0 }} />
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Responsible Framing */}
                    <div>
                      <Label>Responsible Framing</Label>
                      <div style={{ marginTop: '0.6rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <ShieldCheck size={13} style={{ color: 'var(--text-muted)', marginTop: '2px', flexShrink: 0 }} />
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem', lineHeight: 1.6 }}>{p.limitation}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Evidence and Responsible Framing ── */}
        <section id="evidence" style={{ padding: '7rem 10%', background: 'var(--bg-surface)', borderTop: '1px solid var(--border-light)' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <SectionHeader number="03" title="Evidence and Responsible Framing" accent="var(--accent-cyan)" />

            <motion.div variants={stagger}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
              {[
                {
                  heading: 'Evidence Packs',
                  body: 'Each project includes a research evidence pack: model card, metric provenance matrix, dataset and task card, limitation documentation, and reproducibility checklist. Evidence packs make contributions legible without running the code.',
                },
                {
                  heading: 'Metric Provenance',
                  body: 'All metrics are traced to their source artifact — stored notebook outputs, preserved evaluation runs, or historical README-reported values. Provenance caveats are explicit. No metric appears without its source.',
                },
                {
                  heading: 'Explicit Limitations',
                  body: 'Each project documents what it does not claim: no clinical validation, no production deployment, no state-of-the-art comparisons without verified baselines, no operational forecasting. Limitation matrices are committed to each repository.',
                },
                {
                  heading: 'Safe vs Future Claims',
                  body: 'Current capabilities are clearly separated from future research directions. Items not yet implemented (e.g., BLIP fine-tuning, real clinical ECG benchmark, temporal cross-validation) are labeled future-only throughout all documentation.',
                },
              ].map((card, i) => (
                <motion.div key={i} variants={fadeIn}
                  style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '2rem' }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.85rem', color: 'var(--text-primary)' }}>{card.heading}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.75 }}>{card.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Reviewer Reading Path ── */}
        <section style={{ padding: '7rem 10%' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <SectionHeader number="04" title="Reviewer Reading Path" accent="var(--accent-purple)" />
            <motion.p variants={fadeIn} style={{ color: 'var(--text-secondary)', marginTop: '1rem', marginBottom: '3rem', maxWidth: '560px', lineHeight: 1.7 }}>
              Structured reading paths by time budget for academic reviewers.
            </motion.p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {READING_PATHS.map((r, i) => (
                <motion.div key={i} variants={fadeIn}
                  style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: '10px', padding: '1.5rem 2rem', display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', whiteSpace: 'nowrap', minWidth: '90px' }}>
                    {r.icon} {r.time}
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65, flex: 1 }}>{r.path}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Contact / Links ── */}
        <section id="contact" style={{ padding: '7rem 10% 5rem', background: 'var(--bg-surface)', borderTop: '1px solid var(--border-light)' }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionHeader number="05" title="GitHub and Links" accent="var(--accent-cyan)" />

            <motion.div variants={stagger}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '3rem' }}>
              {[
                {
                  label: 'GitHub Profile',
                  desc: 'All five project repositories and pinned portfolio.',
                  url: 'https://github.com/ezedeem223',
                },
                {
                  label: 'LinkedIn',
                  desc: 'Professional profile — Mohamad Sabbagh.',
                  url: 'https://www.linkedin.com/in/mohamed-sabbagh-b3a709309',
                },
                {
                  label: 'Research Dossier',
                  desc: 'Documentation, evidence traceability matrix, project briefs, and CV section.',
                  url: 'https://github.com/ezedeem223/mohamad-sabbagh-ai-research-portfolio',
                },
                {
                  label: 'ECG Reconstruction',
                  desc: 'Flagship — Medical AI, Research Workbench Seed.',
                  url: 'https://github.com/ezedeem223/medical-ecg-image-to-signal-reconstruction-pipeline',
                },
                {
                  label: 'Satellite Classification',
                  desc: 'CNN vs CNN-ViT — Remote Sensing Evidence Pack.',
                  url: 'https://github.com/ezedeem223/satellite-land-classification-cnn-vit',
                },
                {
                  label: 'Waste Classification',
                  desc: 'VGG16 — Bundled checkpoint, predict.py, Model Release Pack.',
                  url: 'https://github.com/ezedeem223/waste-classification-transfer-learning',
                },
                {
                  label: 'Aircraft Inspection',
                  desc: 'VGG16 + BLIP — Vision-Language Evidence Pack.',
                  url: 'https://github.com/ezedeem223/aircraft_damage_vgg16_blip',
                },
                {
                  label: 'Rainfall Prediction',
                  desc: 'Classical ML — Temporal Validation and Leakage Audit.',
                  url: 'https://github.com/ezedeem223/rainfall-prediction-classifier',
                },
              ].map((link, i) => (
                <motion.a key={i} variants={fadeIn} href={link.url} target="_blank" rel="noopener noreferrer"
                  style={{
                    background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-light)',
                    borderRadius: '10px', padding: '1.4rem 1.6rem', display: 'block',
                    transition: 'border-color 0.2s, transform 0.2s',
                  }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--accent-cyan)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.transform = 'none'; }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem' }}>{link.label}</span>
                    <ArrowUpRight size={14} style={{ color: 'var(--text-muted)' }} />
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.83rem', lineHeight: 1.5 }}>{link.desc}</p>
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={fadeIn}
              style={{ marginTop: '5rem', borderTop: '1px solid var(--border-light)', paddingTop: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span>&copy; {new Date().getFullYear()} Mohamad Sabbagh</span>
              <span>Applied AI / ML Research — Five Finalized Repositories</span>
            </motion.div>
          </motion.div>
        </section>

      </main>
    </div>
  );
}

/* ── Helpers ── */

function SectionHeader({ number, title, accent }: { number: string; title: string; accent: string }) {
  return (
    <motion.div variants={fadeIn} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
      <span style={{ fontFamily: 'var(--font-mono)', color: accent, fontSize: '1.1rem' }}>{number}.</span>
      <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>{title}</h2>
      <div style={{ height: '1px', flex: 1, background: 'var(--border-light)', marginLeft: '1rem' }} />
    </motion.div>
  );
}

const btnPrimary: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
  background: 'var(--accent-cyan)', color: '#000',
  padding: '0.85rem 1.75rem', borderRadius: '6px',
  fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '0.85rem',
  transition: 'opacity 0.2s, transform 0.2s',
};

const btnOutline: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
  background: 'transparent', color: 'var(--text-primary)',
  border: '1px solid var(--border-light)',
  padding: '0.85rem 1.75rem', borderRadius: '6px',
  fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: '0.85rem',
  transition: 'border-color 0.2s, transform 0.2s',
};

const tag: React.CSSProperties = {
  fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
  color: 'var(--text-secondary)',
  background: 'var(--bg-base)',
  border: '1px solid var(--border-light)',
  borderRadius: '4px', padding: '0.2rem 0.55rem',
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
      {children}
    </p>
  );
}
