import React from 'react';
import "lightgallery.js/dist/css/lightgallery.css";
import { LightgalleryItem } from "react-lightgallery";

const Photo = (props) => {

    return  (
        <div className="col-sm-6 col-md-4">
        <div className="photo-group">
            <div className="gallery-toggle">
                <div className="gallery-overlay">            
                    <LightgalleryItem src={props.realUrl}>
                        <img src={props.smallSrc} />
                    </LightgalleryItem>
                    <div className="view-icon"></div>
                </div>
                <div className="photo-gallery-caption">
                    <h3 className="photos-caption">{props.name}</h3>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Photo;