import React from 'react'
import "./CarouselCard.css"

const CarouselCard = () => {
    return (
        <>
            <a href="#" className='card-containers1'>
                <div className='card1'>
                    <div className='img-container1'>
                        <img className='item-image1' src="images/mobileImages/oppo__A17k__Navy_Blue.png"/>
                    </div>
                    <div className='item-details1'>
                        <div className='item-offer1'>
                            <p className='offer1'>25% off</p>
                            <p className='today-deal1'>Deal of the Day</p>
                        </div>
                        <div className='item-price1'>
                            <p><span><sup>$</sup></span>4999/-</p>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

export default CarouselCard
