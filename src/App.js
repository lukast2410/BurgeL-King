import './styles/App.scss'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { useEffect } from 'react'
import About from './pages/About'
import ComingSoon from './pages/ComingSoon'
import Order from './pages/Order'
import Menu from './pages/Menu'

function App() {
	useEffect(() => {
		document.title = "BurgeL King"
	})

	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/about'>
						<About/>
					</Route>
					<Route path='/coming-soon'>
						<ComingSoon/>
					</Route>
					<Route path='/order'>
						<Order/>
					</Route>
					<Route path='/menu'>
						<Menu/>
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	)
}

export default App
