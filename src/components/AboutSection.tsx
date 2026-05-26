import type { AboutSection as AboutSectionContent } from "@/data/about";

type AboutSectionProps = {
  section: AboutSectionContent;
};

export function AboutSection({ section }: AboutSectionProps) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="border-t border-gallery-line py-12 md:grid md:grid-cols-[0.35fr_0.65fr] md:gap-12 md:py-16"
    >
      <p className="text-xs uppercase tracking-gallery text-accent">{section.eyebrow}</p>
      <div className="mt-6 md:mt-0">
        <h2
          id={`${section.id}-heading`}
          className="font-serif text-3xl leading-tight text-gallery-black md:text-4xl"
        >
          {section.title}
        </h2>
        <div className="mt-7 space-y-5 text-lg leading-9 text-gallery-soft">
          {section.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
