import React, { Component } from 'react';
import { UserContext } from "../login/UserProvider";
import { Redirect } from "react-router-dom";
import Header from '../header/header'
import MobileHeader from '../header/mobileHeader'
import MobileFooter from '../footer/mobileFooter'
import Footer from '../footer/footer'
import ScrollTop from '../footer/scrollTop'
import ProfileMenu from './profileMenu'
import SecondaryMenu from './secondaryMenu'
import ProfileAbout from './profileAbout'
import PhotoSection from './photoSection'
import FriendsSection from './friendsSection'
import FavouriteSection from './favouriteSection'

class ProfilePage  extends Component {

    render() {  
return <UserContext.Consumer>
    {context => {
        if(context) {
            return  (
                <body>
            <Header></Header>
            <MobileHeader></MobileHeader>
            <main>
            <div className="main-wrapper">
                <div className="profile-banner-large bg-img" data-bg="assets/images/banner/profile-banner.jpg">
                </div>
                <ProfileMenu></ProfileMenu>
                <SecondaryMenu></SecondaryMenu>
                <ProfileAbout></ProfileAbout>
                <PhotoSection></PhotoSection>
                <FriendsSection></FriendsSection>
                <FavouriteSection name='Favourite Books'></FavouriteSection>
                <FavouriteSection name='Favourite Sports'></FavouriteSection>
            </div>
            </main>
            <ScrollTop></ScrollTop>
            <Footer></Footer>
            <MobileFooter></MobileFooter>
            </body>
            )
        } else {
            return <Redirect to="/Welcome"/>
        }
    }
    }
    </UserContext.Consumer>
        // }
    }
}
export default ProfilePage;    