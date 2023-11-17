import React from 'react'
import "./Carousel5Cards.css"
import CarouselCard1ads from './CarouselCard1ads'
// import axios from 'axios'
import siteData from 'src/product_data/itemData'

const Carousel5Cards = () => {
    // function testFun(){
    //     axios.get("http://localhost:4200/").then((response) =>{
    //         console.log(response);
    //         console.log(response.data);
    //     })
    // }
    return (
        <div className='main-container-multiple-carousel-5ads'>
            {/* {testFun()} */}
            <h3 id="multiple-carousel-title">Top Deals</h3>
            <div className='multiple-cards-carousel-5ads'>

                {siteData[0].categories[0].subcategories[0].products.map((item) => {
                    return <CarouselCard1ads product={item} />
                })}

            </div>
        </div>
    )
}

export default Carousel5Cards
