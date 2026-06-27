export const siteMeta = {
  title: "Boyong Wang | Public Engineering Portfolio",
  description:
    "A concise public engineering portfolio for renewable-energy consulting, applied AI workflow systems, HelioFabric, and public agentic demos.",
  author: "Boyong Wang",
  status: "Reviewed public source",
  reviewedThrough: "Q2 2026",
  temporaryHost: "GitHub Pages",
  canonicalUrl: "https://capitano00.github.io",
  brand: {
    logoLockup: "/brand/heliofabric-logo-lockup.png",
    icon: "/brand/heliofabric-icon.png",
    ogImage: "/og-image.png"
  },
  repositoryEvidence: {
    firstLocalCommitDate: "Q2 2026",
    importedSnapshotStart: "Private build snapshots",
    inspectedCommitCount: "300+",
    inspectedOn: "Q2 2026"
  }
};

export const personalProfile = {
  name: "Boyong Wang",
  eyebrow: "Renewable consulting + applied AI systems",
  headline: "I build applied AI systems for expert engineering workflows.",
  summary:
    "I work as a renewable-energy consultant at OWC / ABL Group. That consulting work exposes repeated document, workbook, evidence, tool, and review loops that can be turned into governed software systems.",
  judgement:
    "My core pattern: AI outputs remain candidates until evidence, assumptions, and review state are explicit.",
  roleSignal: "Renewable-energy consulting, applied AI systems, workflow tooling, and public agent demos",
  deliverySignal: "Python/FastAPI, React/TypeScript, data contracts, tool orchestration, traceability, and human review before acceptance.",
  primaryAction: "Read HelioFabric case study",
  primaryActionHref: "#heliofabric-case-study",
  secondaryAction: "View 3D-RAMS demo",
  secondaryActionHref: "#rams-demo"
};

export const proofIndex = [
  {
    label: "Professional base",
    value: "Consultant at OWC / ABL Group"
  },
  {
    label: "Domain exposure",
    value: "80+ renewable projects, 5+ GW advisory context"
  },
  {
    label: "Technical stack",
    value: "Python/FastAPI + React/TypeScript"
  },
  {
    label: "AI workflow pattern",
    value: "Tool workflows with human review"
  },
  {
    label: "Technical base",
    value: "Physics, robotics, sensor fusion"
  }
];

export const appliedAISystems = {
  eyebrow: "Applied AI systems",
  heading: "The work is about turning expert review loops into inspectable systems.",
  intro:
    "The recurring pattern is not chatbot-first. It is workflow-first: capture inputs, generate candidates, keep traces, expose assumptions, and leave acceptance to review.",
  items: [
    {
      label: "Documents",
      title: "Document and evidence workflows",
      detail:
        "PDFs, reports, assumptions, and source notes become structured candidates with evidence references rather than silent final answers."
    },
    {
      label: "Workbooks",
      title: "Workbook and tool automation",
      detail:
        "Excel-style review surfaces, specialist-tool runs, and generated artefacts are wrapped with input previews, records, and acceptance steps."
    },
    {
      label: "AI outputs",
      title: "Human-reviewed candidates",
      detail:
        "LLM or parser outputs are treated as review candidates. The accepted state stays separate from extracted evidence and tool output."
    },
    {
      label: "Architecture",
      title: "Cloud-ready system shape",
      detail:
        "The pattern is API-led and contract-led: typed services, durable records, traceable artefacts, review states, and clear handoff points for managed infrastructure later."
    }
  ]
};

export const capabilitySignals = [
  {
    label: "Consulting judgement",
    title: "Start from the work, not the tool",
    detail: "Repeated workbook, evidence, design, and review steps are treated as workflow-design problems before automation is proposed."
  },
  {
    label: "System design",
    title: "Separate facts from candidates",
    detail: "Canonical data, extracted evidence, tool outputs, and accepted results stay deliberately distinct."
  },
  {
    label: "Delivery method",
    title: "Use AI with review gates",
    detail: "Agent-assisted delivery speeds implementation while preserving verification and human acceptance."
  },
  {
    label: "Engineering base",
    title: "Use physics and robotics instincts",
    detail: "Sensor fusion, computational physics, and controls work shape the preference for traceable systems and explicit assumptions."
  }
];

