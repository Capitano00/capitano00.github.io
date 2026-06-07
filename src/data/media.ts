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
      "Crop or replace project names, coordinates, client details, private values, and any non-public parameters."
  },
  {
    id: "tool-controller-cropped",
    title: "Tool Controller workflow screenshot",
    status: "placeholder",
    intendedUse:
      "Show the high-level tool-run pattern: input preview, run history, and artefact discipline.",
    publicSafetyNote:
      "Do not show provider secrets, run artefact paths, live credentials, raw evidence filenames, or private project identifiers."
  },
  {
    id: "origin-reconstruction",
    title: "Power Automate origin reconstruction",
    status: "placeholder",
    intendedUse:
      "Use a labelled reconstruction if original pre-Git screenshots are unavailable or unsuitable for publication.",
    publicSafetyNote:
      "Label clearly as a reconstruction and avoid exposing any old private workflow, file path, or employer-specific process detail."
  }
];
