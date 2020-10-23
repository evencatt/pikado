// Создаем переменные для элементов с которыми мы работает
let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function(event){
    // отменяем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс по клику по меню
    menu.classList.toggle('visible');
})