import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Mobile_Holder = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter mouse from products
       let mobile_holder = products.filter((pro)=>{
        return pro.subcategory === "mobile_holder";
       })
  return (
    <>
    <CategoryPage products={mobile_holder} />
       </>
  )
}

export default Mobile_Holder