import Link from "next/link";

type Video = {
  title: string;
  description: string;
  youtubeId?: string;
  url?: string;
  platform?: "youtube" | "instagram";
};

const videos: Video[] = [
  {
    title: "So Long (Live)",
    description: "Live Performance",
    youtubeId: "5F-zTsh8d5Q",
  },
  {
    title: "Behind the Scenes",
    description: "Studio Session",
    url: "https://www.instagram.com/reel/DDDHMV0NYsW/?igsh=MjRrODVtdWN1b3Ro",
    platform: "instagram",
  },
  {
    title: "Lyric Video",
    description: "Lyric Video",
    youtubeId: "piMXDB4QRIg",
  },
];

function getVideoHref(video: Video) {
  if (video.youtubeId) return `https://youtube.com/watch?v=${video.youtubeId}`;
  return video.url ?? "#";
}

function VideoCard({
  video,
  featured = false,
}: {
  video: Video;
  featured?: boolean;
}) {
  const href = getVideoHref(video);
  const hasThumbnail = video.youtubeId
    ? `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`
    : null;
  const isInstagram = video.platform === "instagram";

  return (
    <div className="group relative overflow-hidden">
      <div
        className={`relative overflow-hidden bg-[#0e0e0e] ${featured ? "aspect-video" : "aspect-video"}`}
        style={
          hasThumbnail
            ? {
                backgroundImage: `url(${hasThumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : isInstagram
              ? {
                  backgroundImage:
                    "radial-gradient(ellipse at 30% 40%, rgba(225,48,108,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(196,146,42,0.1) 0%, transparent 60%)",
                }
              : {
                  backgroundImage:
                    "radial-gradient(ellipse at 30% 40%, rgba(196,146,42,0.1) 0%, transparent 60%)",
                }
        }
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:border-[#C4922A] group-hover:scale-110 transition-all duration-300">
            <svg
              viewBox="0 0 24 24"
              fill="white"
              className="w-5 h-5 ml-1 group-hover:fill-[#C4922A] transition-colors"
            >
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>

        {!hasThumbnail && !isInstagram && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-[family-name:var(--font-bebas)] text-[#1a1a1a] text-3xl tracking-widest select-none">
              VIDEO
            </span>
          </div>
        )}

        {isInstagram && (
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 px-3 py-1.5 backdrop-blur-sm">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#E1306C]">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
            <span className="font-[family-name:var(--font-inter)] text-[10px] font-semibold uppercase tracking-widest text-white">
              Instagram
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
      </div>

      <div className="mt-3">
        <p className="font-[family-name:var(--font-inter)] text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C4922A]">
          {video.description}
        </p>
        <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-white mt-1">
          {video.title}
        </h3>
      </div>

      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"
        aria-label={`Watch ${video.title}`}
      />
    </div>
  );
}

export default function Videos() {
  const [featured, ...rest] = videos;

  return (
    <section id="videos" className="py-28 px-6 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.3em] text-[#C4922A] mb-3">
            Watch
          </p>
          <h2 className="font-[family-name:var(--font-bebas)] text-7xl lg:text-9xl text-white leading-none">
            VIDEOS
          </h2>
        </div>

        <div className="mb-12">
          <VideoCard video={featured} featured />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {rest.map((video) => (
            <VideoCard key={video.title} video={video} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="https://youtube.com/@saliclinton?si=8oLOz1uA8lgilaED"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[#2a2a2a] text-[#888] px-8 py-3 font-[family-name:var(--font-inter)] text-xs font-bold uppercase tracking-[0.2em] hover:border-[#C4922A] hover:text-[#C4922A] transition-all"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#FF0000]">
              <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
            </svg>
            View All Videos on YouTube
          </Link>
        </div>
      </div>
    </section>
  );
}
