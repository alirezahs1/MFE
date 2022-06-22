import styled from '@emotion/styled'

export const Button = styled.button`
	${({block}) => `
		border-radius: 4px;
		padding: 10px 25px;
		background-color: #2563eb;
		color: #fff;
		border: none;
		cursor: pointer;
		font-size: 1.5em;
		${block ? `
			width: 100%;
		` : ""}
	`}
	
`