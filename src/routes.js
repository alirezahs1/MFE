import { Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/profile";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/profile/*' element={<ProfilePage basename="/profile" />} />
		</Routes>
	)
}