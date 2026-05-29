import { RepertoireList } from "@/components/RepertoireList";

export function RepertoirePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-gallery text-accent">Repertoire</p>
        <h1 className="mt-8 font-serif text-4xl leading-tight text-gallery-black md:text-6xl">
          Representative repertoire.
        </h1>
        <p className="mt-6 text-lg leading-9 text-gallery-soft">
          
        </p>
      </div>

      <div className="mt-16">
        <RepertoireList />
      </div>
    </section>
  );
}
