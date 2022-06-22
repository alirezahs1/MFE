import styled from '@emotion/styled'
import { Container } from '../ui/layout'
import { NavbarNav } from './navbar-nav'

const Style = styled.nav`
	border-bottom: 1px solid rgb(220, 220, 220);
`

export const Navbar = ({className}) => {

	const items = [
		{
			label: 'Home',
			to: '/',
			exact: true
		},
		{
			label: 'Profile',
			to: '/profile/'
		},
		{
			label: 'Login',
			to: '/auth/'
		},
		{
			label: 'Other',
			to: '/other'
		},
		{
			label: 'Another',
			to: '/another'
		},
		{
			label: 'Some',
			to: '/some'
		},
	]

	return (
		<Style className={className}>
			<Container>
				<NavbarNav items={items} />
			</Container>
		</Style>
	)
}