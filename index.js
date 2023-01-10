import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';

const PORT = 5000; // порт на котором наше приложение
const URL_DB = `mongodb+srv://user:user123@cluster0.myrcdfm.mongodb.net/?retryWrites=true&w=majority`; // это наша база данных на монго ДБ которую мы создали на сайте https://cloud.mongodb.com

const app = express(); // присваиваем функцию експресс, чтобы потом обращаться к експресс функции
app.use(express.json()); // не забываем преобразовывать в JSON
app.use(express.static('static')); //указываем метод static и указываем путь к папке с файлом
app.use(fileUpload({}));
app.use('/api', router);

async function startApp() {
  // асинхроность функции запуска нашей DB
  try {
    // отлавливаем ошибки
    await mongoose.connect(URL_DB, { useUnifiedTopology: true, useNewUrlParser: true });
    app.listen(PORT, () => console.log('SERVER START - ' + PORT));
  } catch (e) {
    // если будет ошибка, то выводим ее в консоль
    console.log(e);
  }
}

startApp(); // не забываем вызвывать функцию
