import React from 'react';

import { connect } from 'react-redux';
import { clearCart } from '../../redux/actions/cartActions';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price, clearCart }) => {
	const priceInCents = price * 100;
	const publishableKey =
		'pk_test_51IBQq0IrWo20wJiQgplqm6dD1OKe5NgaY4JnU3Isb0bbAXMvIgOzYgFBDfJXMwIfUjyboEwk8zLwTl7NF4PMtIbW00zvqPqtk4';

	const handleToken = token => {
		clearCart();
		alert('Payment recieved');
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='eCommerce'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description='4242-4242-4242-4242 12/25 123'
			amount={priceInCents}
			token={handleToken}
			stripeKey={publishableKey}
		/>
	);
};

const mapDispatchToProps = dispatch => ({ clearCart: () => dispatch(clearCart()) });

export default connect(null, mapDispatchToProps)(StripeButton);
