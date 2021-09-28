import React from 'react';
import '../styles/slidebar-item.scss'

type SlideItemProps = {
    name: String,
    icon: JSX.Element,
}

function SlideBarItem(props: SlideItemProps) {
    return (
        <>
            <div className="slidebar-item">
                <div className="slidebar-item-icon">{props.icon}</div>
                <p>{props.name}</p>
            </div>
        </>
    );
}
export default SlideBarItem;
