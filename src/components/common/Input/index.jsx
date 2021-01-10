import React from 'react';

import './Input.scss';

export const Input = ({ onChange, label, ...rest }) => {
	const formLabel = <label className={`${rest.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>;
	return (
		<div className='group'>
			<input className='form-input' onChange={onChange} {...rest} />
			{label ? formLabel : null}
		</div>
	);
};

export default Input;
