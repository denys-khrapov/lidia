document.addEventListener("DOMContentLoaded", function () {
	initSwiper()

	function initSwiper() {
		let reviewsSlider = new Swiper(".reviews-slider", {
			slidesPerView: 3,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				675: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
			},
		})
	}
})
