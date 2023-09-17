import React from 'react'
import "./LowerFooter.css";
// import amazonLogos from "images/amazon-logo.png";

const LowerFooter = () => {
    return (
        <footer>
            <p id="back-to-top">Back to top</p>
            <section>
                <div className='first-sections'>
                    <div className='footer-section'>
                        <div className='more-info'>
                            <h2 className='title'>Get to Know Us</h2>
                            <ul>
                                <li><a href="#">About Us</a></li>
                            </ul>
                        </div>
                        <div className='more-info'>
                            <h2 className='title'>Connect with Us</h2>
                            <ul>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Instagram</a></li>
                            </ul>
                        </div>
                        <div className='more-info'>
                            <h2 className='title'>Let Us Help You</h2>
                            <ul>
                                <li><a href="#">Your Account</a></li>
                                <li><a href="#">Amazon App Download</a></li>
                                <li><a href="#">Help</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className='break-line' />
                    <div className='lang-change-option'>
                        <div>
                            <a><img className='amazon-footer-logo' src="images/amazon-logo.png"></img></a>
                        </div>
                        <div className='languages'>
                            <ul>
                                <li><a href="#">Australia</a></li>
                                <li><a href="##">China</a></li>
                                <li><a href="###">Japan</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='copyright-rules'>
                        <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default LowerFooter
