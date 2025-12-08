// Mengimpor modul express untuk membuat router
const express = require('express');
// Membuat intance router dari express
const router = express.Router();

// Mengimpor controller fakultas untuk menangani logika bisnis
const fakultasController = require('../controllers/fakultasControllers');

// Mengatur rute GET untuk mendapatkan semua data fakultas
router.get('/', fakultasController.getAllFakultas);
router.get('/:id', fakultasController.getAllFakultasById);
router.delete('/:id', fakultasController.deleteAllFakultasById);
router.put('/:id', fakultasController.updateFakultasById);
router.post('/', fakultasController.createFakultas);

// Mengekspor router agar dapat digunakan di file lain (misalnya di app.js)
module.exports = router;