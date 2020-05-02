import React from 'react';
import scrollToComponent from 'react-scroll-to-component';

const ProfileMenu = (props) => {

    return  (
        <div className="profile-menu-area secondary-navigation-style bg-white">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-3 col-md-3">
                    <div className="profile-picture-box">
                        <figure className="profile-picture">
                            <a href="profile.html">
                                <img src={props.profileImage} alt="profile picture"/>
                            </a>
                        </figure>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 offset-lg-1">
                    <div className="profile-menu-wrapper">
                        <div className="main-menu-inner header-top-navigation">
                            <nav>
                                <ul className="main-menu">
                                    <li className="active"><a href="#">timeline</a></li>
                                    <li><a onClick={()=> {scrollToComponent(props.aboutRef, { offset: -100, align: 'middle', duration: 500, ease:'inCirc'})}}>about</a></li>
                                    <li><a onClick={()=> {scrollToComponent(props.photosRef, { offset: 0, align: 'bottom', duration: 500, ease:'inCirc'})}}>photos</a></li>
                                    <li><a onClick={()=> {scrollToComponent(props.friendsRef, { offset: 0, align: 'bottom', duration: 500, ease:'inCirc'})}}>friends</a></li>
                                    <li><a onClick={()=> {scrollToComponent(props.moreRef, { offset: 0, align: 'bottom', duration: 500, ease:'inCirc'})}}>more</a></li>
                                    <li className="d-inline-block d-md-none"><a href="profile.html">edit profile</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 d-none d-md-block">
                    <div className="profile-edit-panel">
                        <button className="edit-btn">edit profile</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProfileMenu;