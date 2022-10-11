const { response } = require('express');
const express = require('express');
const router = express.Router();

/**
 * @route   GET /api/contacts
 * @desc    Get all Contacts
 * @access  Private
 */
router.get('/', (request, response) => {
    response.json({
        msg: "Get all contacts"
    });
});

/**
 * @route   POST /api/contacts
 * @desc    Create Contact
 * @access  Private
 */
router.post('/', (request, response) => {
    response.json({
        msg: "Create Contact"
    })
});

/**
 * @route   PUT /api/contacts
 * @desc    Update Contact
 * @access  Private
 */
router.put('/:id', (request, response) => {
    response.json({
        msg: "Update Contact"
    })
});


/**
 * @route   DELETE /api/contacts
 * @desc    Delete contact
 * @access  Private
 */
router.delete('/:id', (request, response) => {
    response.json({
        msg: "Delete contact"
    });
});

module.exports = router;