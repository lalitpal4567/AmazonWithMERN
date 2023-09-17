import React from 'react'
import "./SideNavbar.css";
import { FaCircleUser } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const shopByCategory = [
    {
        id: 1,
        categoryName: "Electronics"
    },
    {
        id: 2,
        categoryName: "Mobiles & Earphones",
    },
    {
        id: 3,
        categoryName: "Kitchen accessories & Appliances"
    },
    {
        id: 3,
        categoryName: "Men's & Women's Fashion"
    }
]
const services = [
    {
        id: 4,
        serviceName: "Your Account"
    },
    {
        id: 5,
        serviceName: "Sign in"
    }
]

const SideNavbar = ({ toggleSideProp }) => {
    return (
        <div className='overlay'>
            <div className='main-navbar-container4'>
                <nav className='side-nav-bar'>
                    <a className='user-signin-container'>
                        <div className='sign-in-box'>
                            <FaCircleUser className='user-icon0' />
                            <p>Hello, sign in</p>
                        </div>
                    </a>
                    <div className='services-links'>
                        <h2 className='category-title'>Shop By Category</h2>
                        <ul>
                            {shopByCategory.map((category) => {
                                return <li className='category-lists'><a href="#">{category.categoryName}</a></li>
                            })}
                        </ul>
                        <hr className='line-break2' />
                        <h2 className='category-title'>Help & Settings</h2>
                        <ul>
                            {services.map((service) => {
                                return <li className='category-lists'><a href="##">{service.serviceName}</a></li>
                            })}
                        </ul>
                    </div>
                </nav>
                <RxCross1 className='exit-button' onClick={() => { toggleSideProp(false) }} />
            </div>
        </div>
    )
}

export default SideNavbar
