const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    namaMenu: {
        type: String,
        required: true,
        trim: true
    },
    harga: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: String,
        required: true,
        trim: true
    },
    kategori_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'kategori'
    }
});

const menu = mongoose.model('menu', menuSchema);

module.exports = menu;