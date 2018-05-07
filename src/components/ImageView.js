import React from 'react';
import '../css/image-view.css';

const ImageView = (props) => {
    return (
        <div className="image-view">
            <img src={props.image} />
        </div>
    );
}

export default ImageView;