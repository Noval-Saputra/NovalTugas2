const express = require('express');

const router = express.Router();

const menuController = require('../controllers/menuControllers');

router.get('/', menuController.getAllMenu);
router.get('/:id', menuController.getAllMenuById);
router.delete('/:id', menuController.deleteAllMenuById);
router.put('/:id', menuController.updateMenuById);
router.post('/', menuController.createMenu);

module.exports = router;