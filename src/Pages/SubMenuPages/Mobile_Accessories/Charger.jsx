import React from 'react';

import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Charger = () => {
    
  //receive productsObj from allproducts by useSelector
  const productsObj = useSelector((state) => state.allproduct);

  //destructure property from object
  const { loading, products, error } = productsObj;

  //filter smartphonesProducts from products
   let charger = products.filter((pro)=>{
    return pro.subcategory === "charger";
   })
  return (
    <>
<CategoryPage products={charger} />
    </>
  )
}

export default Charger