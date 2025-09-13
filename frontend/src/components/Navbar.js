import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const nav = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    nav("/login");
  };

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/">Stores</Link> |{" "}
      {!token ? (
        <>
          <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
        </>
      ) : (
        <>
          <Link to="/dashboard/user">User Dashboard</Link> |{" "}
          <Link to="/dashboard/admin">Admin Dashboard</Link> |{" "}
          <Link to="/dashboard/owner">Owner Dashboard</Link> |{" "}
          <button onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
}
