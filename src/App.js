import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Wrapper from './Wrapper';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';

const App = () => (
	<BrowserRouter>
		<Wrapper>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/blog' component={Blog} />
				<Route path='/contact' component={Contact} />
			</Switch>
		</Wrapper>
	</BrowserRouter>
);

export default App;
