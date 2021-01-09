import React from 'react';
import './HomePage.scss';

import { Directory } from '../../components';

export const HomePage = () => (
	<div className='homepage'>
		<h1>Welcome</h1>
		<Directory />
	</div>
);

export default HomePage;
