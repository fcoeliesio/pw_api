const foodService = require('../services/foodService');

const createFood = async (req, res) => {
  try {
    const food = await foodService.postCreateFood(req.body);
    res.status(201).json(food);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getSearchFood = async (req, res) => {
  try {
    const food = await foodService.getFoodById(req.params.id);
    if (!food) {
      return res.status(404).json({ message: 'Comida não encontrada.' });
    }
    res.json(food);
    } catch (error) {
        res.status(400).json({ message: error.message });
  }
};

const getListFood = async (req, res) => {
  try {
    const foods = await foodService.getListFood();
    res.json(foods);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

const updateExistFood = async (req, res) => {
  try {
    const food = await foodService.updateExistFood(req.params.id, req.body);
    if (!food){
      return res.status(404).json({message: 'Comida não encontrada'});
    }
    res.json(food);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

const deleteFood = async (req, res) => {
  try {
    const food = await foodService.deleteFoodById(req.params.id);
    if (!food){
      return res.status(404).json({ message: 'Comida não encontrada.' });
    }
    res.status(200).json({ message: 'Comida deletada com sucesso.' });
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

module.exports = {
  getListFood,
  getSearchFood,
  createFood,
  updateExistFood,
  deleteFood
};