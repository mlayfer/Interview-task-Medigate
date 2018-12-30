import React from "react";
import PropTypes from "prop-types";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-bar">
          <img src="https://media.licdn.com/dms/image/C4E0BAQEbYwsGL31tqw/company-logo_200_200/0?e=2159024400&v=beta&t=JqI5i3pcFuiCtw5kPsTQiOWJq9znbD5SkflB5CJlk6s" />
            <NavLink className="nav-bar-link nav-link-main" to="/">
                Store
            </NavLink>
            <NavLink className="nav-bar-link nav-link-sub" to="/addProduct">
              Add product
            </NavLink>
        </div>
    )
};

NavBar.propTypes = {
    prop1: PropTypes.any
};


export default NavBar;
