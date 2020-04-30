import React from 'react';
import { FirebaseContext } from '../firebase';
import $ from 'jquery'; 


const ProfileSettingsDropdown = (props) => {


    // Close When Click Outside
        $('body').on('click', function(e){
            var $target = e.target;
            if (!$($target).is('.profile-dropdown') && !$($target).parents().is('.profile-dropdown')) {
                $(".profile-dropdown").slideUp("slow");
            }
        });

    return (
    <div className="profile-setting-box">
        <div className="profile-thumb-small">
            <a  className="profile-triger" onClick={(event)=>{
                 event.stopPropagation();
                 $(".profile-dropdown").slideToggle();
            }}>
                <figure>
                    <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture" />
                </figure>
            </a>
            <div className="profile-dropdown">
                <div className="profile-head">
                    <h5 className="name"><a href="#">Madison Howard</a></h5>
                    <a className="mail" href="#">mailnam@mail.com</a>
                </div>
                <div className="profile-body">
                    <ul>
                        <li><a href="profile.html"><i className="flaticon-user"></i>Profile</a></li>
                        <li><a href="#"><i className="flaticon-message"></i>Inbox</a></li>
                        <li><a href="#"><i className="flaticon-document"></i>Activity</a></li>
                    </ul>
                    <ul>
                        <li><a href="#"><i className="flaticon-settings"></i>Setting</a></li>
                        <li>
                            <FirebaseContext.Consumer>
                                {context =>  
                                <a  onClick={() => context.signout()}><i className="flaticon-unlock"></i>Sign out</a>
                                }
                            </FirebaseContext.Consumer>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProfileSettingsDropdown
