import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className="main-footer">
            
            <div className="container">
                <div className="row">
                <h2 className="footer-logo">Axtom</h2>
                    <div className="col">
                        <h4>Services</h4>
                        <hr />
                        <ul className="list-unstyled">
                           <li>Architecture</li>
                           <li>Agency</li>
                           <li>AssetValuation</li>
                           <li>Building</li>
                           <li>Business Rates</li>
                           <li>Expert Witness</li>
                        </ul>
                    </div>

                    <div className="col">
                        <h4>Location</h4>
                        <hr />
                        <ul className="list-unstyled">
                           <li>Brimingham</li>
                           <li>Bristol</li>
                           <li>Exter</li>
                           <li>Leeds</li>
                           <li>Manchestor</li>
                           <li>York</li>
                        </ul>
                    </div>

                    <div className="col">
                        <h4>Services</h4>
                        <hr />
                        <ul className="list-unstyled">
                           <li>Properties</li>
                           <li>Auctions</li>
                       
                        </ul>
                    </div>

                    <div className="col">
                        <h4>Contact</h4>
                        <hr />
                        <ul className="list-unstyled">
                           <li>+44 (0)800 122 3050</li>
                           <li>suri@gmail.com</li>
                        </ul>
                        <div className="icons">
                        <a href="#" className="fa fa-facebook"></a>  
                        <a href="#" className="fa fa-twitter"></a> 
                        <a href="#" className="fa fa-instagram"></a>  
                        </div> 
                    </div>

                </div>
                <hr />
                <div className="row">
                    <p className="p1">About</p>
                    <p>Privacy & Legal</p>
                    <p>Partner</p>
                    <p>Contact</p>
                    <p className="copyright">
                        &copy;{new Date().getFullYear()} All Right Reserved by <span>SurendraReddy</span>
                    </p>

                </div>

            </div>
        </div>
    )
}

export default Footer
