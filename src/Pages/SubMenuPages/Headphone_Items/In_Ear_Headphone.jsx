import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const In_Ear_Headphone = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter in_ear_headphone from products
       let in_ear_headphone = products.filter((pro)=>{
        return pro.subcategory === "in_ear_headphone";
       })
  return (
    <>
    <CategoryPage products={in_ear_headphone} />
       </>
  )
}

export default In_Ear_Headphone