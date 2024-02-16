const mongoose = require('mongoose');

const addressModel = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tbl_user"
    },
    user_name:{
        type: String,
        required: [true, "name is required"]
    },
    user_phone:{
        type: String,
        required: [true, "phone number is required"]
    },
    address_type: {
        type: String,
        enum: ['billing', 'shipping'],
        default: 'billing'
    },
    place: {
        type: String,
        required: [true, "Area is required"]
    },
   
    address_city: {
        type: String,
        required: [true, "City is required"]
    },
    address_state: {
        type: String,
        required: [true, "State is required"]
    },
    address_country: {
        type: String,
        required: [true, "Country is required"]
    },
    address_pincode: {
        type: Number,
        required: [true, "Pincode is required"]
    },
    defaultAddress:{
        type:Boolean
    },
    address_details:{
        type:String,
        required: [true, "Address Details is required"]
    },
    isDelete:{
        type:Boolean,
        default:true

    }
},
{timestamps:true}

);

module.exports = mongoose.model("Tbl_address", addressModel);
