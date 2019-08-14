import React from 'react';
import { WiFi, Vibrate, Battery, Nettwork, Timer, Message, Android, Maps, CircleSmall } from '../icons';

import '../styles/header.scss';

export default class MobileHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: null
		};
	}

	componentDidMount = () => {
		this.setCurentTime();
		setInterval(this.setCurentTime, 5000);
	}

	setCurentTime = () => {
		const today = new Date();
		const minutes = today.getMinutes().toString().padStart(2, '0');
		const time = `${today.getHours()}:${minutes}`;
		this.setState({ time });
	}
	

	render() {
		const { time } = this.state;
		return (
			<div className="headerBlock">
				<div className="timerBlock">{time}</div>
				<Message className="iconHeader" />
				<Android className="iconHeader" />
				<Maps className="iconHeader" />
				<CircleSmall className="iconHeader" />
				<div className="flexSeparator" />
				<Timer className="iconHeader" />
				<Vibrate className="iconHeader" />
				<WiFi className="iconHeader" />
				<Nettwork className="iconHeader" />
				<Battery className="iconHeader" />
			</div>
		);
	}
	
}
