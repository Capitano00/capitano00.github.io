export type WeeklyUpdate = {
  week: string;
  title: string;
  summary: string;
  focus: string[];
  status: "published";
};

export const weeklyUpdates: WeeklyUpdate[] = [
  {
    week: "Week of 2026-06-10",
    title: "PVsyst workflow bridge and ZIP Builder alpha",
    summary:
      "Development work focused on making PVsyst evidence collection more supervised, modular, and auditable. The workflow bridge records read-only desktop evidence and navigation captures, while a parallel ZIP Builder alpha explores safe project-file edits without writing canonical project facts.",
    focus: [
      "Extend PVsyst read-only evidence capture from project-form recognition into guarded navigation screenshots.",
      "Add a ZIP-based alpha workflow that previews selected variant assumptions and preserves near-shading content.",
      "Keep PVsyst outputs and edited ZIPs as review artefacts until manual validation confirms the approach."
    ],
    status: "published"
  },
  {
    week: "Week of 2026-06-07",
    title: "Logo milestone and first public identity pass",
    summary:
      "The HelioFabric visual identity was added to the personal site ahead of first public sharing. The update strengthens the product signal while keeping the page focused on high-level progress and professional credibility.",
    focus: [
      "Add the HelioFabric logo and app-style mark to the first viewport and sharing metadata.",
      "Record the identity work as a public-safe June 2026 milestone.",
      "Prepare the static build output for manual publishing after review."
    ],
    status: "published"
  },
  {
    week: "Week of 2026-06-01",
    title: "Starting the public portfolio record",
    summary:
      "The first public-safe site structure was prepared. The current product narrative centres on governed renewable-project workflows, Design Optimisation, and responsible AI-assisted delivery practice.",
    focus: [
      "Shape the public narrative without exposing confidential project data.",
      "Use HelioFabric as the flagship case study before adding other projects.",
      "Prepare a conservative update workflow for manual review before publication."
    ],
    status: "published"
  }
];
