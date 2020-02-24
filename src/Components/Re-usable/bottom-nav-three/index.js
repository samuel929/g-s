import React from "react";
import pic1 from "./BG-IMAGE3.png";
import pic2 from "./BG-IMAGE2.png";
import pic3 from "./BG-IMAGE.png";
import Zoom from 'react-reveal/Zoom';
import Button from "../Button/BlueButton";
import "./index.scss";
export default function index() {
  return (
    <div>
      <div className="row clearfix no-gutters">
        <div className="col-md-12 column">
          <div className="bg-light py-5 featuredProj">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="h3 ">Featured Projects</h2>
                  <div className="row card-blog">
                    <Zoom>
                    <div className="col-md-4">
                      <div>
                        <img src={pic3} className="card-img-top img-raised" />
                        <div className="card-body">
                          <h6
                            className="card-catergory"
                            style={{ color: "#213b71" }}
                          >
                            <small>PROJECT: SHUT DOWN</small>
                          </h6>
                          <p className="card-text-styling">
                            <b>Caval Ridge Dragline 17 Major Shutdown</b>
                          </p>
                          <div className="card-description">
                            <p className="text-muted">
                              <small>
                                Like so many organizations these days, Autodesk
                                is a company in transition. It was until
                                recently a traditional
                              </small>
                            </p>
                          </div>
                          <div className="text-center pt-5">
                            <Button>VIEW MORE</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div>
                        <img src={pic2} className="card-img-top img-raised" />
                        <div className="card-body">
                          <h6
                            className="card-catergory"
                            style={{ color: "#213b71" }}
                          >
                            <small>PROJECT: SHUT DOWN</small>
                          </h6>
                          <p className="card-text-styling">
                            <b>Caval Ridge Dragline 17 Major Shutdown</b>
                          </p>
                          <div className="card-description">
                            <p className="text-muted">
                              <small>
                                Like so many organizations these days, Autodesk
                                is a company in transition. It was until
                                recently a traditional
                              </small>
                            </p>
                          </div>
                          <div className="text-center pt-5">
                            <Button>VIEW MORE</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div>
                        <img src={pic1} className="card-img-top img-raised" />
                        <div className="card-body">
                          <h6
                            className="card-catergory"
                            style={{ color: "#213b71" }}
                          >
                            <small>PROJECT: SHUT DOWN</small>
                          </h6>
                          <p className="card-text-styling">
                            <b>Caval Ridge Dragline 17 Major Shutdown</b>
                          </p>
                          <div className="card-description">
                            <p className="text-muted">
                              <small>
                                Like so many organizations these days, Autodesk
                                is a company in transition. It was until
                                recently a traditional
                              </small>
                            </p>
                          </div>
                          <div className="text-center pt-5">
                            <Button>VIEW MORE</Button>
                          </div>
                        </div>
                      </div>
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
