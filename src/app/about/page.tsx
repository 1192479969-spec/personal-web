import { AboutSection } from "@/components/AboutSection";
import { aboutIntro, aboutSections } from "@/data/about";

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="text-xs uppercase tracking-gallery text-accent">
          {aboutIntro.eyebrow}
        </p>
        <div className="mt-8 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <h1 className="font-serif text-4xl leading-tight text-gallery-black md:text-6xl">
            {aboutIntro.heading}
          </h1>
          <p className="text-lg leading-9 text-gallery-soft">{aboutIntro.description}</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-10 lg:pb-28">
        {aboutSections.map((section) => (
          <AboutSection key={section.id} section={section} />
        ))}
      </div>
    </>
  );
}
