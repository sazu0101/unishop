import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';
    
    const Bluethooth_Speaker = () => {
          //receive productsObj from allproducts by useSelector
    const productsObj = useSelector((state) => state.allproduct);

    //destructure property from object
    const { loading, products, error } = productsObj;
  
    //filter bluetooth_speaker from products
     let bluetooth_speaker = products.filter((pro)=>{
      return pro.subcategory === "bluetooth_speaker";
     })
      return (
        <>
        <CategoryPage products={bluetooth_speaker} />
           </>
      )
    }
    
    export default Bluethooth_Speaker