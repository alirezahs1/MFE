import styled from '@emotion/styled'
import { Link } from 'react-router-dom'


const Style = styled.div`

`

export default function HomePage() {
	return (
		<Style>
			<p>
				We have one host <strong>container</strong> and 2 remote apps named <strong>auth</strong> (for login) and <strong>profile</strong> (user profile).
			</p>
			<ol>
				<li>
					Visit <Link to={"/profile"}>Profile</Link>
				</li>
				<li>
					Visit <Link to={"/auth"}>Login Page</Link> and login using username: <strong>admin</strong> / password: <strong>admin</strong>
				</li>
				<li>
					Visit <Link to={"/profile"}>Profile</Link> again.
				</li>
			</ol>
		</Style>
	)
}