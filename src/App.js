import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Wrapper from './Wrapper';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import Article from './Article';
import Projects from './Projects';

import NotFound from './404.js';

const FishArticle = () => (
	<Article
		title='moze'
		content={'josvisemoze'}
		date='da'
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

				<Route path='/idea' component={FishArticle} />
				<Route component={NotFound} />
			</Switch>
		</Wrapper>
	</BrowserRouter>
);

export default App;
