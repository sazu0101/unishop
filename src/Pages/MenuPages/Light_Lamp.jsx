import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../Component/CategoryPage';

const Light_Lamp = () => {
     //receive productsObj from allproducts by useSelector
     const productsObj = useSelector((state) => state.allproduct);

     //destructure property from object
     const { loading, products, error } = productsObj;
   
     //filter light_lamp from products
      let light_lamp = products.filter((pro)=>{
       return pro.category === "light_lamp";
      })
  return (
    <CategoryPage products={light_lamp} />
  )
}

export default Light_Lamp