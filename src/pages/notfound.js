import styled from "@emotion/styled"

const Style = styled.div`
	min-height: 500px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px dashed #ccc;
	font-family: mono;
`

export default function NotFoundPage(){
	return (
		<Style>
			404 | Empty page. Start coding...
		</Style>
	)
}