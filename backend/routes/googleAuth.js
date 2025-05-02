const express = require("express");
const passport = require("passport");

const router = express.Router();

// ✅ Initiate Google OAuth login
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// ✅ Google OAuth callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login.html" }),
  (req, res) => {
    // Redirect to the homepage or dashboard after successful login
    res.redirect("/index.html");
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
