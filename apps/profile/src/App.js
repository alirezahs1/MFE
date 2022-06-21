import React, { useContext, useEffect } from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import { RemoteContext } from "./contexts/remote";

const ProfileEdit = () => <h1>Profile Edit</h1>;
const Logout = () => <h1>Logout</h1>;

export default () => {

	const { history, basename, isRemote } = useContext(RemoteContext);

	useEffect(() => {
		if (!isRemote) {
			import("./assets/styles/globals.css");
		}
	}, [isRemote])

	return (
		<BrowserRouter history={history} basename={basename}>
			<header className="text-5xl">
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