import React from 'react';
import Photo from './photo'

const PhotoSection = (props) => {

    return  (
        <div className="photo-section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="content-box">
                        <h5 className="content-title">photos</h5>
                        <div className="content-body">
                            <div className="row mt--30">
                                <Photo></Photo>
                                <Photo></Photo>
                                <Photo></Photo>
                                <Photo></Photo>
                                <Photo></Photo>
                                <Photo></Photo>
                                <div className="col-12">
                                    <div className="load-more text-center">
                                        <button className="load-more-btn">load more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PhotoSection;