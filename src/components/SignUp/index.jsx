import React from 'react';

import { createUserDoc, signUpWithCredentials } from '../../firebase/auth';

import { SignUpContainer, Title } from './SignUp.styles';
import { Input, Button } from '../common';

const INITIAL_STATE = {
	email: '',
	displayName: '',
	password: '',
	confirmPassword: '',
};

export class SignUp extends React.Component {
	state = INITIAL_STATE;

	handleSubmit = async e => {
		e.preventDefault();
		const { email, displayName, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}
		try {
			const { user } = await signUpWithCredentials(email, password);
			await createUserDoc(user, { displayName });

			this.setState(INITIAL_STATE);
		} catch (e) {
			console.log(e);
		}
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { email, displayName, password, confirmPassword } = this.state;
		return (
			<SignUpContainer>
				<Title>I do not have an account</Title>
				<span>Sign up with email and password</span>
				<form onSubmit={this.handleSubmit}>
					<Input
						type='text'
						label='Display Name'
						name='displayName'
						value={displayName}
						onChange={this.handleChange}
						required
					/>
					<Input
						type='email'
						label='Email'
						name='email'
						value={email}
						onChange={this.handleChange}
						required
					/>
					<Input
						type='password'
						label='Password'
						name='password'
						value={password}
						onChange={this.handleChange}
						required
					/>
					<Input
						type='password'
						name='confirmPassword'
						label='Confirm Password'
						value={confirmPassword}
						onChange={this.handleChange}
						required
					/>
					<Button type='submit' onSubmit={this.handleSubmit}>
						SIGN UP
					</Button>
				</form>
			</SignUpContainer>
		);
	}
}

export default SignUp;
