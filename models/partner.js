
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

partnerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    description: {
        type: String, 
        requried: true
    }
},{
    timestamps: true
});

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;