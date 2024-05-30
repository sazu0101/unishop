import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Router_Stand = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter router_stand from products
       let router_stand = products.filter((pro)=>{
        return pro.subcategory === "router_stand";
       })
  return (
    <>
    <CategoryPage products={router_stand} />
       </>
  )
}

export default Router_Stand