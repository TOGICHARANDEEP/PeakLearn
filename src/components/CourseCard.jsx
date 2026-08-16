import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/courses/${course.id}`}
      className="group block overflow-hidden rounded-2xl border border-indigo2-950/10 bg-white shadow-card transition-transform hover:-translate-y-1"
    >
      <div className="aspect-[16/9] overflow-hidden bg-indigo2-950/5">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-indigo2-950/50">
          <span>{course.level}</span>
          <span>·</span>
          <span>{course.duration}</span>
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold group-hover:text-amber2-500 transition-colors">
          {course.title}
        </h3>
        <p className="mt-1 text-sm text-indigo2-950/60">by {course.instructor}</p>
        <div className="mt-4 flex items-center justify-between border-t border-indigo2-950/5 pt-4">
          <span className="font-display font-semibold">
            {course.price === 0 ? "Free" : `$${course.price}`}
          </span>
          <span className="text-xs font-medium text-amber2-500 group-hover:underline">
            View course →
          </span>
        </div>
      </div>
    </Link>
  );
}
