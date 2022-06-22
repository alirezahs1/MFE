import styled from "@emotion/styled";

const RawPageTitle = ({className, component="h1", children, ...rest}) => {

	const Tag = component;

	return (
		<Tag className={className} {...rest}>
			{children}
		</Tag>
	)
}


export const PageTitle = styled(RawPageTitle)`
	color: #000;
	margin-bottom: 20px;
`