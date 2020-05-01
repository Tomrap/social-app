import React from 'react';

const Friend = (props) => {

    return  (
        <div className="col-lg-3 col-sm-6">
        <div className="friend-list-view">
            <div className="profile-thumb">
                <a href="#">
                    <figure className="profile-thumb-middle">
                        <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture"/>
                    </figure>
                </a>
            </div>
            <div className="posted-author">
                <h6 className="author"><a href="profile.html">Kate Midiltoin</a></h6>
                <button className="add-frnd">add friend</button>
            </div>
        </div>
    </div>
    )
}

export default Friend;