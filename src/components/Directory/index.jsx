import React from 'react';
import './Directory.scss';

import sections from '../../mock/directory';
import MenuItem from '../MenuItem';

// export const Directory = ({ children }) => <div className='directory-menu'>{children}</div>;

export class Directory extends React.Component {
	state = {
		sections,
	};

	render() {
		const items = this.state.sections.map(({ id, ...rest }) => <MenuItem key={id} {...rest} />);
		return <div className='directory-menu'>{items}</div>;
	}
}

export default Directory;
