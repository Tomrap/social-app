import React from 'react';
import Friend from './friend'

const FriendsSection = (props) => {

    return  (
        <div className="friends-section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="content-box">
                        <h5 className="content-title">friends</h5>
                        <div className="content-body">
                            <div className="row mt--20">
                                <Friend></Friend>
                                <Friend></Friend>
                                <Friend></Friend>
                                <Friend></Friend>
                                <Friend></Friend>
                                <Friend></Friend>
                                <Friend></Friend>
                                <Friend></Friend>
                                <Friend></Friend>
                                <Friend></Friend>
                                <Friend></Friend>
                                <Friend></Friend>
                                <Friend></Friend>
                                <Friend></Friend>
                                <Friend></Friend>
                                <Friend></Friend>
                                <div className="col-12">
                                    <div className="load-more text-center">
                                        <button className="load-more-btn">load more</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default FriendsSection;