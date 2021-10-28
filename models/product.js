const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose); 
const Currency = mongoose.Types.Currency;


const productSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    }, 
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },

}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;