//инициализация
new Swiper('.image-slider',{
   pagination: {
      el: '.swiper-pagination',
//буллеты
      clickable: true,
   },
   // Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 2,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,
	// Автовысота
	//autoHeight: true,
   // Количество слайдов для показа
	slidesPerView: 'auto',
   //зацикленность
   //loop: true,
   /*
   autoplay: {
		// Пауза между прокруткой
		delay: 3000,
		// Закончить на последнем слайде
		stopOnLastSlide: true,
		// Отключить после ручного переключения
		disableOnInteraction: false
	}, */
  
}
);
let mainsliderImages = document.querySelectorAll('.mainslider__image');

let mainsliderDotts = document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet');
for (let index =0; index < mainsliderImages.length; index++) {
//получаем значение атрибута
   const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
  //проверка  console.log(mainsliderImage);
  mainsliderDotts[index].style.backgroundImage = "url('" + mainsliderImage + "')";
}
