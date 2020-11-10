var nav = document.querySelector('.nav');
// var logoContainer = document.querySelector('.nav__logo');
// var topMenu = document.querySelector('.top-menu');
// var userBlock = document.querySelector('.user-block');
var mobileMenu = document.querySelector('.mobile-menu');
var mobileMenuButton = document.querySelector('.mobile-menu__button');



// Закрытие и открытин мобильного меню

function openMobileMenu() {
  if(document.documentElement.clientWidth < 768) {
   nav.classList.add('nav--hidden');
  }
  mobileMenuButton.addEventListener('click', function() {
    mobileMenuButton.classList.toggle('mobile-menu__button--close');
    nav.classList.toggle('nav--hidden');
  });
}

openMobileMenu();

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