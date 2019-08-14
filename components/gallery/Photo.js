import React, { createRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import { VideoIcon, ImagesIcon } from '../../icons';

import '../../styles/gallery.scss';

const components = {
    VideoIcon: VideoIcon,
    ImagesIcon: ImagesIcon
};

const data = [{
    icon: 'VideoIcon',
    name: '1'
}, {
    name: '2'
}, {
    name: '3'
}, {
    name: '4'
}, {
    icon: 'ImagesIcon',
    name: '5',
}, {
    icon: 'VideoIcon',
    name: '6'
}, {
    name: '7'
}, {
    name: '8'
}, {
    icon: 'VideoIcon',
    name: '9',
}, {
    icon: 'VideoIcon',
    name: '10'
}, {
    icon: 'ImagesIcon',
    name: '11'
}, {
    name: '12'
},{
    name: '13'
}, {
    name: '14'
}, {
    icon: 'ImagesIcon',
    name: '15',
}, {
    name: '16'
}, {
    name: '17'
}, {
    name: '18'
}, {
    icon: 'ImagesIcon',
    name: '19',
}];

const SetComponent = ({ componentName, ...rest }) => {
    const Icon = components[componentName];
    return (<Icon {...rest} />);
};

const GalleryPhoto = ({ viewType, viewGalleryList }) => {
    const [myRef, setMyRef] = useState();

    useEffect(() => {
        if (myRef) {
            myRef.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    },
    [myRef]);

	return (
		<div className="photoGalleryBlock">
            {data.map(item => {

                const ref = createRef();

                const handleClick = () => {
                    viewGalleryList();
                    setMyRef(ref.current);
                }

                return (
                    <div 
                        className={classNames("photo", viewType)}
                        key={`subscriber_${item.name}`}
                        onClick={handleClick}
                        ref={ref}
                    >
                        {item.icon && (
                            <SetComponent componentName={item.icon} className="photoIcom"/>
                        )}
                    </div>
                )}
            )}
		</div>
	);
};

export default GalleryPhoto;
