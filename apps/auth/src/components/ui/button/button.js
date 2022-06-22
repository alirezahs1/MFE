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
		transition: background-color .2s;
		&:hover, &:focus {
			background-color: #1d4ed8;
			outline: none;
		}
		${block ? `
			width: 100%;
		` : ""}
	`}
	
`