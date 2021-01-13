import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import { HomePage, ShopPage, SignInSignUp } from './pages';
import { Header } from './components';
import { createUserDoc, onAuthChange } from './backend/auth';

class App extends React.Component {
	state = {
		currentUser: null,
	};

	componentDidMount() {
		this.authUnsubscribe = onAuthChange(async currentUser => {
			if (currentUser) {
				const user = await createUserDoc(currentUser);
				user.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					});
				});
			} else this.setState({ currentUser });
		});
	}

	componentWillUnmount() {
		this.authUnsubscribe();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Route path='/' exact component={HomePage} />
				<Route path='/shop' exact component={ShopPage} />
				<Route path='/signin' exact component={SignInSignUp} />
			</div>
		);
	}
}

export default App;
