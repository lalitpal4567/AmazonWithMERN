import React from 'react'
import "./ProductPage.css";
import Navbar from '../../navbar/Navbar'
import LowestNavBar from '../../navbar/bottomNavBar/LowestNavBar';
import Card from "../../cards/cardWithInfo/Card";
import BrandFilters from "../../filters/BrandWiseFilter.js";
import BudsShapes from "../../filters/BudsShapeFilter";
import BudsConnection from "../../filters/BudsConnectivityFilter";
import ProductPrice from "../../filters/PriceWiseFilter";
import LowerFooter from 'src/components/footerSection/LowerFooter';
import products from "../../../product_data/ProductData";
import CardFlex from 'src/components/cards/cardWithInfo/CardFlex';


let brands = [
  {
    samsung: "Samsung",
    oppo: "Oppo",
    realme: "Realme",
    vivo: "Vivo"
  }
]


const ProductPage = () => {
  return (
    <>
      <Navbar />
      <LowestNavBar />

      <section className='filter-product-description'>
        <div className='product-filter'>
          <BrandFilters brandName={brands} />
          <ProductPrice />
          <BudsConnection />
          <BudsShapes />
        </div>

        <section>
          <h1 className='text-message'>Results</h1>
          <div className='product-and-description'>

            {
              products[0]["categories"][0]["subcategories"][0]["variants"].map((product) => {
                return <Card productProp={product} />
              })}

              <CardFlex/>
              <CardFlex/>
              <CardFlex/>
          </div>
        </section>
      </section>
      <LowerFooter />
    </>
  )
}

export default ProductPage
