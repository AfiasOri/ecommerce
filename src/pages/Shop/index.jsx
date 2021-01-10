import React, { Component } from 'react';
import { CollectionPreview } from '../../components/CollectionPreview';

import collections from '../../mock/collections';

export class ShopPage extends Component {
	state = {
		collections,
	};

	render() {
		const { collections } = this.state;
		const renderCollections = collections.map(({ id, ...rest }) => <CollectionPreview key={id} {...rest} />);
		return <div>{renderCollections}</div>;
	}
}

export default ShopPage;
