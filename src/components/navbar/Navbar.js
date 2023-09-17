import React from 'react'
import "../navbar/NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = ({toggleSideProp}) => {
    return (
        <>
            <header>
                <header className="navbar-sec">
                    <section className="address-logo-sec">
                        <div className="logo-sec link">
                            <a href="#" className="logo-container">
                                <img src="images/amazon-logo.png" className='amazon-logo' />
                                <span className="amazon-in">.in</span>
                            </a>
                        </div>
                        <div className='link'>
                            <a href="##" className="user-address">
                                <i class="fa-solid fa-location-dot"></i>
                                <div>
                                    <p className="nav-line1">Hello</p>
                                    <p className="nav-line2">Select your address</p>
                                </div>
                            </a>
                        </div>
                    </section>

                    <section className="search-sec">
                        <div className="dropdown-menu">
                            <p>All</p>
                            <img src="images/caret-down-solid.svg" />
                        </div>
                        <input type="text" placeholder="Search Amazon.in" className="search-input"></input>
                        <div className="search-icon-box">
                            <img src="images/magnifying-glass-solid.svg" className="search-icon" />
                        </div>
                    </section>

                    <section className="signcard-sec">
                        <a href="###" className="language link">
                            <span><img src="images/Flag_of_India.svg.webp"></img></span>
                            <span><p className="nav-line2">EN</p></span>
                            <span><img src="images/caret-down-solid.svg"></img></span>
                        </a>
                        <a href="####" className="account-signin link">
                            <div>
                                <p className="nav-line1" style={{ color: "white" }}>Hello, sign in</p>
                                <p className="nav-line2">Account & Lists</p>
                            </div>
                            <span><img src="images/caret-down-solid.svg" /></span>
                        </a>
                        <div className="order-purchase link">
                            <a href="#####">
                                <p className="nav-line1">Returns</p>
                                <p className="nav-line2">& Orders</p>
                            </a>
                        </div>
                        <div className="shopping-cart link">
                            <a href="######"><img src="images/shopping-cart.png" /></a>
                            <p className="nav-line2">Cart</p>
                            <h3>0</h3>
                        </div>
                    </section>
                </header>

                <header>
                    <div className="navbar-sec2">
                        <div id="side-bar">
                            <GiHamburgerMenu className='hamburger-icon' onClick={()=>{toggleSideProp(true)}}/>
                            <span className="nav-line2">All</span>
                        </div>
                        <a className='amazon-services' href="#">Amazon miniTV</a>
                        <a className='amazon-services' href="##">Mobiles</a>
                    </div>
                </header>
            </header>
        </>

    )
}

export default Navbar
