import React, { useState } from "react";
import "./Signup.css";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });
  const [msg, setMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
    // 🔹 Fake validation just for UI
    if (!form.name || !form.email || !form.address || !form.password) {
      setMsg("All fields are required!");
      return;
    }
    if (form.name.length < 20 || form.name.length > 60) {
      setMsg("Name must be 20–60 characters.");
      return;
    }
    if (form.password.length < 8 || form.password.length > 16) {
      setMsg("Password must be 8–16 characters.");
      return;
    }
    setMsg("Signup successful! (Static UI only)");
  };

  return (
    <div className="signup-container">
      <h2 className="signup-header">Signup</h2>
      <form className="signup-form" onSubmit={submit}>
        <input
          className="signup-input"
          placeholder="Name (20-60 chars)"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="signup-input"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="signup-input"
          placeholder="Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
        <input
          className="signup-input"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit" className="signup-btn">
          Signup
        </button>
      </form>
      {msg && <p className="signup-msg">{msg}</p>}
    </div>
  );
}
