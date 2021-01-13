import React from 'react';

import './Button.scss';

export const Button = ({ children, provider, ...rest }) => (
	<button className={`${provider ? provider : ''} button`} {...rest}>
		{children}
	</button>
);

export default Button;
