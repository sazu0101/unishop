import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Wifi_Router = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter wifi_router from products
       let wifi_router = products.filter((pro)=>{
        return pro.subcategory === "wifi_router";
       })
  return (
    <>
    <CategoryPage products={wifi_router} />
       </>
  )
}

export default Wifi_Router