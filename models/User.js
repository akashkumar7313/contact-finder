const mongoose = require('mongoose');

const user = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

madule.exports = mongoose.model('User', User);