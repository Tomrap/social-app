import React from 'react';
import { FirebaseContext } from '../firebase';
import {SlideDown} from 'react-slidedown'
import { withRouter } from "react-router";

const ProfileSettingsDropdown = (props) => {

    const [open, setOpen] = React.useState(false);

    const handler = (event) => {
        event.stopPropagation();
        event.preventDefault();
        open ? setOpen(false) : setOpen(true)
    };

    return (
    <div className="profile-setting-box">
        <div className="profile-thumb-small">
            <a  className="profile-triger" onClick={handler}>
                <figure>
                    <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture" />
                </figure>
            </a>
            <SlideDown className={'dropdown-slidedown'}>
            {open ? 
                <div className="profile-dropdown">
                    <div className="profile-head">
                        <h5 className="name"><a>{props.user.firstName + " " + props.user.lastName}</a></h5>
                        <a className="mail">{props.user.email}</a>
                    </div>
                    <div className="profile-body">
                        <ul>
                            <li><a onClick={()=>{props.history.push(`/ProfilePage?${props.user.userRef}`)}}><i className="flaticon-user"></i>Profile</a></li>
                            <li><a><i className="flaticon-message"></i>Inbox</a></li>
                            <li><a><i className="flaticon-document"></i>Activity</a></li>
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
            :  <div></div>}
            </SlideDown>
        </div>
    </div>
    )
}

export default withRouter(ProfileSettingsDropdown)
