import React from "react";
import PropTypes from "prop-types";
import levelup from "../../img/levelup.png";

export default class Footer extends React.Component {
	render() {
		return (
			<ul className="nav justify-content-center btn-success rounded">
				<li className="nav-item">
					<a className="nav-link active text-white" href="#">
						Contact Us
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-white" href="#">
						Career info
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link disabled text-white"
						href="#"
						tabindex="-1"
						aria-disabled="true">
						Our Story
					</a>
				</li>
			</ul>
		);
	}
}
