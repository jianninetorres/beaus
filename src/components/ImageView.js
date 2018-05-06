import React from 'react';
import '../css/image-view.css';

// class ImageView extends Component {
//     render() {
//         return (
//             <div className="image-view"></div>
//         );
//     }
// }

const ImageView = (props) => {
    return (
        <div className="image-view">
            <img src={props.image} />
        </div>
    );
}

export default ImageView;