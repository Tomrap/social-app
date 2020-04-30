import React from 'react';

const Message = (props) => {

    return (
    <li className="msg-list-item d-flex justify-content-between">
                  
        <div className="profile-thumb">
            <figure className="profile-thumb-middle">
                <img src="assets/images/profile/profile-small-3.jpg" alt="profile picture"/>
            </figure>
        </div>
    
        <div className="msg-content">
            <h6 className="author"><a href="profile.html">Mili Raoulin</a></h6>
            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
        </div>

        <div className="msg-time">
            <p>25 Apr 2019</p>
        </div>
    
    </li>
    )
}

export default Message