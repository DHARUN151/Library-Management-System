//connect to mongo db
const mongoose = require('mongoose');

async function connection() {
    const connection = await mongoose.connect(process.env.);
    console.log("connected to db");

    
}


module.exports = connection;

