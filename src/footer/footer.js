import React, { Component } from 'react';
import FriendsSlider from './friendsSlider'
import FriendsSearch from './friendsSearch'
import LiveChat from './liveChat'
import { FirebaseContext } from '../firebase';


class Footer extends Component {

    state = {
       activeFriends : new Map(),
       notActiveFriends : new Map(),
       allFriends : []
    }

    async componentDidMount() {
        let context = this.context;
        let friendsRef = this.props.user.friendsRef;
        let friendsRes = await friendsRef.get()
        let friendsResult = friendsRes.data()

        let promisesList = []
        let databaseCollection = Object.entries(friendsResult);
        databaseCollection.forEach(element => {
            promisesList.push(element[1].get())
        });

        let arrOfResults = await Promise.all(promisesList);


        arrOfResults.forEach(element => {
            context.listenToDocumentChange(element.id, (doc) => {
                let activeFriends = new Map(this.state.activeFriends)
                let notActiveFriends = new Map(this.state.notActiveFriends)
                if(doc.data().active == true) {   
                    activeFriends.set(doc.id,doc.data())
                    notActiveFriends.delete(doc.id)
                } else {
                    notActiveFriends.set(doc.id,doc.data())
                    activeFriends.delete(doc.id)
                } 
                this.setState({
                    activeFriends : activeFriends,
                    notActiveFriends : notActiveFriends
                })
            })
        });
    }

    render() {
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
                                    <FriendsSlider mobile={false} activeFriends={[...this.state.activeFriends.values()]}></FriendsSlider>
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
}
Footer.contextType = FirebaseContext
export default Footer