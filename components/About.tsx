export default function About() {
  return (
    <section id="about" className="py-28 px-6 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Image placeholder — replace src with actual artist photo */}
        <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 w-full overflow-hidden">
          <div
            className="w-full h-full bg-[#111] flex items-end p-6"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 30% 20%, rgba(196,146,42,0.15) 0%, transparent 60%)
              `,
            }}
          >
            {/* Swap this div for <Image src="/images/artist.jpg" ... /> when you have a photo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-[family-name:var(--font-bebas)] text-[#1e1e1e] text-6xl tracking-widest select-none">
                PHOTO
              </span>
            </div>
            <div className="relative z-10 border-l-2 border-[#C4922A] pl-4">
              <p className="font-[family-name:var(--font-bebas)] text-3xl text-white leading-tight">
                SALI CLINTON
              </p>
              <p className="font-[family-name:var(--font-inter)] text-xs text-[#C4922A] uppercase tracking-widest mt-1">
                Lagos · London
              </p>
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.3em] text-[#C4922A] mb-4">
            About
          </p>
          <h2 className="font-[family-name:var(--font-bebas)] text-6xl lg:text-8xl text-white leading-none mb-8">
            THE
            <br />
            ARTIST
          </h2>

          <div className="space-y-5 text-[#aaa] font-[family-name:var(--font-inter)] text-sm leading-7">
            <p>
              Sali Clinton is a Nigerian-born recording artist, songwriter, bassist, and creative
              collaborator based in the United Kingdom. His music blends influences from Afrobeats,
              R&B, Pop, Gospel, and contemporary African sounds, creating songs that are both
              emotionally resonant and culturally rich.
            </p>
            <p>
              Driven by a lifelong passion for music, Sali Clinton has developed a diverse body of
              work spanning original releases, live performances, and soundtrack contributions for
              film and visual media. His music has featured in internationally distributed
              productions and has reached audiences across multiple countries through digital
              streaming platforms.
            </p>
            <p>
              As both a performer and musician, he is committed to creating authentic music that
              connects people, tells meaningful stories, and bridges cultures through sound. His work
              continues to evolve through collaborations, live performance, and independent creative
              projects globally.
            </p>
          </div>

          <div className="mt-10 flex gap-10">
            <div>
              <p className="font-[family-name:var(--font-bebas)] text-4xl text-[#C4922A]">
                Afrobeats
              </p>
              <p className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-widest text-[#555] mt-1">
                Genre
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-bebas)] text-4xl text-[#C4922A]">
                UK · NG
              </p>
              <p className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-widest text-[#555] mt-1">
                Based
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-bebas)] text-4xl text-[#C4922A]">
                Global
              </p>
              <p className="font-[family-name:var(--font-inter)] text-[10px] uppercase tracking-widest text-[#555] mt-1">
                Reach
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
