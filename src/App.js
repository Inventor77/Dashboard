import React, { Component } from "react";
import "./App.scss";
import LoginPage from "./pages/login";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<LoginPage />
			</div>
		);
	}
}
