import React from 'react';
import ProfileSettingsDropdown from './profileSettingDropdown'

const MobileHeader = (props) => {

    return (
        <header>
        <div className="mobile-header-wrapper sticky d-block d-lg-none">
            <div className="mobile-header position-relative ">
                <div className="mobile-logo">
                    <a href="index.html">
                        <img src="assets/images/logo/logo-white.png" alt="logo"/>
                    </a>
                </div>
                <div className="mobile-menu w-100">
                    <ul>
                        
                        <li>
                            <button className="notification"><i className="flaticon-notification"></i>
                                <span>03</span>
                            </button>
                        </li>
                        <li>
                            <button className="chat-trigger notification"><i className="flaticon-chats"></i>
                                <span>04</span>
                            </button>
                            <div className="mobile-chat-box">
                                <div className="live-chat-title">
                                   
                                    <div className="profile-thumb">
                                        <a href="profile.html">
                                            <figure className="profile-thumb-small profile-active">
                                                <img src="assets/images/profile/profile-small-15.jpg" alt="profile picture"/>
                                            </figure>
                                        </a>
                                    </div>
                                   
                                    <div className="posted-author">
                                        <h6 className="author"><a href="profile.html">Robart Marloyan</a></h6>
                                        <span className="active-pro">active now</span>
                                    </div>
                                    <div className="live-chat-settings ml-auto">
                                        <button className="chat-settings"><img src="assets/images/icons/settings.png" alt=""/></button>
                                        <button className="close-btn"><img src="assets/images/icons/close.png" alt=""/></button>
                                    </div>
                                </div>
                                <div className="message-list-inner">
                                    <ul className="message-list custom-scroll">
                                        <li className="text-friends">
                                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                                            <div className="message-time">10 minute ago</div>
                                        </li>
                                        <li className="text-author">
                                            <p>Many desktop publishing packages and web page editors</p>
                                            <div className="message-time">5 minute ago</div>
                                        </li>
                                        <li className="text-friends">
                                            <p>packages and web page editors </p>
                                            <div className="message-time">2 minute ago</div>
                                        </li>
                                        <li className="text-friends">
                                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                                            <div className="message-time">10 minute ago</div>
                                        </li>
                                        <li className="text-author">
                                            <p>Many desktop publishing packages and web page editors</p>
                                            <div className="message-time">5 minute ago</div>
                                        </li>
                                        <li className="text-friends">
                                            <p>packages and web page editors </p>
                                            <div className="message-time">2 minute ago</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="chat-text-field mob-text-box">
                                    <textarea className="live-chat-field custom-scroll" placeholder="Text Message"></textarea>
                                    <button className="chat-message-send" type="submit" value="submit">
                                        <img src="assets/images/icons/plane.png" alt=""/>
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <button className="search-trigger">
                                <i className="search-icon flaticon-search"></i>
                                <i className="close-icon flaticon-cross-out"></i>
                            </button>
                            <div className="mob-search-box">
                                <form className="mob-search-inner">
                                    <input type="text" placeholder="Search Here" className="mob-search-field"/>
                                    <button className="mob-search-btn"><i className="flaticon-search"></i></button>
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mobile-header-profile">    
                <ProfileSettingsDropdown></ProfileSettingsDropdown>
                </div>
            </div>
        </div>
    </header>
    )
}
export default MobileHeader