import React, { useMemo, useState } from "react";
import { courses } from "../data/courses.js";
import CourseCard from "../components/CourseCard.jsx";

export default function Courses() {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("All");

  const levels = useMemo(() => ["All", ...new Set(courses.map((c) => c.level))], []);

  const filtered = courses.filter((c) => {
    const matchesQuery = c.title.toLowerCase().includes(query.toLowerCase());
    const matchesLevel = level === "All" || c.level === level;
    return matchesQuery && matchesLevel;
  });

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <p className="eyebrow">Course catalog</p>
      <h1 className="mt-2 font-display text-3xl font-bold">All courses</h1>

      <div className="mt-6 flex flex-col gap-3 md:flex-row">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search courses…"
          className="flex-1 rounded-xl border border-indigo2-950/15 bg-white px-4 py-3 text-sm outline-none focus:border-amber2-500 focus:ring-2 focus:ring-amber2-500/20"
        />
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="rounded-xl border border-indigo2-950/15 bg-white px-4 py-3 text-sm"
        >
          {levels.map((l) => (
            <option key={l}>{l}</option>
          ))}
        </select>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </div>
  );
}
