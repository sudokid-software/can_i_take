import React from 'react';
import { Route, Switch } from "wouter";

import Home from "../Home/Home";
import Register from "../Auth/Register/Register";
import Login from "../Auth/Login/Login";

import { init as registerInit } from "../Auth/Form/auth-form.reducer";
// import { askForPermissionToReceiveNotifications } from './push-notification';

import './App.scss';

const App = () => {
  return (
    <Switch>
      <Route path="/register" component={() => <Register initialValues={registerInit()} /> }/>
      <Route path="/login" component={() => <Login initialValues={registerInit()} /> } />
      <Route path="/main" component={() => <Login initialValues={registerInit()} /> } />
      <Route path="/" component={Home}/>
    </Switch>
  )
};

export default App;
