// Mengimpor modul express untuk membuat router
const express = require('express');
// Membuat intance router dari express
const router = express.Router();

// Mengimpor controller fakultas untuk menangani logika bisnis
const mahasiswaController = require('../controllers/mahasiswaControllers');

router.get('/', mahasiswaController.getAllMahasiswa);

// Mengekspor router agar dapat digunakan di file lain (misalnya di app.js)
module.exports = router;