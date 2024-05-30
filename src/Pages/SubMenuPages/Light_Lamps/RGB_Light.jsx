import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const RGB_Light = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter rgb_light from products
       let rgb_light = products.filter((pro)=>{
        return pro.subcategory === "rgb_light";
       })
  return (
    <>
    <CategoryPage products={rgb_light} />
       </>
  )
}

export default RGB_Light