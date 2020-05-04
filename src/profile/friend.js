import React from 'react';

const Friend = (props) => {

    return  (
        <div className="col-lg-3 col-sm-6">
        <div className="friend-list-view">
            <div className="profile-thumb">
                <a>
                    <figure className="profile-thumb-middle">
                        <img src={props.src} alt="profile picture"/>
                    </figure>
                </a>
            </div>
            <div className="posted-author">
                <h6 className="author"><a>{props.name}</a></h6>
            </div>
        </div>
    </div>
    )
}

export default Friend;