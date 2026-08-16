import React, { useState } from "react";

export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-indigo2-950/10 rounded-2xl border border-indigo2-950/10 bg-white shadow-card">
      {faqs.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpenIndex(open ? -1 : i)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <span className="font-display font-semibold">{item.q}</span>
              <span
                className={`ml-4 shrink-0 text-xl text-amber2-500 transition-transform ${
                  open ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {open && (
              <p className="px-6 pb-5 text-sm leading-relaxed text-indigo2-950/60">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
