const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skuSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    variant: {
        type: String,
        required: true
    },
    size: {
        type: String
    },
    colorId: {
        type: Schema.Types.ObjectId,
        ref: 'Color'
    },
    price: {
        type: Number,
        required: true
    },
    stockQuantity: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('SKU', skuSchema);
