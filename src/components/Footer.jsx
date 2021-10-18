import { Link } from 'react-router-dom'
import styles from '../styles/components/Footer.module.scss'

export default function Footer() {
	return (
		<div className={styles.container}>
			<div className={styles.footer}>
				<div className={styles.footerLeft}>
					<h1>Burgel king</h1>
					<div className={styles.footerLink}>
						<div>
							<Link to='/'>Policies</Link>
						</div>
						|
						<div>
							<Link to='/'>Terms of Service</Link>
						</div>
						|
						<div>
							<Link to='/'>Contact Us</Link>
						</div>
					</div>
					<div className={styles.copyright}>© Copyright 2021 BurgeL King Corporation</div>
				</div>
				<div className={styles.footerRight}>
					<a href='https://www.instagram.com/lukast2410/'>
						<img src="/assets/instagram.png" alt="" />
					</a>
					<a href='https://www.linkedin.com/in/lukas-t-b38884137/'>
						<img src="/assets/linkedin.png" alt="" />
					</a>
					<a href='https://github.com/lukast2410'>
						<img src="/assets/github.jpg" alt="" />
					</a>
				</div>
			</div>
		</div>
	)
}
