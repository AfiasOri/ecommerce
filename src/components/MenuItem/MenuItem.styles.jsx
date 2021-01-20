import styled from 'styled-components';

export const MenuItemContainer = styled.div`
	min-width: 30%;
	height: ${({ size }) => (size ? '35vh' : '22vh')};
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;

	&:hover {
		cursor: pointer;

		& .background {
			transform: scale(1.06);
			transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		& section {
			opacity: 0.9;
			transition: opacity 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
	}

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}
`;

export const BackgroundImage = styled.div`
	width: 100%;
	height: 100%;
	background-position: center;
	background-size: cover;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Content = styled.section`
	height: 150px;
	width: 150px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: white;
	opacity: 0.7;
	position: absolute;
`;

export const Title = styled.span`
	font-weight: bold;
	margin-bottom: 6px;
	font-size: 26px;
	color: #4a4a4a;
`;

export const Subtitle = styled.span`
	font-weight: lighter;
	font-size: 22px;
`;
