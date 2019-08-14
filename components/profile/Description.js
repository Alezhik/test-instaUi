import React from 'react';
import { DecagramCheck } from '../../icons';

import '../../styles/profile.scss';

const data = {
    title: 'Manchester United',
    category: 'Sports Team',
    text: `Follow our <a>#Tribble95</a> journey from <a>#MUTV</a>:
        <br /><a>manunt.co/KOV</a>
        <br /><a>Old Traford</a>, <a>Manchester</a>, <a>United Kingdom M16 ORA</a>`,
    folowed: ['fellaini', 'iamzlatanibrahimivich', 'paulpogba', 
        '1', '2', '3', '4', '5', '6', '7', '8', '9', 
        '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', 
        '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'
    ]
};

const folowedNumber = 3;

const ProfileDesc = () => {
	let folowedString = null;
	if (data.folowed.length > folowedNumber) {
		folowedString = `${data.folowed.slice(0, folowedNumber).join(', ')} + ${data.folowed.length - folowedNumber} more`; 
	} else {
		folowedString = data.folowed.join(', ');
	}

	return (
		<div className="descriptionBlock">
			<div className="title">
				{data.title}
				<DecagramCheck size={14} color='#3894f5' className="titleIcon"/>
			</div>
			<div className="category"><span>{data.category}</span></div>
			<div className="text" dangerouslySetInnerHTML={{__html: data.text}} />
			<div className="folowed">
				<span>Folowed by:</span> {folowedString}</div>
		</div>
	);
};

export default ProfileDesc;
