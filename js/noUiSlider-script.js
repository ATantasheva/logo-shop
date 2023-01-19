
const priceSlider = document.querySelector('.price-filter__slider');
noUiSlider.create(priceSlider, {
    start: [0, 100000],
    connect: true,
    //формат вывода цифр
    tooltips: [wNumb({ decimals: 0}), wNumb({ decimals: 0}) ], //чтобы бегали цифры
    range: {
        'min': [0],
        'max': [200000]
    }
});
//связываем инпуты и слайдер
const priceStart = document.getElementById('price-start');
const priceEnd = document.getElementById('price-end');
//при выбопре инпуста запускается ф-ция
priceStart.addEventListener('change', setPriceValues); 
priceEnd.addEventListener('change', setPriceValues);
//сама ф-ция
function setPriceValues() {
   let priceStartValue;
   let priceEndValue;
   if(priceStart.value !='') {
      priceStartValue = priceStart.value;
   } if(priceEnd.value != '') {
      priceEndValue = priceEnd.value;
   } //здесь массив
      priceSlider.noUiSlider.set([priceStartValue, priceEndValue])
   
}