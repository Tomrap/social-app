import React , { useState, useEffect } from 'react';

const ProfileThumb = (props) => {

    let [src, setSrc] = React.useState("");


    useEffect(() => {
        props.photoRef.get().then(result => {
            let element = result.data()
            setSrc(element.profileImage) 
        })
      });

    let className = "active profile-active"
    if(props.active == false) {
        className=""
    }

    return (
    src =! "" ?    
    <div className={`profile-thumb ${className}`}>
        <a>
            <figure className="profile-thumb-small">
                <img src={src} alt="profile picture"/>
            </figure>
        </a>
    </div>
    :
    <div></div>
    )
}

export default ProfileThumb