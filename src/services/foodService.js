const foodModel = require('../models/foodModel');

const postCreateFood = async (foodData) => {
  const food = new foodModel(foodData);
  await food.save();
  return food;
};

const getFoodById = async (id) => {
  return await foodModel.findById(id);
};

const getListFood = async ()=>{
  return await foodModel.find();
}

const updateExistFood = async (id, foodData) =>{
  return await foodModel.findByIdAndUpdate(id, foodData, {new:true});
}

const deleteFoodById = async (id) => {
  return await foodModel.findByIdAndDelete(id);
}

module.exports = {
  postCreateFood,
  getFoodById,
  getListFood,
  updateExistFood,
  deleteFoodById
};