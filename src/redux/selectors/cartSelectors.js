import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], ({ cartItems }) => cartItems);

export const selectHidden = createSelector([selectCart], ({ hidden }) => hidden);

export const selectCartItemsCount = createSelector([selectCartItems], cartItems =>
	cartItems.reduce((agg, item) => agg + item.quantity, 0)
);

export const selectCartTotalPrice = createSelector([selectCartItems], cartItems =>
	cartItems.reduce((agg, item) => agg + item.price * item.quantity, 0)
);
