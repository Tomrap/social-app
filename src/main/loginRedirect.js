import React from 'react';
import { UserContext } from "../login/UserProvider";
import { Redirect } from "react-router-dom";

const LoginRedirect = WrappedComponent => {
    return props => 
        <UserContext.Consumer>
            {user => {
                if(user) {
                    return  (
                        <WrappedComponent user={user} {...props} />
                    )
                }
                 else {
                    return <Redirect to="/Welcome"/>
                }
            }}
       </UserContext.Consumer>
    
  };
  export default LoginRedirect