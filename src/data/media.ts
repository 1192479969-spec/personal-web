export type MediaVideo = {
  title: string;
  description: string;
  provider: "YouTube" | "Vimeo";
  embedUrl: string;
};

export const mediaIntro = {
  eyebrow: "Media",
  heading: "A focused gallery for performance video.",
  description:
    "This page is prepared for recital, audition, chamber, and studio recordings. Add YouTube or Vimeo embed URLs when final media is ready.",
};

export const mediaVideos: MediaVideo[] = [
  {
    title: "Recital Performance",
    description: "Feature a live recital collaboration or studio performance.",
    provider: "YouTube",
    embedUrl: "",
  },
  {
    title: "Vocal Collaboration",
    description: "Showcase art song, aria, or musical theatre partnership.",
    provider: "Vimeo",
    embedUrl: "",
  },
  {
    title: "Chamber Ensemble",
    description: "Highlight chamber music or instrumental collaboration.",
    provider: "YouTube",
    embedUrl: "",
  },
];
