import React from 'react';

// import './CollectionPreview.scss';
import { CollectionPreviewContainer, Title, Preview } from './CollectionPreview.styles';
import CollectionItem from '../CollectionItem';

export const CollectionPreview = ({ title, items }) => {
	const renderedItems = items.slice(0, 4).map(item => <CollectionItem key={item.id} item={item} />);
	return (
		<CollectionPreviewContainer>
			<Title>{title.toUpperCase()}</Title>
			<Preview>{renderedItems}</Preview>
		</CollectionPreviewContainer>
	);
};

export default CollectionPreview;
