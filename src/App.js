import logo from './logo.svg'
import './styles/App.scss'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/about'></Route>
					<Route path='/users'></Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
