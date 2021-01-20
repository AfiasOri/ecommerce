import React from 'react';

import { StyledButton } from './Button.styles';

export const Button = ({ children, ...rest }) => <StyledButton {...rest}>{children}</StyledButton>;

export default Button;
