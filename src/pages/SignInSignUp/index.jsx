import React from 'react';

import './SignInSignUp.scss';
import { SignIn, SignUp } from '../../components/';

export const SignInSignUp = () => (
	<div className='sign-in-and-sign-up'>
		<SignIn />
		<SignUp />
	</div>
	// </div>
);

export default SignInSignUp;
