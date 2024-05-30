import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Smart_Watch = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter smart_watch from products
       let smart_watch = products.filter((pro)=>{
        return pro.subcategory === "smart_watch";
       })
  return (
    <>
 <CategoryPage products={smart_watch} />
    </>
  )
}

export default Smart_Watch