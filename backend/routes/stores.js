const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all stores
router.get("/", (req, res) => {
  db.query("SELECT * FROM stores", (err, result) => {
    if (err) return res.status(500).json({ message: "Error fetching stores" });
    res.json(result);
  });
});

module.exports = router;
