export const projectsData = [
  {
    id: 'exoplanet-pinn',
    cat: 'Scientific ML · Research & Astrophysics',
    title: 'Exoplanet Transit PINN — Kepler & TESS Photometry',
    result: 'Physics-embedded loss · PyTorch & SciPy',
    desc: 'Physics-Informed Neural Network modeling Kepler and TESS exoplanetary transit light curves. Rather than treating transit dips as arbitrary curve fitting, the model embeds Keplerian orbital physics and limb-darkening equations directly into the PyTorch loss function to recover planetary radii and orbital parameters from noisy photometric observations.',
    stack: ['PyTorch', 'PINNs', 'SciPy', 'Kepler / TESS', 'Python'],
    theme: '',
    links: [
      { label: 'GitHub ↗', url: 'https://github.com/Ojaswin30/exoplanet-pinn', external: true }
    ]
  },
  {
    id: 'pdf-to-fhir',
    cat: 'Healthcare Automation · Internship @ Winniio',
    title: 'Medical PDF-to-FHIR Pipeline',
    result: '92% accuracy · 700+ records shipped',
    desc: 'End-to-end OCR + NLP pipeline converting raw medical PDFs to FHIR-compliant JSON. Built during my internship at Winniio and released as their flagship data product. Fully offline processing with no PHI leakage.',
    stack: ['Python', 'OCR / NLP', 'FHIR', 'Streamlit'],
    theme: 'tc',
    links: [
      { label: 'Live demo ↗', url: 'https://pdf-to-fhir-pipeline.streamlit.app/', external: true },
      { label: 'GitHub ↗', url: 'https://github.com/Ojaswin30/pdf-to-fhir-pipeline', external: true }
    ]
  },
  {
    id: 'brain-tumor-detector',
    cat: 'Medical AI · Research @ OHSL',
    title: 'Brain Tumor Detector — CNN on MRI Scans',
    result: '90% test accuracy · 5,000 MRI images',
    desc: 'CNN-based MRI classifier using transfer learning. Training time cut 40% while maintaining accuracy. Built independently during research at OHSL, with initial concept from a hackathon. Deployed live on Streamlit.',
    stack: ['TensorFlow', 'Keras', 'OpenCV', 'Python'],
    theme: 'tg',
    links: [
      { label: 'Live demo ↗', url: 'https://brain-tumor-detector-g7hzfamjbfsr7hvg6osx2m.streamlit.app/', external: true },
      { label: 'GitHub ↗', url: 'https://github.com/Ojaswin30/Brain-Tumor-Detector', external: true }
    ]
  },
  {
    id: 'ai-resume-intelligence',
    cat: 'AI & LLM Systems · Privacy-First SLM',
    title: 'AI Resume Intelligence System',
    result: 'Local SLM · Anti-hallucination guardrails',
    desc: 'Privacy-first, local SLM-powered resume evaluation engine separating deterministic mathematical evidence retrieval from generative feedback and gap analysis. Deployed live on Streamlit with guardrailed scoring.',
    stack: ['Python', 'FastAPI', 'Streamlit', 'Local SLMs'],
    theme: '',
    links: [
      { label: 'Live app ↗', url: 'https://ai-resume-intelligence-system-ojas.streamlit.app/', external: true },
      { label: 'GitHub ↗', url: 'https://github.com/Ojaswin30/AI-Resume-Intelligence-System', external: true }
    ]
  },
  {
    id: 'multimodal-search',
    cat: 'Web App · Multimodal AI · Major Project',
    title: 'Multimodal Product Search & Recommender',
    result: 'Text + image queries · 85,241 products',
    desc: 'React + Vite frontend for product discovery using combined text and image queries across 85,241 Amazon products. Three-pipeline system: Symbolic Early Fusion, Static Late Fusion, Intent-Aware Dynamic Fusion. Evaluated on 1,500 queries across 6 categories.',
    stack: ['React + Vite', 'Multimodal AI', 'Python', 'Vector Search'],
    theme: '',
    links: [
      { label: 'Demo redeploying soon', url: '#', disabled: true },
      { label: 'GitHub ↗', url: 'https://github.com/Ojaswin30/Product-Recommender', external: true }
    ]
  },
  {
    id: 'payments-ledger',
    cat: 'Distributed Systems · Backend Engineering',
    title: 'Idempotent Payments Ledger API',
    result: 'Double-entry bookkeeping · Kafka Outbox',
    desc: 'Production-grade distributed financial transaction ledger guaranteeing strict idempotency, double-entry bookkeeping, and transactional outbox event streaming under high concurrency. Includes React testing lab and distributed Redis locking.',
    stack: ['Java 17', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL'],
    theme: 'tc',
    links: [
      { label: 'GitHub repository ↗', url: 'https://github.com/Ojaswin30/Idempotent-Payments-Ledger-API', external: true }
    ]
  },
  {
    id: 'salesforce-crm',
    cat: 'CRM Automation · Salesforce',
    title: 'Salesforce CRM — WhatsNext Motors',
    result: 'Fully automated order & dealer workflows',
    desc: 'Order management, stock tracking, and dealer assignment automated for a vehicle dealership using Salesforce Apex and custom CRM workflows. Full documentation and working demo in repo.',
    stack: ['Salesforce', 'Apex', 'CRM'],
    theme: '',
    links: [
      { label: 'GitHub + docs ↗', url: 'https://github.com/Ojaswin30/whatsnext-salesforce-crm', external: true },
      { label: 'Trailblazer profile ↗', url: 'https://www.salesforce.com/trailblazer/xn8y75ahemczksnv9a', external: true }
    ]
  },
  {
    id: 'sales-bi',
    cat: 'Business Intelligence · Power BI',
    title: 'Sales Analytics Dashboard — Power BI',
    result: 'Multi-region reporting · Dynamic DAX',
    desc: 'Interactive Power BI report with dynamic KPIs, calculation groups, bookmarks, field parameters, and row-level security for multi-region sales data. Architecture doc and screenshots available on request.',
    stack: ['Power BI', 'DAX', 'Data Modeling'],
    theme: 'tg',
    links: [
      { label: 'Request to view →', url: 'mailto:aggarwalojaswin3@gmail.com?subject=Power BI Dashboard — view request', external: false }
    ]
  },
  {
    id: 'azure-etl',
    cat: 'Data Engineering · Azure',
    title: 'Azure ETL Pipeline — Medallion Architecture',
    result: 'Bronze → Silver → Gold transformation',
    desc: 'Event-triggered Bronze–Silver–Gold pipeline on Azure. Raw SQL data transformed into analytics-ready datasets with automated cleansing via Data Factory, Databricks, and Synapse. Architecture doc available.',
    stack: ['Azure Data Factory', 'Databricks', 'Synapse Analytics'],
    theme: 'tc',
    links: [
      { label: 'Request docs →', url: 'mailto:aggarwalojaswin3@gmail.com?subject=Azure ETL Pipeline — documentation request', external: false }
    ]
  },
  {
    id: 'self-healing-cicd',
    cat: 'DevOps Automation · UiPath',
    title: 'Self-Healing CI/CD — Azure DevOps + UiPath',
    result: 'Automated build-failure diagnosis & repair',
    desc: 'When a build fails in Azure DevOps, a UiPath automation triggers, reads the error logs, identifies the root cause, and — for non-complex failures — patches the code and re-runs the pipeline without human intervention. Pipelines and notebooks running in Azure Synapse. Deployed as an Azure Static App.',
    stack: ['UiPath', 'Azure DevOps', 'Azure Synapse', 'Python'],
    theme: 'wcard-wip',
    isWip: true,
    links: [
      { label: 'Repo coming soon', url: '#', disabled: true }
    ]
  }
];
