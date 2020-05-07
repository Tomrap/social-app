import React, { Component } from 'react';
import { FirebaseContext } from '../firebase';
import RegularFooter from './regularFooter'
import MobileFooter from '../footer/mobileFooter'


class Footer extends Component {

    state = {
       activeFriends : new Map(),
       notActiveFriends : new Map(),
       allFriends : []
    }

    comparer = (a,b) => {
        if(a.firstName>b.firstName) {
            return 1;
        }
        if(a.firstName<b.firstName) {
            return -1;
        }
        return 0;
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
            <React.Fragment>
            <RegularFooter activeFriends={this.state.activeFriends}  notActiveFriends={this.state.notActiveFriends} comparer={this.comparer}></RegularFooter> 
            {/* <MobileFooter activeFriends={this.state.activeFriends} ></MobileFooter> */}
            </React.Fragment>
        )
    }
}
Footer.contextType = FirebaseContext
export default Footer