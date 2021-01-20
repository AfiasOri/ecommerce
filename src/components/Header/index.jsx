import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/selectors/userSelectors';
import { selectHidden } from '../../redux/selectors/cartSelectors';

import { HeaderContainer, Logo, LogoContainer, Option, Options } from './Header.styles';
import { signOut } from '../../firebase/auth';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';

const Header = ({ currentUser, hidden, totalItems }) => {
	const authOption = currentUser ? (
		<Option onClick={signOut}>SIGN OUT</Option>
	) : (
		<Option as={Link} to='/signin'>
			SIGN IN
		</Option>
	);

	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo />
			</LogoContainer>
			<Options>
				<Option as={Link} to='/shop'>
					SHOP
				</Option>
				<Option as={Link} to='/contact'>
					CONTACT
				</Option>
				{authOption}
				<CartIcon />
			</Options>
			<CartDropdown hidden={hidden} />
		</HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectHidden,
});

export default connect(mapStateToProps)(Header);
