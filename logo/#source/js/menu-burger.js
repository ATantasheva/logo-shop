"use strict"
//код для определения на каком усройтве открыт сайт
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};
// проверяем усл где открыт сайт и доб определенный класс
if (isMobile.any()) {
   document.body.classList.add('_touch');
} else {
   document.body.classList.add('_pc');
}

//Меню бургер

//получаем объект
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
//проверка есть ли такой объект
if(iconMenu) {

iconMenu.addEventListener('click', function(e) {
   //запрет скролла страницы под меню
   document.body.classList.toggle('._lock');
   iconMenu.classList.toggle('_active');
   menuBody.classList.toggle('_active');
} );
}

