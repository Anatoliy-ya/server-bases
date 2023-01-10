import Meals from './Meals.js';
import FileService from './FileService.js';

class PostService {
  async create(meal, picture) {
    const fileName = FileService.saveFile(picture);
    const createMeal = await Meals.create({ ...meal, picture: fileName });
    return createMeal;
  }

  async getAll() {
    const meals = await Meals.find();
    return meals;
  }

  async mealOne(id) {
    if (!id) {
      throw new Error('ID не указан');
    }
    const meal = await Meals.findById(id);
    return meal;
  }

  async update(meal) {
    if (!meal._id) {
      throw new Error('ID не указан');
    }
    const updatedMeal = await Meals.findByIdAndUpdate(meal._id, meal, { new: true });
    return updatedMeal;
  }

  async deleteMeal(id) {
    if (!id) {
      throw new Error('ID не указан');
    }
    const meal = await Meals.findByIdAndDelete(id);
    return meal;
  }
}

export default new PostService();
