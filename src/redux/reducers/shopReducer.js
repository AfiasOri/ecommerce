import { UPDATE_COLLECTIONS } from '../actionTypes';

export const shopReducer = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_COLLECTIONS:
			return { ...state, collections: action.payload };
		default:
			return state;
	}
};
