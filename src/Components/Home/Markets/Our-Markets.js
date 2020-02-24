import React from "react";
import BlueButton from "../../Re-usable/Button/BlueButton";
import "./OurMarkets.scss";
import art1 from "./artboard-11.svg";
import art2 from "./artboard-12.svg";
import art3 from "./artboard-13.svg";
import art4 from "./artboard-14.svg";
import art5 from "./artboard-15.svg";

import { Link } from "react-router-dom";

export default function Section3() {
  return (
    <div className=" b icons-section">
      <div className="container section-3-container-padding">
        <h1 className="aligning-text">OUR MARKETS</h1>

        <div className="row row-container row-padding">
          <div className="col-6 col-md text-center">
            <div className="icon-round">
              <span>
                <img src={art1} className="img-rounded img-fluid" />
              </span>
              <Link className="link-to" to="/metals-minerals">
                <h5 className="pt-md-5 pb-5 pb-md-0">Metals & Minerals</h5>
              </Link>
            </div>
          </div>

          <div className="col-6 col-md text-center">
            <div className="icon-round">
              <span>
                <img src={art2} className="img-rounded img-fluid" />
              </span>
              <h5 className="pt-md-5 pb-5 pb-md-0">Infrastructure</h5>
            </div>
          </div>

          <div className="col-6 col-md text-center">
            <div className="icon-round">
              <span>
                <img src={art3} className="img-rounded img-fluid" />
              </span>
              <h5 className="pt-md-5 pb-5 pb-md-0">Industrial</h5>
            </div>
          </div>

          <div className="col-6 col-md text-center">
            <div className="icon-round">
              <span>
                <img src={art4} className="img-rounded img-fluid" />
              </span>
              <h5 className="pt-md-5 pb-5 pb-md-0">Energy</h5>
            </div>
          </div>

          <div className="col-6 col-md text-center">
            <div className="icon-round">
              <span>
                <img src={art5} className="img-rounded img-fluid" />
              </span>
              <h5 className="pt-md-5 pb-5 pb-md-0">Water</h5>
            </div>
          </div>
        </div>

        <div className="row btn-container-home">
          <Link to="/markets">
            <BlueButton>VIEW ALL MARKETS</BlueButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
