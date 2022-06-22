import styled from '@emotion/styled'

export const Input = styled.input`
	${({block}) => `
		padding: 10px 20px;
		border-radius: 4px;
		border: 1px solid #eee;
		&:focus {
			outline: none;
			border-color: #2563eb
		}
		${block ? `
			width: 100%;
		` : ""}
	`}
`