import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";

import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const Header = () => {
  const context = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar style={{background: "linear-gradient(to right, #538FFB, #5737D6)", marginBottom:"25px" }} light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white">
          Event Listing App
        </Link>
      </NavbarBrand>
      <NavbarText className="text-white ml-4">
        {context.user?.email ? context.user.email : ""}
      </NavbarText>
      
    
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {context.user ? (
            
              <NavItem>
                <button className="bg-light rounded mr-3">
                <NavLink tag={Link} to="/events" className="text-dark">
                  Add Event
                </NavLink>
                </button>
                <button className="bg-light rounded mr-3">
              <NavLink tag={Link} to="/"
                onClick={() => {
                  context.setUser(null);
                }}
                className="text-dark"
              >
                LogOut
              </NavLink>
              </button>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <button className="bg-light rounded mr-3">
                  <NavLink tag={Link} to="/signup" className="text-dark">
                  SignUp
                </NavLink></button>
              </NavItem>
              <NavItem>
              <button className="bg-light rounded">
                <NavLink tag={Link} to="/signin" className="text-dark">
                  SignIn
                </NavLink></button>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
