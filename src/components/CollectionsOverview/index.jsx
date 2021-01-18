import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/selectors/shopSelectors';

import './CollectionsOverview.scss';
import CollectionPreview from '../CollectionPreview';

const CollectionsOverview = ({ collections }) => {
	const renderCollections = collections.map(({ id, ...rest }) => <CollectionPreview key={id} {...rest} />);
	return <div className='collections-overview'>{renderCollections}</div>;
};

const mapStateToProps = createStructuredSelector({ collections: selectShopCollections });

export default connect(mapStateToProps)(CollectionsOverview);
