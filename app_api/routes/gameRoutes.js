const express = require('express');

const router = express.Router();

const gameControllers = require('../controllers/gameControllers');

router.get('/', gameControllers.getAllGame);
router.get('/:id', gameControllers.getAllGameById);
router.delete('/:id', gameControllers.deleteAllGameById);
router.put('/:id', gameControllers.updateGameById);
router.post('/', gameControllers.createGame);

module.exports = router;