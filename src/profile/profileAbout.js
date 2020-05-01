import React from 'react';
import AboutSection from './aboutSection'

const ProfileAbout = (props) => {

    return  (
        <div className="about-author-details">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="card widget-item">
                        <div className="about-me">
                            <ul className="nav flex-column about-author-menu">
                                <li><a href="#one" data-toggle="tab" className="active">Something About Me</a></li>
                                <li><a href="#two" data-toggle="tab">Working Zone</a></li>
                                <li><a href="#three" data-toggle="tab">Educational Qualification</a></li>
                                <li><a href="#four" data-toggle="tab">Work & Education</a></li>
                                <li><a href="#five" data-toggle="tab">Friends & Family</a></li>
                                <li><a href="#six" data-toggle="tab">Contact Details</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="about-description">
                        <div className="tab-content">
                            <AboutSection classNames="tab-pane fade active show" id='one'></AboutSection>
                            <AboutSection classNames="tab-pane fade" id='two'></AboutSection>
                            <AboutSection classNames="tab-pane fade" id='three'></AboutSection>
                            <AboutSection classNames="tab-pane fade" id='four'></AboutSection>
                            <AboutSection classNames="tab-pane fade" id='five'></AboutSection>
                            <AboutSection classNames="tab-pane fade" id='six'></AboutSection>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProfileAbout;