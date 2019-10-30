import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Wrapper from './Wrapper';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import Article from './Article';
import Projects from './Projects';

import NotFound from './404.js';

const HelloWorld = () => (
	<Article
		title='Hello World!'
		content={'Hello. Welcome to apextype!'}
		date='10/29/2019'
	/>
);

const App = () => (
	<BrowserRouter>
		<Wrapper>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/blog' component={Blog} />
				<Route path='/contact' component={Contact} />
				<Route path='/projects' component={Projects} />

				<Route path='/hello' component={HelloWorld} />
				<Route component={NotFound} />
			</Switch>
		</Wrapper>
	</BrowserRouter>
);

export default App;
