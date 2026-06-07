export type TimelineMilestone = {
  id: string;
  period: string;
  title: string;
  summary: string;
  evidence: string;
  status: "approximate" | "repo-evidenced" | "current";
  tags: string[];
};

export const timeline: TimelineMilestone[] = [
  {
    id: "origin",
    period: "Late 2025 / early 2026",
    title: "Origin in repetitive consulting workflow",
    summary:
      "After a large renewable portfolio review, the core problem became clear: engineers and consultants were losing time to repeated data handling, workbook preparation, evidence collection, and review coordination.",
    evidence:
      "Narrated origin. Pre-Git Power Automate artefacts should be added only if screenshots can be sanitised.",
    status: "approximate",
    tags: ["Power Automate", "Workflow discovery", "Approximate"]
  },
  {
    id: "prototype",
    period: "Pre-Git prototype",
    title: "From scripts to a product-shaped workflow",
    summary:
      "Early automation experiments explored how structured inputs, repeatable review steps, and lightweight orchestration could reduce friction without removing expert judgement.",
    evidence:
      "Story-led milestone. Use a reconstructed workflow diagram if original screenshots are not suitable for public release.",
    status: "approximate",
    tags: ["Prototype", "Structured inputs", "Human review"]
  },
  {
    id: "git-foundation",
    period: "6 April 2026",
    title: "Private repository foundation",
    summary:
      "HelioFabric moved into a private Git workflow with imported snapshots from v0.0.21 onward, giving the project a durable engineering history and a better base for controlled iteration.",
    evidence:
      "Local Git evidence: first local commit on 2026-04-06 and imported v0.0.21+ snapshots.",
    status: "repo-evidenced",
    tags: ["Git", "v0.0.21+", "Engineering history"]
  },
  {
    id: "platform",
    period: "April 2026",
    title: "FastAPI and Next.js product spine",
    summary:
      "The project converged on a Python backend and web frontend: project/site CRUD, parameter management, formulas, units, and a workbench for structured portfolio review.",
    evidence:
      "Roadmap evidence: Stages 1-4 establish scaffold, parameter CRUD, project data, formula engine, and unit conversions.",
    status: "repo-evidenced",
    tags: ["FastAPI", "Next.js", "Parameter Library"]
  },
  {
    id: "workbook-contract",
    period: "April-May 2026",
    title: "Workbook governance and data-pool workflow",
    summary:
      "Excel remained a useful review surface, but the database became the source of truth. Analysis exports, batch snapshots, and patch workbooks received distinct import/export semantics.",
    evidence:
      "Roadmap and workbook contract evidence: Stage 5 shipped selection-driven workbench exports and preview/commit import flows.",
    status: "repo-evidenced",
    tags: ["Workbench", "Excel contracts", "Preview and commit"]
  },
  {
    id: "tool-controller",
    period: "May 2026",
    title: "Tool Controller and artefact-backed workflows",
    summary:
      "HelioFabric added a controlled tool layer for site-scoped calculations, irradiation evidence packs, map deliverables, and other expert workflows without silently changing canonical project data.",
    evidence:
      "Roadmap evidence: Stage 7 Tool Controller, tool runs, artefacts, provider status, and alpha internal tools.",
    status: "repo-evidenced",
    tags: ["Tool Controller", "Artefacts", "Alpha tools"]
  },
  {
    id: "design-optimisation",
    period: "Late May-June 2026",
    title: "Design Optimisation as the flagship active workstream",
    summary:
      "The active build focus is a transparent PV design optimisation workflow: PVsyst batch evidence, PVcase/DC capacity review, hourly grid clipping, source/revision history, and explainable ranking views.",
    evidence:
      "Local Git evidence inspected on 2026-06-04: 248 commits in the checkout, with recent commits centred on design optimisation ranking and source/revision workflows.",
    status: "current",
    tags: ["Design Optimisation", "PVsyst", "Evidence review"]
  },
  {
    id: "journal",
    period: "June 2026",
    title: "Public innovation journal begins",
    summary:
      "A separate public website starts tracking HelioFabric at a high level: why it exists, how it is being developed, what changed each week, and what remains deliberately private.",
    evidence:
      "This site. Weekly updates are draft-only until manually reviewed.",
    status: "current",
    tags: ["Innovation journal", "Public-safe", "Weekly drafts"]
  },
  {
    id: "visual-identity-rollout",
    period: "7 June 2026",
    title: "HelioFabric visual identity prepared for first public rollout",
    summary:
      "A dedicated HelioFabric logo and app-style mark were added to the public innovation journal so the first external link has a clearer product identity and a more credible LinkedIn preview.",
    evidence:
      "Brand milestone: logo assets were prepared from the uploaded HelioFabric identity board and wired into the website before Cloudflare Pages upload.",
    status: "current",
    tags: ["Logo", "Brand identity", "Cloudflare-ready"]
  }
];
