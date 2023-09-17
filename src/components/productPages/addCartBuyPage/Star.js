import React from 'react'
import "./Star.css";
import {FaStar, FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";

const Star = () => {
    let stars =  4.3;
    let ratings = 200;
    const ratingStar = Array.from({length: 5}, (elem, index) =>{
        let number = index + 0.5;
        return <span key={index}>
            {
                stars >= index + 1 ? (<FaStar className='star-icon'/>) : stars >= number ? (<FaStarHalfAlt className='star-icon'/>) : (<AiOutlineStar className='star-icon'/>)
            }   
        </span>
    })

  return (
    <>
        <div className='icon-style'><span>{stars}</span>
            {ratingStar}<span>{ratings}ratings</span>
        </div>
    </>
  )
}

export default Star
