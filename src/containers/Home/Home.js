import React, { Fragment } from "react";

import Navigation from "../../components/Navigation/Navigation";

const Home = () => (
  <Fragment>
    <Navigation />
    <main className="page-wrapper">
      <div className="modal-wrapper">
        <h1>Welcome to Can I Take</h1>
        <h6>Track who is currently using a service.</h6>
      </div>
    </main>
  </Fragment>
);

export default Home;
