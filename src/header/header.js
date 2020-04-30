import React from 'react';
import MessagesDropdown from './messagesDropdown'
import NotificationsDropdown from './notificationsDropdown'
import SearchBox from './searchBox'
import ProfileSettingsDropdown from './profileSettingDropdown'
import InvitationsDropdown from './invitationsDropdown'

const Header = (props) => {


    return (
        <header>
                <div className="header-top sticky bg-white d-none d-lg-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-5">
                                <div className="header-top-navigation"> 
                                    <nav>
                                        <ul>
                                            <li className="active"><a href="index.html">home</a></li>
                                            <MessagesDropdown></MessagesDropdown>
                                            <NotificationsDropdown></NotificationsDropdown>
                                            <InvitationsDropdown></InvitationsDropdown>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="brand-logo text-center">
                                    <a href="index.html">
                                        <img src="assets/images/logo/logo.png" alt="brand logo"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="header-top-right d-flex align-items-center justify-content-end">
                                    <SearchBox></SearchBox>
                                    <ProfileSettingsDropdown ></ProfileSettingsDropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    )
}
export default Header