import React from "react";
import PropTypes from "prop-types";
import levelup from "../../img/levelup.png";

export default class Jumbotron extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm" />
					<div className="col-sm">
						<nav className="navbar navbar-light bg-success rounded-circle justify-content-center">
							<a className="navbar-brand" href="#">
								<img src={levelup} />
							</a>
						</nav>
					</div>
					<div className="col-sm" />
				</div>
			</div>
		);
	}
}
