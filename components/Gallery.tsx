"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import img0 from "@/app/assets/pics/image0.jpeg";
import img0b from "@/app/assets/pics/image0-2.jpeg";
import img1 from "@/app/assets/pics/image1.jpeg";
import img1b from "@/app/assets/pics/image1-2.jpeg";
import img2 from "@/app/assets/pics/image2.jpeg";
import img4 from "@/app/assets/pics/image4.jpeg";
import img5 from "@/app/assets/pics/image5.jpeg";
import img5b from "@/app/assets/pics/image5-2.jpeg";
import img7 from "@/app/assets/pics/image7.jpeg";
import img7b from "@/app/assets/pics/image7-2.jpeg";
import img8 from "@/app/assets/pics/image8.jpeg";
import img8b from "@/app/assets/pics/image8-2.jpeg";
import img9 from "@/app/assets/pics/image9.jpeg";
import img9b from "@/app/assets/pics/image9-2.jpeg";
import img10 from "@/app/assets/pics/image10.jpeg";
import img11 from "@/app/assets/pics/image11.jpeg";
import imgA from "@/app/assets/pics/3d0de24251b05712d4442a7f99f57e3a.jpg";
import imgB from "@/app/assets/pics/b6b19138c061003aec4e8d2f0c462a9b.jpg";
import imgC from "@/app/assets/pics/fa74e0ec08e96925298cee5da027c71a.jpg";

const photos = [
  { src: img5, alt: "Editorial shoot" },
  { src: img2, alt: "Studio portrait" },
  { src: imgA, alt: "Studio session" },
  { src: img0, alt: "Live performance" },
  { src: img10, alt: "Artist portrait" },
  { src: img9, alt: "Formal portrait" },
  { src: img1, alt: "Live performance" },
  { src: img4, alt: "Artist portrait" },
  { src: imgC, alt: "Studio shoot" },
  { src: img5b, alt: "Editorial" },
  { src: img11, alt: "Studio session" },
  { src: img8, alt: "Artist photo" },
  { src: img0b, alt: "Performance" },
  { src: img1b, alt: "Performance" },
  { src: img7, alt: "Artist photo" },
  { src: img9b, alt: "Portrait" },
  { src: img7b, alt: "Artist photo" },
  { src: img8b, alt: "Artist photo" },
  { src: imgB, alt: "Studio session" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);
  const prev = useCallback(
    () => setSelected((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null)),
    []
  );
  const next = useCallback(
    () => setSelected((i) => (i !== null ? (i + 1) % photos.length : null)),
    []
  );

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected, close, prev, next]);

  return (
    <>
      <section id="gallery" className="py-28 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.3em] text-[#C4922A] mb-3">
              Photos
            </p>
            <h2 className="font-[family-name:var(--font-bebas)] text-7xl lg:text-9xl text-white leading-none">
              ALL PHOTOS
            </h2>
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 lg:gap-4">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="break-inside-avoid mb-3 lg:mb-4 group relative cursor-pointer overflow-hidden"
                onClick={() => setSelected(i)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 border border-white/60 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-4 h-4">
                      <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={close}
        >
          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[selected].src}
              alt={photos[selected].alt}
              className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain"
            />
          </div>

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-6 right-6 w-10 h-10 border border-white/30 flex items-center justify-center text-white hover:border-[#C4922A] hover:text-[#C4922A] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-white/30 flex items-center justify-center text-white hover:border-[#C4922A] hover:text-[#C4922A] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
              <path d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-white/30 flex items-center justify-center text-white hover:border-[#C4922A] hover:text-[#C4922A] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
              <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-[family-name:var(--font-inter)] text-[11px] text-white/40 uppercase tracking-widest">
            {selected + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
