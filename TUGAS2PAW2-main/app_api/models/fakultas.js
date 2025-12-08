// mengimpor modul mongoose untuk mengelola skema dan model MongoDB
const mongoose = require('mongoose');

// Definisi skema untuk koleksi 'Fakultas'
const fakultasSchema = new mongoose.Schema({
    // field untuk nama fakultas
    nama: {
        type: String, // tipe data string
        required: true, // wajib diisi
        trim: true // menghapus spasi di awal dan akhir
    },
    // field untuk singkatan fakultas
    singkatan: {
        type: String,
        required: true,
        trim: true
    },
    // field untuk menyimpan tanggal pembuatan dokumen
    createdAt: {
        type: Date, // tipe data tanggal
        default: Date.now //Default adalah waktu saat dokumen dibuat
    }
});

// Buat model Fakultas berdasarkan skema yang telah didefinisikan
const fakultas = mongoose.model('fakultas', fakultasSchema);

// mengekspor model Fakultas agar dapat digunakan di bagian lain aplikasi
module.exports = fakultas;