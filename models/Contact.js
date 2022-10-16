const mongo = require('mongoose');

const ContactSchema = mongo.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    contactType: {
        type: String,
        enum: ['Persnoal', 'Business', 'Office']
    }
});

module.exports = mongo.model('Contact', ContactSchema);