const { Schema, model } = require('mongoose');

const propertySchema = new Schema({
    street: {
        type: String,
        required: true,
        trim: true,
    },
    suburb: {
        type: String,
        required: true,
        trim: true,
    },
    state: {
        type: String,
        required: true,
        trim: true,
    },
    postcode: {
        type: Number,
        required: true,
    },
    bed: {
        type: Number,
        required: true,
    },
    bathroom: {
        type: Number,
        required: true,
    },
    car: {
        type: Number,
        required: true,
    },
    landsize: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
});

const Property = model('Property', propertySchema);

module.exports = Property;
