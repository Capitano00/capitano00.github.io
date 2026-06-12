export type MediaEvidence = {
  id: string;
  title: string;
  status: "placeholder" | "approved" | "needs-redaction";
  intendedUse: string;
  publicSafetyNote: string;
};

export const mediaEvidence: MediaEvidence[] = [
  {
    id: "workbench-cropped",
    title: "Workbench structure screenshot",
    status: "placeholder",
    intendedUse:
      "Show the selection-driven product surface with synthetic or heavily redacted project rows.",
    publicSafetyNote:
      "Crop or replace project labels, location indicators, private values, and any non-public parameters."
  },
  {
    id: "tool-controller-cropped",
    title: "Tool Controller workflow screenshot",
    status: "placeholder",
    intendedUse:
      "Show the high-level tool-run pattern: input preview, run history, and artefact discipline.",
    publicSafetyNote:
      "Use generic workflow surfaces, edited examples, or reviewed artefact labels only."
  },
  {
    id: "origin-reconstruction",
    title: "Power Automate origin reconstruction",
    status: "placeholder",
    intendedUse:
      "Use a labelled reconstruction if original pre-Git screenshots are unavailable or unsuitable for publication.",
    publicSafetyNote:
      "Label clearly as a reconstruction and avoid exposing old private workflow or organisation-specific process detail."
  }
];
