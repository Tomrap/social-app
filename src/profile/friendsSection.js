import React, { Component } from 'react';
import Friend from './friend'
import ElementsCreator from './elementsCreator'

class FriendsSection extends Component {

    async createFriend(history, photosCollection, index) {
        const userRef =  photosCollection[index][1]
        const userResult = await userRef.get()
        const user = userResult.data()
        const name = user.firstName + user.lastName
        const imagesRef = user.imagesRef
        const imagesResult = await imagesRef.get()
        const images = imagesResult.data()
        const profileImageThumb = images.profileImage
        return <Friend key={profileImageThumb} name={name} src={profileImageThumb} userId = {user.userRef} history={history}></Friend>
    }

    promiseResolver = (promises, callback) => {
        Promise.all(promises).then(arrOfResults => {
            callback(arrOfResults)
        })
    }

    render() {

    return  (
        <div className="friends-section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <ElementsCreator name="friends" refe={this.props.refe} createElement={this.createFriend.bind(null,this.props.history)} 
                        promisesResolver={(this.promiseResolver)} numberOfElements={4}></ElementsCreator>
                </div>
            </div>
        </div>
    </div>
    )
    }
}

export default FriendsSection;