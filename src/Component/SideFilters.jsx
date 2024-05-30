import React from "react";

//css
import "../CSS/SideFilters.css";


import BrandFilter from "./BrandFilter";
import RatingFilter from "./RatingFilter";

const SideFilters = ({ products }) => {


  return (
    
      <div className='side_filters'>
        <BrandFilter products={products} />
        <RatingFilter />
      </div>
    
  );
};

export default SideFilters;
