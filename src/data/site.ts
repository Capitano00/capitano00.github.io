export const siteMeta = {
  title: "Boyong Wang | Engineering Workflow Systems",
  description:
    "Personal website for Boyong Wang: renewable-energy consulting, applied AI workflow systems, HelioFabric, and public engineering demos.",
  author: "Boyong Wang",
  reviewedThrough: "Q2 2026",
  canonicalUrl: "https://capitano00.github.io",
  brand: {
    logoLockup: "/brand/heliofabric-logo-lockup.png",
    icon: "/brand/heliofabric-icon.png",
    ogImage: "/og-image.png"
  }
};

export const heroProfile = {
  eyebrow: "Renewable consulting + applied AI systems",
  name: "Boyong Wang",
  headline: "I build reviewable software for engineering workflows.",
  summary:
    "I work as a renewable-energy consultant at OWC / ABL Group and build tools around the friction I see in expert review work: documents, workbooks, assumptions, evidence, specialist tools, and sign-off loops.",
  judgement:
    "The pattern I care about is simple: AI and automation can create useful candidates, but acceptance should stay explicit, traceable, and human-reviewed.",
  primaryAction: "View projects",
  primaryActionHref: "#projects",
  secondaryAction: "View profiles",
  secondaryActionHref: "#profiles",
  tertiaryAction: "3D-RAMS repo",
  tertiaryActionHref: "https://github.com/Capitano00/3D-RAMS"
};

export const atAGlance = [
  {
    label: "Current work",
    value: "Consultant at OWC / ABL Group"
  },
  {
    label: "Domain context",
    value: "80+ renewable projects, 5+ GW advisory exposure"
  },
  {
    label: "Systems stack",
    value: "Python/FastAPI, React/TypeScript, relational data"
  },
  {
    label: "Delivery pattern",
    value: "Tool orchestration, data contracts, review gates"
  }
];

export const careerFoundation = {
  eyebrow: "Professional career",
  heading: "Renewable consulting is the domain base.",
  intro:
    "My day-to-day work sits in renewable advisory, where technical judgement depends on clear assumptions, well-structured evidence, and reviewable outputs.",
  points: [
    {
      label: "Consulting",
      title: "OWC / ABL Group",
      detail:
        "Renewable-energy consulting across technical due diligence, energy yield assessment, design review, planning review, and stakeholder advisory."
    },
    {
      label: "Scale",
      title: "Utility-scale project exposure",
      detail:
        "Aggregate experience across 80+ solar PV, BESS, and Power-to-X projects, with 5+ GW of advisory context."
    },
    {
      label: "Workflow lens",
      title: "From repeated review loops to tools",
      detail:
        "Recurring workbook, document, assumption, evidence, and specialist-tool steps become candidates for structured workflow software."
    }
  ]
};

export const appliedAISystems = {
  eyebrow: "Applied AI systems",
  heading: "I design systems where AI outputs remain reviewable.",
  intro:
    "The work is workflow-first: capture inputs, generate candidates, keep traces, expose assumptions, and promote results only after review.",
  items: [
    {
      label: "Documents",
      title: "Evidence extraction",
      detail:
        "Reports, PDFs, assumptions, and source notes become structured candidates with references, not silent final answers."
    },
    {
      label: "Workbooks",
      title: "Tool and workbook automation",
      detail:
        "Excel-style review surfaces and specialist-tool runs get input previews, records, generated artefacts, and acceptance states."
    },
    {
      label: "Agents",
      title: "Human-reviewed outputs",
      detail:
        "LLM, parser, or tool outputs stay separate from accepted project state until assumptions and evidence are inspected."
    },
    {
      label: "Architecture",
      title: "Cloud-ready shape",
      detail:
        "API-led services, durable records, data contracts, traceable artefacts, and clean handoff points for managed infrastructure."
    }
  ]
};

type Project = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  summary: string;
  status: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  linkLabel?: string;
  metrics: Array<{ value: string; label: string }>;
  points: Array<{ label: string; title: string; detail: string }>;
  details: Array<{ title: string; items: string[] }>;
};

