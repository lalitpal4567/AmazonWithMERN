import React from 'react'
import "./CardCollections.css";
import product from "../../../product_data/HomePageData";
import Card from '../cardWith4products/Card';
import CardWith1ItemOnly from '../cardWith1ItemWithoutInfo/CardWith1ItemOnly';

const CardCollections = () => {
    return (
        <div className='cards-collection'>
            {product.map((obj) => {
                return <Card propss={obj} />
            })}
            <CardWith1ItemOnly/>
            <CardWith1ItemOnly/>
            <CardWith1ItemOnly/>
        </div>
    )
}

export default CardCollections
