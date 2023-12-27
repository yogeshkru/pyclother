const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1 // Default quantity is set to 1, you can adjust this based on your requirements
    },
    price: {
        type: Number,
        required: true
    },
    colorId: {
        type: Schema.Types.ObjectId,
        ref: 'Color',
        required: true
    }
});

module.exports = mongoose.model('Cart', cartSchema);
