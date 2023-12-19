const mongoose = require('mongoose');

// const url = "mongodb://localhost:27017/mern"

const url = process.env.MONGODB_URI

const connection = async() => {
    try{
        await mongoose.connect(url);
        console.log("DB Connection Success");
    }catch(e){
        console.log(e);
    }
}

module.exports = connection;