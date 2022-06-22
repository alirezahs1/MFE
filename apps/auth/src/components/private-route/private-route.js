import { JWTAuthentication } from "../../utils"

export const PrivateRoute = ({ children }) => {

	const auth = new JWTAuthentication();

	if (auth.isAuthenticated()) {
		return children;
	} else {
		return (
			<>
				<p>
					<strong>
						not authorized!
					</strong>
				</p>
				<p>
					Visit login page or add ?token=<i>YOOUR_TOKEN</i> to url.
				</p>
			</>
		)
	}
}