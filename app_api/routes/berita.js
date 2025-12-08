const express = require('express');

const router = express.Router();

const beritaController = require('../controllers/beritaControllers');
const berita = require('../models/berita');

router.get('/', beritaController.getAllBerita);

router.post('/', async (req, res) => {
    try {
        const newBerita = new berita(req.body);
        const savedBerita = await newBerita.save();
        res.status(201).json(savedBerita);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;