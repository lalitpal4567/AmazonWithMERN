import React from 'react'
import "./Carousel.css"
import CarouselCard from './CarouselCard'

const Carousel = () => {
    return (
        <div className='carousel-container'>
            <div className='carousel-inner-container'>
                <h1>Top deals</h1>
                <div className='carouselss'>
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                    <CarouselCard />
                </div>
            </div>
        </div>
    )
}

export default Carousel
