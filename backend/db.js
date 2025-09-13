// backend/db.js
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",         // your mysql username
  password: "swapnil6362947231@budake", // your mysql password
  database: "store_ratings_db"
});

db.connect((err) => {
  if (err) {
    console.error("DB Connection Error:", err);
  } else {
    console.log("✅ MySQL Connected...");
  }
});

module.exports = db;
