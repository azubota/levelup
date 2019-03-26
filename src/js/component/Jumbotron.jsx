import React from "react";
import PropTypes from "prop-types";
import logo from "../../img/logo.jpg";

export default class Jumbotron extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>
				Hello 
				</h1>
				<img src={logo} />
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classNamees for typography and spacing to
					space content out within the larger container.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</div>
		);
	}
}
