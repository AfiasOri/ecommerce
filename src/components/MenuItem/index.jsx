import React from 'react';
import { withRouter } from 'react-router-dom';

// import './MenuItem.scss';
import { BackgroundImage, Title, Content, MenuItemContainer, Subtitle } from './MenuItem.styles';

export const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
	const handleClick = () => {
		const url = match.url === '/' ? match.url : `${match.url}/`;
		history.push(`${url}${linkUrl}`);
	};
	return (
		<MenuItemContainer size={size} onClick={handleClick}>
			<BackgroundImage className='background' imageUrl={imageUrl} />
			<Content>
				<Title>{title.toUpperCase()}</Title>
				<Subtitle>SHOP NOW</Subtitle>
			</Content>
		</MenuItemContainer>
	);
};

export default withRouter(MenuItem);
