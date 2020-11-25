import './ImageList.css';
import React from 'react';

const ImageList = (props) => {
    const images = props.images.map((image)=>{
        return <img src={image.urls.regular}/>;
    })

    return(
        <div className="ui container" style={{alignSelf:'center'}}>
            <div className="image-list">{images}</div>
        </div>
    );
}

export default ImageList;