const {Schema,model} = require('mongoose');

const UserSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  mobile:{
    type:Number,
    required:true
  },
  message:{
    type:String,
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
});

const Contact = new model('Contact',UserSchema);

module.exports = Contact;