import React from "react";
import "./Header.css";

function Header() {
  return (
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
                  <p>Rentals</p>
                </div>
                <div className="col-md-2">
                  <p>Sales</p>
                </div>
                <div className="col-md-2">
                  <p>Building</p>
                </div>
                <div className="col-md-2">
                  <p>Agent</p>
                </div>
                <div className="col-md-3">
                  <p>Contact Us</p>
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
  );
}

export default Header;
