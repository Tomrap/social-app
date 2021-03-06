import React from "react";
import { FirebaseContext } from '../firebase';
import Main from '../main/main'

const withAuthProtection = redirectRoute => WrappedComponent => {
  class WithAuthProtection extends React.Component {

    //comment out for development so app refresh will not force you to relogin every time

    // componentDidMount() {
    //   const context = this.context;
    //   const { history } = this.props;
    //   if (!context.getAuth()().currentUser) {
    //     return history.push(redirectRoute);
    //   }
    // }

    // this case is a must,
    // if user stay at auth route while they signing out
    // we must take them to login again immediately.
    componentWillReceiveProps(nextProps) {
      const { user, history } = this.props;
      const { user: nextUser } = nextProps;
      if (user && !nextUser) {
        return history.push(redirectRoute);
      }
    }

    render() {
      const { user } = this.props;
      if (!user) {
        return null;
      }
      return <Main content={WrappedComponent} user ={user}/>;
    }
  }
  WithAuthProtection.contextType = FirebaseContext;   

  return WithAuthProtection;
};

export default withAuthProtection;
