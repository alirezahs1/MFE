import React, { useContext, useEffect } from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import { Input } from "./components/ui/input";
import { RemoteContext } from "./contexts/remote";
import LoginPage from "./pages/login";

export default () => {

	const { history, basename, isRemote } = useContext(RemoteContext);

	return (
		<BrowserRouter history={history} basename={basename}>
			<Routes>
				<Route path="/" element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	)
}