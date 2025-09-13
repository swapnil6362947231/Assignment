
// backend/routes/auth.js
const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Signup
router.post("/signup", async (req, res) => {
  const { name, email, address, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (name, email, address, password, role) VALUES (?, ?, ?, ?, 'user')",
    [name, email, address, hashed],
    (err) => {
      if (err) return res.status(500).json({ message: "Error", err });
      res.json({ message: "User registered successfully", email });
    }
  );
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
    if (err || result.length === 0) return res.status(401).json({ message: "Invalid email" });

    const user = result[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ id: user.id, role: user.role }, "SECRET_KEY", { expiresIn: "1h" });
    res.json({ token, role: user.role });
  });
});

module.exports = router;
