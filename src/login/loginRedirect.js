import React from 'react';
import { UserContext } from "../login/UserProvider";
import { Redirect } from "react-router-dom";

const LoginRedirect = WrappedComponent => {
    return props => 
        <UserContext.Consumer>
            {user => {
                if(user) {
                    return  (
                        <Redirect to="/ProfilePage"/>
                    )
                }
                 else {
                    return <WrappedComponent user={user} {...props} />
                }
            }}
       </UserContext.Consumer>
  };

  export default LoginRedirect