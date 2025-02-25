const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login.html" }),
  (req, res) => {
    const user = req.user;
    const token = jwt.sign({ email: user._json.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // ✅ Redirect to index.html with token
    res.redirect(`/index.html?token=${token}`);
  }
);

module.exports = router;
