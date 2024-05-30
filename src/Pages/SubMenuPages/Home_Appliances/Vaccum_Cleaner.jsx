import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Vaccum_Cleaner = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter vacuum_cleaner from products
       let vacuum_cleaner = products.filter((pro)=>{
        return pro.subcategory === "vacuum_cleaner";
       })
  return (
    <>
    <CategoryPage products={vacuum_cleaner} />
       </>
  )
}

export default Vaccum_Cleaner