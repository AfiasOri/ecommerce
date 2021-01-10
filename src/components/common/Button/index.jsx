import React from 'react';

import './Button.scss';

export const Button = ({ children, ...rest }) => (
	<button className='button' {...rest}>
		{children}
	</button>
);

export default Button;
