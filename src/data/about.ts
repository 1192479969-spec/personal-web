export type AboutSection = {
  id: string;
  eyebrow: string;
  title: string;
  body: string[];
};

export const aboutIntro = {
  eyebrow: "About",
  heading: "A collaborative pianist devoted to clarity, trust, and musical dialogue.",
  description:
    "This page is structured for a polished professional biography while keeping the current copy easy to replace as your credentials, engagements, and studio details are finalized.",
};

export const aboutSections: AboutSection[] = [
  {
    id: "professional-background",
    eyebrow: "Professional Background",
    title: "Partnership for recitals, auditions, and performance preparation.",
    body: [
      "As a collaborative pianist, I support singers, instrumentalists, and ensembles through attentive preparation and responsive performance.",
      "My role is to listen deeply, shape phrase and color with the soloist, and create a grounded musical environment from first rehearsal to final bow.",
    ],
  },
  {
    id: "education",
    eyebrow: "Education",
    title: "Training shaped by classical repertoire and ensemble craft.",
    body: [
      "Use this section for degrees, teachers, coaching experience, language study, festivals, assistantships, and other formal training.",
      "The layout is intentionally typography-focused so your educational background can be expanded without redesigning the page.",
    ],
  },
  {
    id: "artistic-philosophy",
    eyebrow: "Artistic Philosophy",
    title: "Collaboration begins with generosity and precision.",
    body: [
      "I believe the pianist's artistry lives in the balance between leadership and flexibility: breathing with the performer, honoring the score, and shaping the room's emotional arc.",
      "Whether preparing a sonata, art song set, aria, or chamber program, the goal is the same: an elegant performance that feels connected, alive, and fully supported.",
    ],
  },
];
