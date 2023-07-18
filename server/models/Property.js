const { Schema, model } = require('mongoose');

const propertySchema = new Schema({
    streetAddress: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
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
    land: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    propertyType: {
        type: String,
        required: true,
    },
    propertyCategory: {
        type: String,
        required: true,
    }
});

const Property = model('Property', propertySchema);

module.exports = Property;
