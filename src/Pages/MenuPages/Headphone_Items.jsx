import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../Component/CategoryPage';

const Headphone_Items = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter headphone_items from products
       let headphone_items = products.filter((pro)=>{
        return pro.category === "headphone_items";
       })
  return (
    <>
  <CategoryPage products={headphone_items} />
    </>
  )
}

export default Headphone_Items