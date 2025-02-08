const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true, lowercase: true }, 
    password: { type: String, required: true, select: false },
});

// ✅ Hash password before saving (Prevents Double Hashing)
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    // Prevent re-hashing an already hashed password
    if (this.password.startsWith("$2b$")) {
        console.log(`🔹 Password for ${this.email} is already hashed. Skipping hashing.`);
        return next();
    }

    console.log(`🔹 Hashing password for: ${this.email}`);
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model("User", UserSchema);
