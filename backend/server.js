require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/auth");
const emailRoutes = require("./routes/email");  

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Serve static frontend files from "frontend" directory
app.use(express.static(path.join(__dirname, "../frontend")));

// ✅ Register API Routes
app.use("/api/auth", authRoutes);
app.use("/api", emailRoutes);

// ✅ MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/savify";
mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "savify",
    })
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// ✅ Catch-all route to serve frontend (index.html for React/Vite apps)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "index.html"));
});

// ✅ Debugging: Print all registered routes
app._router.stack.forEach((r) => {
    if (r.route) {
        console.log(`✅ Registered Route: ${Object.keys(r.route.methods)[0].toUpperCase()} ${r.route.path}`);
    }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

// ✅ Required for Vercel deployment
module.exports = app;
