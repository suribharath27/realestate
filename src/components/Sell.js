import React from "react";
import "./Sell.css";

function Sell() {
  return (
    <div>
      <div className="container-fluid">
        <div class="row">
          <div className="col-xl-1"></div>
          <div className="col-xl-6">
            <h1 className="head">Houses for Sell (500+)</h1>
          </div>
          <div className="col-xl-4">
            <h3 className="head3">Find More Project →</h3>
          </div>
          <div className="col-xl-1"></div>

          <div className="col-xl-4">
            <div align="center">
              <div className="card">
                <img src="../Realestate/home1.png" className="images" />
                <h1 class="head11">La Veduta Di Vertine</h1>
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <img
                        src="../Realestate/icons/bed_icon.png"
                        classNme="img2"
                      />
                      <span className="span">5</span> 
                    </div>
                    <div className="col-md-3">
                      <img
                        src="../Realestate/icons/tub_icon.png"
                        classNme="img2"
                      />
                      <span className="span">3</span>
                    </div>
                    <div className="col-md-6">
                      <img
                        src="../Realestate/icons/rent_icon.png"
                        classNme="img2"
                      />
                      <span className="span">10,999</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div align="center">
              <div className="card">
                <img src="../Realestate/home2.png" className="images" />
                <h1 class="head11">Villa Pep Simo Sea</h1>
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <img
                        src="../Realestate/icons/bed_icon.png"
                        classNme="img2"
                      />
                      <span className="span">4</span>
                    </div>
                    <div className="col-md-3">
                      <img
                        src="../Realestate/icons/tub_icon.png"
                        classNme="img2"
                      />
                      <span className="span">2</span>
                    </div>
                    <div className="col-md-6">
                      <img
                        src="../Realestate/icons/rent_icon.png"
                        classNme="img2"
                      />
                      <span className="span">12,325</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div align="center">
              <div className="card">
                <img src="../Realestate/home3.png" className="images" />
                <h1 class="head11">Villa Palmeto House</h1>
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <img
                        src="../Realestate/icons/bed_icon.png"
                        classNme="img2"
                      />
                      <span className="span">6</span>
                    </div>
                    <div className="col-md-3">
                      <img
                        src="../Realestate/icons/tub_icon.png"
                        classNme="img2"
                      />
                      <span className="span">4</span>
                    </div>
                    <div className="col-md-6">
                      <img
                        src="../Realestate/icons/rent_icon.png"
                        classNme="img2"
                      />
                      <span className="span">15,999</span>
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
export default Sell;
