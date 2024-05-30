import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Electric_Trimmer = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter mouse from products
       let electric_trimmer = products.filter((pro)=>{
        return pro.subcategory === "electric_trimmer";
       })
  return (
    <>
    <CategoryPage products={electric_trimmer} />
       </>
  )
}

export default Electric_Trimmer