import styled from '@emotion/styled';


const RawTitle = ({component="h1", size="xl", children, ...rest}) => {
	
	const Tag = component;

	return (
		<Tag size={size} {...rest}>
			{children}
		</Tag>
	)
}

const SIZES = {
	'sm': '.8em',
	'md': '.9em',
	'normal': '1em',
	'lg': '1.2em',
	'xl': '1.4em',
	'2xl': '1.6em',
	'3xl': '1.8em',
	'4xl': '2em',
	'5xl': '2.2em',
}
export const Title = styled(RawTitle)`
	${({size}) => `
		font-size: ${SIZES?.[size] || SIZES['normal']};
		margin-bottom: 25px;
	`}
`