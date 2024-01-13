// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

// Моб. версия
fakeResize = false
fakeResize2 = true

if (document.body.clientWidth < 360) {
	document.getElementsByTagName('meta')['viewport'].content = 'width=360, user-scalable=no'
}

$(() => {
	$('body').on('click', '.mob-menu-btn', function (e) {
		e.preventDefault()

		$('.header__block').addClass('_show')
		$('body').addClass('_menu-open')
	})


	$('body').on('click', '.mob-menu-close', function (e) {
		e.preventDefault()

		$('.header__block').removeClass('_show')
		$('body').removeClass('_menu-open')
	})


	$('body').on('submit', '.forgot-send', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#modal-recovery',
			type: 'inline'
		}])
	})


	if ($('.brands__slider').length) {
		new Swiper(".brands__slider", {
			loop: false,
			spaceBetween: 42,
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 42
				},
				'480': {
					spaceBetween: 34
				}
			}
		})
	}


	if ($('.partners__slider').length) {
		new Swiper(".partners__slider", {
			loop: false,
			spaceBetween: 48,
			slidesPerView: 'auto',
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 28
				},
				'480': {
					spaceBetween: 48
				}
			}
		})
	}

	if ($('.stocks__slider').length) {
		new Swiper(".stocks__slider", {
			loop: false,
			spaceBetween: 20,
			slidesPerView: 3,
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 20,
					slidesPerView: 1
				},
				'480': {
					spaceBetween: 10,
					slidesPerView: 2
				},
				'768': {
					spaceBetween: 20,
					slidesPerView: 2
				},
				'1025': {
					spaceBetween: 10,
					slidesPerView: 3
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.el).find('.swiper-wrapper').wrap('<div class="swiper-overflow"></div>')
				}
			}
		})
	}


	//
	if ($('.main-reviews__slider').length) {
		mainPeviewsSlider = new Swiper('.main-reviews__slider', {
			loop: true,
			watchSlidesProgress: true,
			watchOverflow: true,
			spaceBetween: 20,
			slidesPerView: 1,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			on: {
				slideChange: function (swiper) {
					$(swiper.$el).closest('.main-reviews').find('.main-reviews__list-item').removeClass('active')

					$(swiper.$el).closest('.main-reviews').find(`.main-reviews__list-item:eq(${swiper.realIndex})`).addClass('active')
				}
			}
		})

		$('body').on('click', '.main-reviews__list-item', function(e) {
			e.preventDefault()

			let numberSlide = $(this).data('index-slide');
			mainPeviewsSlider.slideToLoop(numberSlide);
		})
	}


	if ($('.main-galllery__slider').length) {
		mainGalllery = new Swiper(".main-galllery__slider", {
			spaceBetween: 0,
			slidesPerView: "auto",
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			keyboard: {
				enabled: true,
				onlyInViewport: true,
				pageUpDown: true
			},
			mousewheel: {
				sensitivity: 1,
			},
			nested: true,
		})
	}


	if ($('.product-info__photo').length) {
		productInfoBrands = new Swiper(".product-info__photo", {
			loop: false,
			spaceBetween: 25,
			slidesPerView: 3,
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			rewind: true,
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			breakpoints: {
				'320': {
					spaceBetween: 25,
					slidesPerView: 3,
				},
				'480': {
					spaceBetween: 25,
					slidesPerView: 4,
				},
				'768': {
					spaceBetween: 25,
					slidesPerView: 5,
				},
				'1025': {
					spaceBetween: 25,
					slidesPerView: 5,
				},
				'1200': {
					spaceBetween: 40,
					slidesPerView: 5,
				},
				'1400': {
					spaceBetween: 50,
					slidesPerView: 5,
				}
			},
		})

		productInfoPhoto = new Swiper(".product-info__photo-slider", {
			loop: false,
			spaceBetween: 20,
			slidesPerView: 1,
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			rewind: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false
			},
			lazy: {
				loadPrevNext: true,
				elementClass: 'lazyload',
				enabled: true,
				loadedClass: 'loaded',
				checkInView: true,
				loadOnTransitionStart: true
			},
			thumbs: {
				swiper: productInfoBrands
			}
		})
	}


	//
	$('body').on('click', '.amount__btn_minus', function (e) {
		e.preventDefault()

		let parent = $(this).closest('.amount')
		let input = parent.find('input')
		let inputVal = parseFloat(input.val())
		let minimum = parseFloat(input.data('minimum'))
		let step = parseFloat(input.data('step'))

		if (inputVal > minimum) {
			input.val(inputVal - step)
		}

		if (inputVal-1 == minimum) {
				$(this).prop("disabled", true)
		}
	})
	
	$('body').on('click', '.amount__btn_plus', function (e) {
		e.preventDefault()

		let parent = $(this).closest('.amount')
		let input = parent.find('input')
		let inputVal = parseFloat(input.val())
		let maximum = parseFloat(input.data('maximum'))
		let step = parseFloat(input.data('step'))

		if (inputVal < maximum) {
			input.val(inputVal + step)

			parent.find('.amount__btn_minus').prop("disabled", false)
		}
	})

	$('.amount__input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})

	$('.products__scroll').each(function(e) {
		let scrollHeight = $(this).prop('scrollHeight'),
		height = $(this).innerHeight(),
		height2 = $(this).height(),
		heightContent = $(this).find('.products__scroll-content').height();

		console.log(heightContent <= height2)

		if (heightContent <= height2) {
			$(this).closest('.products__wrap').addClass('_hide-shadow')
		}

		$(this).scroll(function(){
			if ($(this).scrollTop() >= scrollHeight - height) {
				$(this).closest('.products__wrap').addClass('_top')
			}
			else {
				$(this).closest('.products__wrap').removeClass('_top')
			}
		});
	})
});


$(window).on('load', () => {
	//
	if ( $('.partners__grid').length ) {
		$('.partners__grid').each(function() {
			partnersHeight($(this), parseInt($(this).css('--partners_number')))
		})
	}

	//
	if ( $('.our-vacancy__items').length ) {
		$('.our-vacancy__items').each(function() {
			vacancyHeight($(this), parseInt($(this).css('--vacancy_number')))
		})
	}
});


$(window).on('resize', () => {
	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.querySelector('body')[0].clientWidth

		// Моб. версия
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 360) document.getElementsByTagName('meta')['viewport'].content = 'width=360, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}


		//
		if ( $('.partners__grid').length ) {
			$('.partners__grid').each(function() {
				partnersHeight($(this), parseInt($(this).css('--partners_number')))
			})
		}

		//
		if ( $('.our-vacancy__items').length ) {
			$('.our-vacancy__items').each(function() {
				vacancyHeight($(this), parseInt($(this).css('--vacancy_number')))
			})
		}
	}
});


// 
function partnersHeight(context, step) {
	let start    = 0
	let finish   = step
	let partners = context.find('.partners__item')

	partners.find('.partners__title').height('auto')

	for (let i = 0; i < partners.length; i++) {
		setHeight(partners.find('.partners__title').slice(start, finish))

		start  = start + step
		finish = finish + step
	}
}

// 
function vacancyHeight(context, step) {
	let start    = 0
	let finish   = step
	let vacancy = context.find('.our-vacancy__item')

	vacancy.find('.our-vacancy__info').height('auto')
	vacancy.find('.our-vacancy__title').height('auto')

	for (let i = 0; i < vacancy.length; i++) {
		setHeight(vacancy.find('.our-vacancy__info').slice(start, finish))
		setHeight(vacancy.find('.our-vacancy__title').slice(start, finish))

		start  = start + step
		finish = finish + step
	}
}