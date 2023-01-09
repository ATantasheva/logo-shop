/*
//анимация сабменю - бокового меню
const menuParents = document.querySelectorAll('.menu-page__link_parent');
//получаем массив карточк сабменю
const submenuItems = document.querySelectorAll('.submenu-page__item')

// циклом вешаем событие при наведении
for(let index=0; index < menuParents.length; index++) {
   //созд конст menuParent
   const menuParent = menuParents[index];
   menuParent.addEventListener('mouseenter', function(e) {
      //при наведении получаем в конст цифру атрибута из html
const submenuNumber = parseInt(menuParent.getAttribute('data-item'));
//при наведении карточка сабменю по ключу полученному обращаемся и добавляем класс актив
submenuItems[submenuNumber].classList.add('_active');

   });
}
*/
//анимация субменю при наведении
//обращаемся к ли которые с модификатором парент
const menuParents = document.querySelectorAll('.menu-page__parent');
// циклом бежим по всем из menuParents
for(let index=0; index < menuParents.length; index++) {
   //созд конст menuParent с ключем
   const menuParent = menuParents[index];
   menuParent.addEventListener('mouseenter', function(e) {
//при наведении карточка сабменю по ключу полученному обращаемся и добавляем класс актив
menuParent.classList.add('_active');

   });
   menuParent.addEventListener('mouseleave', function(e) {
      menuParent.classList.remove('_active');
   });
}
//==================================================================================
//делаем бургер на сайдбар
//обращаемся к бургеру
const menuPageBurger = document.querySelector('.menu-page__burger');
//обращаемся к оболочке боди которую надо скрыть
const menuPageBody = document.querySelector('.menu-page__body');
//по клику на бургер добавляем класс
menuPageBurger.addEventListener('click', function(e) {
   menuPageBurger.classList.toggle('_active');
   menuPageBody.classList.toggle('_active');
});

//==================================================================================
//делаем выпадающий поиск - категории
//берем объект кнопка 

const searchSelect = document.querySelector('.search-page__title');
console.log(searchSelect);
const categoriesSearch = document.querySelector('.categories-search');
//вешаем событие на кнопку
searchSelect.addEventListener('click', function(e) {
   //вешаем класс на кнопку
   searchSelect.classList.toggle('_active'); //анимация переворота стрелки
   categoriesSearch.classList.toggle('_active');
});
//делаем чтобы отображалось сколько категорий выбрано
const checkboxCategories = document.querySelectorAll('.categories-search__checkbox');

for(let index=0; index < checkboxCategories.length; index++) {
 //созд конст checkboxCategorie и присваиваем ключи
 const checkboxCategorie = checkboxCategories[index];
 //когда выбран чекбокс надо событие 'change'
 checkboxCategorie.addEventListener('change', function(e) { 
   //доб класс актив
   checkboxCategorie.classList.toggle('_active');
// получаем в конст те чекбоксы которые актив
const checkboxactiveCategories = document.querySelectorAll('.categories-search__checkbox._active');
//усл если длина массива больше 0
if(checkboxactiveCategories.length > 0) {
   //доб класс к объекту везде
   searchSelect.classList.add('_categories');
   //в конст получаем спан выбрано:
   const changeQuantity = searchSelect.querySelector('.change');
   //выводим кол-во выбран элементов
   //в html атрибут со словом выбрано 
   //прибавляем длину (кол-во ) элементов с актив
   changeQuantity.innerHTML = changeQuantity.getAttribute('data-text') + checkboxactiveCategories.length;
} else {
   searchSelect.classList.remove('_categories');
}
 });
}
