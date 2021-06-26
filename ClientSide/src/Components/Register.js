import React, { useState } from "react";
import { NavLink , useHistory } from "react-router-dom";

const Register = () => {

  const history = useHistory();
  const [user, setuser] = useState({
    name: "",
    email: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const hanInp = (e) => {
    name = e.target.name;
    value = e.target.value;

    setuser({ ...user, [name]: value });
  };

  const Datapost = async (e) => {
    e.preventDefault();

    const { name, email, work, password, cpassword } = user;
    const res = await fetch("/register" , {
      method: "POST",
      headers:{
        "Content-Type" : "application/json" 
      },
      body: JSON.stringify({
        name , email , work , password , cpassword
      })
    });

    const datagya = await res.json();
    if(datagya.status === 422 || !datagya) {
      window.alert("registration failed")
    }else{
      window.alert("Registration success")

      history.push("/login")
    }

  };

  return (
    <>
      <div className="signup-form container mt-24">
        <form method="POST">
          <h2>Register Here</h2>
          <p>Please fill in this form to create an account!</p>
          <hr />
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span className="fa fa-user"></span>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Username"
                required="required"
                value={user.name}
                onChange={hanInp}
              />
            </div>
          </div>
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
                placeholder="Email Address"
                required="required"
                value={user.email}
                onChange={hanInp}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-briefcase"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                name="work"
                placeholder="Your Profession"
                required="required"
                value={user.work}
                onChange={hanInp}
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
                value={user.password}
                onChange={hanInp}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                  <i className="fa fa-check"></i>
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                name="cpassword"
                placeholder="Confirm Password"
                required="required"
                value={user.cpassword}
                onChange={hanInp}
              />
            </div>
          </div>
          <div className="form-group">
            <button
              onClick={Datapost}
              name="signup"
              value="register"
              type="submit"
              className="btn btn-primary btn-lg"
            >
              Register
            </button>
          </div>
          <div className="form-group">
            <NavLink to="/login"> I have already register login </NavLink>
          </div>
        </form>
      </div>
      <footer className="footer">Created By ❤ AnkitTech Pvt.Ltd © 2021</footer>
    </>
  );
};

export default Register;
