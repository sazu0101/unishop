import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Keyboard = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter keyboard from products
       let keyboard = products.filter((pro)=>{
        return pro.subcategory === "keyboard";
       })
  return (
    <>

<CategoryPage products={keyboard} />
    </>
  )
}

export default Keyboard