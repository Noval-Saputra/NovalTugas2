const kategoriSchema = require('../models/kategori');

const getAllKategori = async (req, res) => {
    try {
        const result = await kategoriSchema.find().populate('menu_id', 'namaMenu rating');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllKategoriById = async (req, res) => {
    try {
        const result = await kategoriSchema.findById(req.params.id);
        if (!result) {
            res.status(404).json({ message: 'Menu not found' });
        } else {
            res.status(200).json(result);
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateKategoriById = async (req, res) => {
    try {
        const result = await kategoriSchema.findById(req.params.id);
        if (!result) {
            res.status(404).json({ message: 'Menu not found' });
        } else {
            if(req.body.kategoriMenu != null){
                result.kategoriMenu = req.body.kategoriMenu;
            }
            if(req.body.deskripsi != null){
                result.deskripsi = req.body.deskripsi;
            }
            const updatedKategori = await result.save();
            res.status(200).json(updatedKategori);
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteAllKategoriById = async (req, res) => {
    try {
        const result = await kategoriSchema.findById(req.params.id);
        if (!result) {
            res.status(404).json({ message: 'Kategori not found' });
        } else {
            await result.deleteOne();
            res.status(200).json({message: 'Kategori berhasil dihapus' });
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createKategori = async (req, res)=> {
    const kategori = new kategoriSchema({
        kategoriMenu: req.body.kategoriMenu,
        deskripsi: req.body.deskripsi
    })
    
    const hasil = await kategori.save();
    res.status(201).json(hasil);
}

module.exports = { getAllKategori, getAllKategoriById, updateKategoriById, deleteAllKategoriById, createKategori };