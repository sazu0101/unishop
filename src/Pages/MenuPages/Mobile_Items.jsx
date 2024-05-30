import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../Component/CategoryPage';

const Mobile_Items = () => {
       //receive productsObj from allproducts by useSelector
       const productsObj = useSelector((state) => state.allproduct);

       //destructure property from object
       const { loading, products, error } = productsObj;
     
       //filter mobile_accessories from products
        let mobile_accessories = products.filter((pro)=>{
         return pro.category === "mobile_accessories";
        })
  return (
    <CategoryPage products={mobile_accessories} />
  )
}

export default Mobile_Items