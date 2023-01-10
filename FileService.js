import * as uuid from 'uuid';
import * as path from 'path';

class FileService {
  saveFile(file) {
    try {
      // одна функция которая будет созранять файл на диск
      const fileName = uuid.v4() + '.jpg'; // генирируем ID и добавляем окончание .jpg
      const filePath = path.resolve('static', fileName); //создаём путь куда будем сохранять наш файл
      // static это папка, где будут храниться все файлы
      file.mv(filePath); // вызываем метод .mv и передаём туда путь к файлу
      return fileName; // и возвращаем имя файла
    } catch (e) {
      console.log(e);
    }
  }
}

export default new FileService();
