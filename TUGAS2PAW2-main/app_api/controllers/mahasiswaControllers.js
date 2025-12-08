// impor model mahasiswa
const mahasiswa = require('../models/mahasiswa');

// fungsi untuk mengambil isi collection fakultas
const getAllMahasiswa = async (req, res) => {
    try {
        // mengambil semua prodi dari database
        const result = await mahasiswa.find().populate([{path:'prodi_id', select:'nama singkatan', populate:{path:'fakultas_id', select:'nama singkatan'}}]);
        // mengirimkan respon berisi data fakultas dengan status 200 (OK)
        res.status(200).json(result);
    } catch (error) {
        // jika terjadi error, mengirimkan pesan error dengan status 500 (Internal Server Error)
        res.status(500).json({ message: error.message });
    }
};

// export
module.exports = { getAllMahasiswa };