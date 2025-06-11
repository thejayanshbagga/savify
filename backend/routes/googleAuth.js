// backend/routes/googleAuth.js
const express = require("express");
const passport = require("passport");
const router = express.Router();

// Redirect to Google for login
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Callback after Google login
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login.html",
    successRedirect: "/", // or redirect to a dashboard if needed
  })
);

// Optional logout
router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

module.exports = router;
