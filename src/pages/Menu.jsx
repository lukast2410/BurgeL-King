import { Link } from 'react-router-dom'
import styles from '../styles/Menu.module.scss'

const listFood = [
	{
		image: '/assets/beef-burger.png',
		alt: 'Beef Burger',
		name: 'Classic Beef Burger',
		cal: '640 cal',
		description:
			'Certified Angus Beef, American cheese, lettuce, tomatoes, red onions, pickles, Smash Sauce®, ketchup, toasted bun.',
	},
	{
		image: '/assets/beef-burger2.png',
		alt: 'Beef Burger',
		name: 'Smoked Bacon Briskt Burger',
		cal: '950 cal',
		description:
			'Certified Angus Beef, smoked aged cheddar cheese, brisket, applewood smoked bacon, pickles, bbq sauce, toasted brioche bun.',
	},
	{
		image: '/assets/beef-burger3.png',
		alt: 'Beef Burger',
		name: 'Avocado Bacon Club Burger',
		cal: '670 cal',
		description:
			'Certified Angus Beef, sliced avocado, applewood smoked bacon, lettuce, tomatoes, ranch, mayo, toasted multi-grain bun.',
	},
	{
		image: '/assets/beef-burger4.png',
		alt: 'Beef Burger',
		name: 'BBQ Bacon Cheddar Burger',
		cal: '750 cal',
		description:
			'Certified Angus Beef, aged cheddar cheese, applewood smoked bacon, haystack onions, bbq sauce, toasted bun.',
	},
	{
		image: '/assets/chicken-burger.png',
		alt: 'Chicken Burger',
		name: 'Spicy Guac Crispy Chicken Burger',
		cal: '800 cal',
		description:
			'Crispy chicken breast, pepper jack cheese, jalapeños, guacamole, lettuce, tomatoes, red onions, chipotle mayo, toasted spicy chipotle bun.',
	},
	{
		image: '/assets/chicken-burger2.png',
		alt: 'Chicken Burger',
		name: 'Avocado Bacon Crispy Chicken Burger',
		cal: '800 cal',
		description:
			'Crispy chicken breast, sliced avocado, applewood smoked bacon, lettuce, tomatoes, ranch, mayo, toasted multi-grain bun.',
	},
	{
		image: '/assets/chicken-burger3.png',
		alt: 'Chicken Burger',
		name: 'BBQ Cheddar Crispy Chicken Burger',
		cal: '880 cal',
		description:
			'Crispy chicken breast, aged cheddar cheese, applewood smoked bacon, haystack onions, bbq sauce, toasted bun.',
	},
	{
		image: '/assets/chicken-burger4.png',
		alt: 'Chicken Burger',
		name: 'Classic Grilled Chicken Burger',
		cal: '800 cal',
		description:
			'Crispy chicken breast, pepper jack cheese, jalapeños, guacamole, lettuce, tomatoes, red onions, chipotle mayo, toasted spicy chipotle bun.',
	},
	{
		image: '/assets/chicken-burger5.png',
		alt: 'Chicken Burger',
		name: 'Truffle Mushroom Swiss Grilled Chicken Burger',
		cal: '810 cal',
		description:
			'Grilled chicken breast, aged Swiss cheese, sautéed crimini mushrooms, truffle mayo, toasted bun.',
	},
	{
		image: '/assets/fries.png',
		alt: 'Fries & Sidedish',
		name: 'French Fries',
		cal: '370 cal',
		description: 'Crispy french fries.',
	},
	{
		image: '/assets/fries2.png',
		alt: 'Fries & Sidedish',
		name: 'King Tots',
		cal: '350 cal',
		description: 'Crispy golden brown tots tossed in rosemary, garlic, & olive oil.',
	},
	{
		image: '/assets/fries3.png',
		alt: 'Fries & Sidedish',
		name: 'Cobb Salad',
		cal: '40 cal',
		description:
			'Mixed greens, bleu cheese, sharp cheddar cheese, fried egg, applewood smoked bacon, tomatoes, red onions, ranch.',
	},
	{
		image: '/assets/beverages.png',
		alt: 'Beverages',
		name: 'Oreo Shake',
		cal: '860 cal',
		description: 'Made with Häagen-Dazs® Ice Cream.',
	},
	{
		image: '/assets/beverages2.png',
		alt: 'Beverages',
		name: 'Mocha Coffee Shake',
		cal: '670 cal',
		description: 'Hand-spun milkshake with cold brew coffee, Häagen Dazs® ice cream.',
	},
	{
		image: '/assets/beverages3.png',
		alt: 'Beverages',
		name: 'Salted Caramel Coffee Shake',
		cal: '680 cal',
		description: 'Hand-spun milkshake with cold brew coffee, Häagen Dazs® ice cream.',
	},
	{
		image: '/assets/beverages4.png',
		alt: 'Beverages',
		name: 'Peanut Butter Shake',
		cal: '860 cal',
		description: 'Made with Häagen Dazs® Ice Cream and REESE’S® Peanut Butter Sauce.',
	},
]

export default function Menu() {
	return (
		<div className={styles.foodMenuPage}>
			<div className={styles.container}>
				<div className={styles.title}>
					<h1>Our Menu</h1>
				</div>
				<div className={styles.listFood}>
					{listFood.map((x) => (
						<div className={styles.food}>
							<div className={`${x.alt === 'Beverages' ? styles.beveragesImage : styles.foodImage}`}>
								<img src={x.image} alt={x.alt} />
							</div>
							<div className={styles.foodTitle}>
								<h1>{x.name}</h1>
								<h2>{x.cal}</h2>
							</div>
							<div className={styles.overlay}>
								<h2>{x.name}</h2>
								<p>{x.description}</p>
								<Link to='/order'>
									<button>Order</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
