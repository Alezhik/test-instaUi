import React from 'react';
import { LeftArrow, DotsVertical } from '../icons';

import '../styles/footer.scss';

const HeaderNav = () => (
	<div className="headerNavBlock">
		<LeftArrow />
		<div className="headerTitle">manchesterunited</div>
		<div className="flexSeparator" />
		<DotsVertical />
	</div>
);

export default HeaderNav;
