const mongoose = require('mongoose');

const prodiSchema = new mongoose.Schema({
    nama: {
        type: String, // tipe data string
        required: true, // wajib diisi
        trim: true // menghapus spasi di awal dan akhir
    },
    singkatan: {
        type: String,
        required: true,
        trim: true
    },
    fakultas_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'fakultas',
        required: true
    },
    // field untuk menyimpan tanggal pembuatan dokumen
    createdAt: {
        type: Date, // tipe data tanggal
        default: Date.now //Default adalah waktu saat dokumen dibuat
    }
});

const prodi = mongoose.model('prodi', prodiSchema);

module.exports = prodi;