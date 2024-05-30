import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Microphone = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter microphone from products
       let microphone = products.filter((pro)=>{
        return pro.subcategory === "microphone";
       })
  return (
    <>
    <CategoryPage products={microphone} />
       </>
  )
}

export default Microphone