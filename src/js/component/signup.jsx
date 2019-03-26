import React from "react";
import PropTypes from "prop-types";

export default class signup extends React.Component {
	render() {
		return (
			<form>
				<div classNameName="form-group">
					<label htmlFor="exampleFormControlInput1">
						Email address
					</label>
					<input
						type="email"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="name@example.com"
					/>
				</div>
				<div classNameName="form-group">
					<label htmlFor="exampleFormControlSelect1">
						Example select
					</label>
					<select
						className="form-control"
						id="exampleFormControlSelect1">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
				</div>
				<div classNameName="form-group">
					<label htmlFor="exampleFormControlSelect2">
						Example multiple select
					</label>
					<select
						multiple
						classNameName="form-control"
						id="exampleFormControlSelect2">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
				</div>
				<div classNameName="form-group">
					<label htmlFor="exampleFormControlTextarea1">
						Example textarea
					</label>
					<textarea
						classNameName="form-control"
						id="exampleFormControlTextarea1"
						rows="3"
					/>
				</div>
			</form>
		);
	}
}
