import React from 'react';

const Photo = (props) => {

    return  (
        <div className="col-sm-6 col-md-4">
        <div className="photo-group">
            <div className="gallery-toggle">
                <div className="d-none product-thumb-large-view">
                    <img src="assets/images/photos/photo-1.jpg" alt="Photo Gallery"/>
                    <img src="assets/images/photos/photo-2.jpg" alt="Photo Gallery"/>
                    <img src="assets/images/photos/photo-3.jpg" alt="Photo Gallery"/>
                </div>
                <div className="gallery-overlay">
                    <img src="assets/images/photos/photo-1.jpg" alt="Photo Gallery"/>
                    <div className="view-icon"></div>
                </div>
                <div className="photo-gallery-caption">
                    <h3 className="photos-caption">office hangout (06)</h3>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Photo;