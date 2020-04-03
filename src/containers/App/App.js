import React from 'react';
import { Route, Switch } from "wouter";

import Home from "../Home/Home";
import Main from "../Main/Main";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";

import { init as registerInit } from "../Auth/Form/auth-form.reducer";
// import { askForPermissionToReceiveNotifications } from './push-notification';

import './App.scss';

const App = () => {
  return (
    <Switch>
      <Route path="/register" component={() => <Register initialValues={registerInit()} /> }/>
      <Route path="/login" component={() => <Login initialValues={registerInit()} /> } />
      <Route path="/main" component={() => <Main initialValues={registerInit()} /> } />
      <Route path="/" component={Home}/>
    </Switch>
  )
};

export default App;
