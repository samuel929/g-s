import React from "react";
import "./header-home.scss";
export default function Header() {
  return (
    <div className="home-carousel">
      <div className="grid-section">
        <div data-cycle-timeout="3000" data-cycle-fx="scrollHorz">
          <div className="row clearfix no-gutter">
            <div className="col-md-12 column">
              <div data-class="refwerfwerfwer">
                <div className="header">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div
                          className="page-header-home header-filter"
                          data-parallax="true"
                        >
                          <div className="container">
                            <div className="row">
                              <div className="col-md-8 mr-auto text-left">
                                <div className="position-relative py-1">
                                  <h1 className="welcome-h1">Welcome</h1>
                                  <span className="bgColor"></span>
                                  <p
                                    style={{
                                      fontSize: "32px",
                                      color: "white",
                                      paddingRight: "5px",
                                      paddingTop: "35px"
                                    }}
                                  >
                                    Your asset performance partner from
                                    <br /> the Earth’s surface down.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
