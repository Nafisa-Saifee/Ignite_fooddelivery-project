import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { StoreContest } from "../Contest/StoreContest";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContest);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <nav className="navbar-container">
        <Link to="/">
          <img className="logo" src={assets.logo} alt="" />
        </Link>
        <ul className="navbar-item">
          <Link
            to="./"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
          <a
            href="#app-download"
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            Mobile app
          </a>
          <a
            href="#Footer"
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            Contact us
          </a>
        </ul>
        <div className="search">
          <img className="fafa-search" src={assets.search_icon} alt="" />
          <Link to="./cart">
            <img className="fafa-bag" src={assets.shopping_bag} alt="" />
          </Link>
          {!token ? (
            <button onClick={() => setShowLogin(true)} className="sign-button">
              sign in
            </button>
          ) : (
            <div className="navbar-profile">
              <img src={assets.profile_image} alt="" />
              <ul className="nav-profile-dropdown">
                <li onClick={() => navigate("/myorders")}>
                  <img src={assets.shopping_bag} alt="" />
                  <p>Order</p>
                </li>
                <hr />
                <li onClick={logout}>
                  <img src={assets.logout_icon} alt="" />
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
