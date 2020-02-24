import React from 'react';
import './index-header.scss';
import Fade from 'react-reveal/Fade';
export default function index() {
    return (
      <div>
            <div className="home-carousel">
               <div className="grid-section">
                  <div className="row clearfix no-gutters">
                        <div className="col-md-12 column">
                           <div className="metal-minerals metal-filter ">
                             <Fade left>
                           <div className="py-1 position-relative">
                             <h1 style={{color:'white',paddingLeft:'200px'}}>METALS & MINERALS</h1>
                           <span className="bgColor"></span>
                           </div>
                           </Fade>
                           </div>
                         </div>
                  </div>
               </div>
         </div>
    </div>
    )
}
