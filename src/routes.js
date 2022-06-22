import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/auth";
import ProfilePage from "./pages/profile";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/profile/*' element={<ProfilePage basename="/profile" />} />
			<Route path='/auth/*' element={<AuthPage basename="/auth" />} />
		</Routes>
	)
}