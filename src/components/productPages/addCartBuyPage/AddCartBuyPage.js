import React, { useEffect, useState } from 'react'
import "./AddCartBuyPage.css";
import AddToCartAndBuy from 'src/components/productPages/addCartBuyPage/AddToCartAndBuy';
import MultiCardSelection from 'src/components/productPages/addCartBuyPage/MultiCardSelection';
import ItemDiscription from './ItemDiscription';
import { useParams } from 'react-router-dom';
import Navbar from 'src/components/navbar/Navbar';
import Footer from 'src/components/footerSection/Footer';
import database from 'src/product_data/database';

const AddCartBuyPage = () => {
  const [filteredItem, setFilteredItem] = useState([]);
  const [cartItems, setCartItems] = useState([]);


  let { id } = useParams();
  // useEffect(() => {
  //   const filteredProduct = database.filter((item) => item.id == id);
  //   setFilteredItem(filteredProduct);
  // }, [id]);

  {
    database.forEach((item) => {
      if(item.id == id){
        filteredItem.push(item);
      }
    })
  }


  // function handleAddToCart(item) {
  //   setCartItems((prevCartItems) => [...prevCartItems, item]);
  //     // console.log(cartItems);
  //   // You can also perform other actions like showing a success message, updating the UI, etc.
  // }

  function handleAddToCart(item) {
    setCartItems((prevCartItems) => {
      const newCartItems = [...prevCartItems, item];
      console.log('Cart Items after adding:', newCartItems);
      return newCartItems;
    });
  }

  return (
    <>
      <Navbar />
      <div className='cart-buy-main-container'>
        <div className='cart-inner-container'>
          <MultiCardSelection imgProp={filteredItem[0]} />
          <ItemDiscription productProp={filteredItem[0]} /> 
          <AddToCartAndBuy stock={filteredItem[0]} onAddToCart={() => handleAddToCart(filteredItem[0])} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AddCartBuyPage
