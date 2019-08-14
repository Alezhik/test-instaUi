import React from 'react';
import { AccountCheck, MenuDropdown } from '../../icons';

import '../../styles/profile.scss';

const stats = [
	{value: 8788, title: 'posts'},
	{value: '23.7m', title: 'folowers'},
	{value: 94, title: 'foloving'},
]

const ProfileInfo = () => (
	<div className="infoBlock">
		<div className="logoBlock">LOGO</div>
		<div className="info">
			<div className="stats">
				{stats.map(stat => (
					<div className="statItem" key={`statItem_${stat.title}`}>
						<div className="title">
							{stat.value}
						</div>
						<div className="text">
							<span>{stat.title}</span>
						</div>
					</div>
				))}
			</div>
			<div className="buttons">
				<button className="bigButton">Message</button>
				<button><AccountCheck size={20} /></button>
				<button><MenuDropdown size={20} /></button>
			</div>
		</div>
	</div>
);

export default ProfileInfo;
