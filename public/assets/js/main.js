(function ($) {
	"use strict";

	// $(".msg-trigger-btn").on("click", function (event) {
	// 	event.stopPropagation();
	// 	event.preventDefault();
	// 	var $this = $(this);
	// 	var $prevTartget = $(this).parent().siblings().children(".msg-trigger-btn").attr('href');
	// 	var target = $this.attr('href');
	// 	$(target).slideToggle();
	// 	$($prevTartget).slideUp();
		
    // });

	// //Close When Click Outside
	// $('body').on('click', function(e){
	// 	var $target = e.target;
	// 	if (!$($target).is('.message-dropdown') && !$($target).parents().is('.message-dropdown')) {
	// 		$(".message-dropdown").slideUp("slow");
	// 	}
	// });

	//Background Image JS start
	// var bgSelector = $(".bg-img");
	// bgSelector.each(function (index, elem) {
	// 	var element = $(elem),
	// 		bgSource = element.data('bg');
	// 	element.css('background-image', 'url(' + bgSource + ')');
	// });

    // video player active js
	var plyrVideo = new Plyr('.plyr-video'),
      	plyrAudio = new Plyr('.plyr-audio'),
      	plyrYoutube = new Plyr('.plyr-youtube'),
		plyrVimeo = new Plyr('.plyr-vimeo');
		  

	// live chat box and friend search box active js
	// $(".profile-active").on('click', function(){
	// 	$(".chat-output-box").addClass('show');
	// })
	// $(".search-field").on('click', function(){
	// 	$(".friend-search-list").addClass('show');
	// })
	// $(".close-btn").on('click', function(){
	// 	var $this = $(this),
	// 		$target = $this.data('close');
	// 	$('.'+$target).removeClass('show');
	// })
	
	// mobile header seach box active
	// $(".search-trigger").on('click', function(){
	// 	$('.search-trigger, .mob-search-box').toggleClass('show');
	// })
	
	// $(".chat-trigger, .close-btn").on('click', function(){
	// 	$('.mobile-chat-box').toggleClass('show');
	// })
	// $(".request-trigger").on('click', function(){
	// 	$('.frnd-request-list').toggleClass('show');
	// })

	// mobile friend search active js
	// $(".search-toggle-btn").on('click', function(){
	// 	$('.mob-frnd-search-inner').toggleClass('show');
	// })


	// perfect scroll bar js
	// $('.custom-scroll').each(function(){
	// 	var ps = new PerfectScrollbar($(this)[0]);
	// });


	// light gallery active js
	// $(document).ready(function() {
    //     $(".img-popup").lightGallery(); 

	// 	// light gallery images
    //     $(".img-gallery").lightGallery({
	// 		selector: ".gallery-selector",
	// 		hash: false
	// 	}); 
	// });

	// $('.gallery-toggle').on('click', function () {

	// var productThumb = $(this).find(".product-thumb-large-view img"),
	// 		imageSrcLength = productThumb.length,
	// 		images = [];
	// 	for (var i = 0; i < imageSrcLength; i++) {
	// 		images[i] = {"src": productThumb[i].src, "thumb": productThumb[i].src};
	// 	}

	// 	$(this).lightGallery({
	// 		dynamic: true,
	// 		actualSize: false,
	// 		hash: false,
	// 		index: 0,
	// 		dynamicEl: images
	// 	});

	// });

	// photo filter active js
	$('.photo-filter').imagesLoaded( function() {
		var $grid = $('.photo-filter, .friends-list').isotope({
		});
		// filter items on button click
		$('.filter-menu').on( 'click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
			$(this).siblings('.active').removeClass('active');
	         $(this).addClass('active');
		});
		
	});

	// nice select active js
	$('select').niceSelect();

	// Scroll to top active js
	// $(window).on('scroll', function () {
	// 	if ($(this).scrollTop() > 600) {
	// 		$('.scroll-top').removeClass('not-visible');
	// 	} else {
	// 		$('.scroll-top').addClass('not-visible');
	// 	}
	// });
	// $('.scroll-top').on('click', function (event) {
	// 	$('html,body').animate({
	// 		scrollTop: 0
	// 	}, 1000);
	// });


	$('#email').bind("cut copy paste",function(e) {
		e.preventDefault();
	});
    
})(jQuery);