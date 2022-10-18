const express = require('express');
const User = require('../models/User');
const router = express.Router();
const user = require('../models/User');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require("express-validator");
const jwt = require('jsonwebtoken');
const config = require('config');

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

    if(User.findOne({ email })){
        return response.status(409).json({
            message: "User already exists."
        });
    }

    let user = new User({
      email,
      name,
      password,
    });
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    const payload = {
        user: {
            id: user.id
        }
    }
    jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn: 3600
    }, (err, token) => {
        if(err) throw err;
        response.json({ token });
    });
  }
);

module.exports = router;