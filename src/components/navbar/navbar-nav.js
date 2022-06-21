import styled from '@emotion/styled'
import { NavbarNavItem } from './navbar-nav-item'

const Style = styled.ul`
	list-style-type: none;
	display: flex;
	padding: 0;
	margin: 0;
`


export const NavbarNav = ({items}) => {
	return (
		<Style>
			{items.map(item => (
				<NavbarNavItem key={item.label} {...item} />
			))}
		</Style>
	)
}