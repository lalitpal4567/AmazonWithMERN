import React from 'react'
import "./ShoppingCartCard.css";
import { Link } from 'react-router-dom';

const ShoppingCartCard = () => {
  return (
    <div className='product-info-shopping-cart'>
        <div className='checkbox-shopping-cart'><input type="checkbox"/></div>
        <Link to="#"><img src="/images/ipodImages/ipod_oppo.png" className='left-section-shopping-cart'/></Link>
        <div className='right-section-shopping-cart'>
            <p className='product-discription-shopping-cart'>Amazon Basics True Wireless in-Ear Earbuds with Mic,
                Low-Latency Gaming Mode, Touch Control, IPX5 Water-</p>
            <div className='product-offer-shopping-cart-container'>
                <div className='product-offer-shopping-cart'>50% off</div>
                <div className='product-deal-shopping-cart'>Deal</div>
            </div>
            <p id="current-price"><span><sup>₹</sup></span>1099.00</p>
            <p id="stock-shopping-cart">In stock</p>
            <div className='product-quantity-shopping-cart'>
                <select>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                </select>
                <button className='delete-btn-shopping-cart'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default ShoppingCartCard
