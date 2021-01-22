import { UPDATE_COLLECTIONS } from '../actionTypes';

export const updateCollections = collections => ({
	type: UPDATE_COLLECTIONS,
	payload: collections,
});
