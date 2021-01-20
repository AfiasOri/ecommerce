import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../redux/actions/cartActions';

import {
	CollectionItemContainer,
	ImageContainer,
	CollectionFooter,
	Name,
	Price,
	AddItemButton,
} from './CollectionItem.styles';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<CollectionItemContainer>
			<ImageContainer className='image' imageUrl={imageUrl} />
			<CollectionFooter>
				<Name>{name}</Name>
				<Price>${price}</Price>
			</CollectionFooter>
			<AddItemButton inverted onClick={() => addItem(item)}>
				ADD TO CART
			</AddItemButton>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = dispatch => ({ addItem: item => dispatch(addItem(item)) });
export default connect(null, mapDispatchToProps)(CollectionItem);
