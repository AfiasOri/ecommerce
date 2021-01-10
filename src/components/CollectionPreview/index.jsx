import React from 'react';
import CollectionItem from '../CollectionItem';

import './CollectionPreview.scss';

export const CollectionPreview = ({ title, items }) => {
	const renderedItems = items.slice(0, 4).map(({ id, ...rest }) => <CollectionItem key={id} {...rest} />);
	return (
		<div className='collection-preview'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<div className='preview'>{renderedItems}</div>
		</div>
	);
};
