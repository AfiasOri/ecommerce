import React from 'react';
import { SignIn, SignUp } from '../../components/';

import './SignInSignUp.scss';

export const SignInSignUp = () => (
	<div className='sign-in-and-sign-up'>
		<SignIn />
		<SignUp />
	</div>
	// </div>
);

export default SignInSignUp;
