import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6"; // npm i react-icons

const FindUs = () => {
  return (
    <aside className="w-full space-y-5">
      {/* ---------- Find Us On ---------- */}
      <section>
        <h3 className="text-base font-semibold mb-3">Find Us On</h3>

        {/* Social list as soft cards */}
        <div className="space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg border bg-white px-4 py-3 hover:bg-slate-50"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
              <FaFacebookF size={16} />
            </span>
            <span className="text-sm font-medium text-slate-800">Facebook</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 rounded-lg border bg-white px-4 py-3 hover:bg-slate-50"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white">
              <FaTwitter size={16} />
            </span>
            <span className="text-sm font-medium text-slate-800">Twitter</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 rounded-lg border bg-white px-4 py-3 hover:bg-slate-50"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-white">
              <FaInstagram size={16} />
            </span>
            <span className="text-sm font-medium text-slate-800">Instagram</span>
          </a>
        </div>
      </section>

      {/* ---------- Q-Zone ---------- */}
      <section className="rounded-xl bg-slate-100 p-4">
        <h3 className="text-base font-semibold mb-3">Q-Zone</h3>

        <div className="space-y-5">
          {/* Stacked photo card */}
          <div className="relative">
            <div className="absolute left-2 top-2 h-full w-full rotate-[-2deg] rounded-xl bg-white shadow" />
            <div className="relative rounded-xl bg-white p-3 shadow">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIFYHJuDoUYfluNRLmVY4HLq71pOWHR7TwmxwGLRVyV_SiJ4ujjTRjOi7dwugmM3liC8s&usqp=CAU"
                alt="Swimming"
                className="h-44 w-full rounded-lg object-cover"
              />
              <p className="mt-2 text-center text-sm font-medium text-slate-700">
                Swimming
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-2 top-2 h-full w-full rotate-[-2deg] rounded-xl bg-white shadow" />
            <div className="relative rounded-xl bg-white p-3 shadow">
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop"
                alt="Class"
                className="h-44 w-full rounded-lg object-cover"
              />
              <p className="mt-2 text-center text-sm font-medium text-slate-700">
                Class
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-2 top-2 h-full w-full rotate-[-2deg] rounded-xl bg-white shadow" />
            <div className="relative rounded-xl bg-white p-3 shadow">
              <img
                src="https://images.unsplash.com/photo-1504194104404-433180773017?q=80&w=800&auto=format&fit=crop"
                alt="Kids"
                className="h-44 w-full rounded-lg object-cover"
              />
              <p className="mt-2 text-center text-sm font-medium text-slate-700">
                Kids
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Ad block (after Q-Zone) ---------- */}
      <section className="rounded-xl border bg-white p-4 text-center">
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://i.ytimg.com/vi/-XN335KuYDw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAGSRp_ReSSHrYqPNIpu7Cl-fLwMg"
            className="h-40 w-full object-cover"
          />
        </div>
        <h4 className="mt-3 text-sm font-semibold text-slate-800">
          Sponsored • Learn React the Modern Way
        </h4>
        <p className="mt-1 text-xs text-slate-600">
          Master hooks, routing, and Suspense with hands-on projects.
        </p>
        <button className="btn btn-sm mt-3 bg-slate-900 text-white hover:bg-slate-800">
          Start Free Lesson
        </button>
      </section>
    </aside>
  );
};

export default FindUs;
