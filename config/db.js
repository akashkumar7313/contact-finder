const mongoose = require('mongoose');
const config = require('config');

const mongoUri = config.get('mongoURI');
const connectDB = () => {
    mongoose.connect(mongoUri, { useNewUrlParser: true }).then(
        () => console.log("mongoDB connected...")
    ).catch(
        (err) => {
            console.log("Could not connect with mongoDB", err.message);
            process.exit(1);
        }
    );
}

module.exports = connectDB;