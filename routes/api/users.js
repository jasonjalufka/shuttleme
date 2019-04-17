const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

// User Model
const User = require("../../models/User");

// @route  POST api/users
// @desc   Register new user
// @access Public
router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check for existing user
  User.findOne({ email }).then(user => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    const newUser = new User({
      name,
      email,
      password
    });

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          jwt.sign(
            { id: user.id },
            config.get("jwtSecret"),
            {
              expiresIn: 3600
            },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email
                }
              });
            }
          );
        });
      });
    });
  });
});

// @route  POST api/users/stop
// @desc   Add user stop information
//@access  Private
router.post("/stop", auth, (req, res) => {
  User.updateOne({ _id: req.user.id }, { "preferences.stop": req.body.stop })
    .then(res.json({ success: true }))
    .catch(err => res.status(500).json({ msg: "Failed to update stop" }));
});

// @route  GET api/users/stop
// @desc   Get user stop information
//@access  Private
router.get("/stop", auth, (req, res) => {
  User.findById(req.user.id).then(user => {
    console.log(user.preferences.stop);
  });
});

module.exports = router;
