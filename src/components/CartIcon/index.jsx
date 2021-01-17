import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/selectors/cartSelectors';
import { toggleCartHidden } from '../../redux/actions/cartActions';

import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, counter }) => (
	<div className='cart-icon' onClick={toggleCartHidden}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>{counter}</span>
	</div>
);

const mapStateToProps = createStructuredSelector({
	counter: selectCartItemsCount,
});

const mapDispatchToProps = dispatch => ({ toggleCartHidden: hidden => dispatch(toggleCartHidden(hidden)) });

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
