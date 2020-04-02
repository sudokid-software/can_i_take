import React from 'react';
import './App.css';
import { Route, Switch } from "wouter";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
// import { askForPermissionToReceiveNotifications } from './push-notification';

const App = () => (
  <Switch>
    <Route path="/register" component={Register}/>
    <Route path="/login" component={Login}/>
    <Route path="/" component={Home}/>
  </Switch>
);

export default App;
