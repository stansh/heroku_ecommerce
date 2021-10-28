const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose); 
const Currency = mongoose.Types.Currency;


const cartItemSchema = new Schema({

    
    title: {
        type: String,
        required: false
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    }, 
    description: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    }, 
    qty: {
        type: Number,
        required: false,
        min: 0
    }

}, /* {
    timestamps: true
} */) ;

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem ;