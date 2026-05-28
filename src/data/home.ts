export type HomeService = {
  title: string;
  description: string;
  icon: "vocal" | "sonata" | "ensemble";
};

export const heroContent = {
  eyebrow: "COLLABORATIVE PIANIST | Yuanxin Starr Chen",
  heading: "Elevating Performances through Collaborative Artistry",
  subheading:
    "Collaborative Pianist based in SF Bay Area. Dedicated partnership for vocalists, instrumentalists, and choirs. Available for diverse musical settings—including rehearsals, music salons, recitals, and recordings, as well as last-minute performance coverage."
,
  ctaLabel: "Book a Collaboration",
  ctaHref: "/contact",
};

export const aboutPreview = {
  eyebrow: "About",
  title: "The Road to Musical Partnership.",
  body:
    "A collaborative pianist active in the Bay Area, I enjoy working with musicians across a wide range of repertoire and performance settings. From last-minute rehearsals to formal performances, my goal is to provide a high-quality piano collaboration while making the rehearsal and performance process supportive, enjoyable, and musically rewarding. ",
  ctaLabel: "Read Full Biography",
  ctaHref: "/about",
};

export const homeServices: HomeService[] = [
  {
    title: "Performances & Recordings",
    description:
      "Collaborative support for recitals, chamber programs, auditions, and studio sessions (Local & travel engagements).",
    icon: "vocal",
  },
  {
    title: "Rehearsal Support",
    description:
      "Dedicated preparation for vocalists, instrumentalists, and ensembles across the Bay Area.",
    icon: "sonata",
  },
  {
    title: "Piano Lessons",
    description:
      "In-home instruction for all levels, from beginner to advanced. Serving Menlo Park, Atherton, and Redwood City.",
    icon: "ensemble",
  },
];
