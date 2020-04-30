import React from 'react';
import FriendsSlider from './friendsSlider'
import FriendsSearch from './friendsSearch'
import LiveChat from './liveChat'


const Footer = (props) => {

    return (
        <footer className="d-none d-lg-block">
        <div className="footer-area reveal-footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-wrapper">
                            <FriendsSearch></FriendsSearch>
                            <div className="card card-small mb-0 active-profile-wrapper">
                                <div className="active-profiles-wrapper">
                                <FriendsSlider mobile={false} numberOfSlides={20}></FriendsSlider>
                                </div>
                            </div>
                            <LiveChat></LiveChat>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>  
    )
}

export default Footer