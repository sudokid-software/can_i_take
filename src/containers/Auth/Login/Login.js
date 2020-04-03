// import { Link } from "wouter";
import React, { Fragment } from "react";
import Navigation from "../../../components/Navigation/Navigation";
import AuthForm from '../Form/AuthForm';

const Login = () => {
  return (
    <Fragment>
      <Navigation />
      <main className="page-wrapper">
        <div className="modal-wrapper">
          <AuthForm heading="Login" isLogin={true} />
        </div>
      </main>
    </Fragment>
  )
};

export default Login;
