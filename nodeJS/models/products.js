const mongoose = require('mongoose');

const ProductsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    price: {
        type : Number
    },

    rating: {
        type: String
    },

    warranty_years : {
        type : Number
    },

    available :{
        type : Boolean
    }
});

module.exports = mongoose.model('Products', ProductsSchema);