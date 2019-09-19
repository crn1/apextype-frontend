import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Wrapper from './Wrapper';
import Home from './Home';

const Articles = () => 'hej';

const App = () => (
	<BrowserRouter>
		<Wrapper>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/articles' component={Articles} />
			</Switch>
		</Wrapper>
	</BrowserRouter>
);

export default App;
