import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterLogo from "../img/GS_logo.png";
import Facebook from "./facebook-brands.svg";
import Linkedin from "./linkedin-brands.svg";
import Twitter from "./twitter-square-brands.svg";
import Youtube from "./youtube-brands.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className=" foot">
      <div className="container">
        <div className="row  column-pad">
          <div className="col-12 col-md-6 py-md-0 py-4 col-lg-2">
            <div className="footer-brand float-md-left float-none d-inline-block m-0">
              <Link
                to="/"
                className="footer-brand float-md-left float-none d-inline-block m-0"
              >
                <img src={FooterLogo} className="logo img-fluid" />
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-7 text-center">
            <ul className="pull-center text-info">
              <li className="nav-item">
                <Link to="/about" className="nav-item-color">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/markets" className="nav-item-color">
                  Markets
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-item-color">
                  SERVICES
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-item-color">
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/news" className="nav-item-color">
                  NEWS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/careers" className="nav-item-color">
                  CAREERS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact-us" className="nav-item-color">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-12 col-lg-3">
            <ul className="social-buttons float-md-right float-none text-white">
              <li>
                <FontAwesomeIcon icon={['fab','facebook']} color="#ffffff" size="lg" />
              </li>
              <li>   
              <FontAwesomeIcon icon={['fab','linkedin-in']} color="#ffffff" size="lg" />
              </li>
              <li>
              <FontAwesomeIcon icon={['fab','youtube']} color="#ffffff" size="lg" />
              </li>
              <li>
              <FontAwesomeIcon icon={['fab','twitter']} color="#ffffff" size="lg" />
              </li>
            </ul>
          </div>
          <div className="col-md-12 text-center copyright-text-color">
            <p className="copyright-text-color">
              {" "}
              Privacy Policy © 2020 G&S Engineering Services. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
