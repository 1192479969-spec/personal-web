import { CheckCircle2 } from "lucide-react";

import { bookingGuideItems } from "@/data/contact";

export function BookingGuide() {
  return (
    <section
      aria-labelledby="booking-guide-heading"
      className="border border-gallery-line bg-gallery-mist p-8 md:p-10"
    >
      <p className="text-xs uppercase tracking-gallery text-accent">Inquiry Guide</p>
      <h2
        id="booking-guide-heading"
        className="mt-5 font-serif text-3xl leading-tight text-gallery-black md:text-4xl"
      >
        How to Book a Collaboration
      </h2>
      <p className="mt-5 leading-8 text-gallery-soft">
        To help confirm availability and planning, please include any relevant
        project details in your initial inquiry. If the full scope is still
        developing, I&apos;m happy to help estimate rehearsal and scheduling needs.
      </p>

      <ul className="mt-8 space-y-5">
        {bookingGuideItems.map((item) => (
          <li key={item.title} className="flex gap-4 border-t border-gallery-line pt-5">
            <CheckCircle2 className="mt-1 shrink-0 text-accent" size={20} aria-hidden="true" />
            <div>
              <h3 className="font-serif text-xl text-gallery-black">{item.title}</h3>
              {item.description.map((description) => (
                <p key={description} className="mt-2 leading-7 text-gallery-soft">
                  {description}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
