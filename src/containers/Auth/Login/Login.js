// import { Link } from "wouter";
import React, { useReducer } from "react";
import Nav from "../../../components/NavBar/Navbar";

const Login = ({props, onChangeHandler}) => {

  
  return (
    <div>
      <Nav/>
      <h1>Login</h1>
      <div>
        <form>
          <input type="text"
                 name="user_name"
                 placeholder="User Name" onChange={onChangeHandler} />
          <input type="password"
                 name="password1"
                 placeholder="Password"/>
        </form>
      </div>
    </div>
  )
};

export default Login;
