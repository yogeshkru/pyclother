const mongoose = require('mongoose');

const addressModel = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tbl_user"
    },
    address_type: {
        type: String,
        enum: ['billing', 'shipping'],
        default: 'billing'
    },
    address_area: {
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
    }
});

module.exports = mongoose.model("Tbl_address", addressModel);
