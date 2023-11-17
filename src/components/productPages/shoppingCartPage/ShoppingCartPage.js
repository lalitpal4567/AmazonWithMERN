import React from 'react'
import "./ShoppingCartPage.css";
import Navbar from 'src/components/navbar/Navbar';
import Footer from 'src/components/footerSection/Footer';
import ShoppingCartCard from './ShoppingCartCard';

const ShoppingCartPage = () => {
    return (
        <>
        <Navbar/>
            <main className='main-container-abc'>
               <div className='selected-product-shopping-cart'>
                    <div id="shopping-cart-title"><p>Shopping Cart</p></div>
                    <ul>
                        <li><ShoppingCartCard/></li>
                        <li><ShoppingCartCard/></li>
                        <li><ShoppingCartCard/></li>
                    </ul>
                    <div className='subtotal-shopping-cart'>
                        <p>Subtotal (4 items):$4,396.00</p>
                    </div>
               </div>
            </main>
        <Footer/>
        </>
    )
}

export default ShoppingCartPage
