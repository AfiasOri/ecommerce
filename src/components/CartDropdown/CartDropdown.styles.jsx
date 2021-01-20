import styled from 'styled-components';

import { Button } from '../common';

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;
	transition: opacity 0.2s linear;
	opacity: ${({ hidden }) => (hidden ? 0 : 1)};
`;

export const CartItemsContainer = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow: scroll;
	overflow-x: hidden;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-thumb {
		background: #666;
		border-radius: 20px;
	}

	&::-webkit-scrollbar-track {
		background: #ddd;
		border-radius: 20px;
	}
`;

export const EmptyCart = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;

export const CheckoutButton = styled(Button)`
	margin-top: auto;
`;
