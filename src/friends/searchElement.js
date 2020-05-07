import React,  { useState, useEffect } from 'react';
import ProfileThumb from './profileThumb'

const SearchElement = (props) => {

    let [desc, setDesc] = React.useState("");

    useEffect(() => {
        props.element.userDetailRef.get().then(result => {
            let element = result.data()
            setDesc(element.SomethingAboutMe) 
        })
      });

    return (
        <li className="d-flex align-items-center profile-active" onClick={() => props.clickHandler({
            name: props.element.firstName +" "+ props.element.lastName,
            active: props.active == false ? "Not Active": "Active Now" 
        }, true)}>
        
        <ProfileThumb photoRef={props.element.imagesRef} active={props.active}></ProfileThumb>
        
            <div className="posted-author">
                <h6 className="author">{props.element.firstName +" "+ props.element.lastName}</h6>
                <p>{desc}</p>
            </div>
        </li>
    )
}

export default SearchElement