import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotalPrice } from '../../redux/selectors/cartSelectors';

import './Checkout.scss';
import CheckoutItem from '../../components/CheckoutItem';
import StripeCheckoutButton from '../../components/StripeButton';

export const Checkout = ({ cartItems, total }) => {
	const items = cartItems.map(item => <CheckoutItem key={item.id} item={item} />);

	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>
			{items}
			<div className='total'>
				<span>TOTAL: ${total}</span>
			</div>
			<div className='pay-now'>
				<StripeCheckoutButton price={total} />
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems, total: selectCartTotalPrice });

export default connect(mapStateToProps)(Checkout);
