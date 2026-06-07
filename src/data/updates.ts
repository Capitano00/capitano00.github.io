export type WeeklyUpdate = {
  week: string;
  title: string;
  summary: string;
  focus: string[];
  status: "draft" | "published";
};

export const weeklyUpdates: WeeklyUpdate[] = [
  {
    week: "Week of 2026-06-07",
    title: "Logo milestone and first public rollout preparation",
    summary:
      "The HelioFabric visual identity has been added to the public innovation journal ahead of the first Cloudflare Pages rollout. The update strengthens the public product signal while keeping the page focused on high-level progress and disclosure boundaries.",
    focus: [
      "Add the HelioFabric logo and app-style mark to the first viewport and sharing metadata.",
      "Record the identity work as a public-safe June 2026 milestone.",
      "Prepare the static build folder for manual Cloudflare Pages Direct Upload."
    ],
    status: "draft"
  },
  {
    week: "Week of 2026-06-01",
    title: "Starting the public innovation journal",
    summary:
      "The first public-safe site structure is being prepared. The current product narrative centres on governed renewable-project workflows, Design Optimisation, and responsible AI-assisted delivery practice.",
    focus: [
      "Shape the public narrative without exposing confidential project data.",
      "Use HelioFabric as the flagship case study before adding other projects.",
      "Prepare a draft-only weekly update workflow for manual review."
    ],
    status: "draft"
  }
];
