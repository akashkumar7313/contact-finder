const { response } = require('express');
const express = require('express');
const Contact = require('../models/Contact');
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
router.post('/', async(request, response) => {
    const { name, email, phone, address, type } = request.body;

    let contact  = new Contact({
        name,
        email,
        phone,
        address,
        type
    });

    contact.contactType = type;
    try {
        await contact.save();
    }
    catch(err){
        return response.status(500).json({
            success: false,
            message: err.message,
        })
    }
    return response.json({
        success: true,
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