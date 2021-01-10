import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import { HomePage, ShopPage, SignInSignUp } from './pages';
import { Header } from './components';

function App() {
	return (
		<div>
			<Header />
			<Route path='/' exact component={HomePage} />
			<Route path='/shop' exact component={ShopPage} />
			<Route path='/signin' exact component={SignInSignUp} />
		</div>
	);
}

export default App;
