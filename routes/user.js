const express = require('express');
const User = require('../models/User');
const router = express.Router();
const user = require('../models/User');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require("express-validator");

/**
 *@route    POST /api/user 
 *@desc     Register user
 *@access   Public
 */
router.post(
  "/", 
  [
    check('email', "Please enter emailId").not().isEmpty(),
    check('email', "Please enter a valid emailId").isEmail(),
    check('name', 'Please enter name').not().isEmpty(),
    check('password', 'Please enter password').not().isEmpty(),
    check('password', 'Please enter a valid password of minumum 6 characters').isLength({min:6}),
  ],
  async (request, response) => {
    const errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.json({
            success: false,
            messages: errors.array()
        });
    }
    const { email, name, password } = request.body;
    user1 = new User({
      email,
      name,
      password,
    });

    const salt = await bcrypt.genSalt();
    user1.password = await bcrypt.hash(password, salt);
    await user1.save();

    return response.status(201).json({
      success: true,
      message: 'User registered'
    });
  }
);

module.exports = router;