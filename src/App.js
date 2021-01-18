import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/actions/userActions';
import { selectCurrentUser } from './redux/selectors/userSelectors';

import './App.css';
import { createUserDoc, onAuthChange } from './firebase/auth';
import { HomePage, SignInSignUp } from './pages';
import ShopPage from './pages/Shop';
import Checkout from './pages/Checkout';
import Header from './components/Header';

class App extends React.Component {
	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.authUnsubscribe = onAuthChange(async currentUser => {
			if (currentUser) {
				const user = await createUserDoc(currentUser);
				user.onSnapshot(snapShot => {
					setCurrentUser({ id: snapShot.id, ...snapShot.data() });
				});
			} else setCurrentUser(currentUser);
		});
	}

	componentWillUnmount() {
		this.authUnsubscribe();
	}

	render() {
		const { currentUser } = this.props;
		const renderSignInPage = () => (currentUser ? <Redirect to='/' /> : <SignInSignUp />);
		return (
			<div>
				<Header />
				<Route path='/' exact component={HomePage} />
				<Route path='/shop' exact component={ShopPage} />
				<Route path='/signin' exact render={renderSignInPage} />
				<Route path='/checkout' exact component={Checkout} />
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({ currentUser: selectCurrentUser });
const mapDispatchToProps = dispatch => ({ setCurrentUser: user => dispatch(setCurrentUser(user)) });

export default connect(mapStateToProps, mapDispatchToProps)(App);
