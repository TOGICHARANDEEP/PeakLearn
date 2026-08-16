import React from "react";
import { faqs } from "../data/courses.js";
import FaqAccordion from "../components/FaqAccordion.jsx";

export default function Faq() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="eyebrow">Support</p>
      <h1 className="mt-2 font-display text-3xl font-bold">Frequently asked questions</h1>
      <p className="mt-3 text-indigo2-950/60">
        Can't find what you're looking for? Reach out and we'll get back to you within a day.
      </p>
      <div className="mt-8">
        <FaqAccordion faqs={faqs} />
      </div>
    </div>
  );
}
