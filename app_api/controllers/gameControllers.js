const gameSchema = require('../models/game');

const getAllGame = async (req, res) => {
    try {
        const result = await gameSchema.find().populate('kategori_id', 'kategoriGame deskripsi');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllGameById = async (req, res) => {
    try {
        const result = await gameSchema.findById(req.params.id);
        if (!result) {
            res.status(404).json({ message: 'Game not found' });
        } else {
            res.status(200).json(result);
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateGameById = async (req, res) => {
    try {
        const result = await gameSchema.findById(req.params.id);
        if (!result) {
            res.status(404).json({ message: 'Game not found' });
        } else {
            if(req.body.namaGame != null){
                result.namaGame = req.body.namaGame;
            }
            if(req.body.harga != null){
                result.harga = req.body.harga;
            }
            if(req.body.rating != null){
                result.rating = req.body.rating;
            }
            const updatedGame = await result.save();
            res.status(200).json(updatedGame);
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteAllGameById = async (req, res) => {
    try {
        const result = await gameSchema.findById(req.params.id);
        if (!result) {
            res.status(404).json({ message: 'Game not found' });
        } else {
            await result.deleteOne();
            res.status(200).json({message: 'Game berhasil dihapus' });
        }
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createGame = async (req, res)=> {
    const game = new gameSchema({
        namaGame: req.body.namaGame,
        harga: req.body.harga,
        rating: req.body.rating
    })
    
    const hasil = await game.save();
    res.status(201).json(hasil);
}

module.exports = { getAllGame, getAllGameById, updateGameById, deleteAllGameById, createGame };