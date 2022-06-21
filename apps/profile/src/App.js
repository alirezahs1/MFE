import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";

const ProfileEdit = () => <h1>Profile Edit</h1>;
const Logout = () => <h1>Logout</h1>;

export default ({history, basename}) => {

	return (
		<BrowserRouter history={history} basename={basename}>
			<header>
				<Link to="/">edit profile</Link>
				&nbsp;&nbsp;
				<Link to="/logout">Logout</Link>
			</header>
			<Routes>
				<Route path="/" element={<ProfileEdit />} />
				<Route path="/logout" element={<Logout />} />
			</Routes>
		</BrowserRouter>
	)
}