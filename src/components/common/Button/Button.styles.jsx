import styled, { css } from 'styled-components';

const whiteText = css`
	color: white;
	border: none;
`;

const googleButton = css`
	background-color: #ea4335;
	${whiteText}
`;

const githubButton = css`
	background-color: #333;
	${whiteText}
`;

const invertedButton = css`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		${whiteText}
	}
`;

const basicButton = css`
	background-color: black;
	${whiteText}
`;

const getButtonStyles = props => {
	if (props.provider === 'google') return googleButton;
	else if (props.provider === 'github') return githubButton;

	return props.inverted ? invertedButton : basicButton;
};

export const StyledButton = styled.button`
	min-width: 140px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	cursor: pointer;
	display: flex;
	justify-content: center;

	&:hover {
		transition: background-color 0.1s linear;
		border: 1px solid black;
		background-color: #fff;
		color: black;
	}

	${getButtonStyles}
`;
