import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/selectors/userSelectors';
import { selectHidden } from '../../redux/selectors/cartSelectors';

import './Header.scss';
import { signOut } from '../../firebase/auth';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';

const Header = ({ currentUser, hidden, totalItems }) => {
	const authOption = currentUser ? (
		<div className='option' onClick={signOut}>
			SIGN OUT
		</div>
	) : (
		<Link className='option' to='/signin'>
			SIGN IN
		</Link>
	);

	return (
		<header className='header'>
			<Link to='/' className='logo-container'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='/contact'>
					CONTACT
				</Link>
				{authOption}
				<CartIcon />
			</div>
			<CartDropdown hidden={hidden} />
		</header>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectHidden,
});

export default connect(mapStateToProps)(Header);
