export type WeeklyUpdate = {
  week: string;
  title: string;
  summary: string;
  focus: string[];
  status: "published";
};

export const weeklyUpdates: WeeklyUpdate[] = [
  {
    week: "Q2 2026",
    title: "Public portfolio structure",
    summary:
      "The public site is shaped around selected, reviewable evidence: HelioFabric as the flagship case study and 3D-RAMS as a public local-first agent demo.",
    focus: [
      "Keep the homepage compact and public-safe.",
      "Use public-safe project summaries instead of private delivery notes.",
      "Publish only reviewed assets, synthetic screenshots, and neutral profile links."
    ],
    status: "published"
  },
  {
    week: "Q2 2026",
    title: "HelioFabric case-study evidence",
    summary:
      "The flagship story now focuses on the durable product pattern: governed data, workbook contracts, specialist-tool artefacts, and explicit review gates.",
    focus: [
      "Keep exact timeline detail out of the public page.",
      "Collapse implementation evidence by default.",
      "Describe automation as supervised delivery support rather than autonomous judgement."
    ],
    status: "published"
  }
];
