import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../Component/CategoryPage';

const Other_Items = () => {
         //receive productsObj from allproducts by useSelector
         const productsObj = useSelector((state) => state.allproduct);

         //destructure property from object
         const { loading, products, error } = productsObj;
       
         //filter other_items from products
          let other_items = products.filter((pro)=>{
           return pro.category === "other_items";
          })
  return (
    <CategoryPage products={other_items} />
  )
}

export default Other_Items