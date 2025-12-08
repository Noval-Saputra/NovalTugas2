const mongoose = require('mongoose');

const beritaSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: true,
        trim: true
    },
    deskripsi: {
        type: String,
        required: true,
        trim: true
    },
    isi: {
        type: String,
        required: true,
        trim: true
    },
    tanggal: {
        type: Date,
        default: Date.now
    }
});

const berita = mongoose.model('berita', beritaSchema);

module.exports = berita;