/**
 * Класс AsyncForm управляет всеми формами
 * приложения, которые не должны быть отправлены с
 * перезагрузкой страницы. Вместо этого данные
 * с таких форм собираются и передаются в метод onSubmit
 * для последующей обработки
 * */
class AsyncForm {
  /**
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * Сохраняет переданный элемент и регистрирует события
   * через registerEvents()
   * */
  constructor(element) {
    try {
      if (!element) {
        throw console.log('err')
      } else {
        this.element = element;
        this.registerEvents();
      }
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * Необходимо запретить отправку формы и в момент отправки
   * вызывает метод submit()
   * */
  registerEvents() {
    this.element.addEventListener('submit', this.submit)
  }

  /**
   * Преобразует данные формы в объект вида
   * {
   *  'название поля формы 1': 'значение поля формы 1',
   *  'название поля формы 2': 'значение поля формы 2'
   * }
   * */
  getData = () => {
  //console.log([...this.element.querySelectorAll('input')].reduce((input, obj) => obj[input.name] = input.value, {}))
  let inputs = this.element.querySelectorAll('input');
  let object = {};
  inputs.forEach(input => {
    object[input.name] = input.value;
  })
  return object;
}
  onSubmit(options){
  
  }

  /**
   * Вызывает метод onSubmit и передаёт туда
   * данные, полученные из метода getData()
   * */
  submit = (e) => {
    e.preventDefault();
    this.onSubmit(this.getData());
  }
}