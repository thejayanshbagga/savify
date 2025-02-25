require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const cookieSession = require("cookie-session");
const googleAuthRoutes = require("./routes/googleAuth");
const authRoutes = require("./routes/auth");
const emailRoutes = require("./routes/email");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Environment-based redirect URI
const callbackURL =
  process.env.NODE_ENV === "production"
    ? process.env.REDIRECT_URI_PROD
    : process.env.REDIRECT_URI_LOCAL;

// ✅ Cookie session setup
app.use(
  cookieSession({
    name: "savify-session",
    keys: ["savifySecret"], // Use process.env.COOKIE_KEY in production
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  })
);

// ✅ Passport setup
app.use(passport.initialize());
app.use(passport.session());

// ✅ Google OAuth strategy
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: callbackURL,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("🔑 Google profile:", profile); // Debug
      return done(null, profile);
    }
  )
);

// ✅ Serve static frontend files from "public" directory
app.use(express.static(path.join(__dirname, "../public")));

// ✅ Register API & OAuth routes
app.use("/api/auth", authRoutes);
app.use("/api", emailRoutes);
app.use("/auth", googleAuthRoutes);

// ✅ Catch-all route (must be last)
app.get("*", (req, res) => {
  if (req.path.startsWith("/api") || req.path.startsWith("/auth")) {
    res.status(404).json({ message: "API Route not found" });
  } else {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
  }
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

// ✅ Export for Vercel deployment
module.exports = app;
