import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const Home = () => 'ALO';
const Articles = () => 'hej';

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/articles' component={Articles} />
		</Switch>
	</BrowserRouter>
);

export default App;
