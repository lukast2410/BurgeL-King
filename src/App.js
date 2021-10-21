import logo from './logo.svg'
import './styles/App.scss'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { useEffect } from 'react'
import About from './pages/About'

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
					<Route path='/users'></Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	)
}

export default App
