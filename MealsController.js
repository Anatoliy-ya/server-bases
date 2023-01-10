import Meals from './Meals.js';
import PostService from './PostService.js';

class MealsController {
  async create(req, res) {
    try {
      const meal = await PostService.create(req.body, req.files.picture);
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const meals = await PostService.getAll();
      return res.json(meals);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async mealOne(req, res) {
    try {
      const meal = await PostService.getOne(req.params.id);
      return res.json(meal);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedMeal = await PostService.update(req.body);
      return res.json(updatedMeal);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async deleteMeal(req, res) {
    try {
      const mealDelete = await PostService.deleteMeal(req.params.id);
      return res.json(mealDelete);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new MealsController();
