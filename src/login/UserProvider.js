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
        //whenere url is changed (manually or by redirect) this will trigger twice - first with userAuth null and then with actual user
        //however if we use history.push this does not get triggered
        if(userAuth != null) {
            const user = await context.getUser(userAuth.uid);
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