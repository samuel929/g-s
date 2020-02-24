import React from "react";
import "./header.scss";
export default function header() {
  return (
    <div>
      <div className="home-carousel">
        <div className="grid-section">
          <div className="row clearfix no-gutters">
            <div className="col-md-12 column">
              <div className="page-headed header-filter header-small">
                 <div className="py-1 position-relative">
                    <h1 style={{color:'white',paddingLeft:'200px'}}>NEWS DETAIL</h1>

                      <span className="bgColor"></span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
