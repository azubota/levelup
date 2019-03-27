import React from "react";

import Jumbotron from "../Jumbotron.jsx";
import SignIn from "../SignIn.jsx";
import Footer from "../Footer.jsx";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<Jumbotron />
				<div className="row">
					<div className="col-sm" />
					<div className="col-sm">
						<SignIn />
					</div>
					<div className="col-sm" />
				</div>
				<Footer />
			</div>
		);
	}
}
