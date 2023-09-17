import React from 'react'
import "./Filter.css";

const PriceWiseFilter = () => {
    return (
        <div className='price-wise-categories'>
            <h4 className='filter-heading'>Price</h4>
            <ul>
                <a href="#"><li>Under ₹ 1,000</li></a>
                <a href="##"><li>₹ 1,000 - ₹ 5,000</li></a>
                <a href="##"><li>₹ 5,000 - ₹ 10,000</li></a>
                <a href="###"><li>₹ 10,000 - ₹ 20,000</li></a>
                <a href="####"><li>Over ₹ 1,000</li></a>
            </ul>
            <div className='custom-input-price'>
                <input className='price-value' type="text" placeholder='₹ Min'></input>
                <input className='price-value' type="text" placeholder='₹ Max'></input>
                <button className='price-button'>Go</button>
            </div>
        </div>
    )
}

export default PriceWiseFilter
