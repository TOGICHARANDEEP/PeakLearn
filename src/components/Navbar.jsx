import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-indigo2-950" : "text-indigo2-950/50 hover:text-indigo2-950"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-indigo2-950/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo2-950 font-display text-sm font-bold text-amber2-400">
            P
          </span>
          <span className="font-display text-lg font-bold tracking-tight">Peak Learn</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/courses" className={linkClass}>Courses</NavLink>
          <NavLink to="/faq" className={linkClass}>FAQ</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="hidden text-sm text-indigo2-950/60 sm:inline">
                Hi, {user.name.split(" ")[0]}
              </span>
              <button
                onClick={() => { logout(); navigate("/"); }}
                className="rounded-full border border-indigo2-950/15 px-4 py-2 text-sm font-medium hover:bg-indigo2-950 hover:text-paper transition-colors"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-medium text-indigo2-950/60 hover:text-indigo2-950">
                Log in
              </Link>
              <Link
                to="/register"
                className="rounded-full bg-indigo2-950 px-4 py-2 text-sm font-medium text-paper hover:bg-indigo2-800 transition-colors"
              >
                Start learning
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
