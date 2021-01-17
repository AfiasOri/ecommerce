import { TOGGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from '../actionTypes';
import { addItemToCart, removeItemFromCart } from '../utils/cartUtils';

const INITIAL_STATE = { hidden: true, cartItems: [], totalItems: 0 };

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TOGGLE_CART_HIDDEN:
			return { ...state, hidden: !state.hidden };

		case ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
				totalItems: state.totalItems + 1,
			};

		case REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload),
				totalItems: state.totalItems - 1,
			};

		case CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
			};

		default:
			return state;
	}
};

export default cartReducer;
