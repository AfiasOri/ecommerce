import React from 'react';

import './Shop.scss';
import CollectionsOverview from '../../components/CollectionsOverview';

const ShopPage = ({ collections }) => (
	<div className='shop'>
		<CollectionsOverview />
	</div>
);

export default ShopPage;
