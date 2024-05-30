import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Dry_Iron = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter dry_iron from products
       let dry_iron = products.filter((pro)=>{
        return pro.subcategory === "dry_iron";
       })
  return (
    <>
    <CategoryPage products={dry_iron} />
       </>
  )
}

export default Dry_Iron