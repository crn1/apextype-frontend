import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Wrapper from './Wrapper';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import Article from './Article';

const App = () => (
	<BrowserRouter>
		<Wrapper>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/blog' component={Blog} />
				<Route path='/contact' component={Contact} />
				<Route path='/:slug' component={Article} />
			</Switch>
		</Wrapper>
	</BrowserRouter>
);

export default App;
