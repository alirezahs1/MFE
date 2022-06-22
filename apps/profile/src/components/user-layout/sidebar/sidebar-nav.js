import styled from '@emotion/styled'
import { SidebarNavItem } from './sidebar-nav-item'

const Style = styled.ul`
	list-style-type: none;
	padding: 0;
	margin: 0;
`

export const SidebarNav = ({className, items}) => {

	return (
		<Style className={className}>
			{items.map(item => (
				<SidebarNavItem key={item.label} {...item} />
			))}
		</Style>
	)
}