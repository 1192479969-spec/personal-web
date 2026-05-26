export type HomeService = {
  title: string;
  description: string;
  icon: "vocal" | "sonata" | "ensemble";
};

export const heroContent = {
  eyebrow: "Collaborative Pianist",
  heading: "Elevating Performances through Collaborative Artistry",
  subheading:
    "Refined piano partnership for vocalists, instrumentalists, and chamber musicians preparing performances with confidence and nuance.",
  ctaLabel: "Book a Collaboration",
  ctaHref: "/contact",
};

export const homeServices: HomeService[] = [
  {
    title: "Vocal Collaboration",
    description:
      "Sensitive, text-aware partnership for art song, opera, auditions, recitals, and studio preparation.",
    icon: "vocal",
  },
  {
    title: "Instrumental Sonatas",
    description:
      "Clear, responsive support for sonata repertoire, concerto reductions, competitions, and juries.",
    icon: "sonata",
  },
  {
    title: "Chamber Ensembles",
    description:
      "Thoughtful ensemble playing for intimate chamber programs, contemporary works, and special events.",
    icon: "ensemble",
  },
];
