import React from 'react'
import "./CardCollections.css";
import Card4Advertisement from '../cardWith4products/Card4Advertisement';
import Card1Advertisement from '../cardWith1ItemWithoutInfo/Card1Advertisement';
import advertisement from 'src/product_data/HomePageData';

const CardCollections = () => {
    return (
        <div className='cards-collection'>
            { advertisement.map((obj) =>{
                return <Card4Advertisement propss={obj}/>
            })}
            <Card1Advertisement/>
            <Card1Advertisement/>
            <Card1Advertisement/>
        </div>
    )
}

export default CardCollections
