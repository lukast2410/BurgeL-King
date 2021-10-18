import Slider from '../components/home/Slider'
import styles from '../styles/Home.module.scss'

export default function Home() {
	return (
		<div className={styles.container}>
			<Slider />
			<section className={styles.bestSellerSection}>
				<div className={styles.bestSellerHead}>
					<span>
						BEST
						<div></div>
					</span>
					<img src="/assets/fire.png" alt="" />
					<span>
						DEALS
						<div></div>
					</span>
				</div>
				<div className={styles.bestSeller}>
					<div className={styles.bestSellerImage}>
						<img src='/assets/best-seller.png' alt='' />
						<img src='/assets/best-seller-icon.png' alt='' className={styles.bestSellerIcon} />
					</div>
					<div className={styles.bestSellerDesc}>
						<h1>Super Hot Beast Burger</h1>
						<p>with mayo, shredded lettuce, pickles, and BurgeL King secret recipes.</p>
						<button>Order now</button>
					</div>
				</div>
			</section>
			<section className={styles.featuredMenuSection}>
				
			</section>
		</div>
	)
}
