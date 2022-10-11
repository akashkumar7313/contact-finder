const express = require('express');
const router = express.Router();

/**
 *@route    POST /api/user 
 *@desc     Register user
 *@access   Public
 */
router.post('/', (request, response) => {
    response.json({
        msg: "Register User"
    });
});

module.exports = router;