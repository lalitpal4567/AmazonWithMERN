import React, {useState } from 'react'
import "./HomePageDashboard.css";
import Navbar from 'src/components/navbar/Navbar'
import Footer from 'src/components/footerSection/Footer';
import SideNavbar from 'src/components/navbar/sidebar/SideNavbar';
import Main from 'src/components/mainSection/Main';



const HomePageDashboard = () => {

    const [showSideBar, toggleSideBar] = useState(false);

    return (
        <>
            <Navbar/>
            {showSideBar == true ? <SideNavbar toggleSideProp={toggleSideBar} /> : null}
            <Main />
            <Footer />
        </>
    )
}

export default HomePageDashboard
