$(document).ready(function(){
	$('.menu-btn').click(function(){
		$('.mobile').slideToggle(300);
		$(".menu-btn").toggleClass('menu-btn-active');
		$( ".mobile-nav").css( "display", "flex");
		$( ".tablet-catalog").css( "display", "none");
		
	});
	$('.mobile__catalog').click(function(){
		$('.tablet-catalog').slideToggle(300);
		$( ".mobile-nav").css( "display", "none"); 
	});
	$('.tablet__exit').click(function(){
		$('.mobile-nav').slideToggle(300);
		$( ".tablet-catalog").css( "display", "none"); 
	});
});

const swiper = new Swiper('.swiper-container', {
	slidesPerView: 2,
	loop: true,
	navigation: {
    nextEl: '.video-prev',
    prevEl: '.video-next',
	},
	breakpoints: {
		300: {
			slidesPerView: 1
		},
		1110: {
			slidesPerView: 2
		}
	}

	
});

