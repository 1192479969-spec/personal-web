import repertoireData from "@/data/repertoire.json";

type RepertoirePiece = {
  category: string;
  composer: string;
  title: string;
  key?: string;
  catalog?: string;
  nickname?: string;
};

type RepertoireData = {
  _README: string;
  pieces: RepertoirePiece[];
};

const { pieces } = repertoireData as RepertoireData;

function formatWork(piece: RepertoirePiece) {
  const titleAndKey = [piece.title, piece.key?.trim()].filter(Boolean).join(" ");
  const catalogAndNickname = [
    piece.catalog?.trim(),
    piece.nickname?.trim() ? `"${piece.nickname.trim()}"` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return [titleAndKey, catalogAndNickname].filter(Boolean).join(", ");
}

export function RepertoireList() {
  const categories = Array.from(new Set(pieces.map((piece) => piece.category)));

  return (
    <div className="space-y-5">
      {categories.map((category, index) => {
        const categoryPieces = pieces.filter((piece) => piece.category === category);

        return (
          <details
            key={category}
            className="group border border-gallery-line bg-gallery-white"
            open={index === 0}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left md:px-8">
              <span>
                <span className="block text-xs uppercase tracking-gallery text-accent">
                  Category
                </span>
                <span className="mt-2 block font-serif text-2xl text-gallery-black">
                  {category}
                </span>
              </span>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gallery-line text-xl leading-none text-accent transition group-open:rotate-45">
                +
              </span>
            </summary>

            <ul className="border-t border-gallery-line px-6 py-4 md:px-8">
              {categoryPieces.map((piece) => (
                <li
                  key={`${piece.category}-${piece.composer}-${piece.title}`}
                  className="grid gap-2 border-b border-gallery-line py-5 last:border-b-0 md:grid-cols-[0.34fr_0.66fr] md:gap-8"
                >
                  <strong className="font-serif text-lg text-gallery-black">
                    {piece.composer}:
                  </strong>
                  <cite className="font-serif italic leading-8 text-gallery-soft">
                    {formatWork(piece)}
                  </cite>
                </li>
              ))}
            </ul>
          </details>
        );
      })}
    </div>
  );
}
