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
//вставка картинок в буллеты
let mainsliderImages = document.querySelectorAll('.mainslider__image');

let mainsliderDotts = document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet');
for (let index =0; index < mainsliderImages.length; index++) {
//получаем значение атрибута
   const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
  //проверка  console.log(mainsliderImage);
  mainsliderDotts[index].style.backgroundImage = "url('" + mainsliderImage + "')";
}



//проверка на существование слайдера
if(document.querySelector('.products-slider')) {
let productsSlider = new Swiper('.product-item__slider', {
   observer: true,
   observeParents:true,
slidesPerView: 1,
spaceBetween: 0,
autoHeight: true,
speed: 800,
//loop: true,
pagination: {
   el: '.products-slider__info',
   type: 'fraction'
}, 
//стрелки
navigation: {
   nextEl:'.products-slider__arrow_next',
   prevEl:'.products-slider__arrow_prev',
},
})

};

