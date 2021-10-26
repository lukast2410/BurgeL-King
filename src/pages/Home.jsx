import { ArrowRightIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
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
					<div className={styles.fire}>
						<img src='/assets/fire.png' alt='' />
						<img src='/assets/fire.png' alt='' />
					</div>
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
						<Link to='/order'>
							<button>Order now</button>
						</Link>
					</div>
				</div>
			</section>
			<section className={styles.featuredMenuSection}>
				<div className={styles.featuredLeft}>
					<h1>Menu Categories</h1>
					<p>We made the best and dealicious foods</p>
					<img src='/assets/featured1.png' alt='' />
				</div>
				<div className={styles.featuredRight}>
					<div className={styles.menuLeft}>
						<Link to='/menu'>
							<div className={styles.menu}>
								<img src='/assets/beef-burger.png' alt='' />
								<p>Beef Burgers</p>
							</div>
						</Link>
						<Link to='/menu'>
							<div className={styles.menu}>
								<img src='/assets/fries.png' alt='' />
								<p>Sidedish</p>
							</div>
						</Link>
						<div className={styles.viewAllContainer}>
							<Link to='/menu' className={styles.viewAll}>
								<ArrowRightIcon className={`${styles.btnViewAll}`} />
							</Link>
						</div>
					</div>
					<div className={styles.menuRight}>
						<img src='/assets/featured.png' alt='' className={styles.featuredIcon} />
						<Link to='/menu'>
							<div className={styles.menu}>
								<img src='/assets/chicken-burger.png' alt='' />
								<p>Chicken Burgers</p>
							</div>
						</Link>
						<Link to='/menu'>
							<div className={styles.menu}>
								<img src='/assets/beverages.png' alt='' />
								<p>Beverages</p>
							</div>
						</Link>
					</div>
				</div>
				<div className={styles.viewAllBottomContainer}>
					<Link to='/' className={styles.viewAllBottom}>
						<ArrowRightIcon className={`${styles.btnViewAllBottom}`} />
					</Link>
				</div>
			</section>
		</div>
	)
}
