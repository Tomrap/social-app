import React from 'react';
import Welcome from './login/welcome'
import MainPage from './main/mainPage'
import ProfilePage from './profile/profilePage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProvider from "./login/UserProvider";


const VIEWS = [
  ["welcome", Welcome],
  ["MainPage", MainPage],
  ["ProfilePage", ProfilePage],
  ["", ProfilePage]
];

const Content = () => {
  return (
    <Switch>
      {VIEWS.map(([path, Comp]) => (
        <Route key={path} path={`/${path}`}>
          <Comp />
        </Route>
      ))}
    </Switch>
  );
};

function App() {
  return (
    <UserProvider>
      <Router>
          <Content />
      </Router>
    </UserProvider>
  );
}

export default App;
