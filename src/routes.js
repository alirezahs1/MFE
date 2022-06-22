import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/home"))
const ProfilePage = lazy(() => import("./pages/profile"))
const AuthPage = lazy(() => import("./pages/auth"))
const NotFoundPage = lazy(() => import("./pages/notfound"))

export const AppRoutes = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path='/profile/*' element={<ProfilePage basename="/profile" />} />
				<Route path='/auth/*' element={<AuthPage basename="/auth" />} />
				<Route path='/' element={<HomePage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</Suspense>
	)
}