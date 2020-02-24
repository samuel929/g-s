import React from "react";
import "./body.scss";
import Summer from "../../img/blog-layout/firstblock.png";
import twitter from "../../img/blog-layout/twitter.png";
import firstblock from "../../img/blog-layout/blogfirst.png";
import pic2 from "../../img/blog-layout/picture2.png";
import mike from "../../img/blog-layout/block-image2.png";
import mainBlogImage from "../../img/blog-layout/secondblog63.png";
import blogimage3 from "../../img/blog-layout/block3profileimage.png";
import Newspaper from "../../img/blog-layout/newspaper.png";
import WhiteHeart from "../../img/blog-layout/whiteheart.png";
import Whiteurl from "../../img/blog-layout/whiteurl.png";
import clock from "../../img/blog-layout/clock.png";
import GreyHeart from "../../img/blog-layout/greyheart.png";
import GreyComment from "../../img/blog-layout/greycoment.png";
export default function body() {
  return (
    <div className="news-height">
      <div className="container">
        <div class="card-columns" style={{ marginTop: "100px" }}>
          <div class="card card-box-shadow">
            <img
              src={Summer}
              class="card-img-top rounded"
              style={{
                width: "270px",
                marginLeft: "40px",
                position: "relative",
                top: "-20px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
              }}
              alt="..."
            />
            <div class="card-body">
              <p class="card-title heading-colors">
                <b>News</b>
              </p>
              <p style={{ color: "#989899" }}>
                Don't be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye{" "}
              </p>
            </div>
          </div>

          <div class="card p-3 bg-warning card-box-shadow">
            <div className="wrapper-flex">
              <img src={twitter} className="image-style-width" />

              <p className="twitter-styling"> Twitter</p>
            </div>

            <blockquote class="blockquote mb-0 card-body">
              <p className="second-blog-text">
                "You Don't Have to Sacrifice Joy to Build a Fabulous Business
                and Life"
              </p>
            </blockquote>
            <footer class="footer">
              <small className="second-blog-text">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span>
                    {" "}
                    <img src={firstblock} className="rounded-circle" /> Tania
                    Andrew{" "}
                  </span>

                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div style={{ padding: "5px" }}>
                      <img src={WhiteHeart} /> 2.4k
                    </div>
                    <div style={{ padding: "5px" }}>
                      <img src={Whiteurl} /> 45
                    </div>
                  </div>
                </div>
              </small>
            </footer>
          </div>

          <div class="card p-3 card-box-shadow">
            <h6 className="twiiter-heading heading-colors">
              <b>BLOG</b>
            </h6>

            <p className="text-color-blog-2">
              <b>To Grow Your Business Start Focusing on Your Employees</b>
            </p>

            <footer class="footer">
              <small className="footer-text-color2">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <img
                      src={pic2}
                      style={{ color: "#3C4858" }}
                      className="rounded-circle"
                    />{" "}
                    Lord Alex
                  </div>

                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div style={{ padding: "5px" }}>
                      <img src={GreyHeart} /> 342
                    </div>
                    <div style={{ padding: "5px" }}>
                      <img src={GreyComment} /> 45
                    </div>
                  </div>
                </div>
              </small>
            </footer>
          </div>

          <div class="card card-box-shadow" style={{ marginTop: "40px" }}>
            <img
              src={mainBlogImage}
              class="card-img-top rounded"
              style={{
                width: "270px",
                marginLeft: "40px",
                position: "relative",
                top: "-20px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
              }}
              alt="..."
            />
            <div class="card-body">
              <h6 class="card-title heading-colors">News</h6>
              <h5 style={{ color: "#3C4858", fontSize: "17px" }}>
                5 Common Legal Mistakes That Can Trip-Up Your Startup
              </h5>
              <p className="text-muted">
                Don't be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye{" "}
              </p>
              <footer class="footer">
                <small className="footer-text-color2">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>
                      {" "}
                      <img
                        src={mike}
                        style={{ color: "#3C4858" }}
                        className="rounded-circle"
                      />{" "}
                      Mike John
                    </span>

                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <div style={{ padding: "5px" }}>
                        <img src={clock} /> 5 min Read
                      </div>
                    </div>
                  </div>
                </small>
              </footer>
            </div>
          </div>

          <div class="card card-box-shadow">
            <img
              src={blogimage3}
              class="card-img-top rounded"
              style={{
                width: "270px",
                marginLeft: "40px",
                position: "relative",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
              }}
              alt="..."
            />
            <div class="card-body">
              <h6 class="card-title heading-colors">News</h6>
              <p className="text-color-blog-2">
                <b>To Grow Your Business Start Focusing on Your Employees</b>
              </p>

              <footer class="footer">
                <small className="footer-text-color2">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>
                      <img
                        src={mike}
                        style={{ color: "#3C4858" }}
                        className="rounded-circle"
                      />{" "}
                      Mike John
                    </span>

                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      5 min Read
                    </div>
                  </div>
                </small>
              </footer>
            </div>
          </div>

          <div class="card bg-success card-box-shadow">
            <div class="card-body">
              <div className="wrapper-flex">
                <img src={Newspaper} className="image-style-width" />

                <p className="twitter-styling">BLOG</p>
              </div>
              <blockquote class="blockquote mb-0 card-body">
                <p className="second-blog-text">
                  <b>"Focus on Your Employees"</b>
                </p>
              </blockquote>

              <p class="card-text " style={{ color: "#FFFFFF" }}>
                Don't be scared of the truth because we need to restart the
                human foundation in truth…
              </p>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="btn-styles">READ ARTICLE</button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div>
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
  );
}
