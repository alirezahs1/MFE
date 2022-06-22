import React, { lazy, Suspense, useContext, useEffect } from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import { RemoteContext } from "./contexts/remote";

const LoginPage = lazy(() => import("./pages/login"))

export default () => {

	const { history, basename, isRemote } = useContext(RemoteContext);

	useEffect(() => {
		if (!isRemote) {
			import("./assets/styles/globals.css");
		}
	}, [isRemote])

	return (
		<BrowserRouter history={history} basename={basename}>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<LoginPage />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}