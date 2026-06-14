import Link from "next/link";
import Image from "next/image";

const streamingPlatforms = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/00En2dMv2w5Q2tx35SpJI8?si=9GvwaFf-QjaFFnWWFJ5QWg",
    color: "#1DB954",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.371-.721.49-1.101.25-3.021-1.85-6.82-2.27-11.3-1.24-.43.101-.86-.17-.96-.6-.101-.43.17-.86.6-.96 4.9-1.12 9.101-.64 12.491 1.431.371.24.49.721.25 1.12zm1.47-3.271c-.301.459-.92.601-1.381.3-3.459-2.129-8.73-2.75-12.811-1.5-.51.15-1.051-.14-1.201-.65-.15-.51.14-1.051.65-1.201 4.67-1.42 10.471-.73 14.431 1.71.459.3.601.92.3 1.381l.012-.04zm.13-3.4C15.43 8.67 9.15 8.46 5.28 9.67c-.601.18-1.24-.16-1.42-.76-.18-.6.16-1.24.76-1.42 4.461-1.36 11.88-1.1 16.56 1.72.54.32.72 1.02.4 1.561-.32.54-1.02.72-1.46.4l-.009-.011z" />
      </svg>
    ),
  },
  {
    name: "Apple Music",
    href: "https://music.apple.com/gb/artist/sali-clinton/1534100068",
    color: "#FA2D48",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.877-.726 10.496 10.496 0 0 0-1.564-.15c-.05-.003-.083-.01-.1-.01H5.916l-.017.01a10.496 10.496 0 0 0-1.562.15 5.026 5.026 0 0 0-1.879.725C1.31 1.633.563 2.634.246 3.943a9.23 9.23 0 0 0-.24 2.19c-.01.15-.01.301-.006.444V17.42c-.004.144-.004.294.006.445a9.23 9.23 0 0 0 .24 2.19c.317 1.31 1.062 2.31 2.18 3.043a5.022 5.022 0 0 0 1.877.726c.386.08.796.13 1.207.15h.357c.05.003.1.003.15.003h12.17c.05 0 .1 0 .15-.003h.356c.41-.02.821-.07 1.207-.15a5.026 5.026 0 0 0 1.879-.726c1.118-.733 1.863-1.733 2.18-3.043a9.23 9.23 0 0 0 .24-2.19c.01-.15.01-.301.006-.445V6.568c.004-.143.004-.293-.006-.444zm-8.983 9.553l-5.506-3.119V7.573l5.506 3.119v4.985z"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@saliclinton?si=8oLOz1uA8lgilaED",
    color: "#FF0000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    name: "Audiomack",
    href: "https://audiomack.com/saliclinton",
    color: "#FF6600",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3c.552 0 1 .448 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 14.586V6a1 1 0 0 1 1-1z"/>
      </svg>
    ),
  },
  {
    name: "Tidal",
    href: "https://tidal.com/artist/21570984/u",
    color: "#00FFFF",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12.012 3.992L8.008 7.996l4.004 4.004 4.004-4.004-4.004-4.004zM8.008 7.996L4.004 12l4.004 4.004L12.012 12 8.008 7.996zM16.016 7.996L12.012 12l4.004 4.004L20.02 12l-4.004-4.004zM8.008 12L4.004 16.004l4.004 4.004 4.004-4.004L8.008 12zM16.016 12l-4.004 4.004 4.004 4.004 4.004-4.004L16.016 12z"/>
      </svg>
    ),
  },
  {
    name: "Amazon Music",
    href: "https://music.amazon.co.uk/artists/B08KHC3YCT/sali-clinton?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB&ref=dm_sh_sVv7j8bhU8H5G3L7m0TYsKzD8",
    color: "#00A8E1",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.047-.872-1.234-1.275-1.814-2.107-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.095v-.41c0-.753.06-1.642-.384-2.294-.385-.578-1.124-.818-1.778-.818-1.209 0-2.286.62-2.548 1.907-.054.285-.261.566-.549.579l-3.061-.33c-.259-.057-.548-.266-.472-.66C5.865 1.807 8.905.25 12.002.25c1.582 0 3.647.421 4.894 1.622 1.586 1.48 1.434 3.458 1.434 5.609v5.074c0 1.527.634 2.198 1.228 3.023.21.293.254.643-.009.861l-2.405 2.356zM21.499 19.498c-2.096 1.603-5.12 2.499-7.737 2.499-3.663 0-6.963-1.354-9.461-3.604-.195-.175-.019-.415.215-.276 2.695 1.569 6.028 2.513 9.468 2.513 2.314 0 4.863-.479 7.208-1.47.351-.152.651.229.307.338z"/>
      </svg>
    ),
  },
  {
    name: "Soundbridge",
    href: "#", // Replace with actual Soundbridge link
    color: "transparent",
    icon: (
      <Image src="/soundbridge-icon.png" alt="Soundbridge" width={16} height={16} className="rounded-sm" />
    ),
  },
];

