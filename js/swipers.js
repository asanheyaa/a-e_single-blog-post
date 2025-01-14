// swiper initialization
const swiperHero = new Swiper('.swiper-hero', {
	// Optional parameters
	loop: true,
	pagination: {
		el: ".swiper-hero__pagination",
		type: "fraction",
		renderFraction: function (currentClass, totalClass) {
			return `<span class="${currentClass} swiper-pagination-box__current"></span>` +
				`<span class="${totalClass} swiper-pagination-box__total"></span>`;
		}
	},
	autoplay: {
		delay: 5000,
	},
	allowTouchMove: false,


});
const swiperStory = new Swiper('.swiper-story', {
	loop: true,
	pagination: {
		el: ".swiper-story__pagination",
		type: "fraction",
		renderFraction: function (currentClass, totalClass) {
			return `<span class="${currentClass} swiper-pagination-box__current"></span>` +
				`<span class="${totalClass} swiper-pagination-box__total"></span>`;
		}
	},
	spaceBetween: 30,
	breakpoints: {
		992: {
			slidesPerView: 1.5,
			spaceBetween: 70,
		},

	},



});
const swiperAbout = new Swiper('.swiper-about', {
	direction: 'vertical',
	loop: true,
	pagination: {
		el: ".swiper-about__pagination",
		type: "fraction",
		renderFraction: function (currentClass, totalClass) {
			return '<span class="' + currentClass + '"></span>' +
				'<span class="' + totalClass + '"></span>';
		}
	},
	spaceBetween: 30,
	autoHeight: true,
	allowTouchMove: false,



});





const swiperBlogLates = new Swiper('.swiper-blog-latest', {
	loop: true,
	spaceBetween: 17,
	autoHeight: true,

	keyboard: true,
	slidesPerView: 1,
	breakpoints: {
		1300: {
			slidesPerView: 'auto',
			centeredSlides: true,
		},
		800: {
			slidesPerView: 1.75,
			centeredSlides: true,
		},
	},
});

