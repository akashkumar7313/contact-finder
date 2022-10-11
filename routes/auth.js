const express = require('express');
const router = express.Router();


/**
 * @route   GET api/auth
 * @desc    Get logged in user
 * @access  Private
 */
router.get('/', (request, response) => {
    response.json({
        msg: "Logged in User"
    });
});

/**
 * @route   POST api/auth
 * @desc    Login User
 * @access  Public
 */
router.post('/', (request, response) => {
    response.json({
        msg: "Login User"
    });
});

module.exports = router;