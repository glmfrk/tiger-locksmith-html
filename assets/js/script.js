$(document).ready(function () {
	//=============================
	// Sticky Start
	//=============================

	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll < 200) {
			$(".fixed-menu").removeClass("sticky");
		} else {
			$(".fixed-menu").addClass("sticky");
		}
	});

	//=============================
	// SEARCHBAR
	//=============================

	// $(window).load(function () {
	// 	$(".search-box").css({ display: "none" });
	// });

	$(".searchIcon").on("click", function () {
		$(".search-box").toggle(300);
		// $(".close").show(300);
	});
	$(".close").on("click", function () {
		$(".search-box").hide(300);
	});

	//=============================
	// MOBILE Nav
	//=============================

	$(".toggler-icon").on("click", function () {
		$(".mobile-menu").slideToggle(500);
	});

	$(".search-icon-bar a").on("click", function () {
		$(".search-popup").slideToggle(500);
	});

	$(".banner-slider").owlCarousel({
		loop: true,
		margin: 10,
		autoplay: true,
		nav: true,
		dots: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});

	$(".product-slider").owlCarousel({
		loop: true,
		margin: 10,
		center: false,
		items: 3,
		autoplay: true,
		nav: false,
		dots: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			768: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});
	$(".item-test-contents").owlCarousel({
		loop: true,
		margin: 10,
		center: false,
		items: 3,
		autoplay: true,
		nav: false,
		dots: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1000: {
				items: 3,
			},
		},
	});
});
