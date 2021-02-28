// import mongoose 
/* const mongoose = require('mongoose') */
const mongoose = require('mongoose')


// Create Schema 
/*
const UserSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true}
})
*/

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

// export it 

/* module.exports = mongoose.model('User',UserSchema)*/
module.exports = mongoose.model('User', UserSchema)