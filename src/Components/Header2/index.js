import React from "react";
import { Link } from "react-router-dom";
import GSEngineer from "./logo.svg";
import DRA from "./dra-global-group.svg";
import "./index.scss";
export default function index() {
  



  return (
    <div>
      <nav
        className="navbar navbar-color-on-scroll fixed-top navbar-expand-lg bg-light navbar-transparent"
        color-on-scroll="100" 
      >
        <div className="container">
          <div className="navbar-translate">
            <Link to="/" className="navbar-brand">
              <img src={GSEngineer} />

              <div className="ripple-container"></div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <br />
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <br />
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <br />
            </button>
          </div>
          <div className="topNav">
            <Link>
              <img src={DRA} className="img-fluid" />
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-2 li-header-color">
                <Link className="nav-bar-link-color" to="/">Home</Link>
              </li>
              <li className="nav-item mx-2 li-header-color">
                <Link className="nav-bar-link-color" to="/about">About us</Link>
              </li>
              <li className="nav-item mx-2 li-header-color">
                <Link className="nav-bar-link-color" to="/markets">Markets</Link>
              </li>
              <li className="nav-item mx-2 li-header-color">
                <Link className="nav-bar-link-color" to="/services">Services</Link>
              </li>
              <li className="nav-item mx-2 li-header-color">
                <Link className="nav-bar-link-color" to="/projects"> Projects</Link>
              </li>
              <li className="nav-item mx-2 li-header-color">
                <Link className="nav-bar-link-color" to="/news">News</Link>
              </li>
              <li className="nav-item mx-2 li-header-color">
                <Link className="nav-bar-link-color" to="/careers">Careers</Link>
              </li>
              <li className="nav-item mx-2 li-header-color">
                <Link className="nav-bar-link-color" to="/contact"> Contact </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
