import React from 'react';

import { connect } from 'react-redux';
import CollectionItem from '../../components/CollectionItem';
import { selectCollection } from '../../redux/selectors/shopSelectors';
import './Collection.scss';

const CollectionPage = ({ collection }) => {
	const items = collection.items.map(item => <CollectionItem key={item.id} item={item} />);

	return (
		<div className='collection-page'>
			<h1 className='title'>{collection.title.toUpperCase()}</h1>
			<div className='items'>{items}</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionID)(state),
});

export default connect(mapStateToProps)(CollectionPage);
