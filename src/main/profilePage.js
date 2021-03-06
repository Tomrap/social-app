import React, { Component } from 'react';
import ProfileMenu from '../profile/profileMenu'
import SecondaryMenu from '../profile/secondaryMenu'
import ProfileAbout from '../profile/profileAbout'
import PhotoSection from '../profile/photoSection'
import FriendsSection from '../profile/friendsSection'
import FavouriteSection from '../profile/favouriteSection'
import { FirebaseContext } from '../firebase';

class ProfilePage extends Component {

    state = {
        profileImages: {}
    }

    getProfileImages(imagesRef) {
        imagesRef.get().then((result)=> {
            this.setState({
                profileImages : result.data()
            })
        })
    }

    componentDidMount() {
        const user = this.props.user;
        this.getProfileImages(user.imagesRef)
    }

    render() {  
            return  (
                <main>
                <div className="main-wrapper">
                    <div className="profile-banner-large bg-img" style={{backgroundImage: `url(${this.state.profileImages.backgroundImage})`}}>
                    </div>
                    <ProfileMenu aboutRef={this.ProfileAbout} photosRef={this.PhotoSection} friendsRef={this.FriendsSection} moreRef={this.FavouriteSection} profileImage={this.state.profileImages.profileImage}></ProfileMenu>
                    <SecondaryMenu></SecondaryMenu>
                    <ProfileAbout ref={(section) => { this.ProfileAbout = section; }} userDetailRef={this.props.user.userDetailRef}></ProfileAbout>
                    <PhotoSection ref={(section) => { this.PhotoSection = section; }} photosRef={this.props.user.photosRef}></PhotoSection>
                    <FriendsSection ref={(section) => { this.FriendsSection = section; }} refe={this.props.user.friendsRef}></FriendsSection>
                    <FavouriteSection ref={(section) => { this.FavouriteSection = section; }} refe={this.props.user.favBooksRef} name='Favourite Books'></FavouriteSection>
                    <FavouriteSection refe={this.props.user.favSportsRef} name='Favourite Sports'></FavouriteSection>
                </div>
                </main>
            )
    }
      
}
ProfilePage.contextType = FirebaseContext;  
export default ProfilePage;    