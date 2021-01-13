import React, { Component } from 'react';

import './SignIn.scss';

import Button from '../common/Button';
import Input from '../common/Input';
import { signInWithCredentials, signInWithGithub, signInWithGoogle } from '../../backend/auth';

const INITIAL_STATE = { email: '', password: '' };

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
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with email and password</span>

				<form onSubmit={this.handleSubmit}>
					<Input
						label='Email'
						type='email'
						name='email'
						value={email}
						required
						onChange={this.handleChange}
					/>

					<Input
						label='Password'
						type='password'
						name='password'
						value={password}
						required
						onChange={this.handleChange}
					/>
					<div className='buttons'>
						<Button type='submit'>Submit</Button>
						<Button type='button' onClick={signInWithGithub} provider='github'>
							GitHub
						</Button>
						<Button type='button' onClick={signInWithGoogle} provider='google'>
							Google
						</Button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
