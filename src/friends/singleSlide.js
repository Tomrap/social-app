import React from 'react';
import ProfileThumb from './profileThumb'

const SingleSlide = (props) => {

    return (
        <div className="single-slide"  onClick={() => props.clickHandler({
            name: props.element.firstName +" "+ props.element.lastName,
            active: "Active Now",
            userId: props.element.userRef
        }, true)}>
            <ProfileThumb photoRef={props.element.imagesRef}></ProfileThumb>
        </div>
    )
}

export default SingleSlide