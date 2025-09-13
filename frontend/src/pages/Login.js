import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    // 🔹 Fake check just for UI preview
    if (form.email === "" || form.password === "") {
      setErr("Please fill in all fields");
    } else {
      setErr("");
      alert("Login successful! (Static UI only)");
      nav("/");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form className="login-form" onSubmit={submit}>
        <input
          className="login-input"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="login-input"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
      {err && <p className="login-error">{err}</p>}
    </div>
  );
}
