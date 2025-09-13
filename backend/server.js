// backend/server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth");
const storeRoutes = require("./routes/stores");
const ratingRoutes = require("./routes/ratings");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/auth", authRoutes);
app.use("/stores", storeRoutes);
app.use("/ratings", ratingRoutes);

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
