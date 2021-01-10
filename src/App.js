import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import { HomePage } from './pages';

function App() {
	return (
		<div>
			<Route path='/' exact component={HomePage} />
		</div>
	);
}

export default App;
