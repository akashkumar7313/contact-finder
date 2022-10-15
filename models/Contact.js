const mongo = require('mongoose')

const ContactSchema = mongo.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    contactType: {
        type: String,
        enum: ['Personal', 'Business', 'Office']
    }
});

module.exports = mongo.model('Contact', ContactSchema);