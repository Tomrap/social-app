import React from 'react';
import FriendsSlider from './friendsSlider'
import FriendsSearch from './friendsSearch'
import LiveChat from './liveChat'


const RegularFooter = (props) => {

    return (
        <footer className="d-none d-lg-block">
        <div className="footer-area reveal-footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-wrapper">
                            <FriendsSearch activeFriends={[...props.activeFriends.values()]} notActiveFriends={[...props.notActiveFriends.values()]} comparer={props.comparer}></FriendsSearch>
                            <div className="card card-small mb-0 active-profile-wrapper">
                                <div className="active-profiles-wrapper">
                                <FriendsSlider mobile={false} activeFriends={[...props.activeFriends.values()]} comparer={props.comparer}></FriendsSlider>
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
export default RegularFooter