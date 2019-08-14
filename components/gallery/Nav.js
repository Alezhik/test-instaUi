import React from 'react';
import { Grid, Account, Rectangle } from '../../icons';

import '../../styles/gallery.scss';

const GalleryNav = ({ viewType, viewGalleryList, viewGalleryGrid }) => {
	return (
		<div className="navGalleryBlock">
			<div className="navButtons">
				<button>Shop</button>
				<div className="verticalSeparator" />
				<button>Directions</button>
			</div>
			<div className="navIcons">
				<button onClick={viewGalleryGrid}><Grid color={viewType === 'grid' && '#4894d9'}/></button>
				<button onClick={viewGalleryList}><Rectangle color={viewType === 'list' && '#4894d9'}/></button>
				<Account />
			</div>
		</div>
	);
};

export default GalleryNav;
