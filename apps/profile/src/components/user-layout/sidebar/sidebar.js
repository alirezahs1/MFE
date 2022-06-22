import styled from '@emotion/styled'
import { JWTAuthentication } from 'auth/utils'
import { Card } from '../../ui/card'
import { SidebarNav } from './sidebar-nav'

const Style = styled.div`
	width: 300px;
	background-color: #fff;
	border-radius: 12px;
	padding: 15px;
	height: max-content;
	position: sticky;
	top: 15px;
`

export const Sidebar = ({className}) => {

	const items = [
		{
			label: 'Dashboard',
			to: '/',
			exact: true
		},
		{
			label: 'Orders',
			to: '/orders'
		},
		{
			label: 'Edit Profile',
			to: '/edit'
		},
		{
			label: 'Change Password',
			to: '/change-password'
		},
		{
			label: 'Logout',
			to: '/logout',
		},
	]

	return (
		<Style className={className}>
			<SidebarNav items={items} />
		</Style>
	)
}