import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Bag_Luggage = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter bag_luggage from products
       let bag_luggage = products.filter((pro)=>{
        return pro.subcategory === "bag_luggage";
       })
  return (
    <>
    <CategoryPage products={bag_luggage} />
       </>
  )
}

export default Bag_Luggage