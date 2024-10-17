const swiper = new Swiper('.mainSwiper', {

   loop: true,

   pagination: {
      el: '.swiper-pagination',
      type: "fraction",
   },

   // Navigation arrows
   navigation: {
      nextEl: '.next_btn',
      prevEl: '.prev_btn',
   },

});

// 메뉴버튼 클릭
const $menu_btn = document.querySelector('.menu_btn')
const $body = document.querySelector('body')

$menu_btn.addEventListener('click', function(){
   $body.classList.toggle('open')
})


/* 슬라이드메뉴 클릭하면 특정 슬라이드로 가기
   swiper.slideTo(index, speed, runCallbacks)
   index-이동할 슬라이드의 인덱스(필수)
   speed-슬라이드 이동에 걸리는 시간 (default-300)
   runCallbacks- 콜백함수
*/
// const $hotel = document.querySelector('.hotel')
// $hotel.addEventListener('click', function(){
//    $body.classList.remove('open')
//    swiper.slideTo(2, 1000)
// })

const menus = document.querySelectorAll('.gnb a')
   menus.forEach( (menu,idx) => {
      menu.addEventListener('click', function(){
         $body.classList.remove('open')
         swiper.slideTo(idx, 1000)
      })
   })