const mongoose = require('mongoose'); // Erase if already required

// const Schema = mongoose.Schema


// Declare the Schema of the Mongo model
// cosnt userSchema = new Schema ({
    
    // or 

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: 'Please enter your name',
       
    },
    email:{
        type:String,
        required: 'Please enter your email',
       
    },
    phone:{
        type:Number,
        required: 'Please enter your phone',
        minlength: 10,
        maxlength: 10,
       
    },
    password:{
        type:String,
        required: 'Please enter your password',
    },
    confirmPassword:{
        type: String,
        required: true,

    },
 
});

//Export the model
const UserModel1 = mongoose.model("user1", userSchema);
module.exports = UserModel1