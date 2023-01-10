import Router from 'express';
import MealsController from './MealsController.js';

// создаем экземпляр  роутера
const router = new Router();

// у роутера мы можем вызывать всё теже методы GET POST PUT DELETE
router.post('/posts', MealsController.create); // создание поста
router.get('/posts', MealsController.getAll); // запрос постов
router.get('/posts/:id', MealsController.mealOne); // запросто опеределеного поста по ID
router.put('/posts', MealsController.update); // изменение созданного поста
router.delete('/posts/:id', MealsController.deleteMeal); // удаление поста по ID

export default router;
