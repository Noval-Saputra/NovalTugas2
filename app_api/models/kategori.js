const mongoose = require('mongoose');

const kategoriSchema = new mongoose.Schema({
    kategoriMenu: {
        type: String,
        required: true,
        trim: true
    },
    deskripsi: {
        type: String,
        required: true,
        trim: true
    },
    menu_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'menu'
    }
});

const kategori = mongoose.model('kategori', kategoriSchema);

module.exports = kategori;