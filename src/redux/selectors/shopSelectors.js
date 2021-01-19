import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector([selectShop], shop => shop.collections);

export const selectShopCollectionsAsArray = createSelector([selectShop], shop => Object.values(shop.collections));

export const selectCollection = collectionParam =>
	createSelector([selectShopCollections], collections => collections[collectionParam]);
