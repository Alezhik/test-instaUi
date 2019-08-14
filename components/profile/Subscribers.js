import React, {Fragment} from 'react';
import { TV } from '../../icons';

import '../../styles/profile.scss';

const data = [{
    icon: true,
    name: 'IGTBV'
},{
    name: 'MUTV'
},{
    name: '#MUwomen'
},{
    name: '#BemVindoF..'
},{
    name: 'PL2018/2019'
}];

const ProfileSubscribers = () => {
	return (
		<div className="subscribersBlock">
            {data.map( (item, index) => (
                <Fragment>
                    <div className="subscriberItem" key={`subscriber_${item.name}`}>
                        <div className="logo">
                            <div />
                            {item.icon && <TV className="logoIcon"/>}
                        </div>
                        <div className="name">{item.name}</div> 
                    </div>
                    {index === 0 && <div className="verticalSeparator" key="verticalSeparator"/>}
                </Fragment>
            ))}
		</div>
	);
};

export default ProfileSubscribers;
