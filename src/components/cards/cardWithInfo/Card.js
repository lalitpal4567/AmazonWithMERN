import React from 'react'
import "./Card.css";
// import image from "src/components/images/ipodImages/ipod_amazon_basics.png"
import Star from 'src/components/productPages/addCartBuyPage/Star';

const Card = ({ productProp }) => {
  return (
    <div className='card' key={productProp.name}>
      {console.log(productProp.imgUrl)}
      <a href="#">
        <div className="card-container">
          <div className="image-container">
            {/* <img src={image} /> */}
            <img src={productProp.imgUrl} alt="hiii"/>
            {/* <img src={productProp["imgUrl"]}/> */}
          </div>
          <div className='product-info'>
            <p>{productProp.info}</p>
            <Star />
            <p id="message">Deal of the Day</p>
            <div className='price'>
              <sup><span>$</span></sup>
              <p id="product-price"><span>{productProp.price}</span></p>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}


// const Card = () => {
//   return (
//     <div className='card'>
//       <a href="#">
//         <div className="card-container">
//           <div className="image-container">
//             <img src={image} />
//           </div>
//           <div className='product-info'>
//             <p className='item-discription'>Newly launched turke buds Clarity 5 true Wireless in ear EarBuds, 5Mic adv.ENC. 80H playtime. 35m Ultra- low</p>
//             <p id="message">Deal of the Day</p>
//             <div className='price'>
//               <sup><span>$</span></sup>
//               <p id="product-price"><span>1499/-</span></p>
//             </div>
//           </div>
//         </div>
//       </a>
//     </div>
//   )
// }

export default Card
