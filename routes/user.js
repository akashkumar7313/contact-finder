const express = require('express');
const User = require('../models/User');
const router = express.Router();
const user = require('../models/User');
const bcrypt = require('bcryptjs');

/**
 *@route    POST /api/user 
 *@desc     Register user
 *@access   Public
 */
router.post('/', async (request, response) => {
    const { email, name, password } = request.body;

    user1 = new User({
        email,
        name,
        password
    });

    const salt = await bcrypt.genSalt();
    user1.password = await bcrypt.hash(password, salt);
    await user1.save();
    
    return response.status(201).json({
        success: true
    });

    // response.json({
    //     msg: "Register User"
    // });
});

module.exports = router;