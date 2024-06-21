const express = require('express');
const router = express.Router();

router.get('/api/foods');
router.get('/api/foods/:id');
router.post('/api/foods');
router.put('/api/foods/:id');
router.delete('/api/foods/:id');
