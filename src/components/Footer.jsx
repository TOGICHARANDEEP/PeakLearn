import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-indigo2-950/10 bg-indigo2-950 text-paper/70">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-amber2-500 font-display text-xs font-bold text-indigo2-950">
              P
            </span>
            <span className="font-display text-paper">Peak Learn</span>
          </div>
          <p>Practical, project-based courses — © 2026 Peak Learn.</p>
        </div>
      </div>
    </footer>
  );
}
