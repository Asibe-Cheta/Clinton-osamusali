import Image from "next/image";
import photo1 from "@/app/assets/pics/image5.jpeg";
import photo2 from "@/app/assets/pics/image0.jpeg";
import photo3 from "@/app/assets/pics/3d0de24251b05712d4442a7f99f57e3a.jpg";

export default function PhotoPreview() {
  const handleGallery = () => {
    document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-28 px-6 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.3em] text-[#C4922A] mb-3">
              Visual
            </p>
            <h2 className="font-[family-name:var(--font-bebas)] text-7xl lg:text-9xl text-white leading-none">
              GALLERY
            </h2>
          </div>
          <button
            onClick={handleGallery}
            className="hidden sm:inline-flex items-center gap-3 border border-[#2a2a2a] text-[#888] px-8 py-3 font-[family-name:var(--font-inter)] text-xs font-bold uppercase tracking-[0.2em] hover:border-[#C4922A] hover:text-[#C4922A] transition-all mb-2"
          >
            View All
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Three-photo editorial layout */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {/* Large left photo */}
          <div className="col-span-2 lg:col-span-1 row-span-2 relative aspect-[3/4] overflow-hidden group">
            <Image
              src={photo1}
              alt="Sali Clinton"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
          </div>

          {/* Top right */}
          <div className="relative aspect-square lg:aspect-[4/3] overflow-hidden group">
            <Image
              src={photo2}
              alt="Sali Clinton live"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
          </div>

          {/* Bottom right */}
          <div className="relative aspect-square lg:aspect-[4/3] overflow-hidden group">
            <Image
              src={photo3}
              alt="Sali Clinton studio"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
          </div>
        </div>

        <div className="mt-8 sm:hidden">
          <button
            onClick={handleGallery}
            className="inline-flex items-center gap-3 border border-[#2a2a2a] text-[#888] px-8 py-3 font-[family-name:var(--font-inter)] text-xs font-bold uppercase tracking-[0.2em] hover:border-[#C4922A] hover:text-[#C4922A] transition-all"
          >
            View All Photos
          </button>
        </div>
      </div>
    </section>
  );
}
