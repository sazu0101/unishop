import React from 'react';

import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Selfie_Stick = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter selfie_stick from products
       let selfie_stick = products.filter((pro)=>{
        return pro.subcategory === "selfie_stick";
       })
  return (
    <>
    <CategoryPage products={selfie_stick} />
       </>
  )
}

export default Selfie_Stick