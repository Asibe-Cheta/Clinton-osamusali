"use client";

import Link from "next/link";
import { useState } from "react";

const socialLinks = [
  {
    name: "Instagram",
    href: "#", // Replace with actual Instagram URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: "X / Twitter",
    href: "#", // Replace with actual X URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#", // Replace with actual YouTube URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    name: "Spotify",
    href: "#", // Replace with actual Spotify URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.371-.721.49-1.101.25-3.021-1.85-6.82-2.27-11.3-1.24-.43.101-.86-.17-.96-.6-.101-.43.17-.86.6-.96 4.9-1.12 9.101-.64 12.491 1.431.371.24.49.721.25 1.12zm1.47-3.271c-.301.459-.92.601-1.381.3-3.459-2.129-8.73-2.75-12.811-1.5-.51.15-1.051-.14-1.201-.65-.15-.51.14-1.051.65-1.201 4.67-1.42 10.471-.73 14.431 1.71.459.3.601.92.3 1.381l.012-.04zm.13-3.4C15.43 8.67 9.15 8.46 5.28 9.67c-.601.18-1.24-.16-1.42-.76-.18-.6.16-1.24.76-1.42 4.461-1.36 11.88-1.1 16.56 1.72.54.32.72 1.02.4 1.561-.32.54-1.02.72-1.46.4l-.009-.011z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#", // Replace with actual TikTok URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.76a8.27 8.27 0 0 0 4.83 1.54V6.84a4.85 4.85 0 0 1-1.07-.15z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#", // Replace with actual Facebook URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Wire up to your mailing list provider (Mailchimp, ConvertKit, etc.)
      console.log("Subscribe:", email);
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-[#1a1a1a] pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h2 className="font-[family-name:var(--font-bebas)] text-6xl lg:text-8xl text-white leading-none mb-4">
              SALI
              <br />
              <span className="text-[#C4922A]">CLINTON</span>
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-sm text-[#555] max-w-xs leading-relaxed">
              Recording artist, songwriter, and bassist bridging cultures through sound.
              <br />
              Lagos · London
            </p>

            {/* Social links */}
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-[#444] hover:text-[#C4922A] transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Email signup */}
          <div className="flex flex-col justify-center">
            <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.3em] text-[#C4922A] mb-4">
              Stay Connected
            </p>
            <h3 className="font-[family-name:var(--font-bebas)] text-4xl text-white mb-2">
              JOIN THE MAILING LIST
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-sm text-[#555] mb-6">
              Be the first to know about new music, videos, and shows.
            </p>

            {submitted ? (
              <div className="border border-[#C4922A]/30 bg-[#C4922A]/5 px-6 py-4">
                <p className="font-[family-name:var(--font-inter)] text-sm text-[#C4922A]">
                  Thanks for subscribing.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="EMAIL ADDRESS"
                  required
                  className="flex-1 bg-[#0e0e0e] border border-[#2a2a2a] border-r-0 px-4 py-3 font-[family-name:var(--font-inter)] text-xs text-white placeholder-[#444] uppercase tracking-widest outline-none focus:border-[#C4922A]/50 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#C4922A] text-black px-6 py-3 font-[family-name:var(--font-inter)] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#E5B045] transition-colors whitespace-nowrap"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-none border-t border-[#1a1a1a] mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-inter)] text-[11px] text-[#333] uppercase tracking-widest">
            © {new Date().getFullYear()} Sali Clinton. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#" // Replace with privacy policy page
              className="font-[family-name:var(--font-inter)] text-[11px] text-[#333] uppercase tracking-widest hover:text-[#666] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="mailto:contact@clintonosamusali.com" // Replace with actual contact email
              className="font-[family-name:var(--font-inter)] text-[11px] text-[#333] uppercase tracking-widest hover:text-[#C4922A] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
