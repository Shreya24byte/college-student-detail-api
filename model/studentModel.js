const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Step2: writing schema
const studentSchema = new Schema({
    studentFirstName: String,
    collegeName : String,
    location : String
},
{collection: 'studentCollection'});

//3: export schem
module.exports = mongoose.model("studentCollection", studentSchema);