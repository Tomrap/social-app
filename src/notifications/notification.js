import React from 'react';

const Notification = (props) => {

    return (
    <li className="msg-list-item d-flex justify-content-between">
                   
        <div className="profile-thumb">
            <figure className="profile-thumb-middle">
                <img src="assets/images/profile/profile-small-3.jpg" alt="profile picture"/>
            </figure>
        </div>
       
        <div className="msg-content notification-content">
            <a href="profile.html">Robert Faul</a>,
            <a href="profile.html">william jhon</a>
            <p>and 35 other people reacted to your photo</p>
        </div>
   
        <div className="msg-time">
            <p>25 Apr 2019</p>
        </div>
     
    </li>
    )
}

export default Notification