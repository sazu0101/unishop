import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Calculator = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter calculator from products
       let calculator = products.filter((pro)=>{
        return pro.subcategory === "calculator";
       })
  return (
    <>
    <CategoryPage products={calculator} />
       </>
  )
}

export default Calculator