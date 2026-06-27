export type MediaEvidence = {
  id: string;
  title: string;
  status: "approved-synthetic" | "approved-brand" | "needs-live-capture";
  image?: string;
  alt?: string;
  intendedUse: string;
  publicSafetyNote: string;
};

export const mediaEvidence: MediaEvidence[] = [
  {
    id: "brand-lockup",
    title: "HelioFabric identity",
    status: "approved-brand",
    image: "/brand/heliofabric-logo-lockup.png",
    alt: "HelioFabric logo lockup",
    intendedUse:
      "Establish that the flagship case study has a product identity without exposing the private product repository.",
    publicSafetyNote:
      "Use logo assets only from the reviewed public brand folder; do not publish source boards unless separately approved."
  },
  {
    id: "workbench-synthetic",
    title: "Workbench and workbook contract",
    status: "approved-synthetic",
    image: "/media/synthetic-workbench.png",
    alt: "Synthetic redacted HelioFabric Workbench surface showing project selection and workbook contract panels",
    intendedUse:
      "Show the selection-driven product surface with synthetic project rows, review states, and workbook contract messaging.",
    publicSafetyNote:
      "Synthetic asset. Replace with a real app screenshot only after sandbox data, labels, place details, and file references are verified clean."
  },
  {
    id: "tool-controller-synthetic",
    title: "Tool Controller workflow",
    status: "approved-synthetic",
    image: "/media/synthetic-tool-controller.png",
    alt: "Synthetic redacted Tool Controller workflow showing input preview, artefacts, and review gate",
    intendedUse:
      "Show the high-level tool-run pattern: input preview, run history, artefact discipline, and no silent writes.",
    publicSafetyNote:
      "Do not publish raw tool-run screenshots from provider runs. Use synthetic, sandbox, or manually redacted artefact labels only."
  },
  {
    id: "evidence-review-synthetic",
    title: "Evidence candidate review",
    status: "approved-synthetic",
    image: "/media/synthetic-evidence-review.png",
    alt: "Synthetic redacted evidence review surface showing candidate evidence and explicit promotion into canonical data",
    intendedUse:
      "Show the key governance pattern: AI or parser outputs produce review candidates rather than silently overwriting canonical data.",
    publicSafetyNote:
      "Do not expose actual values, file names, account details, place details, or source document labels."
  },
  {
    id: "real-app-capture-next",
    title: "Fresh real-app screenshots",
    status: "needs-live-capture",
    intendedUse:
      "Future replacement set for the synthetic visuals after HelioFabric is launched with sandbox data and captured from the real app.",
    publicSafetyNote:
      "Capture only from sandbox or redacted data. Check project names, deal codes, place details, file references, provider labels, and values before replacing synthetic assets."
  }
];
