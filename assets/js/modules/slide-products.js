export default function fnSlideProducts_() {
	$('.products-frame').slick({
		dots: false,
		infinite: false,
		arrows: false,
		speed: 500,
		slidesToShow: 3.5,
		slidesToScroll: 3,
		rows: 1,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3.5,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2.5,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 1.5,
					slidesToScroll: 1
				}
			}
		]
	});
}
