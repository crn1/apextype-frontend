import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Wrapper from './Wrapper';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import Article from './Article';
import Projects from './Projects';

import NotFound from './404.js';

const Tech = () => (
	<Article
		title='Technologies I Use For Development'
		content={`
			<p>This is the set of tools and technologies that I use for my daily work. I experimented with a lot of things for over a years, but I decided to settle down (for now) with these:</p>
			<br />
			<p><strong>React.js - Frontend development</strong></p>
			<p>"React.js is JavaScript library for building user interfaces", says the official website. It was recommended to me by an old friend of mine when I started the development of my first web-based project. From that time, React is my preference. I used it with Redux and later with MobX, but with the introduction of Hooks, I decided to use React.js without any additional state-management libraries. In the last month, I started experimenting with Next.js.</p>
			<br />
			<p><strong>Flask - Backend development</strong></p>
			<p>Conventional wisdom says that if you use Python for backend, you surely use Django. But that is not the case with me. For the backend, I use Python Flask. It is "a lightweight WSGI web application framework" and it makes things easier for me because, in combination with peewee, my projects are always simple, scalable and stable.</p>
			<br />
			<p><strong>DigitalOcean - Deployment</strong></p>
			<p>DigitalOcean is becoming more and more mainstream these days. With its ridiculously easy setup, stability and performance, DigitalOcean is a no-brainer in DevOps world today.</p>
			<br />
			<p><strong>Vim - Text Editor and IDE</strong></p>
			<p>Vim is a text editor which makes my daily work most productive. It doesn't need a mouse to function, it is highly customizable and it's pretty fast. I can freely say that you can use Vim for every situation. You can turn it into full-scale IDE for your project, even with an automatic compilation of written code.</p>
			<br />
			<p><strong>FreeBSD - Operating System</strong><p>
			<p>It's not Windows. It's not Mac. Heck, it's not even Linux. Why FreeBSD? First and foremost - stability. Second, the ability to customize it to achieve maximum minimalism. I don't need that much apps for development: I only need terminal and Firefox. Nothing more, nothing less. And FreeBSD allows me to do it. But hey, there is also something like Arch and Manjaro in the linux world that can do the same thing, right? I suppose that I like to be a black sheep in everything that I do.</p>
		`}
		date='8/10/2019'
	/>
);

const Vim = () => (
	<Article
		title='Why You Should Bother Learning Vim?'
		content={`
			<p>Yep, it looks very ugly. Yeah, you need to give up a mouse. And, yes, you will need to sit down and learn it. It will take time, but I promise, you will not regret it. But why even bother, you may ask.</p>
			<br>
			<p><strong>It doesn't need a mouse to function.</strong></p>
			<p>Vim is controlled mainly by the keyboard. For beginners, this is a deal-breaker when they came across this text editor. But over time, those who master it will eventually become tremendously more efficient and more productive than their GUI-text-editor-loving colleagues.</p>
			<br>
			<p><strong>Vim is stable</strong></p>
			<p>It is over 27 years old! What did you expect?</p>
			<br>
			<p><strong>It's blazing fast!</strong></p>
			<p>Because it runs in the terminal, Vim is at top of the list of fastest text-editors out there. Because there is no GUI, there is no need for a large filesize, making VIm a very light text editor. Of course, there's a GUI wrapper, but real programmers can do everything from a terminal. Right?</p>
			<br>
			<p><strong>It is highly, HIGHLY customizable</strong></p>
			<p>With over 14000 packages, if you can imagine it, it probably already exists. Also, with powerful .vimrc script, you can make Vim completely by your taste and transform it from a minimalistic terminal text editor to full-scale IDE for your projects.</p>
			<br>
			<p><strong>It's free and open source and runs on everything.</strong></p>
			<p>Because it's open source, Vim is supported for almost every OS that exists. Windows, Mac, Linux, FreeBSD - you name it. Vim can run on it.</p>
			<br>
			<p><strong>But. Again. You'll have to learn it.</strong></p>
			<p>I think this is the main thing people aren't using Vim. The reward of learning Vim is surely productivity, but again - no pain, no gain. If you are comfortable with your GUI editor and if it gets the job done you don't need to make the transition. But, if you are curious and if you want to expand your comfort zone as a programmer (or even as a writer) you should definitely try it!</p>
		`}
		date='10/12/2019'
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

				<Route path='/tech' component={Tech} />
				<Route path='/vim' component={Vim} />
				<Route component={NotFound} />
			</Switch>
		</Wrapper>
	</BrowserRouter>
);

export default App;
