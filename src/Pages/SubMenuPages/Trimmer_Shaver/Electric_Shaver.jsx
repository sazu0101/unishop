import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Electric_Shaver = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter mouse from products
       let electric_shaver = products.filter((pro)=>{
        return pro.subcategory === "electric_shaver";
       })
  return (
    <>
 <CategoryPage products={electric_shaver} />
    </>
  )
}

export default Electric_Shaver