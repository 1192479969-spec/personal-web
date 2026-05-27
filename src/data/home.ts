export type HomeService = {
  title: string;
  description: string;
  icon: "vocal" | "sonata" | "ensemble";
};

export const heroContent = {
  eyebrow: "COLLABORATIVE PIANIST | Yuanxin Starr Chen",
  heading: "Elevating Performances through Collaborative Artistry",
  subheading:
    "Refined piano partnership for vocalists, instrumentalists, and chamber musicians preparing performances with confidence and nuance.",
  ctaLabel: "Book a Collaboration",
  ctaHref: "/contact",
};

export const aboutPreview = {
  eyebrow: "About",
  title: "Collaborative Artistry in Motion.",
  body:
    "As a collaborative pianist, I believe that true artistry flourishes in the space between musicians. My approach is rooted in being adaptable and collaborative, serving as a sensitive partner who is responsive to the nuances of every performance. With years of experience on stage, I don’t just accompany—I engage, fostering a shared musical dialogue that elevates the performance.",
  ctaLabel: "Read Full Biography",
  ctaHref: "/about",
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
