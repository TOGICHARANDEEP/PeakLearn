# Peak Learn — Online Learning Platform

A course marketplace UI with browsing, enrollment, testimonials, and FAQ,
rebuilt in React with reusable components after starting life as static
HTML/CSS/JS.

## Features

- **Course catalog** with search and level filtering.
- **Course detail pages** with a syllabus, instructor, and enroll action.
- **Login & registration** forms backed by `localStorage`.
- **Testimonials** and an **interactive FAQ accordion** on the homepage.
- Fully responsive layouts, with a warm indigo/amber visual identity.

## Tech stack

React 18 · Vite · JavaScript · Tailwind CSS · React Router

## Project structure

```
peak-learn/
└─ src/
   ├─ components/   # Navbar, Footer, CourseCard, FaqAccordion
   ├─ context/       # AuthContext (localStorage-backed)
   ├─ data/          # courses.js — courses, testimonials, FAQ content
   └─ pages/         # Home, Courses, CourseDetail, Faq, Login, Register
```

## Getting started

```bash
npm install
npm run dev      # http://localhost:5175
```

## Notes

- This project intentionally mirrors a common resume narrative — "started as
  static HTML/CSS/JS, migrated to React with reusable components" — reflected
  in the componentized `CourseCard` and `FaqAccordion` used across pages.
- Auth is client-side only; swap in a real API when you're ready to persist
  users and enrollments server-side.
