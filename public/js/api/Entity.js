/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
class Entity {
  /**
   * Запрашивает с сервера список данных.
   * Это могут быть счета или доходы/расходы
   * (в зависимости от того, что наследуется от Entity)
   * */
static URL = '';

  static list(data, callback){
    createRequest('http://localhost:8000', data, callback)
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create(data, callback) {
    createRequest('http://localhost:8000', data, callback)
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove(data, callback ) {
    createRequest('http://localhost:8000', data, callback)
  }
}

console.log('URL', Entity.URL)


createRequest({
  url: 'http://localhost:8000', // адрес
  data: { // произвольные данные, могут отсутствовать
    email: 'ivan@poselok.ru',
    password: 'odinodin'
  },
  method: 'GET', // метод запроса
  /*
    Функция, которая сработает после запроса.
    Если в процессе запроса произойдёт ошибка, её объект
    должен быть в параметре err.
    Если в запросе есть данные, они должны быть переданы в response.
  */
  callback: (err, response) => {
      if (err) {
          console.log( 'Ошибка, если есть', err );
      } else {
          console.log( 'Данные, если нет ошибки', response );
      }
  }
});