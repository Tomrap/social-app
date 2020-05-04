import React from 'react';
import Welcome from './login/welcome'
import MainPage from './main/mainPage'
import ProfilePage from './main/profilePage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProvider from "./login/UserProvider";
import LoginRedirect from './login/loginRedirect'


const VIEWS = [ 
  ["Welcome", LoginRedirect.bind(null,ProfilePage)],
  ["MainPage", LoginRedirect.bind(null,MainPage)],
  ["ProfilePage", LoginRedirect.bind(null,ProfilePage)],
  ["", LoginRedirect.bind(null, ProfilePage)]
];

const Content = () => {
  return (
    <Switch>
      {VIEWS.map(([path, Comp]) => (
        <Route key={path} path={`/${path}`} render={(location) => <Comp location={location}/>}/>
      ))}
    </Switch>
  );
};

function App() {
  return (
    <Router>
      <UserProvider>
            <Content />
      </UserProvider>
    </Router>
  );
}

export default App;
