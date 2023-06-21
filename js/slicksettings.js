
$('.team-carousel').slick({
	centerMode: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,
    mobileFirst: true,
	centerPadding: '40px',
	slidesToShow: 1,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '60px',
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 992,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '60px',
				slidesToShow: 3,
			},
		},
	],
});

