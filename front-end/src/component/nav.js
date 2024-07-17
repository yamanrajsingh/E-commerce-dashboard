import React from "react";
import logo from "./logo.png";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const naviagte = useNavigate();
  const logout = () => {
    localStorage.clear();
    naviagte("/signup");
  };
  return (
    <div>
      <img src={logo} alt="logo" className="logo" /> 
      {auth ? (
        <ul className="nav-bar">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
          <li>
            <Link to="/update">Update Product</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link onClick={logout} to="/signup">
              Logout ({JSON.parse(auth).data.userName})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-bar right">
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Nav;
