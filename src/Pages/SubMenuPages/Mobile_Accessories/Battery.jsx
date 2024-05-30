import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Battery = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter battery from products
       let battery = products.filter((pro)=>{
        return pro.subcategory === "battery";
       })
  return (
    <>
    <CategoryPage products={battery} />
       </>
  )
}

export default Battery