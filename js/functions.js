$(() => {
	// Есть ли поддержка тач событий или это apple устройство
	if (!is_touch_device() || !/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) $('html').addClass('custom_scroll')

	// Observer API
	const boxes = document.querySelectorAll('.lazyload, .lazymap')

	function scrollTracking(entries) {
		for (const entry of entries) {
			if (entry.intersectionRatio > 0 && entry.target.getAttribute('data-src') && !entry.target.classList.contains('loaded')) {
				entry.target.src = entry.target.getAttribute('data-src')

				entry.target.classList.add('loaded')
			}

			if (entry.intersectionRatio > 0 && entry.target.getAttribute('data-map') && !entry.target.classList.contains('loaded-map')) {
				entry.target.classList.add('loaded-map')

				addScriptsURL('http://api-maps.yandex.ru/2.1.75/?load=package.standard,package.geoObjects&lang=ru-RU')
			}
		}
	}

	const observer = new IntersectionObserver(scrollTracking, {
		threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
	})

	boxes.forEach(element => observer.observe(element))
	


	// Установка ширины стандартного скроллбара
	$(':root').css('--scroll_width', widthScroll() + 'px')


	// Плавная прокрутка к якорю
	$('.scroll-btn').click(function(e) {
		e.preventDefault()

		let href = $(this).data('anchor'),
		addOffset = $('.header').innerHeight()

		if ($(this).closest('.header__menu')){
			$('.mob-menu-btn').removeClass('_active')
			$('.header__menu').removeClass('_show')
			$('body').removeClass('_menu-open')
		}

		$('html, body').stop().animate({ scrollTop: $(href).offset().top - addOffset }, 1000)
	})


	// Кастомный select
	$('select').niceSelect()

	// Маска ввода
	$('input[type=tel]').each(function(){
		let datamask = $(this).data('mask');

		$(this).inputmask(`${datamask}`, {
			showMaskOnHover: false
		})
	})


	// Кнопка 'Вверх'
	$('body').on('click', '.button-up', function(e) {
		e.preventDefault()

		$('body, html').stop(false, false).animate({
			scrollTop: 0
		}, 1000)
	})

	$('body').on('click', '.accordion__title', function (e) {
		e.preventDefault()

		if ($(this).closest('.accordion__item').hasClass('_active')) {
			$(this).closest('.accordion__item').removeClass('_active')
		} else {
			$(this).closest('.accordion__item').addClass('_active')
		}
	})

	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false

	Fancybox.defaults.template = {
		closeButton: '<svg viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="27.7803" width="39" height="4" transform="rotate(-45 0 27.7803)" fill="#414042"/><rect x="2.82837" width="39" height="4" transform="rotate(45 2.82837 0)" fill="#FDBB30"/></svg>',
	}

	// Всплывающие окна
	$('body').on('click', '.modal-btn', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: $(this).data('content'),
			type: 'inline'
		}])
	})

	$('body').on('click', '.modal-close', function (e) {
		e.preventDefault()

		Fancybox.close()
	})


	// Увеличение картинки
	Fancybox.bind('.fancy-img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


	// Выбор файла
	$('.file-selection input[type=file]').change(function(){
		var val = $(this).val()

		var parent = $(this).parents('.file-selection')

		parent.find('.file-selection__path').text(val)

		if(parent.find('.file-selection__path').text() == '') {
			parent.find('.file-selection__path').text('Добавить файл')
		}
	})
})


$(window).on('load', () => {
	// Шапка
	if( $(window).scrollTop() > 0 ) {
		$('.header').addClass('fixed')
	} else{
		$('.header').removeClass('fixed')
	}

	if( $(window).scrollTop() > $(window).height() ) {
		$('.page-anchor').addClass('_fixed')
	} else{
		$('.page-anchor').removeClass('_fixed')
	}

	$(window).scroll(function(){
		if( $(window).scrollTop() > 0 ) {
			$('.header').addClass('fixed')
		} else{
			$('.header').removeClass('fixed')
		}

		if( $(window).scrollTop() > $(window).height() ) {
			$('.page-anchor').addClass('_fixed')
		} else{
			$('.page-anchor').removeClass('_fixed')
		}

		if( $(window).scrollTop() > ($('.footer').offset().top - $(window).height()) ) {
			$('.btns-fix').addClass('bot')
			$('.btns-fix').css('margin-bottom', $('.footer').innerHeight())
		} else {
			$('.btns-fix').removeClass('bot')
			$('.btns-fix').css('margin-bottom', 0)
		}
	})
})


// Вспомогательные функции
const widthScroll = () => {
	let div = document.createElement('div')

	div.style.overflowY = 'scroll'
	div.style.width = '50px'
	div.style.height = '50px'
	div.style.visibility = 'hidden'

	document.body.appendChild(div)

	let scrollWidth = div.offsetWidth - div.clientWidth
	document.body.removeChild(div)

	return scrollWidth
}

function setHeight(className){
    let maxheight = 0

    className.each(function() {
		let elHeight = $(this).outerHeight()

        if( elHeight > maxheight ) {
			maxheight = elHeight
        }
    })

    className.outerHeight( maxheight )
}

const is_touch_device = () => !!('ontouchstart' in window)


function addScriptsURL(url) {
	let jsLoad = document.querySelector(".js-load")

	if (jsLoad) {
		var src = document.createElement('script')
		src.src = url
		jsLoad.appendChild(src)

		src.addEventListener('load', () => {
			mapInit()
		});
	}
}


// map
function mapInit(){
	ymaps.ready(() => {
		if ( $(window).width() > 1024 ) {
			var iconW = 101
			var iconH = 185

			var iconWO = 50*-1
			var iconHO = 90*-1
		} else if ($(window).width() > 1024) {
			var iconW = 42
			var iconH = 78

			var iconWO = 21*-1
			var iconHO = 39*-1
		} else {
			var iconW = 32
			var iconH = 60

			var iconWO = 16*-1
			var iconHO = 30*-1
		}

		var myMap = new ymaps.Map("map", {
			center: [55.69248611606577, 37.66350492902338],
			zoom: 15
		}),
		myPlacemark = new ymaps.Placemark([55.69248611606577, 37.66350492902338], {
			balloonContent: '', iconCaption: 'Nagatino i-land'
		})

		myMap.geoObjects.add(myPlacemark)
	})
}