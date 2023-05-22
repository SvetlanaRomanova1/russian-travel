// Находим элементы в DOM
let headerLangLinks = document.querySelectorAll('.header__lang-link');

// Обработчик нажатия header__lang-link
function handleHeaderLangLink(event) {
    const button = event.target;

// Удаляем класс у всех элементов
    headerLangLinks.forEach((el) => {
        el.classList.remove('header__lang-link_active');
    });


// Добавляем класс к нажатому элементу
    button.classList.add('header__lang-link_active');
}

headerLangLinks.forEach((el) => {
    el.addEventListener('click', handleHeaderLangLink);
});
