import React from 'react'
import "../cardWith4products/Card.css";

const Card = ({propss}) => {
  return (
    <div className="card-container" key={propss.id}>
        <h2>{propss.category}</h2>
        <div className="cards">
            <a href="#"><img src={propss.imgUrl1}/><p>{propss.subCategory1}</p></a>
            <a href="##"><img src={propss.imgUrl2}/><p>{propss.subCategory2}</p></a>
            <a href="###"><img src={propss.imgUrl3}/><p>{propss.subCategory3}</p></a>
            <a href="####"><img src={propss.imgUrl4}/><p>{propss.subCategory4}</p></a>
        </div>
        <a href="#####" className="item-offers">See all offers</a>
    </div>
  )
}

export default Card
