import React, { Fragment } from "react";

import Navigation from "../../components/Navigation/Navigation";

const Main = () => {
  return (
    <Fragment>
      <Navigation />
      <main className="page-wrapper">
        <div className="modal-wrapper">
          <h1>Can I Take</h1>
          <h6>You have logged in!</h6>
        </div>
      </main>
    </Fragment>
  );
};

export default Main;
