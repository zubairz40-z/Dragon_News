import React from "react";

const team = [
  // ✅ demo team members — replace with your real data/images anytime
  {
    name: "Shirin Akter",
    role: "Editor-in-Chief",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    name: "Arif Rahman",
    role: "Senior Reporter",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Nusrat Jahan",
    role: "Photojournalist",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const About = () => {
  return (
    <main className="container mx-auto px-4 py-8 space-y-10">
      {/* ---------- Hero ---------- */}
      <section className="rounded-2xl border bg-white overflow-hidden">
        <div className="grid gap-6 md:grid-cols-2 items-center p-6 md:p-10">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500">
              About Dragon News
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold leading-tight text-slate-900">
              Trusted stories. Clear perspectives. Modern experience.
            </h1>
            <p className="mt-4 text-slate-600">
              We bring you fast, factual, and focused coverage across business, tech,
              sports, and culture — with a clean, distraction-free reading experience.
            </p>
          </div>

          {/* hero image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1516557070061-c3d1653fa646?q=80&w=1200&auto=format&fit=crop"
              alt="Newsroom"
              className="w-full h-60 md:h-80 rounded-xl object-cover"
              loading="lazy"
            />
            <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium shadow">
              Since 2020
            </span>
          </div>
        </div>
      </section>

      {/* ---------- Mission ---------- */}
      <section className="rounded-2xl border bg-white p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          Our mission
        </h2>
        <p className="mt-3 text-slate-600">
          Empower every reader to understand the world quickly and confidently.
          We verify sources, simplify complex topics, and present news with
          empathy and context — not noise.
        </p>
      </section>

      {/* ---------- Stats ---------- */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* simple stat card */}
        <div className="rounded-xl border bg-white p-5 text-center">
          <div className="text-3xl font-bold text-slate-900">2.1M+</div>
          <div className="mt-1 text-slate-500 text-sm">Monthly Readers</div>
        </div>
        <div className="rounded-xl border bg-white p-5 text-center">
          <div className="text-3xl font-bold text-slate-900">35+</div>
          <div className="mt-1 text-slate-500 text-sm">Categories</div>
        </div>
        <div className="rounded-xl border bg-white p-5 text-center">
          <div className="text-3xl font-bold text-slate-900">1200+</div>
          <div className="mt-1 text-slate-500 text-sm">Stories/Month</div>
        </div>
        <div className="rounded-xl border bg-white p-5 text-center">
          <div className="text-3xl font-bold text-slate-900">99.9%</div>
          <div className="mt-1 text-slate-500 text-sm">Uptime</div>
        </div>
      </section>

      {/* ---------- Team ---------- */}
      <section className="rounded-2xl border bg-white p-6 md:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">Meet the team</h2>
          <span className="text-sm text-slate-500">Dhaka • Remote-friendly</span>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((m) => (
            <article key={m.name} className="rounded-xl border bg-white p-5 text-center hover:shadow-sm transition">
              <img
                src={m.avatar}
                alt={m.name}
                className="mx-auto h-24 w-24 rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="mt-3 text-base font-semibold text-slate-900">{m.name}</h3>
              <p className="text-sm text-slate-500">{m.role}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Values ---------- */}
      <section className="grid md:grid-cols-3 gap-5">
        <div className="rounded-2xl border bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">Accuracy</h3>
          <p className="mt-2 text-slate-600 text-sm">
            Fact-checked reporting with clear sources and corrections when needed.
          </p>
        </div>
        <div className="rounded-2xl border bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">Clarity</h3>
          <p className="mt-2 text-slate-600 text-sm">
            Simple language, strong visuals, and summaries that respect your time.
          </p>
        </div>
        <div className="rounded-2xl border bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">Speed</h3>
          <p className="mt-2 text-slate-600 text-sm">
            Real-time updates and modern performance to reach you wherever you are.
          </p>
        </div>
      </section>

      {/* ---------- Contact / CTA ---------- */}
      <section className="rounded-2xl border bg-white p-6 md:p-8 text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          Want to collaborate or share a story?
        </h2>
        <p className="mt-2 text-slate-600">
          We welcome pitches, partnerships, and community voices.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:hello@dragonnews.example" className="btn btn-primary">
            Email the team
          </a>
          <a href="/career" className="btn btn-outline">
            Careers
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
