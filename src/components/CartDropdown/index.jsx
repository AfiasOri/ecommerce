import React from 'react';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/selectors/cartSelectors';
import { toggleCartHidden } from '../../redux/actions/cartActions';

import './CartDropdown.scss';
import { Button } from '../common';
import { CartItem } from '../CartItem';

const CartDropdown = ({ hidden, cartItems, history, toggleCartHidden }) => {
	const handleCheckout = () => {
		toggleCartHidden();
		history.push('/checkout');
	};
	const renderItems = cartItems.map(({ id, ...rest }) => <CartItem key={id} {...rest} />);
	const emptyCart = <span className='empty'>Your Cart Is Empty</span>;

	return (
		<div className={`${hidden ? 'hidden' : ''} cart-dropdown `}>
			<div className='cart-items'>{cartItems.length ? renderItems : emptyCart}</div>
			<Button onClick={handleCheckout}>CHECKOUT</Button>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems });
const mapDispatchToProps = dispatch => ({ toggleCartHidden: () => dispatch(toggleCartHidden()) });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
