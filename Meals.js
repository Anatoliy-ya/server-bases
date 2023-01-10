import mongoose from 'mongoose';

const Meals = new mongoose.Schema({
  // создаем объект с монгус и методом Schema
  // создаем схему наших блюд
  name: { type: String, required: true }, // Тип и параметр required - Обязательный или Нет
  description: { type: String, required: true },
  price: { type: Number, required: true },
  picture: { type: String }, // тут мы будем передавать название картинки, а не саму картинку
});

// далее экспортируем модель с названием 'Meals' по нашей схеме Meals{}
export default mongoose.model('Meals', Meals);
