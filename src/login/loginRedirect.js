import React from 'react';
import { UserContext } from "../login/UserProvider";
import { Redirect } from "react-router-dom";
import MainPage from '../main/mainPage'
import Welcome from './welcome'
import ProfilePage from '../main/profilePage'


//if returns redirect will set the right url and thus back and forth browser arrow will work however everytime url changes 
// firebase relogins the user (seems like it is actually a desired behaviour since it is possible to set user 
// persistence to one-page in firebase), however this relogins means that it is very difficult to redirect user 
// to sign in page if not logged in and get user data and pass it to component if user logged in 
// cause every redirect will force you again to check if user is logged in which means each page would need to have its own logic to check if user is logged in
const LoginRedirect = (WrappedObject, props) => {  
    return (
        <UserContext.Consumer>
            {user => {
                if(user) {
                    return  (
                        <WrappedObject user={user} location={props.location}></WrappedObject>
                    ) 
                }
                 else {
                    return <Welcome></Welcome>
                }
            }}
       </UserContext.Consumer>
    )
  };

  export default LoginRedirect