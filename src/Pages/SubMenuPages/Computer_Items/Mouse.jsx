import React from 'react';


import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Mouse = () => {
    //receive productsObj from allproducts by useSelector
    const productsObj = useSelector((state) => state.allproduct);

    //destructure property from object
    const { loading, products, error } = productsObj;
  
    //filter mouse from products
     let Mouse = products.filter((pro)=>{
      return pro.subcategory === "mouse";
     })
     console.log(Mouse);
  return (
    <>
 <CategoryPage products={Mouse} />
    </>
  )
}

export default Mouse