const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
        default: []
    },
    lengths: {
        type: Number,
        default: 1
    },
    services: {
        type: Number,
        default: 1
    },
    environments: {
        type: Number,
        default: 1
    },ratings: {
        type: Number,
        default: 1
    },shapes: {
        type: Number,
        default: 1
    },types: {
        type: Number,
        default: 1
    },shapes: {
        type: Number,
        default: 1
    },enhancementExtensions: {
        type: Number,
        default: 1
    },nailArts: {
        type: Number,
        default: 1
    },
    locations: {
        type: Number,
        default: 1
    },
    sold: {
        type: Number,
        maxlength: 100,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    }
}, { timestamps: true })


productSchema.index({ 
    title:'text',
    description: 'text',
}, {
    weights: {
        name: 5,
        description: 1,
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = { Product }