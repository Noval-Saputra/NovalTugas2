// impor model Fakultas
const fakultasSchema = require('../models/fakultas');

// fungsi untuk mengambil isi collection fakultas
const getAllFakultas = async (req, res) => {
    try {
        // mengambil semua fakultas dari database
        const result = await fakultasSchema.find();
        // mengirimkan respon berisi data fakultas dengan status 200 (OK)
        res.status(200).json(result);
    } catch (error) {
        // jika terjadi error, mengirimkan pesan error dengan status 500 (Internal Server Error)
        res.status(500).json({ message: error.message });
    }
};

// fungsi untuk mengambil isi collection fakultas berdasarkan param id
const getAllFakultasById = async (req, res) => {
    try {
        //get collection fakultas by id
        const result = await fakultasSchema.findById(req.params.id);
        if (!result) {
            //jika data fakultas tidak ditemukan tidak ada pada mongodb
            res.status(404).json({ message: 'Fakultas not found' });
        } else {
            //jika data fakultas ada
            res.status(200).json(result);
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateFakultasById = async (req, res) => {
    try {
        //get collection fakultas by id
        const result = await fakultasSchema.findById(req.params.id);
        if (!result) {
            //jika data fakultas tidak ditemukan tidak ada pada mongodb
            res.status(404).json({ message: 'Fakultas not found' });
        } else {
            //jika data fakultas ada
            //jika ada request perubahan nama
            if(req.body.nama != null){
                result.nama = req.body.nama;
            }
            //jika ada request perubahan singkatan
            if(req.body.singkatan != null){
                result.singkatan = req.body.singkatan;
            }
            //update data fakultas
            const updatedFakultas = await result.save();
            res.status(200).json(updatedFakultas);
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// fungsi untuk menghapus isi collection fakultas berdasarkan param id
const deleteAllFakultasById = async (req, res) => {
    try {
        //get collection fakultas by id
        const result = await fakultasSchema.findById(req.params.id);
        if (!result) {
            //jika data fakultas tidak ditemukan tidak ada pada mongodb
            res.status(404).json({ message: 'Fakultas not found' });
        } else {
            //jika data fakultas ada, maka hapus data berdasarkan id
            await result.deleteOne();
            res.status(200).json({message: 'Fakultas berhasil dihapus' });
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createFakultas = async (req, res)=> {
    //buat insatance fakultas baru
    const fakultas = new fakultasSchema({
        nama: req.body.nama,
        singkatan: req.body.singkatan
    })
    
    // simpan data fakultas ke dalam collection
    const hasil = await fakultas.save();
    //beri response json http_created
    res.status(201).json(hasil);
}

// export
module.exports = { getAllFakultas, createFakultas, getAllFakultasById, deleteAllFakultasById, updateFakultasById };