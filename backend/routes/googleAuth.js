const express = require("express");
const passport = require("passport");

const jwt = require("jsonwebtoken");

// ✅ JWT generator function
function generateToken(profile) {
  return jwt.sign(
    {
      id: profile.id,
      name: profile.displayName,
      email: profile.emails?.[0]?.value,
    },
    process.env.JWT_SECRET || "tempJWTSecret",
    { expiresIn: "1d" }
  );
}

const router = express.Router();

// ✅ Initiate Google OAuth login
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// ✅ Google OAuth callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login.html" }),
  (req, res) => {
    const token = generateToken(req.user);

    const frontendBaseURL =
      process.env.NODE_ENV === "production"
    ? "https://savify.ca"
    : "http://localhost:5000";
    
    
    const redirectURL = `${frontendBaseURL}/index.html?token=${token}`;
    res.redirect(redirectURL);


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