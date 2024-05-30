import React from 'react';


import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Earbuds = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter earbuds from products
       let earbuds = products.filter((pro)=>{
        return pro.subcategory === "earbuds";
       })
  return (
    <>
     <CategoryPage products={earbuds} />
    </>
  )
}

export default Earbuds