"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import heroImg from "@/app/assets/pics/image2.jpeg";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    setTimeout(() => {
      el.style.transition = "opacity 1s ease, transform 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      {/* Artist photo */}
      <Image
        src={heroImg}
        alt="Sali Clinton"
        fill
        className="object-cover object-top"
        priority
      />

      {/* Dark overlay — heavier at top and bottom, lighter in middle to let the photo breathe */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,8,8,0.55) 0%, rgba(8,8,8,0.2) 40%, rgba(8,8,8,0.7) 75%, rgba(8,8,8,1) 100%)",
        }}
      />

      {/* Decorative vertical line */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-[#C4922A]/40 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
        <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.3em] text-[#C4922A] mb-4">
          Recording Artist · Songwriter · Bassist
        </p>
        <h1
          ref={titleRef}
          className="font-[family-name:var(--font-bebas)] text-[clamp(4rem,14vw,12rem)] leading-none text-white"
        >
          SALI
          <br />
          <span className="text-[#C4922A]">CLINTON</span>
        </h1>
        <p className="font-[family-name:var(--font-inter)] text-sm text-[#888] mt-6 max-w-sm leading-relaxed">
          Afrobeats · R&B · Pop · Contemporary African
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="#music"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#music")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-[#C4922A] text-black px-8 py-3 font-[family-name:var(--font-inter)] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#E5B045] transition-colors"
          >
            Listen Now
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3 font-[family-name:var(--font-inter)] text-xs font-bold uppercase tracking-[0.2em] hover:border-white hover:bg-white/5 transition-all"
          >
            About
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-8 hidden lg:flex flex-col items-center gap-2 opacity-40">
        <div className="w-[1px] h-12 bg-white animate-pulse" />
        <span className="font-[family-name:var(--font-inter)] text-[9px] uppercase tracking-[0.3em] text-white rotate-90 mt-4">
          Scroll
        </span>
      </div>
    </section>
  );
}
