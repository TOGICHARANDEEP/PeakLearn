import React from "react";
import { Link } from "react-router-dom";
import { courses, testimonials } from "../data/courses.js";
import CourseCard from "../components/CourseCard.jsx";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-indigo2-950">
        <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_80%_10%,theme(colors.amber2.500),transparent_45%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="eyebrow">Learn by building</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-paper md:text-6xl">
            Skills that compound, taught by people who ship.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-paper/70">
            Peak Learn is a project-based platform for frontend, backend, and
            design skills — no fluff, just courses that get you building.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/courses"
              className="rounded-full bg-amber2-500 px-6 py-3 text-sm font-semibold text-indigo2-950 hover:bg-amber2-400 transition-colors"
            >
              Explore courses
            </Link>
            <Link
              to="/register"
              className="rounded-full border border-paper/25 px-6 py-3 text-sm font-semibold text-paper hover:bg-paper/10 transition-colors"
            >
              Create free account
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Popular right now</p>
            <h2 className="mt-2 font-display text-2xl font-bold">Featured courses</h2>
          </div>
          <Link to="/courses" className="text-sm font-medium underline underline-offset-4">
            View all
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </section>

      <section className="bg-mint-100/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">Learner stories</p>
          <h2 className="mt-2 font-display text-2xl font-bold">
            What students say
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-white p-6 shadow-card">
                <p className="text-sm leading-relaxed text-indigo2-950/70">
                  "{t.quote}"
                </p>
                <p className="mt-4 font-display text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-indigo2-950/50">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
