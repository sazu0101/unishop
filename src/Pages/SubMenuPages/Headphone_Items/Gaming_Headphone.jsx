import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Gaming_Headphone = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter gaming_headphone from products
       let gaming_headphone = products.filter((pro)=>{
        return pro.subcategory === "gaming_headphone";
       })
  return (
    <>
    <CategoryPage products={gaming_headphone} />
       </>
  )
}

export default Gaming_Headphone