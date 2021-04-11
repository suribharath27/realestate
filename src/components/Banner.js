import React from "react";
import "./Banner.css";
import "./Header.css"

function Banner() {
  return (
    <div>
           
           <div className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <p className="logo_name">Axtom</p>
          </div>
          <div className="col-md-6">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-2">
                  <h5>Rentals</h5>
                </div>
                <div className="col-md-2">
                  <h5>Sales</h5>
                </div>
                <div className="col-md-2">
                  <h5>Building</h5>
                </div>
                <div className="col-md-2">
                  <h5>Agent</h5>
                </div>
                <div className="col-md-3">
                  <h5>Contact Us</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <span className="mobile">+8800 200 3000</span>
            <img src={"Realestate/Ellipse1.png"} className="img10" />
          </div>
        </div>
      </div>
    </div>



      <div className="container-fluid">
        <div className="row">
          <div className="img">
            <div className="col-lg-3"></div>
            <div className="col-lg-9">
              <h1 class="h1">
                Modern Apartment
                <br /> A New
                <span>
                  Residential <br />
                  Complex
                </span>
              </h1>
              <div className="bar">
                <div className="line"></div>
                <div className="bar-items">
                  <p>SEARCH</p>
                  {/* <div className="line"></div> */}
                  <p>LOCATION</p>
                </div>
                  
                <button className="search" href="">Search</button>
                <div className="sub-cat">
                <p>Search Your Categories</p>
                  <p>Select Location</p>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
