import Link from "next/link";

// Replace with actual show dates when available
const shows: {
  date: string;
  city: string;
  country: string;
  venue: string;
  ticketUrl: string;
}[] = [
  // Example format — uncomment and fill in when shows are confirmed:
  // {
  //   date: "AUG 15 2026",
  //   city: "London",
  //   country: "UK",
  //   venue: "Venue Name",
  //   ticketUrl: "https://ticketmaster.com/...",
  // },
];

export default function Shows() {
  return (
    <section id="shows" className="py-28 px-6 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.3em] text-[#C4922A] mb-3">
            Live
          </p>
          <h2 className="font-[family-name:var(--font-bebas)] text-7xl lg:text-9xl text-white leading-none">
            SHOWS
          </h2>
        </div>

        {shows.length > 0 ? (
          <div className="divide-y divide-[#1a1a1a]">
            {shows.map((show, i) => (
              <div
                key={i}
                className="py-6 grid grid-cols-[1fr_1fr_1fr_auto] gap-4 items-center group hover:bg-[#0e0e0e] transition-colors px-4 -mx-4"
              >
                <span className="font-[family-name:var(--font-bebas)] text-xl lg:text-2xl text-white tracking-wide">
                  {show.date}
                </span>
                <span className="font-[family-name:var(--font-inter)] text-sm text-[#aaa] uppercase tracking-widest">
                  {show.city}, {show.country}
                </span>
                <span className="font-[family-name:var(--font-inter)] text-sm text-[#666] uppercase tracking-widest hidden md:block">
                  {show.venue}
                </span>
                <Link
                  href={show.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#2a2a2a] text-[#888] px-5 py-2 font-[family-name:var(--font-inter)] text-[10px] font-bold uppercase tracking-[0.2em] hover:border-[#C4922A] hover:text-[#C4922A] transition-all whitespace-nowrap text-right"
                >
                  Buy Tickets
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-[#1a1a1a]">
            <div className="w-12 h-12 border border-[#C4922A]/30 flex items-center justify-center mx-auto mb-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-5 h-5 text-[#C4922A]/50"
              >
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="font-[family-name:var(--font-bebas)] text-4xl text-[#333] mb-3">
              NO SHOWS ANNOUNCED
            </p>
            <p className="font-[family-name:var(--font-inter)] text-sm text-[#444] tracking-wide">
              Follow on social media for the latest show announcements
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