const releases = [
  {
    title: "Latest Release",
    type: "Single",
    // Replace placeholder with: description of the song
    description: "Stream the latest single from Sali Clinton",
    // Replace with actual artwork: /images/release-1.jpg
    coverGradient: "from-[#1a1204] to-[#080808]",
    accentFrom: "rgba(196,146,42,0.3)",
    featured: true,
  },
  {
    title: "Listen To More From Sali Clinton",
    type: "Single",
    description: "More music from Sali Clinton",
    coverGradient: "from-[#0a0a18] to-[#080808]",
    accentFrom: "rgba(80,60,180,0.2)",
    featured: false,
  },
  {
    title: "Collaboration",
    type: "Feature",
    description: "Featured artist appearance",
    coverGradient: "from-[#180a0a] to-[#080808]",
    accentFrom: "rgba(180,40,40,0.2)",
    featured: false,
  },
];

function StreamingLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-2 ${compact ? "" : "mt-6"}`}>
      {streamingPlatforms.map((platform) => (
        <Link
          key={platform.name}
          href={platform.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 border px-3 py-2 font-[family-name:var(--font-inter)] text-[10px] font-semibold uppercase tracking-[0.15em] transition-all hover:border-[#C4922A] hover:text-[#C4922A] ${
            compact
              ? "border-[#222] text-[#666]"
              : "border-[#2a2a2a] text-[#888]"
          }`}
          title={`Listen on ${platform.name}`}
        >
          <span style={{ color: platform.color }}>{platform.icon}</span>
          {platform.name}
        </Link>
      ))}
    </div>
  );
}

export default function Music() {
  const [featured, ...rest] = releases;

  return (
    <section id="music" className="py-28 px-6 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.3em] text-[#C4922A] mb-3">
              Discography
            </p>
            <h2 className="font-[family-name:var(--font-bebas)] text-7xl lg:text-9xl text-white leading-none">
              MUSIC
            </h2>
          </div>
        </div>

        {/* Featured release */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div
            className={`relative aspect-square bg-gradient-to-br ${featured.coverGradient} flex items-center justify-center overflow-hidden`}
            style={{
              backgroundImage: `radial-gradient(ellipse at 30% 30%, ${featured.accentFrom} 0%, transparent 60%)`,
              backgroundBlendMode: "normal",
            }}
          >
            {/* Replace with <Image src="/images/featured-cover.jpg" fill alt="..." className="object-cover" /> */}
            <span className="font-[family-name:var(--font-bebas)] text-[#1e1e1e] text-5xl tracking-widest select-none">
              COVER ART
            </span>
            <div className="absolute top-4 left-4 bg-[#C4922A] text-black px-3 py-1 font-[family-name:var(--font-inter)] text-[9px] font-bold uppercase tracking-widest">
              Latest
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-[family-name:var(--font-inter)] text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C4922A] mb-3">
              {featured.type}
            </span>
            <h3 className="font-[family-name:var(--font-bebas)] text-6xl lg:text-8xl text-white leading-none mb-4">
              {featured.title}
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-sm text-[#777] leading-relaxed max-w-md">
              {featured.description}
            </p>
            <StreamingLinks />
          </div>
        </div>

        {/* More releases */}
        <div>
          <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.3em] text-[#444] mb-6">
            More Music
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((release, i) => (
              <div key={i} className="group">
                <div
                  className={`relative aspect-square bg-gradient-to-br ${release.coverGradient} flex items-center justify-center overflow-hidden mb-4`}
                  style={{
                    backgroundImage: `radial-gradient(ellipse at 30% 30%, ${release.accentFrom} 0%, transparent 60%)`,
                  }}
                >
                  {/* Replace with actual cover art */}
                  <span className="font-[family-name:var(--font-bebas)] text-[#1a1a1a] text-2xl tracking-widest select-none">
                    COVER ART
                  </span>
                </div>
                <span className="font-[family-name:var(--font-inter)] text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C4922A]">
                  {release.type}
                </span>
                <h3 className="font-[family-name:var(--font-bebas)] text-3xl text-white mt-1 mb-3">
                  {release.title}
                </h3>
                <StreamingLinks compact />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
