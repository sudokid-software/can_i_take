// import { Link } from "wouter";
import React, { useReducer, useRef } from "react";
import Nav from "../../../components/NavBar/Navbar";
import { reducer, init } from "./reducer";

import "./Register.scss";

const Register = (props) => {
  console.log(props);
  const [formData, setFormData] = useReducer(reducer, props, init);
  const form = useRef(null);
  let errors = useRef(false);

  const onChangeHandler = (e) => {
    setFormData({type: 'UPDATE_FORM', name: e.target.name, value: e.target.value});
  };

  const handleClick = async (event) => {
    event.preventDefault();
    console.log('FormData:', formData);
    setFormData({type: 'ERROR', value: 'INVALID DATA'});
    // console.log("UserName", username);
    // console.log('Email', email);
    // console.log('Password1', password1);
    // console.log('Password2', password2);
    //
    // if (
    //   username !== '' || email !== '' || password1 !== '' || password2 !== ''
    // ) {
    //   errors = 'Please fill out the full form';
    //   return;
    // }
    //
    // if (password1 !== password2) {
    //   errors = 'Please make sure that your passwords match';
    //   return;
    // }
    //
    // errors = false;
    // form.current.reset()
  };

  return (
    <div>
      <Nav/>
      <div>
        <form>
          <input type="text"
                 name="username"
                 placeholder="User Name"
                 onChange={onChangeHandler}
                 required />
          <input type="text"
                 name="email"
                 placeholder="Email"
                 onChange={onChangeHandler}
                 required />
          <input type="password"
                 name="password1"
                 placeholder="Password"
                 onChange={onChangeHandler}
                 required />
          <input type="password"
                 name="password2"
                 placeholder="Password"
                 onChange={onChangeHandler}
                 required />
          <button onClick={handleClick}>Submit</button>
        </form>
      </div>
    </div>
  )
};

export default Register;
