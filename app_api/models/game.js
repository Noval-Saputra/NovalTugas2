const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    namaGame: {
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

const game = mongoose.model('game', gameSchema);

module.exports = game;