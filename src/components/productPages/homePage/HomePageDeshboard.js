import React, { useState } from 'react'
import "../homePage/HomePageDeshboard.css";
import Navbar from 'src/components/navbar/Navbar'
import LowerFooter from 'src/components/footerSection/LowerFooter';
import Carousel from 'src/components/carousel/Carousel';
import CardCollections from 'src/components/cards/cardsCollections/CardCollections';
import SideNavbar from 'src/components/navbar/sidebar/SideNavbar';

const HomePageDeshboard = () => {
    const [showSideBar,toggleSideBar]=useState(false);
    return (
        <>
            <Navbar  toggleSideProp={toggleSideBar}/>
            {showSideBar==true?<SideNavbar toggleSideProp={toggleSideBar}/>:null}

          <div className='cardCollection_Carousel'>
                <CardCollections />
                <Carousel />
            </div>
            <LowerFooter/>
        </>
    )
}

export default HomePageDeshboard
