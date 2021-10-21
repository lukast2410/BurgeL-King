import styles from '../styles/About.module.scss'

export default function About() {
	return (
		<div className={styles.aboutUs}>
			<div className={styles.title}>
				<h1>About Us</h1>
			</div>
			<div className={styles.container}>
				<section className={styles.story}>
					<h1>Great Food Comes First</h1>
					<p>
						Every day, more than 11 million guests visit BurgeL King restaurants around the world. And they do
						so because our restaurants are known for serving high-quality, great-tasting, and affordable food.
						Founded in 1945, BurgeL King is the second largest fast food hamburger chain in Indonesia. The
						original Home of the Whopper, our commitment to premium ingredients, signature recipes, and
						family-friendly dining experiences is what has defined our brand for more than 50 successful
						years.
					</p>
				</section>
				<section className={styles.vision}>
					<h1>Our Vision</h1>
					<div>
						<img src='/assets/vision.jpg' alt='Our Vision' />
						<p>
							We want to be the best burger restaurant for the next generation of burger lovers. Delivering
							this requires everything the Smashburger brand stands for: the highest quality ingredients; an
							exceptional “smashing” culinary technique; modern, inspired curated recipes; and menu variety
							that satisfies virtually all occasions and situations.
						</p>
					</div>
				</section>
        <section className={styles.contactUs}>
          <h1>
            Contact Us
          </h1>
          <h2>
            BurgeL King Corporation
          </h2>
          <p>Email: burgelking@gmail.com</p>
          <p>Phone Number: +6287883459876</p>
        </section>
			</div>
		</div>
	)
}
