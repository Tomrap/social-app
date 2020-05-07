import React from 'react';
import ProfileThumb from './profileThumb'

const SingleSlide = (props) => {

    return (
        <div className="single-slide">
            <ProfileThumb photoRef={props.photoRef}></ProfileThumb>
        </div>
    )
}

export default SingleSlide