import { PlayCircle } from "lucide-react";

import { mediaVideos } from "@/data/media";

export function MediaGrid() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {mediaVideos.map((video) => (
        <article key={video.title} className="group">
          <div className="gallery-media-frame aspect-video border border-gallery-line bg-gallery-black">
            {video.embedUrl ? (
              <iframe
                src={video.embedUrl}
                title={video.title}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_top,rgba(138,111,61,0.24),transparent_36%),linear-gradient(135deg,#050505,#242424)] px-8 text-center text-gallery-white">
                <PlayCircle size={42} strokeWidth={1.4} aria-hidden="true" />
                <p className="mt-5 text-xs uppercase tracking-gallery text-accent-soft">
                  {video.provider} Embed
                </p>
                <p className="mt-3 font-serif text-2xl">Coming Soon</p>
              </div>
            )}
          </div>
          <div className="mt-6">
            <h2 className="font-serif text-2xl text-gallery-black">{video.title}</h2>
            <p className="mt-3 leading-7 text-gallery-soft">{video.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
