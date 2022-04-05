import React, { Component } from "react";
import "./App.scss";
import SignupPage from "./pages/signup";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<SignupPage />
			</div>
		);
	}
}
