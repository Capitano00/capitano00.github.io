export const siteMeta = {
  title: "Boyong Wang | Public Engineering Portfolio",
  description:
    "A concise public engineering portfolio for renewable-energy consulting, reviewable workflow tooling, HelioFabric, and public agentic demos.",
  author: "Boyong Wang",
  status: "Public-safe",
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
  eyebrow: "Renewable consulting + workflow systems",
  headline: "Renewable-energy consultant building reviewable engineering workflow tools.",
  summary:
    "I work as a consultant at OWC / ABL Group, where technical due diligence, energy yield work, design review, and renewable advisory expose the workflow friction that good software should reduce.",
  roleSignal: "Renewable-energy consulting, workflow tooling, and public agent demos",
  deliverySignal: "Product thinking, typed systems, evidence trails, and human review before acceptance.",
  primaryAction: "Read HelioFabric case study",
  primaryActionHref: "#heliofabric-case-study",
  secondaryAction: "View public profiles",
  secondaryActionHref: "#profiles"
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
    label: "Flagship system",
    value: "HelioFabric workflow tooling"
  },
  {
    label: "Public demo",
    value: "3D-RAMS local-first agent"
  },
  {
    label: "Technical base",
    value: "Physics, robotics, sensor fusion"
  }
];

export const consultingFoundation = {
  eyebrow: "Consulting foundation",
  heading: "The workflow problems come from real renewable advisory work.",
  intro:
    "The software work starts from consultant delivery: turning technical assumptions, evidence, workbook logic, and review comments into clear outputs that other people can inspect.",
  items: [
    {
      label: "OWC / ABL Group",
      title: "Consultant at OWC / ABL Group",
      detail:
        "Renewable-energy advisory work across technical due diligence, energy yield assessment, design review, planning review, and stakeholder-ready reporting."
    },
    {
      label: "Renewable scale",
      title: "80+ projects, 5+ GW advisory context",
      detail:
        "Aggregate experience across utility-scale solar PV, BESS, and Power-to-X work, kept at portfolio level without client or site details."
    },
    {
      label: "Workflow focus",
      title: "Optimise engineering workflows",
      detail:
        "The long-term focus is to make repeated expert work easier to structure, automate, inspect, and review without weakening accountability."
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

export const projectPortfolio = [
  {
    id: "heliofabric",
    eyebrow: "Flagship",
    title: "HelioFabric",
    status: "Internal case study",
    summary:
      "Governed renewable-workflow tooling around project data, workbook contracts, specialist-tool artefacts, and human review. It is product and delivery evidence, not public source code.",
    linkLabel: "Read case study",
    href: "#heliofabric-case-study",
    tags: ["FastAPI", "Next.js", "Tool Controller", "Review gates"],
    proof: "Product judgement, data governance, sustained ownership, and supervised automation patterns.",
    boundary: "Internal case study only; no public source code or private delivery material."
  },
  {
    id: "3d-rams",
    eyebrow: "Public demo",
    title: "3D-RAMS",
    status: "Local-first agent",
    summary:
      "A public demo that turns a coordinate into an inspectable 3D pre-visit briefing pack using deterministic Python code, a React/Vite/CesiumJS UI, synthetic fixtures, evidence trace, and a safety gate.",
    linkLabel: "View GitHub repo",
    href: "https://github.com/Capitano00/3D-RAMS",
    tags: ["Python", "React", "CesiumJS", "Safety gate"],
    proof: "Public agentic engineering range with an explicit safety gate.",
    boundary: "Demo briefing pack only; not certified RAMS, work approval, or production deployment."
  }
];

export const flagshipProject = {
  eyebrow: "Flagship case study",
  heading: "HelioFabric keeps renewable-workflow automation reviewable.",
  summary:
    "An internal-platform case study for a governed layer around renewable-project data, specialist tools, workbook contracts, evidence artefacts, and human review.",
  metrics: [
    { value: "300+", label: "reviewed changes" },
    { value: "10+", label: "tool workflows" },
    { value: "Review-led", label: "acceptance model" }
  ]
};

export const flagshipCaseStudy = {
  eyebrow: "Flagship case study",
  heading: "A governed layer around expert renewable workflows.",
  statusNote:
    "Internal R&D / internal platform case study. Not external SaaS, not an open-source release, and not an autonomous decision system.",
  problem:
    "Renewable-project review often spans workbooks, PDFs, specialist tools, evidence files, maps, assumptions, and expert judgement. The bottleneck is the workflow around the judgement, not a single generated answer.",
  solution:
    "HelioFabric separates canonical facts, extracted candidates, tool outputs, workbook exchanges, and reviewed acceptance. The product pattern is preview first, evidence second, acceptance last.",
  proof:
    "The build demonstrates how repeated technical review work can become a structured, inspectable software system without hiding accountability.",
  evidence: [
    "Typed Python backend and React/TypeScript frontend.",
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
    "No private identities, sensitive place details, unreviewed evidence files, secrets, local stores, or report material.",
    "Screenshots are synthetic, redacted, or manually reviewed before publication.",
    "AI outputs are described as supervised candidates, not final engineering judgement."
  ]
};

export const disclosureRules = [
  "Use high-level workflow descriptions instead of private delivery details.",
  "Use synthetic, redacted, or reviewed screenshots where the point is product evidence.",
  "Keep internal-use language factual, conservative, and approved for public use.",
  "Describe AI and automation as supervised delivery support.",
  "Treat HelioFabric as a case study unless a separate release review approves standalone public code."
];

export const statusCards = [
  {
    label: "Consulting input",
    value: "Real workflow pressure",
    detail: "TDD, EYA, design review, workbook handling, and advisory outputs reveal where repeated effort accumulates."
  },
  {
    label: "Build",
    value: "Governed workflow tools",
    detail: "Systems shaped around reviewable workbooks, structured parameters, and tool-run artefacts."
  },
  {
    label: "Reason",
    value: "Reduce repeated effort",
    detail: "The product aim is less repeated handling work while keeping specialist judgement visible."
  },
  {
    label: "Method",
    value: "Agent-assisted SDLC",
    detail: "Codex-supported implementation with source-of-truth notes, verification, and handoff records."
  },
  {
    label: "Evidence",
    value: "Reviewed evidence",
    detail: "Progress is described through high-level workflow evidence, synthetic visuals, and approved public claims."
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
