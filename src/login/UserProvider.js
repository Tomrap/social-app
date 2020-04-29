import React, { Component, createContext } from "react";
import { FirebaseContext } from '../firebase';

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null
  };

  componentDidMount = async () => {
      const context = this.context;
      context.getAuth()().onAuthStateChanged(async userAuth => {
        if(userAuth != null) {
            const user = await context.getUser(userAuth);
            this.setState({
              user: user
            });
        } else {
            this.setState({
                user: null
              }); 
        }
    });

  };

  render() {
    const { user } = this.state;

    return (
      <UserContext.Provider value={user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
UserProvider.contextType = FirebaseContext;    
export default UserProvider;