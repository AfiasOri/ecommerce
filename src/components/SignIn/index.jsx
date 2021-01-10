import React, { Component } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

import './SignIn.scss';

const INITIAL_STATE = { email: '', password: '' };

export class SignIn extends Component {
	state = INITIAL_STATE;

	handleSubmit = e => {
		e.preventDefault();
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

					<Button type='submit'>Submit</Button>
				</form>
			</div>
		);
	}
}

export default SignIn;
