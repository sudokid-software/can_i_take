import React from 'react';
import './App.css';
import { Route, Switch } from "wouter";
import Home from "./containers/Home/Home";
import Register from "./containers/Auth/Register/Register";
import Login from "./containers/Auth/Login/Login";
// import { askForPermissionToReceiveNotifications } from './push-notification';

const App = () => (
  <Switch>
    <Route path="/register" component={Register}/>
    <Route path="/login" component={Login}/>
    <Route path="/" component={Home}/>
  </Switch>
);

export default App;
