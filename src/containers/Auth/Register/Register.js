import React, { Fragment } from "react";

import Navigation from "../../../components/Navigation/Navigation";
import AuthForm from '../Form/AuthForm';

const Register = () => {
  return (
    <Fragment>
      <Navigation />
      <main className="page-wrapper">
        <div className="modal-wrapper">
          <AuthForm heading="Register" isRegister={true} />
        </div>
      </main>
    </Fragment>
  )
};

export default Register;
