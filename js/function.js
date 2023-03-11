// 메뉴바 고정
$(function () {
	const $nav = $('header > nav')
	const $mnu = $('header > nav > .gnb > li > a')

	const arrTopVal = []
	let nowIdx = 0
	$('article').each(function (idx) {
		arrTopVal[idx] = $(this).offset().top
	})

	$mnu.on('click', function (evt) {
		evt.preventDefault()

		let nowIdx = $mnu.index(this)

		$('html, body').animate({ scrollTop: arrTopVal[nowIdx] })
	})

	const navH = $nav.height()

	$(window).on('scroll', function () {
		let scrollTop = Math.ceil($(this).scrollTop())
		const $slides = $('.slides')

		if (scrollTop > 100) {
			$nav.addClass('fixed')
			$slides.css({
				marginTop: navH + 60,
			})
		} else {
			$nav.removeClass('fixed')
			$slides.css({
				marginTop: 0,
			})
		}

		for (let i = 0; i < $mnu.length + 1; i++) {
			if (scrollTop >= arrTopVal[i] - navH - 50) {
				$mnu.eq(i).parent().addClass('on').siblings().removeClass('on')
			} else if (scrollTop < arrTopVal[0] - navH - 50) {
				$mnu.parent().removeClass('on')
			}
		}
	})
})

// 슬라이드처리
$(function () {
	const $slides = $('.slides > .slides-container > li')

	let nowIdx = 0

	//슬라이드 자동재생
	setInterval(function () {
		if (nowIdx < 3) {
			nowIdx++
		} else {
			nowIdx = 0
		}

		$slides.eq(nowIdx).fadeIn(1000).siblings().fadeOut(1000)
	}, 4000)
})

// 이용방법
$(function () {
	const $indicator = $('.use > .use-slides > .use-slides-pagination > li > a')
	const $container = $('.use > .use-slides > .use-slides-container > li')
	const $howtouse = $('.use > .use-slides > .howtouse > p')

	let nowIdx = 0

	$indicator.on('click', function (evt) {
		evt.preventDefault()

		nowIdx = $indicator.index(this)

		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')
		$container.eq(nowIdx).fadeIn(1000).siblings().fadeOut(1000)
		$howtouse.eq(nowIdx).fadeIn(1000).siblings().fadeOut(1000)
	})
})

//이벤트
$(function () {
	const $eventContainer = $('.event > .event-box > .event-container')
	const $shadow = $eventContainer.children('.shadow')
	const $lightbox = $shadow.children('.lightbox')
	const $btnClse = $('.clse')
	const $shadow1 = $eventContainer.first().children('.shadow')
	const $shadow2 = $eventContainer.eq(1).children('.shadow')
	const $shadow3 = $eventContainer.last().children('.shadow')

	$eventContainer.on('click', function () {
		if ($(this).find('img').attr('alt') === '애그마요 꿀조합 시리즈') {
			$shadow1.show()
		} else if ($(this).find('img').attr('alt') === '이달의 썹!프라이즈') {
			$shadow2.show()
		} else if ($(this).find('img').attr('alt') === '고구마 칩 신규 메뉴 출시') {
			$shadow3.show()
		}
		// $shadow.show()
	})

	$btnClse.on('click', function () {
		$shadow.hide()
	})

	$shadow.on('click', function (evt) {
		evt.stopPropagation()
		$shadow.hide()
	})

	$(document).on('keyup', function (evt) {
		if (evt.which === 27) {
			$shadow.hide()
		}
	})

	$lightbox.on('click', function (evt) {
		evt.stopPropagation()
	})
})

// 공지사항
$(function () {
	const $tit = $('.news > .new > dl > dt > a')

	$tit.on('click', function (evt) {
		evt.preventDefault()

		$(this).parent().toggleClass('on').parent().next().slideToggle()
	})
})
