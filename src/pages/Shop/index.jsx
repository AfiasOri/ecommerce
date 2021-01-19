import React from 'react';
import { Route } from 'react-router-dom';

import './Shop.scss';
import CollectionsOverview from '../../components/CollectionsOverview';
import CollectionPage from '../Collection';

const ShopPage = ({ match }) => (
	<div className='shop'>
		<Route path={`${match.path}/:collectionID`} component={CollectionPage} />
		<Route exact path={`${match.path}`} component={CollectionsOverview} />
	</div>
);

export default ShopPage;
