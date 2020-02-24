import React from "react";
import "./header.scss";
import Fade from 'react-reveal/Fade';


export default function Header() {
  return (
    <div className="grid-section">
      <div className="page-headers header-filter header-small">
        <div className="row clearfix no-gutters">
          <div className="col-md-12 column">
            <Fade left>
            <div className="py-1 position-relative">
               <h1 style={{color:'white',paddingLeft:'200px'}}>ABOUT US</h1>
               
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}


