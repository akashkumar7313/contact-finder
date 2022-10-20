const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const authMiddleware = require("../middleware/auth");

/**
 * @route   GET /api/contacts
 * @desc    Get all Contacts
 * @access  Private
 */
router.get("/", [authMiddleware], async (request, response) => {
  try {
    const contacts = await Contact.find({ user: request.user.id });
    response.json({
      success: true,
      message: "",
      data: contacts,
    });
  } catch (err) {
    return response.status(500).json({
      success: false,
      message: err.messsage,
    });
  }
});

/**
 * @route   POST /api/contacts
 * @desc    Create Contact
 * @access  Private
 */
router.post(
  "/",
  [
    authMiddleware,
    check("name", "Name is required").not().isEmpty(),
    check("phone", "Phone is required").not().isEmpty(),
    check("phone", "Please enter a valid phone number").isLength({ min: 10 }),
    check("email", "Please enter a valid Email").isEmail(),
  ],
  async (request, response) => {
    const validationErrors = validationResult(request);
    if (!validationErrors.isEmpty()) {
      return response.status(400).json({
        success: false,
        errors: validationErrors.array(),
      });
    }
    const user = await User.findById(request.user.id);
    const { name, email, phone, address, type } = request.body;
    let contact = new Contact({
      user,
      name,
      email,
      phone,
      address,
      type,
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
      message: "Contact Created",
    });
  }
);

/**
 * @route   PUT /api/contacts
 * @desc    Update Contact
 * @access  Private
 */
router.put(
  "/:id",
  [
    authMiddleware,
    check("phone", "Phone is required").isString(),
    check("phone", "Please enter a valid phone number").isLength({ min: 10 }),
    check("email", "Please enter a valid Email").isEmail(),
  ],
  async (request, response) => {
    const validationErrors = validationResult(request);
    if (!validationErrors.isEmpty()) {
      return response.status(400).json({
        success: false,
        errors: validationErrors.array(),
      });
    }

    const contact = await Contact.findById(request.params.id);
    if (!contact) {
      return response.status(401).json({
        success: false,
        message: "Invalid contact id",
      });
    }
    if (contact.user != request.user.id) {
      return response.status(401).json({
        success: false,
        message: "Access Denied, cannot update this contact",
      });
    }
    const contactFields = {};
    if (request.body.name) contactFields.name = request.body.name;
    if (request.body.email) contactFields.email = request.body.email;
    if (request.body.phone) contactFields.phone = request.body.phone;
    if (request.body.address) contactFields.address = request.body.address;
    if (request.body.contactType)
      contactFields.contactType = request.body.contactType;
    try {
      await Contact.findByIdAndUpdate(
        request.params.id,
        { $set: contactFields },
        { new: true }
      );
      return response.json({
        success: true,
        message: "Contact Updated",
      });
    } catch (err) {
      return response.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
);

/**
 * @route   DELETE /api/contacts
 * @desc    Delete contact
 * @access  Private
 */
router.delete("/:id", [authMiddleware], async (request, response) => {
  const contact = await Contact.findById(request.params.id);

  if (!contact) {
    return response.status(401).json({
      success: false,
      message: "Invalid contact id",
    });
  }
  if (contact.user != request.user.id) {
    return response.status(401).json({
      success: false,
      message: "Access Denied, cannot Delete this contact",
    });
  }
  try {
    await Contact.findByIdAndDelete(request.params.id);
    return response.json({
      success: true,
      message: "Contact Deleted",
    });
  } catch (err) {
    return response.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
