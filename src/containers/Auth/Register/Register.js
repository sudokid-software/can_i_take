// import { Link } from "wouter";
import React, { useRef } from "react";
import Nav from "../../../components/NavBar/Navbar";

const Register = () => {
  const userNameInput = useRef(null);
  const emailInput = useRef(null);
  const password1Input = useRef(null);
  const password2Input = useRef(null);
  const form = useRef(null);
  let errors = useRef(false);

  const handleClick = (event) => {
    event.preventDefault();

    const userName = userNameInput.current.value;
    const email = emailInput.current.value;
    const password1 = password1Input.current.value;
    const password2 = password2Input.current.value;

    if (
      userName !== '' || email !== '' || password1 !== '' || password2 !== ''
    ) {
      errors = 'Please fill out the full form';
      return;
    }

    if (password1 !== password2) {
      errors = 'Please make sure that your passwords match';
      return;
    }

    errors = false;
    form.current.reset()
  };

  return (
    <div>
      <Nav/>
      <div>
        <form ref={form}>
          {errors !== false?<span>{errors}</span>:<span></span>}
          <input type="text"
                 name="user_name"
                 placeholder="User Name"
                 ref={userNameInput}/>
          <input type="text"
                 name="email"
                 placeholder="Email"
                 ref={emailInput}/>
          <input type="password"
                 name="password1"
                 placeholder="Password"
                 ref={password1Input}/>
          <input type="password"
                 name="password2"
                 placeholder="Password"
                 ref={password2Input}/>
          <button onClick={handleClick}>Submit</button>
        </form>
      </div>
    </div>
  )
};

export default Register;
