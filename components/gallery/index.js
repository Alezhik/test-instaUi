import React, {Fragment} from 'react';

import GalleryPhoto from './Photo';
import GalleryNav from './Nav';

export default class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			viewType: 'grid'
		};
    }

    viewGalleryGrid = () => {
        this.setState({ viewType: 'grid' });
    };

    viewGalleryList = () => {
        this.setState({ viewType: 'list' });
    };
    
    render() {
        const { viewType } = this.state;
        return (
            <Fragment>
                <GalleryNav 
                    viewType={viewType}
                    viewGalleryList={this.viewGalleryList}
                    viewGalleryGrid={this.viewGalleryGrid}
                />
                <GalleryPhoto 
                    viewType={viewType}
                    viewGalleryList={this.viewGalleryList}
                />
            </Fragment>
        );
    }
}
