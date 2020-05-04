import React from 'react';
import Welcome from './login/welcome'
import MainPage from './main/mainPage'
import ProfileUserWrapper from './main/profileUserWrapper'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import withAuthProtection from './login/withAuthProtection'
import { UserContext } from "./login/UserProvider";


const ProtectedProfile = withAuthProtection("/Welcome")(ProfileUserWrapper);
const ProtectedMainPage = withAuthProtection("/Welcome")(MainPage);

const AppRoutes = () => {

  return (
    <UserContext.Consumer> 
    {user => {
    return (<Router>
          <Switch>
          <Route
            path="/ProfilePage"
            render={props => (
                <ProtectedProfile {...props} user={user} />
            )}
          />
          <Route
            path="/MainPage"
            render={(props) => (
                <ProtectedMainPage {...props}/>
            )}
          />
          <Route
            path="/Welcome"
            render={(props) => (
                <Welcome {...props}/>
            )}
          />
          <Route
            path=""
            render={(props) => (
                <Welcome {...props}/>
            )}
          />
          </Switch>
        </Router>)
              }
            }
        </UserContext.Consumer>
  );
}

export default AppRoutes;
