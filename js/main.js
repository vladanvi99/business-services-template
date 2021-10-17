//FIXED HEADER
window.onscroll = function() {stickyHeader()};
var header = document.querySelector(".home-header");

var sticky = header.offsetTop;
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
} 
//NAVIGATION DISPLAY
let hambBtn = document.querySelector('.hamb-btn');
let extMenuBtn = document.querySelector('.exit-menu');

let navDiv = document.querySelector('.navigation');

hambBtn.addEventListener('click', () => {
    navDiv.style.display = "flex";
})
extMenuBtn.addEventListener('click', () => {
    navDiv.style.display = "none";
})

//HOME SECTION 4 CAROUSEL
$(function(){
    $('.home-section-4-carousel').slick({
        dots: true,
        infinite: true,
        prevArrow: ".arrow-prev",
        nextArrow: ".arrow-next",
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
      });
})
