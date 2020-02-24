import React from 'react'
import './Header.scss';
export default function Header() {
    return (
       <div>
            <div className="grid-section">
                <div className="row clearfix no-gutters">
                   <div className="col-md-12 column">
                       <div className="market-header headfit">
                         <div className="py-1 position-relative">
                             <h1 style={{color:'white',paddingLeft:'200px'}}>MARKETS</h1>
                          <span className="bgColor"></span>
                         </div>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
