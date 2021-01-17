import React from 'react';

import './CollectionPreview.scss';
import CollectionItem from '../CollectionItem';

export const CollectionPreview = ({ title, items }) => {
	const renderedItems = items.slice(0, 4).map(item => <CollectionItem key={item.id} item={item} />);
	return (
		<div className='collection-preview'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<div className='preview'>{renderedItems}</div>
		</div>
	);
};
