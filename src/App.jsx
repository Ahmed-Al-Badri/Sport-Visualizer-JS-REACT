import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Nav_ from "./Nav/Nav";
import Route_ from "./Route/Route";

function App() {
  return (
    <>
      <div className="container">
        <div className="row col-md-12">
          <Nav_ />
        </div>
        <div className="row col-12">
          <Route_ />
        </div>
      </div>
    </>
  );
}

export default App;
