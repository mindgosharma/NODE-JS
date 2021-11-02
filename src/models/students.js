const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = mongoose.Schema({
     name: {
         type: String,
         required: true,
         minlength: 3
     },
     email: {
         type: String,
         required: true,
         unique: [true, "Email is already taken!"],
         validate(value){
             if(!validator.isEmail(value)){
                 throw new Error("not valid email!")
             }
         }

     },
     phone: {
         type: Number,
         required: true,
         unique: [true, "Mobile no is already taken"],
         min: 10,
     },
     address: {
         type: String,
         required: true
     }
})

//I am creating new collection
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;