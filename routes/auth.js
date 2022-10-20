const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const authMiddleware = require('../middleware/auth');

/**
 * @route   GET api/auth
 * @desc    Get logged in user
 * @access  Private
 */
router.get("/", [authMiddleware], async (request, response) => {
    try {
        const user = await User.findById(request.user.id);
        return response.json({
          success: true,
          message: '',
          data: user || {}
        });
    } catch(err) {
        return response.status(500).json({
            success: false,
            message: err.message
        });
    }
});

/**
 * @route   POST api/auth
 * @desc    Login User
 * @access  Public
 */
router.post("/", async (request, response) => {
  const { email, password } = request.body;
  const user = await User.findOne({ email });
  if (!user) {
    return response.status(401).json({
      message: "invalid credentials",
    });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return response.status(401).json({
      message: "invalid credentials",
    });
  } else {
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      {
        expiresIn: 3600,
      },
      (err, token) => {
        if (err) throw err;
        response.json({ token });
      }
    );
  }
});

module.exports = router;
