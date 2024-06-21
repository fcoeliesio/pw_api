const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

router.get('/api/foods', foodController.getListFood);
router.get('/api/foods/:id', foodController.getSearchFood);
router.post('/api/foods', foodController.createNewFood);
router.put('/api/foods/:id', foodController.updateExistFood);
router.delete('/api/foods/:id', foodController.deleteFood);


module.exports = router;