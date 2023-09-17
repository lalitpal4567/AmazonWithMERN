import React from 'react'
import "./Filter.css";

const BrandWiseFilter = ({brandName}) => {
    return (
        <div className='brand-wise-filter'>
            <h4 className='filter-heading'>Brand</h4>
            <input type="checkbox" className='input-checkbox' id="samsung" /><label className='checkbox-label' htmlFor="samsung">{brandName[0].samsung}</label><br />
            <input type="checkbox" className='input-checkbox' id="amazon-basics" /><label className='checkbox-label' htmlFor="amazon-basics">{brandName[0].oppo}</label><br />
            <input type="checkbox" className='input-checkbox' id="boat" /><label className='checkbox-label' htmlFor="boat">{brandName[0].realme}</label><br />
            <input type="checkbox" className='input-checkbox' id="sony" /><label className='checkbox-label' htmlFor="sony">{brandName[0].vivo}</label>
        </div>
    )
}

export default BrandWiseFilter