export const contactProfile = {
  eyebrow: "Profiles",
  heading: "Public profiles.",
  summary: "LinkedIn and GitHub are included as neutral profile references. No private details are published here.",
  linkedinLabel: "LinkedIn profile",
  linkedinUrl: "https://www.linkedin.com/in/boyong-w-160a04249/",
  githubLabel: "GitHub profile",
  githubUrl: "https://github.com/Capitano00"
};

export const flagshipProject = {
  eyebrow: "Flagship case study",
  heading: "HelioFabric turns renewable-review workflow friction into governed software.",
  summary:
    "A case study for project data, evidence candidates, workbook contracts, specialist-tool artefacts, and human review. The proof is the system pattern, not public source code.",
  metrics: [
    { value: "80+", label: "project context" },
    { value: "10+", label: "workflow surfaces" },
    { value: "Review-led", label: "acceptance model" }
  ]
};

export const flagshipCaseStudy = {
  eyebrow: "Flagship case study",
  heading: "A governed applied-AI layer around expert renewable workflows.",
  statusNote:
    "Internal R&D / internal platform case study. Not external SaaS, not an open-source release, and not an autonomous decision system.",
  executiveSummary: [
    {
      label: "Problem",
      title: "Expert review work is slowed by scattered context",
      detail:
        "Renewable-project review spans documents, workbooks, specialist tools, evidence files, assumptions, maps, and review comments."
    },
    {
      label: "System",
      title: "I designed and built a governed workflow layer",
      detail:
        "HelioFabric organises project facts, evidence candidates, workbook exchanges, tool runs, generated artefacts, and explicit review states."
    },
    {
      label: "Stack",
      title: "Python/FastAPI with React/TypeScript surfaces",
      detail:
        "The platform shape uses typed backend services, relational data modelling, frontend workbench surfaces, and contract-led tool workflows."
    },
    {
      label: "Governance",
      title: "AI and automation produce candidates, not truth",
      detail:
        "Accepted state stays separate from extracted evidence and generated output until a human review step promotes it."
    },
    {
      label: "Evidence",
      title: "The build shows ownership across product and delivery",
      detail:
        "The case study demonstrates system design, data boundaries, tool orchestration, review gates, and agent-assisted implementation discipline."
    }
  ],
  problem:
    "Renewable-project review often spans workbooks, PDFs, specialist tools, evidence files, maps, assumptions, and expert judgement. The bottleneck is the workflow around the judgement, not a single generated answer.",
  solution:
    "HelioFabric separates canonical facts, extracted candidates, tool outputs, workbook exchanges, and reviewed acceptance. The product pattern is preview first, evidence second, acceptance last.",
  proof:
    "The build demonstrates how repeated technical review work can become a structured, inspectable software system without hiding accountability.",
  evidence: [
    "Python/FastAPI backend and React/TypeScript frontend.",
    "Workbench surfaces for project facts, parameters, review states, and workbook exchange.",
    "Tool Controller pattern for input preview, run records, generated artefacts, and supervised acceptance.",
    "Agent-assisted delivery supported by source-of-truth notes, verification commands, and handoff records."
  ],
  method: [
    "State the workflow problem before the tool.",
    "Separate accepted facts from unreviewed candidates.",
    "Make automation output inspectable before acceptance.",
    "Use synthetic or reviewed visuals for public communication."
  ],
  safeguards: [
    "No public HelioFabric source code.",
    "No private identities, sensitive place details, evidence files, secrets, local stores, or report material.",
    "AI outputs are described as supervised candidates, not final engineering judgement."
  ]
};

