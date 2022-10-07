import * as flsFunctions from "./modules/functions.js";
import "./modules/news.js";
import "./modules/main.js";
import "./modules/catalog.js";
import "./modules/card.js";
import "./modules/registration.js";
import "./modules/headerPopUp.js";
flsFunctions.isWebp();

const swiper = new Swiper('.swiper', {

});


//Burger menu bottom header
$(document).ready(function() {
	$('.header-burger-media').click(function(event) {
		$('.header-burger-media,.header-media__menu,.header-1024').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

//foote
$(document).ready(function() {
	$('.header__burger-footer').click(function(event) {
		$('.header__burger-footer,.footer-menu__list').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

// ===========================================
const list = document.querySelectorAll('.gross-main__btn-contents li')
 list.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
        list.forEach(el=>{ el.classList.remove('active'); });
        item.classList.add('active')
    })
})


