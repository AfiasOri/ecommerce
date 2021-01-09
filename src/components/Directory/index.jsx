import React from 'react';
import './Directory.scss';

import sections from '../../mock/directory';
import { MenuItem } from '../';

// export const Directory = ({ children }) => <div className='directory-menu'>{children}</div>;

export class Directory extends React.Component {
	state = {
		sections,
	};

	render() {
		const items = this.state.sections.map(({ id, title, imageUrl, size }) => (
			<MenuItem key={id} title={title.toUpperCase()} subtitle='SHOP NOW' image={imageUrl} size={size} />
		));
		return <div className='directory-menu'>{items}</div>;
	}
}

export default Directory;
