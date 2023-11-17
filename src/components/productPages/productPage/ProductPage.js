import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./ProductPage.css";
import Navbar from '../../navbar/Navbar'
import LowestNavBar from '../../navbar/bottomNavBar/LowestNavBar';
import BrandFilters from "../../filters/BrandWiseFilter.js";
import ProductPrice from "../../filters/PriceWiseFilter";
import Footer from 'src/components/footerSection/Footer';
import FinalProductCard from '../../cards/cardWithInfo/FinalProductCard';
import database from 'src/product_data/database';


const ProductPage = () => {
  const [productFiltered, setProductFiltered] = useState([]);
  const { labelName } = useParams();
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [availableBrands, setAvailableBrands] = useState([]);
  const [selectedColorBrand, setSelectedColorBrand] = useState(null);
  const [searchTerm, setSearchTerm] = useState(labelName);

  

  // Additional filter options (e.g., color brand, offer brand)
  const [colorBrands, setColorBrands] = useState([]);


 // Initial filter by category
 useEffect(() => {
  const filteredProducts = database.filter((item) => labelName.toLowerCase() === item.subCategory.toLowerCase());
  setProductFiltered(filteredProducts);

  // Get unique brand names for the current category
  const uniqueBrands = [...new Set(filteredProducts.map((product) => product.brand))];
  setAvailableBrands(uniqueBrands);

  const uniqueColorBrands = [...new Set(filteredProducts.map((product) => product.colour))];
    setColorBrands(uniqueColorBrands);

  // Reset selected brand when category changes
  setSelectedBrand(null);
  setSelectedColorBrand(null);
}, [labelName]);



  // Update filter when category or brand changes
  useEffect(() => {
    if (productFiltered.length === 0) {
      // Only filter if the initial data has been loaded
      return;
    }

    if(selectedBrand){
      if(selectedBrand === "All"){
        const filteredProducts = database.filter((item) => labelName.toLowerCase() === item.subCategory.toLowerCase())
        setProductFiltered(filteredProducts);
        setColorBrands([]); // // Clear color brands when All is selected
      }
      else{
        const filteredProducts = database.filter((item) => labelName.toLowerCase() === item.subCategory.toLowerCase())
        .filter((product) => (selectedBrand ? product.brand.toLowerCase() === selectedBrand.toLowerCase() : true));
        setProductFiltered(filteredProducts);

        // Get unique color brands for the selected brand
        const uniqueColorBrands = [...new Set(filteredProducts.map((product) => product.colour))];
        setColorBrands(uniqueColorBrands);
      }
    }
  }, [selectedBrand, labelName]);


  // search query
  useEffect(() => {
    const filteredProducts = database
      // .filter((item) => labelName.toLowerCase() === item.subCategory.toLowerCase())
      // .filter((product) => product.productName.toLowerCase().includes(searchTerm.toLowerCase()));
      .filter((product) => product.productName.concat(product.discription).toLowerCase().includes(searchTerm.toLowerCase()));

    setProductFiltered(filteredProducts);
  }, [searchTerm]);


  // Handle brand filter change
  function handleBrandChange(event) {
    setSelectedBrand(event.target.checked ? event.target.value : null);
    setSelectedColorBrand(null);  // // Reset color brand when brand changes
  }


  // Handle color brand filter change
function handleColorBrandChange(event) {
  const selectedColorBrand = event.target.checked ? event.target.value : null;
  setSelectedColorBrand(selectedColorBrand);

  // Update productFiltered based on selected color brand
  if (selectedBrand && selectedColorBrand !== "All") {
    const filteredProducts = database
      .filter((item) => labelName.toLowerCase() === item.subCategory.toLowerCase())
      .filter(
        (product) =>
          product.brand.toLowerCase() === selectedBrand.toLowerCase() &&
          (product.colour ?? []).includes(selectedColorBrand)
      );
    setProductFiltered(filteredProducts);
  } else if (selectedColorBrand && selectedColorBrand === "All") {
    // Show all products for the selected category when All is selected for color
    const filteredProducts = database.filter((item) => labelName.toLowerCase() === item.subCategory.toLowerCase());
    setProductFiltered(filteredProducts);
  } else {
    // Show products filtered only by brand
    const filteredProducts = database
      .filter((item) => labelName.toLowerCase() === item.subCategory.toLowerCase())
      .filter((product) => (selectedBrand ? product.brand.toLowerCase() === selectedBrand.toLowerCase() : true));
    setProductFiltered(filteredProducts);
  }
}

 
  
  return (
    <>
      <Navbar onSearchChange={setSearchTerm} onSearchTerm={searchTerm}/>
      <LowestNavBar />

      <main className='filter-product-description'>
        <div className='left-section'>
          <BrandFilters handleChange={handleBrandChange} availableBrands={[...availableBrands]} />
          {selectedBrand ?
          <BrandFilters handleChange={handleColorBrandChange} availableBrands={[...colorBrands]}/>
          : null}
          <ProductPrice />
        </div>

        <div className='right-section'>
          <h1 className='right-section-result'>Results</h1>
          <div className='right-section-multiple-products'>

            {productFiltered.map((value) => {
              return <FinalProductCard key={value.id} productProp={value}/>
            })}

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ProductPage
