import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    try {
      login(form);
      navigate("/courses");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-16">
      <h1 className="font-display text-3xl font-bold">Welcome back</h1>
      <p className="mt-2 text-sm text-indigo2-950/50">
        New to Peak Learn?{" "}
        <Link to="/register" className="font-medium text-indigo2-950 underline underline-offset-4">
          Create an account
        </Link>
      </p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        {error && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>}
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-1 w-full rounded-xl border border-indigo2-950/15 px-4 py-3 text-sm outline-none focus:border-amber2-500"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="mt-1 w-full rounded-xl border border-indigo2-950/15 px-4 py-3 text-sm outline-none focus:border-amber2-500"
          />
        </div>
        <button className="w-full rounded-xl bg-indigo2-950 py-3 text-sm font-semibold text-paper hover:bg-indigo2-800">
          Log in
        </button>
      </form>
    </div>
  );
}
