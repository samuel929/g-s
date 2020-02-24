import React from "react";
import pic1 from "./block17.png";
import pic2 from "./Infastructure.png";
import pic3 from "./sea.png";
import Button from "../Re-usable/Button/BlueButton";
import Header from "./header/index";
import Slide from 'react-reveal/Slide';
import "./Project.scss";
export default function Projects() {
  return (
    <div>
      <Header />
      <div className="projectList bg-white ">
        <ul className="nav nav-tabs inPageMenu bg-light">
          <li className="nav-item">
            <a
              className="nav-link active tab-color"
              data-toggle="tab"
              href="#home"
            >
              ALL
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link tab-color" data-toggle="tab" href="#menu1">
              Construction & Commissioning
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link tab-color" data-toggle="tab" href="#menu2">
              Shutdowns & Maintenance
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link tab-color" data-toggle="tab" href="#menu2">
              Manufacturing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link tab-color" data-toggle="tab" href="#menu2">
              Electrical
            </a>
          </li>
        </ul>

        <div className="conatiner">
          <div className="row">
          <Slide left cascade>
            <div className="col-md-12">
              <div className="container">
                <div className="row d-flex align-items-center">
                  <div className="col-md-3">
                    <div className=" border-0">
                      <div className="card-image">
                        <img src={pic1} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h6>
                        <small>Construction &amp; Commissioning</small>
                      </h6>

                      <p style={{ fontSize: "26px" }}>
                        <b>
                          {" "}
                          Abbot Point Coal Terminal Queensland - <br />
                          Stacker Reclaimers Supply & Installation
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <Button>DOWNLOAD</Button>
                  </div>
                </div>
                <hr />
              </div>
            </div>

            <div className="col-md-12">
              <div className="container">
                <div className="row d-flex align-items-center">
                  <div className="col-md-3">
                    <div className=" border-0">
                      <div className="card-image">
                        <img src={pic2} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h6>
                        <small>Shutdowns & Maintenance</small>
                      </h6>

                      <p style={{ fontSize: "26px" }}>
                        <b>
                          {" "}
                          Blackwater Mine, Queensland - Dragline DRE40
                          <br /> Maintenance Shutdown
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <Button>DOWNLOAD</Button>
                  </div>
                </div>
                <hr />
              </div>
            </div>

            <div className="col-md-12">
              <div className="container">
                <div className="row d-flex align-items-center">
                  <div className="col-md-3">
                    <div className=" border-0">
                      <div className="card-image">
                        <img src={pic3} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h6>
                        <small>ELECTRICAL</small>
                      </h6>

                      <p style={{ fontSize: "26px" }}>
                        <b>
                          {" "}
                          Isaac Plains Mine, Queensland - Dragline Re-
                          <br />
                          assembly
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <Button>DOWNLOAD</Button>
                  </div>
                </div>
                <hr />
              </div>
            </div>

            <div className="col-md-12">
              <div className="container">
                <div className="row d-flex align-items-center">
                  <div className="col-md-3">
                    <div className=" border-0">
                      <div className="card-image">
                        <img src={pic1} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h6>
                        <small>Shutdowns & Maintenance</small>
                      </h6>

                      <p style={{ fontSize: "26px" }}>
                        <b>
                          Blackwater Mine, Queensland - Dragline DRE40
                          <br /> Maintenance Shutdown
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <Button>DOWNLOAD</Button>
                  </div>
                </div>
                <hr />
              </div>
            </div>

            <div className="col-md-12">
              <div className="container">
                <div className="row d-flex align-items-center">
                  <div className="col-md-3">
                    <div className=" border-0">
                      <div className="card-image">
                        <img src={pic2} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h6>
                        <small>Manufacturing</small>
                      </h6>

                      <p style={{ fontSize: "26px" }}>
                        <b>
                          {" "}
                          Abbot Point Coal Terminal Queensland - Stacker
                          <br /> Reclaimers Supply & Installation
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <Button>DOWNLOAD</Button>
                  </div>
                </div>
                <hr />
              </div>
            </div>

            <div className="col-md-12">
              <div className="container">
                <div className="row d-flex align-items-center">
                  <div className="col-md-3">
                    <div className=" border-0">
                      <div className="card-image">
                        <img src={pic3} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h6>
                        <small>Construction &amp; Commissioning</small>
                      </h6>

                      <p style={{ fontSize: "26px" }}>
                        <b>
                          Hay Point Coal Terminal, Queensland - HPX3 <br />
                          Project Onshore and Offshore Works
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <Button>DOWNLOAD</Button>
                  </div>
                </div>
                <hr />
              </div>
            </div>

            <div className="col-md-12">
              <div className="container">
                <div className="row d-flex align-items-center">
                  <div className="col-md-3">
                    <div className=" border-0">
                      <div className="card-image">
                        <img src={pic1} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h6>
                        <small>Manufacturing</small>
                      </h6>

                      <p style={{ fontSize: "26px" }}>
                        <b>
                          Hay Point Coal Terminal, Queensland - HPX3
                          <br /> Project Onshore and Offshore Works
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <Button>DOWNLOAD</Button>
                  </div>
                </div>
                <hr />
              </div>
            </div>

            <div className="col-md-12">
              <div className="container">
                <div className="row d-flex align-items-center">
                  <div className="col-md-3">
                    <div className=" border-0">
                      <div className="card-image">
                        <img src={pic2} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h6>
                        <small>Electrical</small>
                      </h6>

                      <p style={{ fontSize: "26px" }}>
                        <b>
                          {" "}
                          Cape Preston, Western Australia-
                          <br /> Process Plant Electrical Commissioning
                        </b>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <Button>DOWNLOAD</Button>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            </Slide>
            <div className="container" style={{ padding: "50px" }}>
              <div className="row ">
                <div className="col">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item">
                        <a aria-label="Previous">
                          <span class="sr-only">Previous</span>
                        </a>
                      </li>
                      <li class="page-item" style={{ color: "grey" }}>
                        <a>1</a>
                      </li>
                      <li class="page-item" style={{ color: "grey" }}>
                        <a>2</a>
                      </li>
                      <li class="page-item" style={{ color: "grey" }}>
                        <a>3</a>
                      </li>
                      <li class="page-item" style={{ color: "grey" }}>
                        <a>4</a>
                      </li>
                      <li class="page-item" style={{ color: "grey" }}>
                        <a>5</a>
                      </li>
                      <li class="page-item">
                        <a aria-label="Next">
                          <span class="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
