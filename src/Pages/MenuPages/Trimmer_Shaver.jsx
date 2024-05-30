import React from 'react'
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../Component/CategoryPage';

const Trimmer_Shaver = () => {
             //receive productsObj from allproducts by useSelector
             const productsObj = useSelector((state) => state.allproduct);

             //destructure property from object
             const { loading, products, error } = productsObj;
           
             //filter trimmer_shaver from products
              let trimmer_shaver = products.filter((pro)=>{
               return pro.category === "trimmer_shaver";
              })
  return (
    <CategoryPage products={trimmer_shaver} />
  )
}

export default Trimmer_Shaver