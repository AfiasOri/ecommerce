import React, { Component } from 'react';

import { signInWithCredentials, signInWithGithub, signInWithGoogle } from '../../firebase/auth';

import { ButtonsContainer, Title, SignInContainer } from './SignIn.styles';
import Button from '../common/Button';
import Input from '../common/Input';

const INITIAL_STATE = { email: '', password: '' };

const SignInInput = ({ label, value, onChange }) => (
	<Input
		label={label}
		name={label.toLowerCase()}
		type={label.toLowerCase()}
		value={value}
		required
		onChange={onChange}
	/>
);
export class SignIn extends Component {
	state = INITIAL_STATE;

	handleSubmit = async e => {
		e.preventDefault();
		await signInWithCredentials(this.state.email, this.state.password);
		this.setState(INITIAL_STATE);
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { email, password } = this.state;
		return (
			<SignInContainer>
				<Title>I already have an account</Title>
				<span>Sign in with email and password</span>

				<form onSubmit={this.handleSubmit}>
					<SignInInput label='Email' value={email} onChange={this.handleChange} />

					<SignInInput label='Password' value={password} onChange={this.handleChange} />
					<ButtonsContainer>
						<Button type='submit'>Submit</Button>
						<Button type='button' onClick={signInWithGithub} provider='github'>
							GitHub
						</Button>
						<Button type='button' onClick={signInWithGoogle} provider='google'>
							Google
						</Button>
					</ButtonsContainer>
				</form>
			</SignInContainer>
		);
	}
}

export default SignIn;
