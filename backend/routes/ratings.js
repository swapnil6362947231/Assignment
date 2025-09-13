const express = require("express");
const router = express.Router();
const db = require("../db");

// ✅ Submit or update a rating
router.post("/", (req, res) => {
  const { user_id, store_id, rating } = req.body;

  if (!user_id || !store_id || !rating) {
    return res.status(400).json({ message: "Missing fields" });
  }

  // Check if user already rated this store
  db.query(
    "SELECT * FROM ratings WHERE user_id = ? AND store_id = ?",
    [user_id, store_id],
    (err, result) => {
      if (err) return res.status(500).json({ message: "DB Error", err });

      if (result.length > 0) {
        // Update existing rating
        db.query(
          "UPDATE ratings SET rating = ? WHERE user_id = ? AND store_id = ?",
          [rating, user_id, store_id],
          (err2) => {
            if (err2) return res.status(500).json({ message: "Error updating rating" });
            return res.json({ message: "Rating updated successfully" });
          }
        );
      } else {
        // Insert new rating
        db.query(
          "INSERT INTO ratings (user_id, store_id, rating) VALUES (?, ?, ?)",
          [user_id, store_id, rating],
          (err3) => {
            if (err3) return res.status(500).json({ message: "Error saving rating" });
            return res.json({ message: "Rating submitted successfully" });
          }
        );
      }
    }
  );
});

// ✅ Get ratings for a store (to calculate average, display in frontend)
router.get("/store/:id", (req, res) => {
  const storeId = req.params.id;

  db.query(
    "SELECT r.rating, u.name AS user_name FROM ratings r JOIN users u ON r.user_id = u.id WHERE r.store_id = ?",
    [storeId],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Error fetching ratings" });
      res.json(result);
    }
  );
});

// ✅ Get average rating for a store
router.get("/store/:id/average", (req, res) => {
  const storeId = req.params.id;

  db.query(
    "SELECT AVG(rating) AS avgRating FROM ratings WHERE store_id = ?",
    [storeId],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Error fetching average rating" });
      res.json({ avgRating: result[0].avgRating || 0 });
    }
  );
});

module.exports = router;
