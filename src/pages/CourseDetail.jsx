import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { courses } from "../data/courses.js";
import { useAuth } from "../context/AuthContext.jsx";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const { user } = useAuth();
  const [enrolled, setEnrolled] = useState(false);

  if (!course) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center text-indigo2-950/60">
        Course not found. <Link to="/courses" className="underline">Back to courses</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link to="/courses" className="text-sm text-indigo2-950/50 hover:text-indigo2-950">
        ← Back to courses
      </Link>

      <div className="mt-6 aspect-[21/9] overflow-hidden rounded-2xl bg-indigo2-950/5">
        <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
      </div>

      <div className="mt-8 grid gap-10 md:grid-cols-[1fr_280px]">
        <div>
          <div className="flex items-center gap-2 text-xs text-indigo2-950/50">
            <span>{course.level}</span><span>·</span><span>{course.duration}</span>
          </div>
          <h1 className="mt-2 font-display text-3xl font-bold">{course.title}</h1>
          <p className="mt-1 text-sm text-indigo2-950/60">Taught by {course.instructor}</p>
          <p className="mt-6 leading-relaxed text-indigo2-950/70">{course.summary}</p>

          <h2 className="mt-8 font-display text-lg font-semibold">What you'll learn</h2>
          <ul className="mt-3 space-y-2">
            {course.modules.map((m) => (
              <li key={m} className="flex items-start gap-2 text-sm text-indigo2-950/70">
                <span className="mt-0.5 text-mint-500">✓</span>
                {m}
              </li>
            ))}
          </ul>
        </div>

        <div className="h-fit rounded-2xl border border-indigo2-950/10 bg-white p-6 shadow-card">
          <p className="font-display text-2xl font-bold">
            {course.price === 0 ? "Free" : `$${course.price}`}
          </p>
          <button
            disabled={enrolled}
            onClick={() => setEnrolled(true)}
            className="mt-4 w-full rounded-full bg-indigo2-950 py-3 text-sm font-semibold text-paper hover:bg-indigo2-800 disabled:opacity-50 transition-colors"
          >
            {enrolled ? "Enrolled ✓" : user ? "Enroll now" : "Log in to enroll"}
          </button>
          <p className="mt-3 text-center text-xs text-indigo2-950/40">
            Lifetime access · Certificate on completion
          </p>
        </div>
      </div>
    </div>
  );
}
