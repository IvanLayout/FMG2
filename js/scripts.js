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
				},
				'768': {
					spaceBetween: 50
				},
				'1025': {
					spaceBetween: 60
				},
				'1200': {
					spaceBetween: 108
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

	if ($('.awards__slider').length) {
		new Swiper(".awards__slider", {
			loop: false,
			spaceBetween: 10,
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
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					spaceBetween: 10,
					slidesPerView: 'auto'
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
					spaceBetween: 20,
					slidesPerView: 4
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
	if ( $('.sorting__links-wrap').length ) {
		$('.sorting__links-wrap').each(function(){
			let offset = $(this).find('._active').offset().left,
				width = $(this).find('._active').innerWidth()/2;
	
				let	scroll = (offset + width) - $(window).width()/2;
	
			$(this).scrollLeft(scroll);
		})
	}
	
	if ( $('.catalog__sorting').length ) {
		$('.catalog__sorting').each(function(){
			let offset = $(this).find('._active').offset().left,
				width = $(this).find('._active').innerWidth()/2;

				let	scroll = (offset + width) - $(window).width()/2;

			$(this).scrollLeft(scroll);
		})
	}

	if ( $('.history__wrap').length ) {
		historySlider()
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
	}

	if ( $('.history__wrap').length ) {
		historySlider()
	}
});


function historySlider() {
	if ($(window).width() < 1025 && !$('.history__wrap').hasClass('swiper-initialized')) {
		$('.history__wrap').addClass('swiper')
		$('.history__items').addClass('swiper-wrapper')
		$('.history__item').addClass('swiper-slide')

		historyItemSlider = new Swiper('.history__wrap', {
			loop: false,
			spaceBetween: 20,
			slidesPerView: 1,
			watchSlidesProgress: true,
			watchOverflow: true,
			preloadImages: false,
			autoHeight: true,
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
		})
	} else if ($(window).width() > 1024 && $('.history__wrap').hasClass('swiper-initialized')) {
		if ($('.history__wrap').length === 1 && $('.history__wrap').hasClass('swiper-initialized')) {
			historyItemSlider.destroy(true, true)
		} else if ($('.history__wrap').length >= 2 && $('.history__wrap').hasClass('swiper-initialized')) {
			historyItemSlider.forEach(function (element) {
				element.destroy(true, true)
			})
		}

		$('.history__wrap').removeClass('swiper')
		$('.history__items').removeClass('swiper-wrapper')
		$('.history__item').removeClass('swiper-slide')
	}
}