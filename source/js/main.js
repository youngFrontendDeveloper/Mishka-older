var nav = document.querySelector('.nav');
// var mobileMenu = document.querySelector('.mobile-menu');
var mobileMenuButton = document.querySelector('.mobile-menu__button');

// var logoContainer = document.querySelector('.nav__logo');
// var topMenu = document.querySelector('.top-menu');
// var userBlock = document.querySelector('.user-block');




// Закрытие и открытин мобильного меню

function openMobileMenu() {
  if(document.documentElement.clientWidth < 768) {
   nav.classList.add('nav--hidden');
  }
  mobileMenuButton.addEventListener('click', function() {
    mobileMenuButton.classList.toggle('btn-close');
    nav.classList.toggle('nav--hidden');
  });
}

openMobileMenu();


// Открытие и закрытие модального окна

var order = document.querySelector('.week-product__order'); 
var modalContainer = document.querySelector('.modal-container--inner');
var btnAdd = document.querySelector('.btn-add');
var modal = document.querySelector('.modal-inner');
var close = document.querySelector('.btn-close');
var modalBtn = document.querySelector('.modal-btn');

// Открываем модальное окно
order.addEventListener('click', function(event) {
  event.preventDefault();  //Отменяем переход по ссылке, которое установлено по умолчанию
  // event [ɪˈvent]   событие
  modalContainer.style.display = 'block';
    
});


// Закрываем модальное окно
// btnAdd.addEventListener('click', function(event) {
//   event.preventDefault();  // Отменяем действия по умолчанию
//   modalContainer.style.display = 'none';
// });

// close.addEventListener('click', function(event) {
//   modalContainer.style.display = 'none';
// });

// modalBtn.addEventListener('click', function() {
  
//   modalBtn.toggleClass(".modal-btn--pressed");
//   });

// $(function() {
//   $(".modal-btn").click(function() {
//       $(this).toggleClass(".modal-btn--pressed");
//   });
// });


// modal.addEventListener('click', function(event) {
//   modalContainer.style.display = 'block';
// });

// window.addEventListener('keydown', function(event) {
//   // if(event.keyCode === 27) {
//   if(KeyboardEvent.code === 27) {
//       if(modal.style.display == 'block') {
//         modal.style.display = 'none';
          
//       }
//   }
// });


// Слайдер Swiper

var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  // spaceBetween: 60,
  loop: true,
  // autoplay: {
  //   delay:2000,  // Автоплей
  // },
  breakpoints: {
    768: {
      slidesPerView: 1,
      // spaceBetween: 20,
    },
    1150: {
      slidesPerView: 1,
      // spaceBetween: 60,
    }
    
  },


  slideClass: 'swiper-slide', // Класс отдельного слайда
  wrapperClass: 'swiper-wrapper', // Обертка для слайдов
 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// Проигрывание видео

// let videoEl = document.querySelector('.video');
// let playBtn = document.querySelector('.video__link');
// let vidControls = document.getElementById('controls'),


// videoEl.addEventListener('canplaythrough', function () {
//   vidControls.classList.remove('hidden');
//   // videoEl.volume = volumeControl.value;
// }, false);

// // запускам или останавливаем воспроизведение
// playBtn.addEventListener('click', function () {
//   videoEl.style.display = "block";
//   if (videoEl.paused) {  // если видео остановлено, запускаем
//       videoEl.play();
//   } else {
//       videoEl.pause();
//   }
// }, false);

// videoEl.addEventListener('play', function () {

//   playBtn.innerText = "Pause";
// }, false);

// videoEl.addEventListener('pause', function () {

//   playBtn.innerText = "Play";
// }, false);

// volumeControl.addEventListener('input', function () {

//   videoEl.volume = volumeControl.value;
// }, false);

// videoEl.addEventListener('ended', function () {
//   videoEl.currentTime = 0;
// }, false);

// videoEl.addEventListener('timeupdate', function () {
//   timePicker.innerHTML = secondsToTime(videoEl.currentTime);
// }, false);


// Читать далее...

// $(function(){
 
//   $(".reviews__author-text").elimore({
//     maxLength: 300,    //  Количество видимых символов
//     moreText: "Читать далее",   //Текст для ссылки
//     lessText: "Свернуть текст"  //Текст для ссылки
    
//   });
   
//   });

// $('.reviews__author-text').readmore({
//   speed: 75, 
//   moreLink: '<a href="#" class="read-more">Читать далее...</a>', 
//   lessLink: '<a href="#" class="read-more">Свернуть</a>',
//   embedCSS: false,
//   // heightMargin: 0,
//   // collapsedHeight: 200
// });

// $(document).ready(function(){
// 	$('.read-more').click(function(){
// 		$('.reviews__author-text').toggleClass('hide');	
// 		if ($('.reviews__author-text').hasClass('hide')) {
// 			$('.read-more').html('Подробнее');
// 		} else {
// 			$('.read-more').html('Скрыть');
// 		}		
// 		return false;
// 	});				
// });