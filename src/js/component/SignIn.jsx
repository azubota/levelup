import React from "react";
import PropTypes from "prop-types";

export default class SignIn extends React.Component {
	render() {
		return (
			<div className="container border border-success mt-2 mb-2 p-2 rounded signin bg-light">
				<form>
					<div className="form-group">
						<input
							type="email"
							className="form-control btn-outline-success"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>
						<small id="emailHelp" className="form-text text-muted">
							We'll never share your email with another
						</small>
					</div>
					<div className="form-group">
						<input
							type="password"
							className="form-control btn-outline-success"
							id="exampleInputPassword1"
							placeholder="Password"
						/>
						<button
							type="button"
							className="btn btn-outline-success btn-sm mt-1">
							Forgot Password
						</button>
					</div>
					<div className="form-group form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="exampleCheck1"
						/>
						<label
							className="form-check-label"
							htmlFor="exampleCheck1">
							Remember me
						</label>
					</div>
					<button
						type="submit"
						className="btn btn-success btn-lg btn-block">
						Sign In
					</button>
					<button
						type="submit"
						className="btn btn-outline-success btn-block">
						Become a member
					</button>
				</form>
			</div>
		);
	}
}
