import React from "react";
import "./index.scss";
import YellowButton from "../Button/YellowButton";
import GreenButton from "../Button/GreenButton";
import Zoom from 'react-reveal/Zoom';
import { Link } from "react-router-dom";
export default function index() {
  return (
    <div className="row clearfix no-gutters">
      <div className="col-md-12 column">
        <div className="ctaSection bg-light">
          <div className="container">
            <div className="row">
              <div className="col " style={{ margin: "5px" }}>
                <div class="card-bodies">
                  <div class="card-body">
                    <Zoom>
                    <div
                      style={{
                        paddingLeft: "50px",
                        maxWidth: "100%",
                        paddingTop: "50px"
                      }}
                    >
                      <h6 class="card-title">NEWS</h6>
                      <p
                        class="card-text"
                        style={{ color: "white", fontSize: "27px" }}
                      >
                        Calibre agrees to sell <br />
                        <span style={{ color: "#FAC913" }}>
                          G&S Engineering
                        </span>{" "}
                        to <span style={{ color: "#FAC913" }}>DRA</span>
                      </p>
                      <Link to="/news">
                        <YellowButton>READ MORE</YellowButton>
                      </Link>
                    </div>
                    </Zoom>
                  </div>
                </div>
              </div>

              <div className="col " style={{ margin: "5px" }}>
                <div class="card-bodies-2">
                  <div class="card-body">
                    <Zoom>
                    <div
                      style={{
                        paddingLeft: "50px",
                        maxWidth: "100%",
                        paddingTop: "50px"
                      }}
                    >
                      <h6 class="card-title">ABOUT US</h6>
                      <p
                        class="card-text"
                        style={{ color: "white", fontSize: "27px" }}
                      >
                        <span style={{ color: "#64BC4D" }}>Get to know</span> us
                        <br /> a little better.
                      </p>
                      <Link to="/about">
                        {" "}
                        <GreenButton>VIEW ABOUT US</GreenButton>
                      </Link>
                    </div>
                    </Zoom>
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
