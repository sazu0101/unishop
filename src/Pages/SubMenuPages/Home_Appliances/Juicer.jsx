import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Juicer = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter juicer from products
       let juicer = products.filter((pro)=>{
        return pro.subcategory === "juicer";
       })
  return (
    <>
    <CategoryPage products={juicer} />
       </>
  )
}

export default Juicer