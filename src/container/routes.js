import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './home';
import Login from './login';
import About from './about';

class Routes extends React.Component {
	render() {
		return <React.Fragment>
			<BrowserRouter>
				<Switch>
					<Route exact path="/home" render={props => <Home {...props} />} />
					<Route exact path="/about" render={props => <About {...props} />} />
					<Route exact path="/" render={props => <Login {...props} />} />
				</Switch>
			</BrowserRouter>
		</React.Fragment>
	}
}

export default Routes;