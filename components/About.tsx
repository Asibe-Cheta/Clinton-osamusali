import Image from "next/image";
import artistImg from "@/app/assets/pics/image10.jpeg";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Artist photo */}
        <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 w-full overflow-hidden">
          <Image
            src={artistImg}
            alt="Sali Clinton"
            fill
            className="object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#080808]/80 to-transparent">
            <div className="border-l-2 border-[#C4922A] pl-4">
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
