export const servicesData = [
  {
    id: 'ai',
    tag: 'Core Specialty',
    subtag: 'Production ML',
    name: 'AI & Machine Learning Pipelines',
    desc: 'Most AI projects work fine inside a notebook and fall apart when exposed to real-world schema drift, corrupt scans, or tight latency budgets. I build models and ingestion pipelines engineered to run reliably in production.',
    items: [
      {
        strong: 'Deep learning & computer vision:',
        text: ' Transfer learning with TensorFlow and PyTorch, MRI tumor classification (90% test accuracy), and containerized inference APIs.'
      },
      {
        strong: 'Physics-Informed Neural Networks:',
        text: ' Embedding Keplerian orbital equations directly into loss functions to recover planetary transit parameters without hallucinated fits.'
      },
      {
        strong: 'Offline & on-device SLMs:',
        text: ' Quantized local models (Ollama, Qwen) and private RAG architectures when proprietary data cannot touch third-party cloud APIs.'
      },
      {
        strong: 'Empirical evaluation:',
        text: ' Systematic hyperparameter optimization with Optuna and cross-validated baselines rather than ungrounded prompt tweaks.'
      }
    ],
    detail: (
      <>
        <p>My ML work covers the full lifecycle &mdash; from exploratory data profiling and mathematical loss formulation to containerized deployment. I've engineered production systems processing 700+ medical records with 92% accuracy (FHIR pipeline at Winniio), trained CNN models on 5,000 MRI images achieving 90% test accuracy, and built regression models hitting R&sup2;: 0.9998 for cancer biomarker prediction.</p>
        <p>Python-first stack: PyTorch and TensorFlow for deep architectures, Scikit-learn for classical baselines, HuggingFace for embeddings and NLP. Deployed via Streamlit for rapid internal validation or containerized FastAPI endpoints for production service meshes.</p>
        <p><strong>Strongest fits:</strong> healthcare data extraction, document intelligence, medical imaging, scientific ML, and privacy-sensitive on-premise inference.</p>
      </>
    )
  },
  {
    id: 'bi',
    tag: 'Analytics Architecture',
    subtag: 'Power BI & Azure',
    theme: 'teal',
    name: 'Dashboards & Operational Analytics',
    desc: 'If an executive or team lead needs a 15-minute walkthrough just to interpret a chart, the report failed. I design high-signal BI systems that answer operational questions before the meeting even starts.',
    items: [
      {
        strong: 'Power BI with deep DAX:',
        text: ' Dynamic KPI calculation groups, field parameters, bookmark navigation, and multi-tenant row-level security for sales teams.'
      },
      {
        strong: 'Medallion architecture on Azure:',
        text: ' Bronze-to-Gold data pipelines built with Data Factory, Databricks PySpark notebooks, and Synapse Analytics.'
      },
      {
        strong: 'Lightweight internal tooling:',
        text: ' Responsive Streamlit apps when standard enterprise BI platforms are too bulky for rapid operational workflows.'
      }
    ],
    detail: (
      <>
        <p>I design dashboards around the decisions they need to drive, not just whatever columns exist in the database. A good BI report surfaces anomalies immediately. I've built multi-region sales performance systems with complex DAX measures, dynamic filtering, and row-level security for distributed teams.</p>
        <p>On data infrastructure, I structure Azure environments into clean Medallion layers: raw ingested telemetry (Bronze), cleansed and normalized tables (Silver), and business-aggregate reporting models (Gold) served directly to consumers.</p>
        <p><strong>Strongest fits:</strong> sales performance tracking, operations telemetry, financial reporting, and migrating fragile spreadsheet ecosystems into auditable models.</p>
      </>
    )
  },
  {
    id: 'auto',
    tag: 'Reliability Engineering',
    subtag: 'Zero Manual Toil',
    theme: 'teal',
    name: 'Intelligent Automation & Scripting',
    desc: "When engineering or operations teams spend hours manually copying data between tools or babysitting flakey builds, that's not a workflow \u2014 it's technical debt. I build robust scripts and bots that run unattended.",
    items: [
      {
        strong: 'Document extraction:',
        text: ' Custom OCR + NLP engines parsing multi-page clinical records, invoices, and messy PDFs into strictly validated schemas.'
      },
      {
        strong: 'Self-healing CI/CD:',
        text: ' UiPath bots integrated with Azure DevOps to inspect build failure logs, determine root causes, and autonomously re-run or remediate pipeline issues.'
      },
      {
        strong: 'Resilient ETL & syncs:',
        text: ' Python scripts with rate-limit handling, automatic retry policies with backoff, and webhook listeners.'
      }
    ],
    detail: (
      <>
        <p>I focus on automations that compound in reliability over time. For example, in my self-healing CI/CD pipeline, failed Azure DevOps runs trigger a background UiPath bot that inspects stack traces, matches against known transient failure signatures, and remediates without waiting for human intervention.</p>
        <p>For data workflows, I specialize in parsing messy documents with custom OCR, extracting fields via localized NLP, and streaming verified payloads into downstream APIs or databases.</p>
        <p><strong>Strongest fits:</strong> document-heavy workflows, recurring data synchronization, automated QA/DevOps triage, and removing manual glue between legacy tools.</p>
      </>
    )
  },
  {
    id: 'web',
    tag: 'Frontend & Full-Stack',
    subtag: 'Modern Web',
    name: 'Data-Connected Web Applications',
    desc: 'A model without an interface never gets used; an interface without real data is just a mockup. I build typed, responsive web apps designed around complex data flows and search workloads.',
    items: [
      {
        strong: 'React + Vite frontends:',
        text: ' Snappy, typed, component-driven client applications built with Vite for sub-second hot reload and minimal bundle footprint.'
      },
      {
        strong: 'Multimodal search interfaces:',
        text: ' Combining image and text vector queries (CLIP embeddings) into real-time discovery interfaces across tens of thousands of items.'
      },
      {
        strong: 'Full-stack backend glue:',
        text: ' FastAPI and Spring Boot microservices backed by PostgreSQL, Redis, and clean REST/JSON-LD endpoints.'
      }
    ],
    detail: (
      <>
        <p>I build web frontends that connect to real data &mdash; not just static mockups. My multimodal product discovery interface (React + Vite, deployed on Azure Static Apps) combines clean UI ergonomics with a multi-pipeline AI search backend handling over 85,000 items with sub-second response times.</p>
        <p>I'm comfortable owning the full application slice: client-side state, API schemas, database migrations, and containerized deployment. For larger teams, I integrate cleanly into established repositories and PR review workflows.</p>
        <p><strong>Strongest fits:</strong> internal engineering tools, customer-facing search &amp; recommendation frontends, and turning prototype ML scripts into production web apps.</p>
      </>
    )
  }
];
