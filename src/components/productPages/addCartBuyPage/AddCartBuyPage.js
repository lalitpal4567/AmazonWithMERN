import React from 'react'
import "./AddCartBuyPage.css";
import LowerFooter from 'src/components/footerSection/LowerFooter'
import Navbar from 'src/components/navbar/Navbar'
import AddToCartAndBuy from 'src/components/productPages/addCartBuyPage/AddToCartAndBuy';
import MultiCardSelection from 'src/components/productPages/addCartBuyPage/MultiCardSelection';
import ItemDiscription from './ItemDiscription';
import LowestNavBar from 'src/components/navbar/bottomNavBar/LowestNavBar';

const AddCartBuyPage = () => {
  return (
    <>
        <Navbar/>
        <LowestNavBar/>
        <div className='cart-buy-main-container'>
            <div className='cart-inner-container'>
                <MultiCardSelection/>
                <ItemDiscription/>
                <AddToCartAndBuy/>
            </div>
        </div>
        <LowerFooter/>
    </>
  )
}

export default AddCartBuyPage
