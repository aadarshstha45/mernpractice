const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const save = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

//password hashing with bcrypt

save.pre("save", async function () {
  try {
    const pass = await bcrypt.hash(this.password, 10);
    this.password = pass;
  } catch (e) {
    console.log(e);
  }
});

save.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

//json web token
save.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        username: this.username,
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (e) {
    console.log(e);
  }
};

const user = new mongoose.model("User", save);

module.exports = user;
