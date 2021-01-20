import React from 'react';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/selectors/cartSelectors';
import { toggleCartHidden } from '../../redux/actions/cartActions';

import { CartDropdownContainer, CartItemsContainer, CheckoutButton, EmptyCart } from './CartDropdown.styles';
import { CartItem } from '../CartItem';

const CartDropdown = ({ hidden, cartItems, history, toggleCartHidden }) => {
	const handleCheckout = () => {
		toggleCartHidden();
		history.push('/checkout');
	};
	const renderItems = cartItems.map(({ id, ...rest }) => <CartItem key={id} {...rest} />);
	const emptyCart = <EmptyCart>Your Cart Is Empty</EmptyCart>;

	return (
		<CartDropdownContainer hidden={hidden}>
			<CartItemsContainer>{cartItems.length ? renderItems : emptyCart}</CartItemsContainer>
			<CheckoutButton onClick={handleCheckout}>CHECKOUT</CheckoutButton>
		</CartDropdownContainer>
	);
};

const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems });
const mapDispatchToProps = dispatch => ({ toggleCartHidden: () => dispatch(toggleCartHidden()) });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
