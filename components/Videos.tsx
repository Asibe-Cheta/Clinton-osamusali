import Link from "next/link";

const videos = [
  {
    title: "Music Video",
    description: "Official Music Video",
    // Replace youtubeId with actual YouTube video ID (the part after ?v= in the URL)
    youtubeId: "", // e.g. "dQw4w9WgXcQ"
    thumbnail: "", // leave empty to use YouTube's thumbnail once ID is set
  },
  {
    title: "Live Performance",
    description: "Live Session",
    youtubeId: "",
    thumbnail: "",
  },
  {
    title: "Behind the Scenes",
    description: "Studio Session",
    youtubeId: "",
    thumbnail: "",
  },
  {
    title: "Lyric Video",
    description: "Lyric Video",
    youtubeId: "",
    thumbnail: "",
  },
];

function VideoCard({
  video,
  featured = false,
}: {
  video: (typeof videos)[0];
  featured?: boolean;
}) {
  const hasThumbnail = video.youtubeId
    ? `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`
    : null;

  return (
    <div className={`group relative overflow-hidden ${featured ? "" : ""}`}>
      {/* Thumbnail */}
      <div
        className={`relative overflow-hidden bg-[#0e0e0e] ${featured ? "aspect-video" : "aspect-video"}`}
        style={
          hasThumbnail
            ? {
                backgroundImage: `url(${hasThumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {
                backgroundImage:
                  "radial-gradient(ellipse at 30% 40%, rgba(196,146,42,0.1) 0%, transparent 60%)",
              }
        }
      >
        {/* Play button */}
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

        {!hasThumbnail && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-[family-name:var(--font-bebas)] text-[#1a1a1a] text-3xl tracking-widest select-none">
              VIDEO
            </span>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
      </div>

      {/* Caption */}
      <div className="mt-3">
        <p className="font-[family-name:var(--font-inter)] text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C4922A]">
          {video.description}
        </p>
        <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-white mt-1">
          {video.title}
        </h3>
      </div>

      {/* Clickable overlay */}
      {video.youtubeId && (
        <Link
          href={`https://youtube.com/watch?v=${video.youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
          aria-label={`Watch ${video.title}`}
        />
      )}
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

        {/* Featured video */}
        <div className="mb-12">
          <VideoCard video={featured} featured />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((video, i) => (
            <VideoCard key={i} video={video} />
          ))}
        </div>

        {/* YouTube channel CTA */}
        <div className="mt-12 text-center">
          <Link
            href="#" // Replace with actual YouTube channel URL
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
