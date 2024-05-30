import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Power_Bank = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter power_bank from products
       let power_bank = products.filter((pro)=>{
        return pro.subcategory === "power_bank";
       })
  return (
    <>
    <CategoryPage products={power_bank} />
       </>
  )
}

export default Power_Bank