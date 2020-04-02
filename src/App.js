import React, { useReducer} from 'react';
import './App.css';
import { Route, Switch } from "wouter";
import  Home from "./containers/Home/Home";
import { Register } from "./containers/Auth/Register/Register";
import { Login } from "./containers/Auth/Login/Login";
import { initialValues } from './containers/Auth/reducer';
import { reducer, init } from "./containers/Auth/reducer";
// import { askForPermissionToReceiveNotifications } from './push-notification';
const App = () => {
  const [username, setUsername] = useReducer(reducer, initialValues, init);
  const onChangeHandler = (e) => {
    setUsername({type: 'addUsername', username: e.target.value});
  }
  return (
  
  <Switch>
    <Route path="/register" component={() => <Register initialValues={initialValues} onChangeHandler={onChangeHandler}/>}/>
    <Route path="/login" component={() => <Login initialValues={initialValues} />}/>
    <Route path="/" component={Home}/>
  </Switch>)
};

export default App;
