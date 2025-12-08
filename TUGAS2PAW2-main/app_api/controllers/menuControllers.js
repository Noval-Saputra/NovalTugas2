const menuSchema = require('../models/menu');

const getAllMenu = async (req, res) => {
    try {
        const result = await menuSchema.find().populate('kategori_id', 'kategoriMenu deskripsi');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllMenuById = async (req, res) => {
    try {
        const result = await menuSchema.findById(req.params.id);
        if (!result) {
            res.status(404).json({ message: 'Menu not found' });
        } else {
            res.status(200).json(result);
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateMenuById = async (req, res) => {
    try {
        const result = await menuSchema.findById(req.params.id);
        if (!result) {
            res.status(404).json({ message: 'Menu not found' });
        } else {
            if(req.body.namaMenu != null){
                result.namaMenu = req.body.namaMenu;
            }
            if(req.body.harga != null){
                result.harga = req.body.harga;
            }
            if(req.body.rating != null){
                result.rating = req.body.rating;
            }
            const updatedMenu = await result.save();
            res.status(200).json(updatedMenu);
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteAllMenuById = async (req, res) => {
    try {
        const result = await menuSchema.findById(req.params.id);
        if (!result) {
            res.status(404).json({ message: 'Menu not found' });
        } else {
            await result.deleteOne();
            res.status(200).json({message: 'Menu berhasil dihapus' });
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createMenu = async (req, res)=> {
    const menu = new menuSchema({
        namaMenu: req.body.namaMenu,
        harga: req.body.harga,
        rating: req.body.rating
    })
    
    const hasil = await menu.save();
    res.status(201).json(hasil);
}

module.exports = { getAllMenu, getAllMenuById, updateMenuById, deleteAllMenuById, createMenu };