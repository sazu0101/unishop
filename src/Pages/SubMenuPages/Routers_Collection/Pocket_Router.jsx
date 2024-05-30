import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Pocket_Router = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter mouse from products
       let pocket_router = products.filter((pro)=>{
        return pro.subcategory === "pocket_router";
       })
  return (
    <>
    <CategoryPage products={pocket_router} />
       </>
  )
}

export default Pocket_Router