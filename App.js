import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

import FooterNav from './components/FooterNav';
import HeaderNav from './components/HeaderNav';
import MobileFooter from './components/MobileFooter';
import MobileHeader from './components/MobileHeader';
import ProfileInfo from './components/profile/Info';
import ProfileDesc from './components/profile/Description';
import ProfileSubscribers from './components/profile/Subscribers';
import Gallery from './components/gallery';

import NumberToText from './components/NumberToText';

const UiContent = () => (
	<div className="App">
		<header className="App-header">
			<MobileHeader />
		</header>
		<div className="scrollView">
			<HeaderNav />
			<ProfileInfo />
			<ProfileDesc />
			<ProfileSubscribers />
			<Gallery />
		</div>
		<FooterNav />
		<footer>
			<MobileFooter />
		</footer>
	</div>
);

function App() {
	return (
		<Router>
				<Route path="/" exact component={UiContent} />
				<Route path="/number" component={NumberToText} />
		</Router>
	);
}

export default App;
