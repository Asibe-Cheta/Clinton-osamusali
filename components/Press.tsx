import Link from "next/link";

const pressArticles = [
  {
    outlet: "Music-News.com",
    title:
      "Sali Clinton's My Darling: A masterclass in restrained and stubbornly authentic Afro-fusion",
    excerpt:
      "Northampton-based Afro-fusion artist Sali Clinton on My Darling, So Long, and building one of the more interesting independent voices in UK Afro-fusion.",
    href: "https://www.music-news.com/news/Underground/189091/Sali-Clinton-s-My-Darling-A-masterclass-in-restrained-and-stubbornly-authentic-Afro-fusion",
    year: "2024",
  },
  {
    outlet: "Nollywood Reporter",
    title: "Flaws Exposes the Cracks in a Marriage Pushed to the Brink",
    excerpt:
      "Coverage of Flaws (2023), the Prime Video psychological drama featuring original music by Sali Clinton.",
    href: "https://thenollywoodreporter.com/film/flaws-exposes-the-cracks-in-a-marriage-pushed-to-the-brink/",
    year: "2024",
  },
];

export default function Press() {
  return (
    <section id="press" className="py-28 px-6 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.3em] text-[#C4922A] mb-3">
            In the Press
          </p>
          <h2 className="font-[family-name:var(--font-bebas)] text-7xl lg:text-9xl text-white leading-none">
            PRESS
          </h2>
        </div>

        <div className="grid gap-4">
          {pressArticles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-[#1a1a1a] hover:border-[#C4922A]/40 bg-[#0a0a0a] p-6 lg:p-8 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <p className="font-[family-name:var(--font-inter)] text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C4922A]">
                  {article.outlet}
                </p>
                <span className="font-[family-name:var(--font-inter)] text-[10px] text-[#444] uppercase tracking-widest">
                  {article.year}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-bebas)] text-2xl lg:text-3xl text-white group-hover:text-[#C4922A] transition-colors leading-tight mb-3">
                {article.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-sm text-[#666] leading-relaxed max-w-3xl">
                {article.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 mt-5 font-[family-name:var(--font-inter)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#555] group-hover:text-[#C4922A] transition-colors">
                Read Article
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
