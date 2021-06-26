import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { UserContext } from "../App";

const Login = () => {

  const {dispatch} = useContext(UserContext)

  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const Datalog = async (e) => {
      e.preventDefault();
      const res = await fetch("/login",{
          method:"POST",
          headers:{
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              email , password
          })
      });
      const logki = res.json();
    if(logki.status === 400 || !logki) {
      window.alert("Invalid credentilas")
    }else{
      dispatch({type:"USER" , payload:true})
      window.alert("Login success")

      history.push("/")
    }
  }

  return (
    <>
      <div className="signup-form container mt-24">
        <form method="POST">
          <h2>Log In</h2>
          <p>Please fill in this form to create an account!</p>
          <hr />
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-paper-plane"></i>
                </span>
              </div>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Your Email"
                required="required"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required="required"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <button onClick={Datalog} type="submit" className="btn btn-primary btn-lg">
              Log in
            </button>
          </div>
          <div className="form-group">
            <NavLink to="/register"> Create an Account </NavLink>
          </div>
        </form>
      </div>
      <footer className="footer">Created By ❤ AnkitTech Pvt.Ltd © 2021</footer>
    </>
  );
};

export default Login;
