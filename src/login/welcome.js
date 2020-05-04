import React from 'react';
import Login from './login'
import Register from './register'

const Welcome = (props) => {

    return  (
    <main>
        <div className="main-wrapper pb-0 mb-0">
            <div className="timeline-wrapper">
                <div className="timeline-header">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters align-items-center">
                            <div className="col-lg-6">
                                <div className="timeline-logo-area d-flex align-items-center">
                                    <div className="timeline-logo">
                                        <a href="index.html">
                                            <img src="assets/images/logo/logo.png" alt="timeline logo"/>
                                        </a>
                                    </div>
                                    <div className="timeline-tagline">
                                        <h6 className="tagline">It’s helps you to connect and share with the people in your life</h6>
                                    </div>
                                </div>
                            </div>
                            <Login {...props}></Login>
                        </div>
                    </div>
                </div>
                <div className="timeline-page-wrapper">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="timeline-bg-content bg-img" data-bg="images/timeline/adda-timeline.jpg">
                                    <h3 className="timeline-bg-title">Let’s see what’s happening to you and your world. Welcome in Adda.</h3>
                                </div>
                            </div>
                            <Register></Register>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}

export default Welcome;