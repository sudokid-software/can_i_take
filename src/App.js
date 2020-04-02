import React, { useReducer} from 'react';
import { Route, Switch } from "wouter";
import  Home from "./containers/Home/Home";
import Register from "./containers/Auth/Register/Register";
import Login from "./containers/Auth/Login/Login";
import { init as registerInit } from "./containers/Auth/Register/reducer";
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
