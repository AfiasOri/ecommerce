import React from 'react';

import './Button.scss';

export const Button = ({ children, provider, inverted, ...rest }) => (
	<button className={`${provider ? provider : ''} ${inverted ? 'inverted' : ''} button`} {...rest}>
		{children}
	</button>
);

export default Button;
