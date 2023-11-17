import React from 'react'
import "./Filter.css";

// const BrandWiseFilter = ({ handleChange }) => {
//     return (
//       <>
//         <div className='brand-wise-filter'>
//           <h4 className='filter-heading'>Brand</h4>
//           <input type="checkbox" className='input-checkbox' id="samsung" value="Samsung" onChange={handleChange} />
//           <label className='checkbox-label' htmlFor="samsung">Samsung</label><br />
  
//           <input type="checkbox" className='input-checkbox' id="realme" value="Realme" onChange={handleChange} />
//           <label className='checkbox-label' htmlFor="realme">Realme</label><br />
  
//           <input type="checkbox" className='input-checkbox' id="oppo" value="Oppo" onChange={handleChange} />
//           <label className='checkbox-label' htmlFor="oppo">Oppo</label><br />
  
//           <input type="checkbox" className='input-checkbox' id="vivo" value="Vivo" onChange={handleChange} />
//           <label className='checkbox-label' htmlFor="vivo">Vivo</label>
//         </div>
//       </>
//     );
//   };



const BrandWiseFilter = ({ handleChange, availableBrands }) => {
    return (
      <div className='brand-wise-filter'>
        <h4 className='filter-heading'>Brand</h4>
        <label>
          <input
            type="radio"
            name="brandFilter"
            value="All"
            onChange={handleChange}
          />
          All
        </label>
        <br />
  
        {availableBrands.map((brand) => (
            <>
          <label key={brand}>
            <input
              type="radio"
              name="brandFilter"
              value={brand}
              onChange={handleChange}
            />
            {brand}
          </label>
          <br/>
          </>
        ))}
      </div>
    );
  };
  



export default BrandWiseFilter;
