import React from 'react'
import "./AddToCartAndBuy.css";

const AddToCartAndBuy = ({stock, onAddToCart}) => {
  return (
    <div className='main-container-addToCart-section'>
      <p id="available-in-stock">{stock.stock}</p>
      <div className='item-quantity'>
        <label className='quantity-label'>Quantity:</label>
        <select className='product-quantity'>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
      <button className='buy-cart-btn' id="add-to-cart" onClick={onAddToCart}>Add to Cart</button>
      <button className='buy-cart-btn' id="buy-now">Buy Now</button>
    </div>
  )
}

export default AddToCartAndBuy
