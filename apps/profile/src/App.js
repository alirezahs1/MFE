import React, { useContext, useEffect } from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import { JWTAuthentication } from "auth/utils";
import { UserLayout } from "./components/user-layout";
import { RemoteContext } from "./contexts/remote";
import { DashboardPage } from "./pages/dashboard/dashboard";

export default () => {

	const { history, basename, isRemote } = useContext(RemoteContext);

	useEffect(() => {

		(async () => {
			const auth = new JWTAuthentication();
			// await auth.basicLogin("admin", "admin");
			console.log(auth.isAuthenticated());
		})()

	}, [])

	useEffect(() => {
		if (!isRemote) {
			import("./assets/styles/globals.css");
		}
	}, [isRemote])

	return (
		<BrowserRouter history={history} basename={basename}>
			<UserLayout>
				<Routes>
					<Route path="/" element={<DashboardPage />} />
				</Routes>
			</UserLayout>
		</BrowserRouter>
	)
}