// import { Link } from "wouter";
import React from "react";
import Nav from "./Navbar";

const Register = () => {
  return (
    <div>
      <Nav/>
      <div>
        <form>
          <input type="text"
                 name="user_name"
                 placeholder="User Name"/>
          <input type="text"
                 name="email"
                 placeholder="Email"/>
          <input type="password"
                 name="password1"
                 placeholder="Password"/>
          <input type="password"
                 name="password2"
                 placeholder="Password"/>
        </form>
      </div>
    </div>
  )
};

export default Register;
