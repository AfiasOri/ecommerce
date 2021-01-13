import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { signOut } from '../../backend/auth';

import './Header.scss';

export const Header = ({ currentUser }) => {
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
			</div>
		</header>
	);
};

export default Header;
