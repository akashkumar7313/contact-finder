const mongo = require('mongoose');
const config = require('config');
const mongoURI = config.get('mongoURI');

const connectDB = () => {
    mongo.connect(mongoURI, {useNewUrlParser:true}).then(() => console.log("MongoDB connected...")).catch( err => console.log(err.message));
}

module.exports = connectDB;