import { Link } from 'react-router-dom'
import styles from '../styles/components/Navbar.module.scss'

export default function Navbar() {
	return (
		<div className={styles.containerNav}>
			<nav className={styles.navbar}>
				<div className={styles.logo}>
					<Link to='/'>
						<img src='/logo-land.png' alt='BurgeL King' />
						<img src='/logo-square.png' alt='BurgeL King' />
					</Link>
				</div>
				<div className={styles.moreMenu}>
					<span className={styles.navMenu}>More</span>
					<div className={styles.navMenus}>
						<Link to='/menu'>
							<div className={styles.navMenu}>Menu</div>
						</Link>
						<Link to='/order'>
							<div className={styles.navMenu}>Order</div>
						</Link>
						<Link to='/coming-soon'>
							<div className={styles.navMenu}>Coming Soon</div>
						</Link>
						<Link to='/about'>
							<div className={styles.navMenu}>About us</div>
						</Link>
					</div>
				</div>
			</nav>
		</div>
	)
}
