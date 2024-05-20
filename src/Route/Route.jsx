import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Sport from "../Class Specs/Class_sport";
import { Soccer, Graphs } from "../Class Specs/Class_sport";
import Sport_vis from "../Class Specs/sport_vis";
import Home from "../Home";
import Loading from "../loading";

function set_data() {
  let data = new Graphs();
  return new Sport(data);
}
export default function Route_() {
  const [sport_one, sport_one_edit] = useState(set_data());
  useEffect(() => {
    sport_one.sort_data();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/Main" element={<Home />} />
        <Route
          path="/Sport_one"
          element={
            sport_one.loaded ? <Sport_vis data_href={sport_one} /> : <Loading />
          }
        />
      </Routes>
    </>
  );
}
