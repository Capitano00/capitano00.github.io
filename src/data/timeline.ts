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
    period: "Q4 2025-Q1 2026",
    title: "Origin in repeated renewable-workflow friction",
    summary:
      "The starting point was a recurring pattern: useful technical review work was slowed by repeated workbook preparation, evidence collection, and coordination across tools.",
    evidence:
      "Narrated context retained at quarterly granularity for the public site.",
    status: "approximate",
    tags: ["Workflow discovery", "Structured review", "Context"]
  },
  {
    id: "foundation",
    period: "Q2 2026",
    title: "Product-shaped private build",
    summary:
      "HelioFabric moved into a more durable private engineering workflow, with a Python backend, web frontend, structured project data, and a clearer source-of-truth model.",
    evidence:
      "Private repository and roadmap evidence summarised without exact public dates.",
    status: "repo-evidenced",
    tags: ["FastAPI", "Next.js", "Data model"]
  },
  {
    id: "workbook-governance",
    period: "Q2 2026",
    title: "Workbook governance and review states",
    summary:
      "Excel remained a useful review surface while the application kept canonical data, review candidates, snapshots, and patch updates deliberately separate.",
    evidence:
      "Workbook contract and review-flow evidence summarised at public level.",
    status: "repo-evidenced",
    tags: ["Workbench", "Excel contracts", "Review gates"]
  },
  {
    id: "tool-controller",
    period: "Q2 2026",
    title: "Tool Controller and artefact-backed workflows",
    summary:
      "The build added a controlled tool layer for selected expert workflows, using input previews, run records, generated artefacts, and explicit supervised acceptance.",
    evidence:
      "Tool-run and artefact patterns summarised without private run details.",
    status: "repo-evidenced",
    tags: ["Tool Controller", "Artefacts", "Human review"]
  },
  {
    id: "public-record",
    period: "Current",
    title: "Public portfolio record",
    summary:
      "The public site keeps the story selective: HelioFabric as the flagship case study, 3D-RAMS as a public demo, and future projects added only after review.",
    evidence:
      "This GitHub Pages site and reviewed public assets.",
    status: "current",
    tags: ["Reviewed visuals", "Synthetic surfaces", "Public record"]
  }
];
