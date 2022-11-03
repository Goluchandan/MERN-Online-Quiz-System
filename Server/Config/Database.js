const mongoose = require('mongoose')
require("dotenv").config();

const MONGO_URL = process.env.DATABASE_URL
mongoose.connect(MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Server is Successfully Connected to MONGO DB Database");
})

db.on("error", (err) => {
    console.log("Error: " + err);
})


module.exports = mongoose;