export const helioArchitecture = [
  {
    label: "Inputs",
    title: "Documents, workbooks, project facts",
    detail: "Source material enters as context, not as automatically accepted truth."
  },
  {
    label: "Candidates",
    title: "Extraction and assumptions",
    detail: "Parsers, tools, or AI create structured candidates with evidence references."
  },
  {
    label: "Controller",
    title: "Tool runs and artefacts",
    detail: "Input previews, run records, outputs, and artefacts stay traceable."
  },
  {
    label: "Review",
    title: "Evidence and review gate",
    detail: "Humans inspect assumptions, evidence, and generated output before acceptance."
  },
  {
    label: "Accepted state",
    title: "Canonical project record",
    detail: "Only reviewed decisions move into the accepted workflow state."
  }
];

export const ramsCaseStudy = {
  eyebrow: "Public demo",
  heading: "3D-RAMS shows the same applied-AI pattern in a public repo.",
  summary:
    "3D-RAMS is a local-first demo agent that turns a coordinate into an inspectable 3D pre-visit briefing pack using synthetic fixtures and explicit safety gates.",
  href: "https://github.com/Capitano00/3D-RAMS",
  linkLabel: "View 3D-RAMS on GitHub",
  points: [
    {
      label: "Agent workflow",
      title: "Deterministic Python sequence",
      detail:
        "The backend runs a tool sequence for location fixture resolution, geospatial features, planning-document fixture extraction, annotations, briefing, evidence, and trace."
    },
    {
      label: "3D interface",
      title: "React/Vite + CesiumJS UI",
      detail:
        "The frontend presents a 3D scene, annotations, briefing output, evidence register, trace, and architecture visualizer."
    },
    {
      label: "Safety gate",
      title: "Certified claims stay blocked",
      detail:
        "The demo explicitly blocks certified RAMS, work approval, emergency guidance, and competent-person replacement claims."
    },
    {
      label: "Architecture path",
      title: "AWS path documented as future architecture",
      detail:
        "The public README maps the local response and trace objects to a later managed-cloud path; the demo itself does not claim production deployment."
    }
  ],
  tags: ["Python", "React", "CesiumJS", "Evidence trace", "Safety gate", "Synthetic fixtures"]
};

export const disclosureRules = [
  "HelioFabric is shown as a case study, not a source-code release.",
  "Private project identities, place details, evidence files, secrets, and report material stay out of the public repo.",
  "Screenshots and visuals are synthetic, redacted, or reviewed before publication.",
  "AI and automation are described as supervised support, not autonomous engineering judgement."
];

export const statusCards = [
  {
    label: "Frame",
    value: "Workflow before model",
    detail: "Start from the expert review loop, then decide where AI, tools, data contracts, and UI surfaces belong."
  },
  {
    label: "Control",
    value: "Candidates before truth",
    detail: "Extracted evidence, model output, and tool results stay distinct from accepted project state."
  },
  {
    label: "Deliver",
    value: "API-led system shape",
    detail: "Typed services, durable records, frontend review surfaces, and artefact traces make the workflow inspectable."
  },
  {
    label: "Verify",
    value: "Human review gates",
    detail: "Outputs are accepted only after assumptions, evidence, and review state are visible."
  },
  {
    label: "Build method",
    value: "Agent-assisted SDLC",
    detail: "Codex-supported implementation with source-of-truth notes, verification, and handoff records."
  }
];

export const technicalFoundation = {
  eyebrow: "Physics and Robotics",
  heading: "A technical foundation for traceable systems.",
  intro:
    "The background evidence is compact by design: enough to show the engineering base behind the workflow tools without turning the page into an academic CV.",
  items: [
    {
      label: "Physics",
      title: "Imperial College London",
      detail:
        "Physics with Theoretical Physics, including data-compression optimisation work for the ESA Comet Interceptor mission."
    },
    {
      label: "Robotics",
      title: "University of Sussex",
      detail:
        "MSc Robotics and Autonomous Systems, with UKF-based sensor fusion for real-time UGV indoor localisation."
    },
    {
      label: "Research systems",
      title: "SvecLab connected-vehicle work",
      detail:
        "ROS platform and sensor-fusion test workflows using Linux, Arduino, STM32, YOLO, and localisation methods."
    }
  ]
};
