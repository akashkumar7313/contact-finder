const mongoose =require('mongoose');
const config =require('config');

const mongoUri = config.get('mongoURI');
const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/contact-keeper',{ useNewUrlParser: true }).then(
    () => console.log("mongoDB connected...")
).catch(
    (err) => {
        console.log("Could not connect with mongoDB", err.massage);
        process.exit(1);
    }
);
}

module.exports = connectDB;
