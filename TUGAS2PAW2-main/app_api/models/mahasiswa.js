const mongoose = require('mongoose');

const mahasiswaSchema = new mongoose.Schema({
    npm: {
        type: String, // tipe data string
        required: true, // wajib diisi
        trim: true // menghapus spasi di awal dan akhir
    },
    nama: {
        type: String, // tipe data string
        required: true, // wajib diisi
        trim: true // menghapus spasi di awal dan akhir
    },
    prodi_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'prodi',
        required: true
    },
    tempat_lahir: {
        type: String, // tipe data string
        required: true, // wajib diisi
        trim: true // menghapus spasi di awal dan akhir
    },
    tanggal_lahir: {
        type: String, // tipe data string
        required: true, // wajib diisi
        trim: true // menghapus spasi di awal dan akhir
    }
});

const mahasiswa = mongoose.model('mahasiswa', mahasiswaSchema);

module.exports = mahasiswa;