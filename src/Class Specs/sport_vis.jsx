import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Loading from "../loading";
export default function Sport_vis(class_Sport) {
  let cl_data = class_Sport.data_href;
  return (
    <>
      <div className="container">
        <div className="row col-12">
          <div className="col-5">
            {cl_data.data_one_loaded == 1 ? cl_data.data_one : Loading}
          </div>
          <div className="col-7"></div>
        </div>
        <div className="row col-12">
          <div className="col-6"></div>
          <div className="col-6"></div>
        </div>
        <div className="row">
          <div className="col-8"></div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
}
