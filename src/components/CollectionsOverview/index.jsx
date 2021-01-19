import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionsAsArray } from '../../redux/selectors/shopSelectors';

import './CollectionsOverview.scss';
import CollectionPreview from '../CollectionPreview';

const CollectionsOverview = ({ collections }) => {
	const renderCollections = collections.map(({ id, ...rest }) => <CollectionPreview key={id} {...rest} />);
	return <div className='collections-overview'>{renderCollections}</div>;
};

const mapStateToProps = createStructuredSelector({ collections: selectShopCollectionsAsArray });

export default connect(mapStateToProps)(CollectionsOverview);
