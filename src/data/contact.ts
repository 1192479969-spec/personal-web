export type ContactMethod = {
  label: string;
  value: string;
  href: string;
};

export type BookingGuideItem = {
  title: string;
  description: string;
};

export const professionalEmail = "starrchenpiano@gmail.com";

export const contactIntro = {
  eyebrow: "Contact",
  heading: "Start a focused conversation about your next collaboration.",
  description:
    "Share the details that matter most, and I will respond with availability, next steps, and fee guidance.",
};

export const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: professionalEmail,
    href: `mailto:${professionalEmail}`,
  },
  {
    label: "Location",
    value: "Available for local and travel engagements",
    href: "/contact",
  },
];

export const bookingGuideItems: BookingGuideItem[] = [
  {
    title: "Date and Time",
    description: "Include the performance date, rehearsal dates, call times, and time zone.",
  },
  {
    title: "Venue / Location",
    description: "Share the venue name, city, address, and whether travel is required.",
  },
  {
    title: "Repertoire / Program details",
    description: "List works, composers, movements, cuts, keys, and available scores.",
  },
  {
    title: "Budget / Fee expectations",
    description: "Include your budget range, payment timeline, and any institutional fee rules.",
  },
];

export function createMailtoHref() {
  const subject = "Collaboration Inquiry";
  const body = [
    "Hello,",
    "",
    "I would like to inquire about a collaboration.",
    "",
    "Date and Time:",
    "Venue / Location:",
    "Repertoire / Program details:",
    "Budget / Fee expectations:",
    "",
    "Thank you.",
  ].join("\n");

  return `mailto:${professionalEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
