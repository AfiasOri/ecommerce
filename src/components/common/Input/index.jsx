import React from 'react';

// import './Input.scss';
import { FormGroup, FormInput, Label } from './Input.styles';

export const Input = ({ onChange, label, ...rest }) => {
	const formLabel = <Label shrink={rest.value.length}>{label}</Label>;
	return (
		<FormGroup>
			<FormInput onChange={onChange} {...rest} />
			{label ? formLabel : null}
		</FormGroup>
	);
};

export default Input;
