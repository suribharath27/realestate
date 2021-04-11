import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div align="center">
              <img src="../Realestate/Rectangle 19.jpg" className="imge" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <h2>We are market leader in USA</h2>
            <p className="para">
              Mauris faucibus nisl ac leo vehicula pulvinar. In elementum erat
              ut urna vehicula tincidunt. Nam condimentum ligula eros, eu
              aliquet arcu finibus a. Phasellus mollis augue eget sapien
              fermentum blan mauris scelerisque odio quis vestibulum.
              <br />
              <br /> Duis luctus sed odio id commodo etiam vulputate lectus id
              purus vitae augue fusc pellentesque.
            </p>
            <button class="btn">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
