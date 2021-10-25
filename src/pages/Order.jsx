import { Link } from 'react-router-dom'
import styles from '../styles/Order.module.scss'

export default function Order() {
	function validateForm(e) {
		e.preventDefault()

		const name = document.getElementById('name').value + ''
		const email = document.getElementById('email').value + ''
		const food = document.getElementById('food').selectedIndex
		const quantity = document.getElementById('quantity').value
		const address = document.getElementById('address').value + ''
		const agree = document.getElementById('agree').checked

		const errorName = document.getElementById('errorName')
		const errorEmail = document.getElementById('errorEmail')
		const errorFood = document.getElementById('errorFood')
		const errorQuantity = document.getElementById('errorQuantity')
		const errorAddress = document.getElementById('errorAddress')
		const errorAgree = document.getElementById('errorAgree')

		let valid = true

		if (name === '') {
			errorName.innerText = 'Name cannot be empty'
			valid = false
		} else {
			errorName.innerText = ''
		}

		if (
			email.includes('@.') ||
			email.endsWith('.') ||
			email.startsWith('@') ||
			email.indexOf('@') !== email.lastIndexOf('@') ||
			email.indexOf('@') === -1 ||
			email.lastIndexOf('.') < email.indexOf('@')
		) {
			valid = false
			errorEmail.innerText = 'Wrong email format'
		} else {
			errorEmail.innerText = ''
		}

		if (food < 1) {
			valid = false
			errorFood.innerText = 'Please select a food'
		} else {
			errorFood.innerText = ''
		}

		if (quantity == 0) {
			valid = false
			errorQuantity.innerText = 'Please add the quantity'
		} else if (quantity < 0) {
			valid = false
			errorQuantity.innerText = 'Quantity must be more than 0'
		} else {
			errorQuantity.innerText = ''
		}

		if (address.trim().length <= 10) {
			valid = false
			errorAddress.innerText = 'Address must be more than 10 characters'
		} else {
			errorAddress.innerText = ''
		}

		if (!agree) {
			valid = false
			errorAgree.innerText = 'You have to agree with the terms and conditions'
		} else {
			errorAgree.innerText = ''
		}

		if (valid) {
			const modal = document.getElementById('modal')
			modal.style.display = 'flex'
		}
	}

	return (
		<div className={styles.order}>
			<div className={styles.container}>
				<div className={styles.title}>
					<h1>Order</h1>
				</div>
				<div className={styles.form}>
					<form action='/' method='post' onSubmit={validateForm}>
						<div className={styles.formComponent}>
							<label htmlFor='name'>Full Name</label>
							<input type='text' name='name' id='name' />
							<span id='errorName'></span>
						</div>
						<div className={styles.formComponent}>
							<label htmlFor='email'>Email address</label>
							<input type='email' name='email' id='email' />
							<span id='errorEmail'></span>
						</div>
						<div className={styles.formComponent}>
							<label htmlFor='food'>Food</label>
							<select name='food' id='food'>
								<option value=''>Select a food</option>
								<option value=''>Burger 1</option>
								<option value=''>Burger 2</option>
							</select>
							<span id='errorFood'></span>
						</div>
						<div className={styles.formComponent}>
							<label htmlFor='quantity'>Quantity</label>
							<input type='number' name='quantity' id='quantity' />
							<span id='errorQuantity'></span>
						</div>
						<div className={styles.formComponent}>
							<label htmlFor='address'>Address</label>
							<textarea name='address' id='address' cols='30' rows='5'></textarea>
							<span id='errorAddress'></span>
						</div>
						<div className={styles.agreement}>
							<div>
								<input type='checkbox' name='agree' id='agree' />
								<label htmlFor='agree'>I agree with the terms and conditions</label>
							</div>
							<span id='errorAgree'></span>
						</div>
						<span id='errorAgree'></span>
						<div className={styles.submit}>
							<button type='submit'>Order</button>
						</div>
					</form>
				</div>
			</div>
			<div className={styles.modalOverlay} id='modal'>
				<div className={styles.modal}>
					<h1>Order Success</h1>
					<p>Your order will be processed as soon as possible. Please wait :D</p>
					<Link to='/'>
						<button>Back to home</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
