import styles from '../../styles/components/Slider.module.scss'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline'
import { useEffect } from 'react'
import $ from 'jquery'

export default function Slider() {
	useEffect(() => {
		$(function () {
			let width = '100%'
			let animationSpeed = 1000
			let pause = 4000
			let curr = 1
			let sliding = false

			let burgerSlider = $(`.${styles.burgerSlider}`)
			let listSlide = burgerSlider.find(`.${styles.listPromos}`)
			let promoImageList = listSlide.find(`.${styles.burgerPromo}`)

			function start() {
				setInterval(function () {
					sliding = true
					listSlide.animate({ 'margin-left': '-=' + width }, animationSpeed, function () {
						sliding = false
						curr++
						if (curr >= promoImageList.length) {
							curr = 1
							listSlide.css('margin-left', 0)
						}
					})
				}, pause)
			}
			start()

			let next = $(`#next`)
			let prev = $(`#prev`)

			next.on('click', function () {
				if (!sliding) {
					if (curr < promoImageList.length) curr++
					listSlide.animate({ 'margin-left': '-=' + width }, 500, function () {
						if (curr >= promoImageList.length) {
							curr = 1
							listSlide.css('margin-left', 0)
						}
					})
				}
			})

			prev.on('click', function () {
				if (!sliding) {
					if (curr > 0) curr--
					if (curr < 1) {
						curr = promoImageList.length - 1
						listSlide.css('margin-left', '-300%')
					}else{
						listSlide.animate({ 'margin-left': '+=' + width }, 500, function () {
							if (curr === 1) {
								curr = promoImageList.length
								listSlide.css('margin-left', '-400%')
							}
						})
					}
				}
			})
		})
	}, [])

	return (
		<div className={styles.burgerSlider}>
			<ul className={styles.listPromos}>
				<li className={styles.burgerPromo}>
					<img src='/assets/banner1.jpg' alt='Banner 1' />
				</li>
				<li className={styles.burgerPromo}>
					<img src='/assets/banner2.jpg' alt='Banner 2' />
				</li>
				<li className={styles.burgerPromo}>
					<img src='/assets/banner3.jpg' alt='Banner 3' />
				</li>
				<li className={styles.burgerPromo}>
					<img src='/assets/banner4.jpg' alt='Banner 4' />
				</li>
				<li className={styles.burgerPromo}>
					<img src='/assets/banner1.jpg' alt='Banner 1' />
				</li>
			</ul>
			<div className={`${styles.sliderBtn}`}>
				<button id='prev' type='button'>
					<ChevronLeftIcon className={`${styles.sliderBtnIcon} ${styles.prevIcon}`} />
				</button>
			</div>
			<div className={`${styles.sliderBtn}`}>
				<button id='next' type='button'>
					<ChevronRightIcon className={`${styles.sliderBtnIcon} ${styles.nextIcon}`} />
				</button>
			</div>
		</div>
	)
}
