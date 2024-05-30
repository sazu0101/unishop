import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const ToothBrush = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter toothbrush from products
       let toothbrush = products.filter((pro)=>{
        return pro.subcategory === "toothbrush";
       })
  return (
    <>
    <CategoryPage products={toothbrush} />
       </>
  )
}

export default ToothBrush