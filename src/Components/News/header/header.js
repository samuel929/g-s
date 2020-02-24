import React from 'react'
import News from './News.png';
import Fade from 'react-reveal/Fade';
import './header.scss';
export default function() {
    return (
        <div>
            <div className="grid-section">
                <div className="row clearfix no-gutters">
                   <div className="col-md-12 column">
                       <div className="page-header header-filter header-small">
                           <Fade left>
                       <div className="py-1 position-relative">
                          <h1 style={{color:'white',paddingLeft:'200px'}}>News</h1>

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