export const projects: Project[] = [
  {
    id: "heliofabric",
    eyebrow: "Flagship project",
    title: "HelioFabric",
    subtitle: "Governed workflow layer for renewable-project review.",
    summary:
      "HelioFabric organises project facts, evidence candidates, workbook exchanges, tool runs, generated artefacts, and explicit review states.",
    status: "Internal R&D / internal platform",
    image: siteMeta.brand.logoLockup,
    imageAlt: "HelioFabric logo",
    metrics: [
      { value: "10+", label: "workflow surfaces" },
      { value: "Review-led", label: "acceptance model" },
      { value: "Python + React", label: "system stack" }
    ],
    points: [
      {
        label: "Problem",
        title: "Expert review work is scattered",
        detail:
          "Renewable-project review spans workbooks, reports, specialist tools, assumptions, maps, and review comments."
      },
      {
        label: "System",
        title: "I designed and built the workflow layer",
        detail:
          "The product pattern separates canonical facts, extracted candidates, tool outputs, workbook exchange, and accepted state."
      },
      {
        label: "Governance",
        title: "Candidates before truth",
        detail:
          "Automation output is useful only when evidence, assumptions, and review state are visible before acceptance."
      }
    ],
    details: [
      {
        title: "Implementation evidence",
        items: [
          "Python/FastAPI backend and React/TypeScript frontend.",
          "Relational data model for project facts, parameters, review states, and workbook exchange.",
          "Tool Controller pattern for input preview, run records, generated artefacts, and supervised acceptance.",
          "Agent-assisted delivery supported by source-of-truth notes, verification commands, and handoff records."
        ]
      },
      {
        title: "Publication limits",
        items: [
          "No HelioFabric source code is published here.",
          "No client identities, sensitive site details, access material, local stores, or report material are included.",
          "AI and automation are described as supervised support, not autonomous engineering judgement."
        ]
      }
    ]
  },
  {
    id: "rams-demo",
    eyebrow: "Public demo",
    title: "3D-RAMS",
    subtitle: "Local-first agent for inspectable pre-visit briefing packs.",
    summary:
      "3D-RAMS turns a coordinate into a 3D pre-visit briefing pack using synthetic fixtures, a deterministic backend workflow, and explicit safety gates.",
    status: "Public repository",
    href: "https://github.com/Capitano00/3D-RAMS",
    linkLabel: "View repository",
    metrics: [
      { value: "Python", label: "backend workflow" },
      { value: "CesiumJS", label: "3D interface" },
      { value: "Synthetic", label: "fixtures" }
    ],
    points: [
      {
        label: "Agent workflow",
        title: "Deterministic tool sequence",
        detail:
          "The backend resolves fixtures, geospatial features, planning extracts, annotations, briefing output, evidence, and trace."
      },
      {
        label: "Interface",
        title: "React/Vite + CesiumJS",
        detail:
          "The UI presents a 3D scene, annotations, briefing output, evidence register, trace, and architecture visualizer."
      },
      {
        label: "Safety",
        title: "Certified claims blocked",
        detail:
          "The demo blocks certified RAMS, work approval, emergency guidance, and competent-person replacement claims."
      }
    ],
    details: [
      {
        title: "Architecture path",
        items: [
          "The public README maps local response and trace objects to a later managed-cloud architecture.",
          "AWS services are described as a future production path, not as a completed deployment.",
          "The demo runs without AWS access material, external keys, live scraping, or real project data."
        ]
      }
    ]
  }
];

export const helioArchitecture = [
  {
    label: "Inputs",
    title: "Documents, workbooks, project facts",
    detail: "Source material enters as context, not accepted truth."
  },
  {
    label: "Candidates",
    title: "Extraction and assumptions",
    detail: "Parsers, tools, or AI create structured candidates with references."
  },
  {
    label: "Controller",
    title: "Tool runs and artefacts",
    detail: "Input previews, run records, outputs, and artefacts stay traceable."
  },
  {
    label: "Review",
    title: "Evidence and review gate",
    detail: "Assumptions and generated output are inspected before acceptance."
  },
  {
    label: "Accepted state",
    title: "Canonical project record",
    detail: "Only reviewed decisions move into the accepted workflow state."
  }
];

export const technicalBackground = {
  eyebrow: "Technical background",
  heading: "Physics and robotics shaped the engineering base.",
  intro:
    "The common thread is traceability: model assumptions, sensor inputs, control logic, and review states need to be visible enough to inspect.",
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

export const profileLinks = {
  eyebrow: "Profiles",
  heading: "Public profiles and project links.",
  summary: "LinkedIn, GitHub, and the public demo repository are the main external references.",
  links: [
    {
      label: "LinkedIn profile",
      href: "https://www.linkedin.com/in/boyong-w-160a04249/"
    },
    {
      label: "GitHub profile",
      href: "https://github.com/Capitano00"
    },
    {
      label: "3D-RAMS repository",
      href: "https://github.com/Capitano00/3D-RAMS"
    }
  ]
};

export const publicationNote = {
  eyebrow: "Publication note",
  heading: "What is intentionally excluded.",
  rules: [
    "Client identities, sensitive site details, deal terms, access material, and report material are excluded.",
    "HelioFabric is presented as an internal platform project, not an employer product statement or source-code release.",
    "Screenshots and visuals are synthetic, redacted, or reviewed before publication."
  ]
};
