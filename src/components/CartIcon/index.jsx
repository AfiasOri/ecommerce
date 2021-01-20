import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/selectors/cartSelectors';
import { toggleCartHidden } from '../../redux/actions/cartActions';

import { CartIconContainer, IconCount, Icon } from './CartIcon.styles';

const CartIcon = ({ toggleCartHidden, counter }) => (
	<CartIconContainer onClick={toggleCartHidden}>
		<Icon />
		<IconCount>{counter}</IconCount>
	</CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
	counter: selectCartItemsCount,
});

const mapDispatchToProps = dispatch => ({ toggleCartHidden: hidden => dispatch(toggleCartHidden(hidden)) });

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
