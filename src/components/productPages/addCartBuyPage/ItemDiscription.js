import React from 'react'
import "../addCartBuyPage/ItemDiscription.css";
import Star from './Star';

const ItemDiscription = () => {
  return (
    <>
        <div className='whole-discription'>
            <div className='item-details'>
                <p>Whirlpool 7.5 Kg 5 Star Semi-Automatic Top Loading Washing Machine (Ace 7.5 Supreme Pro, 5YR Motor Warranty)</p>
            </div>
            <div className='star-ratings'>
                <Star/>
            </div>
            <span><sup>$</sup>2,499/-</span>
        </div>
    </>
  )
}

export default ItemDiscription
