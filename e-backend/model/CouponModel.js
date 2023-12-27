const mongoose = require('mongoose');

const CouponSchema = mongoose.Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    expiryDate: {

    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    discountPoint:{
        type : Number,
        required: true
    }
})

module.exports = mongoose.model('Coupon', CouponSchema);