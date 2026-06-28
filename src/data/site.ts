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
  eyebrow: [
    "Renewable energy technical advisory",
    "AI automation for engineering workflow efficiency"
  ],
  name: "Boyong Wang",
  companyContext:
    "At OWC / ABL Group, I work alongside experienced engineers and industry specialists with a global project record, supporting clients across the energy and infrastructure sectors.",
  headline: "Consultant @ OWC",
  summary:
    "I work within the Onshore Solar team, focusing on utility-scale PV and PV + BESS hybrid projects. I provide technical advisory and due diligence support for clients buying, selling, or developing assets, and for banks requiring lenders' technical advisory.",
  judgement:
    "Alongside consulting work, I identify engineering workflows where AI and automation can improve efficiency and quality, then build end-to-end solutions with an agentic development harness. My tools keep expert review central, with human-in-the-loop checks, traceable evidence, and explicit decision gates.",
  primaryAction: "View personal projects",
  primaryActionHref: "#projects",
  secondaryAction: "View profiles",
  secondaryActionHref: "#profiles",
  tertiaryAction: "3D-RAMS repo",
  tertiaryActionHref: "https://github.com/Capitano00/3D-RAMS"
};

export const atAGlance = [
  {
    label: "Work / role",
    value: "Consultant at OWC / ABL Group"
  },
  {
    label: "Project experience",
    value: "80+ projects totalling over 5 GW across EMEA, APAC, and AMEA"
  },
  {
    label: "Skillset",
    value: "Python/FastAPI, React/TypeScript, SQL, pandas/openpyxl, MATLAB/Simulink, PVsyst/Meteonorm, ROS, CAD automation"
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
  eyebrow: "Applied AI build experience",
  heading: "Agentic harnesses, workflow agents, and evaluation.",
  items: [
    {
      label: "Agentic harness",
      title: "Codex + Claude Code delivery system",
      detail:
        "Built a supervised development harness for full-stack tools, task breakdown, verification commands, handoff notes, and human review."
    },
    {
      label: "Workflow agents",
      title: "RAG and tool-backed assistants",
      detail:
        "Built agents for document review, planning review, proposal drafting, technical-risk extraction, and project-data workflows."
    },
    {
      label: "Evaluation",
      title: "Expert review stays explicit",
      detail:
        "Designed review patterns where assumptions, evidence, generated outputs, and acceptance state remain inspectable before use."
    },
    {
      label: "Scale",
      title: "10B+ tokens of tool-building work",
      detail:
        "Used Codex and Claude Code across sustained build cycles, with practical lessons on context, model boundaries, and verification."
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
    status: "Private repo / internal R&D platform",
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
    title: "Docs, workbooks, facts",
    detail: "Collected as context."
  },
  {
    label: "Candidates",
    title: "Extracted values",
    detail: "Linked to evidence and assumptions."
  },
  {
    label: "Tool runs",
    title: "Previews and records",
    detail: "Runs create traceable artefacts."
  },
  {
    label: "Review gate",
    title: "Human check",
    detail: "Evidence is inspected before use."
  },
  {
    label: "Accepted record",
    title: "Canonical state",
    detail: "Only reviewed decisions are promoted."
  }
];

export const technicalBackground = {
  eyebrow: "Technical background",
  heading: "Theoretical physics + robotics.",
  intro: "BSc theoretical physics, MSc robotics, and connected-vehicle research.",
  items: [
    {
      label: "BSc Physics with Theoretical Physics",
      title: "Imperial College London",
      detail:
        "BSc project: data-compression optimisation for the ESA Comet Interceptor mission."
    },
    {
      label: "MSc Robotics and Autonomous Systems",
      title: "University of Sussex",
      detail:
        "MSc project: Unscented Kalman Filter sensor fusion for real-time UGV indoor localisation."
    },
    {
      label: "Research Assistant",
      title: "Robotics Lab",
      detail:
        "Connected-vehicle research with ROS sensor-fusion workflows using Linux, Arduino, STM32, YOLO, and localisation methods."
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
