import React from 'react';

import { CartItemContainer, Image, ItemDetails, Name, Price } from './CartItem.styles';

export const CartItem = ({ imageUrl, price, name, quantity }) => (
	<CartItemContainer>
		<Image src={imageUrl} alt={name} />
		<ItemDetails>
			<Name>{name}</Name>
			<Price>
				{quantity} x ${price}
			</Price>
		</ItemDetails>
	</CartItemContainer>
);

export default CartItem;
