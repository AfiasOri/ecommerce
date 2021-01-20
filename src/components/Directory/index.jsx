import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/selectors/directorySelectors';

import { DirectoryMenu } from './Directory.styles';
import MenuItem from '../MenuItem';

const Directory = ({ sections }) => {
	const items = sections.map(({ id, ...rest }) => <MenuItem key={id} {...rest} />);
	return <DirectoryMenu>{items}</DirectoryMenu>;
};

const mapStateToProps = createStructuredSelector({ sections: selectDirectorySections });

export default connect(mapStateToProps)(Directory);
