import React from 'react'
import './Header.scss';
import Fade from 'react-reveal/Fade';


export default function Header() {
    return (
       <div>
            <div className="grid-section">
                <div className="row clearfix no-gutters">
                   <div className="col-md-12 column">
                       <div className="market-header headfit">
                           <Fade left>
                         <div className="py-1 position-relative">
                             <h1 style={{color:'white',paddingLeft:'200px'}}>MARKETS</h1>
                          <span className="bgColor"></span>
                         </div>
                         </Fade>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
