import React from "react";
import { NavLink } from "react-router-dom";

const Errorpa = () => {
  return (
    <div>
      <h1> Page Not Found </h1>
      <div className="form-group">
        <NavLink to="/"> Go to Home Page </NavLink>
      </div>
    </div>
  );
};

export default Errorpa;
