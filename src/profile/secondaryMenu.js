import React from 'react';

const SecondaryMenu = (props) => {

    return  (
        <div className="menu-secondary">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="secondary-menu-wrapper bg-white">
                        <div className="page-title-inner">
                            <h4 className="page-title">about</h4>
                        </div>
                        <div className="main-menu-inner header-top-navigation">
                            <nav>
                                <ul className="main-menu">
                                    <li><a href="#"><span>facebook</span> <i className="flaticon-facebook"></i></a></li>
                                    <li><a href="#"><span>twitter</span> <i className="flaticon-twitter-logo-silhouette"></i></a></li>
                                    <li><a href="#"><span>google</span> <i className="flaticon-google-plus"></i></a></li>
                                    <li><a href="#"><span>pinterest</span> <i className="flaticon-pinterest"></i></a></li>
                                    <li className="d-inline-block d-md-none"><a href="profile.html">edit profile</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="post-settings-bar">
                            <span></span>
                            <span></span>
                            <span></span>
                            <div className="post-settings arrow-shape">
                                <ul>
                                    <li><button>edit profile</button></li>
                                    <li><button>activity log</button></li>
                                    <li><button>embed adda</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SecondaryMenu;