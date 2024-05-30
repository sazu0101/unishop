import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Watch_Strap = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter watch_strap from products
       let watch_strap = products.filter((pro)=>{
        return pro.subcategory === "watch_strap";
       })
  return (
    <>
    <CategoryPage products={watch_strap} />
       </>
  )
}

export default Watch_Strap