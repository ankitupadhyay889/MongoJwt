import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import { UserContext } from "../App";

const Navhoga = () => {

  const {state} = useContext(UserContext)

  const RenderMenu = () => {
    if(state){
      return(
        <>
          <Nav className="ml-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/logout">Logout</NavLink>
          </Nav>
        </>
      )
    }else{
      return(
        <>
          <Nav className="ml-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/register">Register</NavLink>
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </Nav>
        </>
      )
    }
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <NavLink className="navbar-brand" to="/">Ankit Upadhyay</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <RenderMenu />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navhoga;
