import React from 'react';
import { Home, Search, Add, Heart } from '../icons';

import '../styles/footer.scss';

const FooterNav = () => (
	<div className="footerNavBlock">
		<Home />
		<Search />
		<Add />
		<Heart />
		<div className="avatarNavItem" />
	</div>
);

export default FooterNav;
