const berita = require('../models/berita');

const getAllBerita = async (req, res) => {
    try {
        const result = await berita.find();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllBerita };