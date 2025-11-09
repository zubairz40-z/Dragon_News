import React from "react";
import { Link } from "react-router"; // for internal links

// ✅ demo jobs — replace with your real data or fetch from an API/loader
const JOBS = [
  {
    id: "jr-fe-01",
    title: "Junior Frontend Developer",
    location: "Dhaka, Bangladesh (Hybrid)",
    type: "Full-time",
    team: "Engineering",
    tags: ["React", "Tailwind", "TypeScript"],
    salary: "BDT 55k–80k",
    posted: "2025-10-15",
  },
  {
    id: "sr-fe-02",
    title: "Senior Frontend Engineer",
    location: "Remote (GMT+6 preferred)",
    type: "Full-time",
    team: "Engineering",
    tags: ["React", "Performance", "Accessibility"],
    salary: "BDT 150k–220k",
    posted: "2025-10-02",
  },
  {
    id: "ed-01",
    title: "News Editor",
    location: "Dhaka HQ",
    type: "Full-time",
    team: "Editorial",
    tags: ["Editing", "AP Style", "Breaking News"],
    salary: "BDT 90k–130k",
    posted: "2025-09-28",
  },
];

const Career = () => {
  return (
    <main className="container mx-auto px-4 py-8 space-y-10">
      {/* ---------- Hero ---------- */}
      <section className="rounded-2xl border bg-white overflow-hidden">
        <div className="grid gap-6 md:grid-cols-2 items-center p-6 md:p-10">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Careers at Dragon News
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold leading-tight text-slate-900">
              Build the future of modern, trustworthy news.
            </h1>
            <p className="mt-4 text-slate-600">
              Join our team of reporters, editors, and engineers delivering fast,
              factual stories to millions of readers.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#open-roles" className="btn btn-primary">See open roles</a>
              <Link to="/about" className="btn btn-outline">About us</Link>
            </div>
          </div>

          {/* hero image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop"
              alt="Team at work"
              className="w-full h-60 md:h-80 rounded-xl object-cover"
              loading="lazy"
            />
            <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium shadow">
              We’re hiring
            </span>
          </div>
        </div>
      </section>

      {/* ---------- Why join / Perks ---------- */}
      <section className="grid md:grid-cols-3 gap-5">
        <div className="rounded-2xl border bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">Impact</h3>
          <p className="mt-2 text-slate-600 text-sm">
            Your work informs millions and shapes public understanding every day.
          </p>
        </div>
        <div className="rounded-2xl border bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">Growth</h3>
          <p className="mt-2 text-slate-600 text-sm">
            Learning budget, mentorship, and clear career paths across teams.
          </p>
        </div>
        <div className="rounded-2xl border bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">Flexibility</h3>
          <p className="mt-2 text-slate-600 text-sm">
            Hybrid and remote-friendly culture with generous leave policies.
          </p>
        </div>
      </section>

      {/* ---------- Open Roles ---------- */}
      <section id="open-roles" className="space-y-4">
        <div className="flex items-end justify-between">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            Open roles
          </h2>
          <span className="text-sm text-slate-500">
            {JOBS.length} positions
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {JOBS.map((job) => (
            <article
              key={job.id}
              className="rounded-2xl border bg-white p-5 hover:shadow-sm transition"
            >
              {/* title + quick info */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {job.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {job.team} • {job.type} • {job.location}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-slate-900">
                    {job.salary}
                  </div>
                  <div className="text-xs text-slate-500">
                    Posted {new Date(job.posted).toLocaleDateString()}
                  </div>
                </div>
              </div>

              {/* tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-700"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* actions */}
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  to={`/career/${job.id}`}                // ⬅️ if you plan a details page
                  className="btn btn-sm btn-outline"
                >
                  View details
                </Link>
                <a
                  href={`mailto:careers@dragonnews.example?subject=Application: ${encodeURIComponent(
                    job.title
                  )}`}
                  className="btn btn-sm btn-primary"
                >
                  Apply now
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- How to apply ---------- */}
      <section className="rounded-2xl border bg-white p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          How to apply
        </h2>
        <ol className="mt-4 space-y-3 text-slate-700 text-sm list-decimal list-inside">
          <li>Choose a role that matches your skills and interests.</li>
          <li>Send your resume, portfolio/links, and a short note to our team.</li>
          <li>We’ll review and get back to you within 7 business days.</li>
        </ol>
        <div className="mt-5">
          <a href="mailto:careers@dragonnews.example" className="btn btn-outline">
            Email careers@dragonnews.example
          </a>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="rounded-2xl border bg-white p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          Frequently asked questions
        </h2>

        <div className="mt-4 space-y-4">
          <details className="rounded-xl border p-4">
            <summary className="cursor-pointer font-medium text-slate-900">
              Do you support remote work?
            </summary>
            <p className="mt-2 text-sm text-slate-600">
              Yes. Many roles are fully remote, with core hours aligned to GMT+6.
            </p>
          </details>

          <details className="rounded-xl border p-4">
            <summary className="cursor-pointer font-medium text-slate-900">
              What does your interview process look like?
            </summary>
            <p className="mt-2 text-sm text-slate-600">
              Typically: intro call → skills chat/task → team interview → offer.
            </p>
          </details>

          <details className="rounded-xl border p-4">
            <summary className="cursor-pointer font-medium text-slate-900">
              Do you offer internships?
            </summary>
            <p className="mt-2 text-sm text-slate-600">
              We run seasonal internships in Editorial and Engineering—watch this page.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
};

export default Career;
