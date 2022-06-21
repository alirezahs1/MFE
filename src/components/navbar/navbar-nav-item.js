import styled from '@emotion/styled'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Style = styled.li`
	${({isActive}) => `
		a {
			${isActive ? `
				color: #1d4ed8;
			`  : `
				color:#333;
				&:hover {
					color: #000;
				}
			`}
			text-decoration: none;
			display: inline-block;
			padding: 20px 15px;
			font-size: 1.2rem;
		}
	`}
`


export const NavbarNavItem = ({label, to, exact}) => {

	const resolved = useResolvedPath(to);
	const isActive = !!useMatch({ path: resolved.pathname, end: exact });

	return (
		<Style isActive={isActive}>
			<Link to={to}>
				{label}
			</Link>
		</Style>
	)
}