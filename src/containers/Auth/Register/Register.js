// import { Link } from "wouter";
import React, { useReducer } from "react";
import Nav from "../../../components/NavBar/Navbar";
import { reducer, init } from "../reducer";

const Register = (props) => {
  //const [username, setUsername] = useReducer(reducer, props, init);
  return (
    <div>
      <Nav/>

      {/* {username} */}
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

export { Register };
