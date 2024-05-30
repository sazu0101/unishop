import React from 'react'
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../Component/CategoryPage';

const Smart_Watches = () => {
             //receive productsObj from allproducts by useSelector
             const productsObj = useSelector((state) => state.allproduct);

             //destructure property from object
             const { loading, products, error } = productsObj;
           
             //filter smart_watches from products
              let smart_watches = products.filter((pro)=>{
               return pro.category === "smart_watches";
              })
  return (
    <CategoryPage products={smart_watches} />
  )
}

export default Smart_Watches