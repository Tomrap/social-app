import React from 'react';

const SingleSlide = (props) => {

    return (
        <div className="single-slide">
            <div className="profile-thumb active profile-active">
                <a href="#">
                    <figure className="profile-thumb-small">
                        <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture"/>
                    </figure>
                </a>
            </div>
        </div>
    )
}

export default SingleSlide