import React, { Component, createContext } from "react";
import { FirebaseContext } from '../firebase';


export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null,
    userId: null
  };

  componentDidMount = async () => {


      const context = this.context;
      context.getAuth()().onAuthStateChanged(async userAuth => {
        // whenere url is changed (manually or by redirect) this will trigger twice - first with userAuth null and then with actual user
        // however if we use history.push this does not get triggered
        if(userAuth != null) {
            const userDoc = await context.getUserDoc(userAuth.uid);
            let user = userDoc.data()
            user.active = true;
            this.saveToDatabase(user, userDoc.id)
            this.setState({
              user: user,
              userId: userDoc.id
            });
        } else {
            this.setState(prevState => {
              if(prevState.user != null) {
                const prevUser = prevState.user;
                prevUser.active = false;
                this.saveToDatabase(prevUser, prevState.userId)
              }
              return {user: null}
              }); 
        }
    });

  };

  saveToDatabase(user, userId) {
    const context = this.context;
    context.updateUser(user, userId)
  }


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