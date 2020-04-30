import React from 'react';
import FriendsSlider from '../footer/friendsSlider'


const MobileFooter = (props) => {

    return (
        <footer className="d-block d-lg-none">
        <div className="footer-area reveal-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mobile-footer-inner d-flex">
                            <div className="mobile-frnd-search">
                                <button className="search-toggle-btn"><i className="flaticon-search"></i></button>
                            </div>
                            <div className="mob-frnd-search-inner">
                                <form className="mob-frnd-search-box d-flex">
                                    <input type="text" placeholder="Search Your Friends" className="mob-frnd-search-field"/>
                                </form>
                            </div>
                            <div className="card card-small mb-0 active-profile-mob-wrapper">
                                <div className="active-profiles-mob-wrapper">
                                    <div className="active-profile-mobile">
                                    <FriendsSlider mobile={true} numberOfSlides={20}></FriendsSlider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )


}

export default MobileFooter