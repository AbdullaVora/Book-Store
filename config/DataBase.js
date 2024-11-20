const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/DataBase');

const DataBase = mongoose.connection

DataBase.on('connected', (err) => {
    if(err) {console.log("DataBase is not connected"); return false};
    console.log("DataBase is connected");
})

module.exports = DataBase