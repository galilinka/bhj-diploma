/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const toggleButton = document.querySelector('.sidebar-toggle');
    const body = document.querySelector('.sidebar-mini');

    toggleButton.onclick = () => {
      body.classList.toggle('sidebar-open');
      body.classList.toggle('sidebar-collapse');
    }
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const menu = document.querySelectorAll('.sidebar-menu .menu-item a')
    menu.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(link.parentElement)
        if (link.parentElement.classList.contains('menu-item_register')) {
          console.log(App.getModal('register').open());
        } else if (link.parentElement.classList.contains('menu-item_login')) {
          console.log(App.getModal('login').open());
        } else if (link.parentElement.classList.contains('menu-item_logout')) {
          console.log(App.getModal('logout').open());
        }
      })
    })
    
  }
}