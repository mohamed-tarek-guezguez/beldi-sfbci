import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './screens/Home'
import Presentation from './screens/Presentation'
import Produit from './screens/Produit'
import Details from './screens/Details'
import Services from './screens/Services'
import Contact from './screens/Contact'
import Catalogue from './screens/Catalogue'

const App = () => {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/presentation' component={Presentation} exact />
					<Route path='/products' component={Produit} exact />
					<Route path='/details/:id' component={Details} exact />
					<Route path='/services' component={Services} exact />
					<Route path='/contact' component={Contact} exact />
					<Route path='/catalogue' component={Catalogue} exact />
				</Switch>
				<Footer />
			</Router>
		</div>
	)
}

export default App
