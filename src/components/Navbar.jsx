import { Link } from 'react-router-dom'
import styles from '../styles/components/Navbar.module.scss'

export default function Navbar() {
	return (
		<div className={styles.containerNav}>
			<nav className={styles.navbar}>
				<div className={styles.logo}>
					<Link to='/'>
						<img src='/logo-land.png' alt='BurgeL King' />
					</Link>
				</div>
				<div className={styles.navMenu}>
					<Link to='/'>
						<div>Menu</div>
					</Link>
					<Link to='/'>
						<div>Order</div>
					</Link>
					<Link to='/'>
						<div>Coming Soon</div>
					</Link>
					<Link to='/'>
						<div>About us</div>
					</Link>
				</div>
			</nav>
		</div>
	)
}
