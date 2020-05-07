import React, { Component } from 'react';
import FriendsSlider from './friendsSlider'
import FriendsSearch from './friendsSearch'
import LiveChat from './liveChat'


class RegularFooter extends Component  {

    state={
        currentUser: {
            name: "",
            active: ""
    },
        show: false
    }

    setUser = (currentUser, show) => {
       this.setState({
           currentUser: currentUser,
           show: show
       })
    }


render() {

    return (
        <footer className="d-none d-lg-block">
        <div className="footer-area reveal-footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-wrapper">
                            <FriendsSearch activeFriends={[...this.props.activeFriends.values()]} 
                            notActiveFriends={[...this.props.notActiveFriends.values()]} 
                            comparer={this.props.comparer} clickHandler={this.setUser.bind(this)}></FriendsSearch>
                            <div className="card card-small mb-0 active-profile-wrapper">
                                <div className="active-profiles-wrapper">
                                <FriendsSlider mobile={false} activeFriends={[...this.props.activeFriends.values()]} 
                                comparer={this.props.comparer} clickHandler={this.setUser.bind(this)}></FriendsSlider>
                                </div>
                            </div>
                            <LiveChat currentUser={this.state.currentUser} show={this.state.show}></LiveChat>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>  
    )
}



}
export default RegularFooter