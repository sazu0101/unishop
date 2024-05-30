import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Smart_TV_Box = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter smart_tv_box from products
       let smart_tv_box = products.filter((pro)=>{
        return pro.subcategory === "smart_tv_box";
       })
  return (
    <>
    <CategoryPage products={smart_tv_box} />
       </>
  )
}

export default Smart_TV_Box