import React from 'react'
import {Link} from 'react-router-dom';
import   GSEngineer from './logo.svg';
import DRA from './dra-global-group.svg';
import './index.scss';
export default function index() {
    return (
        <div>
                <nav className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg bg-light" color-on-scroll="100">
                    <div className="container">
                        <div className="navbar-translate">
                            <Link to="/" className="navbar-brand">
                            <img src={GSEngineer}/>
                          
                            <div className="ripple-container">
                            </div>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="topNav">
                          <Link>
                           <img src={DRA}/>
                          </Link>    
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                 <li className="nav-item mx-2 li-header-color">
                                  <Link to="/">Home</Link>
                                 </li>
                                 <li className="nav-item mx-2 li-header-color">
                                     <Link to="/about">About us</Link>
                                 </li>
                                 <li className="nav-item mx-2 li-header-color">
                                     <Link to="/markets">Markets</Link>
                                 </li>
                                 <li className="nav-item mx-2 li-header-color">
                                     <Link to="/services">Services</Link>
                                 </li>
                                 <li className="nav-item mx-2 li-header-color">
                                    <Link to="/projects"> Projects</Link>
                                 </li>
                                 <li className="nav-item mx-2 li-header-color">
                                    <Link to="/news">News</Link>
                                 </li>
                                 <li className="nav-item mx-2 li-header-color">
                                     <Link to="/careers">Careers</Link>
                                 </li>
                                 <li className="nav-item mx-2 li-header-color">
                                    <Link to="/contact"> Contact </Link>
                                 </li>
                            </ul>
                        </div>
                        
                    </div>
                </nav>
        </div>
    )
}
