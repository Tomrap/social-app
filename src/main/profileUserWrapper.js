import React from 'react';
import { UserContext } from "../login/UserProvider";

const ProfileUserWrapper = (WrappedObject) => {
    return props => {
            if(props.location.location.search === "") {
                return  (
                    <WrappedObject user={props.user} {...props} />
                )
            } 
        }         
  };
  export default ProfileUserWrapper