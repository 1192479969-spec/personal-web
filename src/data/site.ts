export type NavigationLink = {
  label: string;
  href: string;
};

export type MediaItem = {
  title: string;
  description: string;
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
};

export const siteIdentity = {
  name: "Collaborative Pianist",
  business: "SMLLC",
  tagline: "Elegant piano partnership for recitals, auditions, and chamber music.",
};

export const navigationLinks: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Repertoire", href: "/repertoire" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export const mediaItems: MediaItem[] = [
  {
    title: "Performance video",
    description: "Add a featured recital, audition, or chamber performance embed.",
  },
  {
    title: "Audio sample",
    description: "Add a studio or live recording that reflects your collaborative style.",
  },
  {
    title: "Press image",
    description: "Add a professional photo or concert still for visual storytelling.",
  },
];

export const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    label: "Location",
    value: "Available for local and travel engagements",
    href: "/contact",
  },
];
