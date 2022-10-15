const { response } = require('express');
const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();
const { check, validationResult } = require("express-validator");

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
router.post('/', 
[
  check("name", "Name is required").not().isEmpty(),
  check("phone", "Phone is required").not().isEmpty(),
  check("phone", "Please enter a valid phone number").isLength({ min: 10 }),
  check("email", "Please enter a valid Email").isEmail(),
],
async (request, response) => {
    const validationErrors = validationResult(request);
    if(!validationErrors.isEmpty()){
      return response.status(400).json({
        success: false,
        errors: validationErrors.array(),
      });
    }

    const {name, email,phone, address, type} = request.body;
    let contact = new Contact({
        name,
        email,
        phone,
        address,
        type
    });
    contact.contactType = type;
    try {
      await contact.save();
    } catch (err) {
      return response.status(500).json({
        success: false,
        message: err.message,
      });
    }
    return response.json({
        success: true,
        message: "Contact Created"
    });
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