import styled from "@emotion/styled"
import { Sidebar } from "./sidebar"
import { UserLayoutBody } from "./user-layout-body"

const Style = styled.div`
	display: flex;
	min-height: calc(100% - 200px);
`

export const UserLayout = ({className, children}) => {
	return (
		<Style className={className}>
			<Sidebar />
			<UserLayoutBody>
				{children}
			</UserLayoutBody>
		</Style>
	)
}