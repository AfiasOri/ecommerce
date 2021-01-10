import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.scss';

export const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
	const handleClick = () => {
		const url = match.url === '/' ? match.url : `${match.url}/`;
		console.log(`${url}${linkUrl}`);
		history.push(`${url}${linkUrl}`);
	};
	return (
		<div className={`${size} menu-item`} onClick={handleClick}>
			<div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='content'>
				<div className='title'>{title.toUpperCase()}</div>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);
