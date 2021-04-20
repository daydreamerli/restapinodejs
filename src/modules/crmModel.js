import mongoose from 'mongoose';
// import { model } from 'mongoose';

const { model, Schema } = require('mongoose');


const ContactSchema = new Schema ({
    firstName:String,
    lastName:String,
    email:String,
    company:String,
    phone:Number,
    create_date:{type:Date,default:Date.now}
});
      
const contactModel = mongoose.model('Contact', ContactSchema);
// module.exports = model('Contact',ContactSchema);