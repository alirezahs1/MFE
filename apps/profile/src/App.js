import React, { lazy, Suspense, useContext, useEffect } from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import { PrivateRoute } from "auth/private-route";
import { UserLayout } from "./components/user-layout";
import { RemoteContext } from "./contexts/remote";

const DashboardPage = lazy(() => import("./pages/dashboard"))

export default () => {

	const { history, basename, isRemote } = useContext(RemoteContext);

	useEffect(() => {
		if (!isRemote) {
			import("./assets/styles/globals.css");
		}
	}, [isRemote])

	return (
		<BrowserRouter history={history} basename={basename}>
			<PrivateRoute>
				<UserLayout>
					<Suspense fallback={<div>Loading...</div>}>
						<Routes>
							<Route path="/" element={<DashboardPage />} />
						</Routes>
					</Suspense>
				</UserLayout>
			</PrivateRoute>
		</BrowserRouter>
	)
}