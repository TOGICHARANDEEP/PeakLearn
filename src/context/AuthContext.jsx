import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
const USERS_KEY = "pl_users";
const SESSION_KEY = "pl_session";

function readUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}
function writeUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = localStorage.getItem(SESSION_KEY);
    if (session) setUser(JSON.parse(session));
  }, []);

  function register({ name, email, password }) {
    const users = readUsers();
    if (users.some((u) => u.email === email)) {
      throw new Error("An account with this email already exists.");
    }
    const newUser = { id: crypto.randomUUID(), name, email, password };
    writeUsers([...users, newUser]);
    const session = { id: newUser.id, name, email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
  }

  function login({ email, password }) {
    const users = readUsers();
    const found = users.find((u) => u.email === email && u.password === password);
    if (!found) throw new Error("Invalid email or password.");
    const session = { id: found.id, name: found.name, email: found.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
