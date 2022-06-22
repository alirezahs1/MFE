import styled from '@emotion/styled'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Style = styled.li`
	${({isActive}) => `
		a {
			${isActive ? `
				color: #fff;
				background-color: #1d4ed8;
			`  : `
				color:#333;
				&:hover {
					color: #1d4ed8;
				}
			`}
			transition: background-color .15s, color .15s;
			border-radius: 12px;
			text-decoration: none;
			display: block;
			padding: 15px 25px;
			font-size: 1.1rem;
		}
	`}
`

export const SidebarNavItem = ({className, label, to, exact}) => {

	const resolved = useResolvedPath(to);
	const isActive = !!useMatch({ path: resolved.pathname, end: exact });

	return (
		<Style className={className} isActive={isActive}>
			<Link to={to}>
				{label}
			</Link>
		</Style>
	)
}