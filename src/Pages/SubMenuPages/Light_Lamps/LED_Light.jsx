import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const LED_Light = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter led_light from products
       let led_light = products.filter((pro)=>{
        return pro.subcategory === "led_light";
       })
  return (
    <>
    <CategoryPage products={led_light} />
       </>
  )
}

export default LED_Light