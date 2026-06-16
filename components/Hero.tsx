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
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Artist photo */}
      <Image
        src={heroImg}
        alt="Sali Clinton"
        fill
        className="object-cover object-[center_18%] lg:object-[center_12%]"
        priority
      />

      {/* Gradient — left panel on desktop so the portrait stays visible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,8,8,0.5) 0%, rgba(8,8,8,0.15) 35%, rgba(8,8,8,0.55) 80%, rgba(8,8,8,1) 100%)",
        }}
      />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.55) 38%, rgba(8,8,8,0.1) 62%, transparent 100%)",
        }}
      />

      {/* Decorative vertical line */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-[#C4922A]/40 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end lg:items-center">
        <div className="max-w-7xl mx-auto px-6 pb-16 lg:pb-0 w-full">
          <div className="lg:max-w-md xl:max-w-lg">
            <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.3em] text-[#C4922A] mb-4">
              Recording Artist · Songwriter · Bassist
            </p>
            <h1
              ref={titleRef}
              className="font-[family-name:var(--font-bebas)] text-[clamp(3rem,11vw,7rem)] lg:text-[clamp(3.5rem,5.5vw,5.5rem)] leading-none text-white"
            >
              SALI
              <br />
              <span className="text-[#C4922A]">CLINTON</span>
            </h1>
            <p className="font-[family-name:var(--font-inter)] text-sm text-[#888] mt-5 max-w-sm leading-relaxed">
              Afrobeats · R&B · Pop · Contemporary African
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
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
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080808] to-transparent lg:h-16" />

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
