// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import page components (pure UI)
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import StoreList from "./pages/StoreList";
import DashboardUser from "./pages/DashboardUser";
import DashboardAdmin from "./pages/DashboardAdmin";
import DashboardOwner from "./pages/DashboardOwner";

// Navbar
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<StoreList />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/user" element={<DashboardUser />} />
          <Route path="/dashboard/admin" element={<DashboardAdmin />} />
          <Route path="/dashboard/owner" element={<DashboardOwner />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
