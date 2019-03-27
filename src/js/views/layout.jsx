import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./component/home.jsx";
import { SignIn } from "./component/SignIn.jsx";
import {Signup} from "./component/Signup.jsx";

import Store from "./store/appContext.jsx";

import { Jumbotron } from "./component/Jumbotron.jsx";
import { Footer } from "./component/Footer.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
					<Jumbotron />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/SignIn" component={ SignIn } />
						<Route path="/Signup" component={Signup} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
