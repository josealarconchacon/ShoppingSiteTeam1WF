jQuery(function ($) {
	'use strict';

    // Start Menu JS
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 50) {
			$('.main-nav').addClass('menu-shrink');
		} else {
			$('.main-nav').removeClass('menu-shrink');
		}
    });	
    
	// Mean Menu JS
	$('.mean-menu').meanmenu({
    	meanScreenWidth: '991'
	});
	
	// Search Box JS
	$('.search-toggle').addClass('closed');
	$('.search-toggle .search-icon').on('click', function(e) {
		if ($('.search-toggle').hasClass('closed')) {
		$('.search-toggle').removeClass('closed').addClass('opened');
		$('.search-toggle, .search-area').addClass('opened');
		$('#search-terms').focus();
		} else {
		$('.search-toggle').removeClass('opened').addClass('closed');
		$('.search-toggle, .search-area').removeClass('opened');
		}
	});

	// Sidebar Modal JS
	$('.modal a').not ('.dropdown-toggle').on('click', function() {
		$ ('.modal').modal ('hide');
	});

	// Banner Slider JS
	$('.banner-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 15,
		singleItem: true,
		nav: false,
		dots: true,
		animateOut: 'fadeOut',
		smartSpeed: 1000,
		rtl: true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
    });

	// Testimonial Slider JS
	$('.testimonial-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 15,
		singleItem: true,
		nav: false,
		dots: false,
		smartSpeed: 1000,
		autoplay: true,
		rtl: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
	});

	// Upcoming Movies Slider JS
	$('.upcoming-movies-slides').owlCarousel({
		items: 1,
		slideSpeed: 2000,
		nav: true,
		rtl: true,
		autoplay: true,
		dots: false,
		autoplayHoverPause: true,
		loop: true,
		navText: [
			'<i class="bx bx-chevron-right"></i>',
			'<i class="bx bx-chevron-left"></i>'
		]
	});

	// Popup Youtube JS
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

	// Accordion JS
	$('.accordion > li:eq(0) a').addClass('active').next().slideDown();
	$('.accordion a').on('click', function(j) {
		var dropDown = $(this).closest('li').find('p');
		$(this).closest('.accordion').find('p').not(dropDown).slideUp();
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} 
		else {
			$(this).closest('.accordion').find('a.active').removeClass('active');
			$(this).addClass('active');
		}
		dropDown.stop(false, true).slideToggle();
		j.preventDefault();
	});

	// Back to Top JS 
	$('body').append('<div id="toTop" class="back-to-top-btn"><i class="bx bxs-up-arrow-alt"></i></div>');
	$(window).on('scroll', function() {
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} 
		else {
			$('#toTop').fadeOut();
		}
	}); 
	$('#toTop').on('click', function(){
		$('html, body').animate({ scrollTop: 0 }, 900);
		return false;
	});
	
}(jQuery));






