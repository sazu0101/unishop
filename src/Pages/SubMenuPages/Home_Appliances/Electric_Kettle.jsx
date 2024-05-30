import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Electric_Kettle = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter mouse from products
       let electric_kettle = products.filter((pro)=>{
        return pro.subcategory === "electric_kettle";
       })
  return (
    <>
    <CategoryPage products={electric_kettle} />
       </>
  )
}

export default Electric_Kettle