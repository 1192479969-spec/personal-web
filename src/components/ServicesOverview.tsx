import { Mic2, Music2, Piano, type LucideIcon } from "lucide-react";

import { homeServices, type HomeService } from "@/data/home";

const serviceIcons: Record<HomeService["icon"], LucideIcon> = {
  vocal: Mic2,
  sonata: Piano,
  ensemble: Music2,
};

export function ServicesOverview() {
  return (
    <section className="bg-gallery-white px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-gallery text-accent">Services</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-gallery-black md:text-6xl">
            Partnership shaped around the performer.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gallery-soft">
            Focused collaborative piano services for artists seeking polished,
            responsive, and musically generous support.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {homeServices.map((service) => {
            const Icon = serviceIcons[service.icon];

            return (
              <article
                key={service.title}
                className="group border border-gallery-line bg-gallery-white p-8 transition duration-300 hover:-translate-y-1 hover:border-accent/70 hover:shadow-[0_24px_70px_rgba(5,5,5,0.08)]"
              >
                <div className="flex size-14 items-center justify-center rounded-full bg-accent-soft text-accent transition group-hover:bg-accent group-hover:text-gallery-white">
                  <Icon size={24} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <h3 className="mt-10 font-serif text-2xl text-gallery-black">
                  {service.title}
                </h3>
                <p className="mt-5 leading-7 text-gallery-soft">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
