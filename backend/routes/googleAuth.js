const express = require("express");
const passport = require("passport");

const router = express.Router();

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

// ✅ Initiate Google OAuth login
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// ✅ Google OAuth callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login.html" }),
  (req, res) => {
    // Redirect to the homepage or dashboard after successful login
    const token = jwt.sign({ userId: req.user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.redirect("/index.html?token=${token");
  }
);

// ✅ Logout route
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) console.error("❌ Logout Error:", err);
    res.redirect("/login.html"); // Redirect after logout
  });
});

module.exports = router;
