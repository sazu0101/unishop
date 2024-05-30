import React from 'react'
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../Component/CategoryPage';

const Speaker_Microphone = () => {
             //receive productsObj from allproducts by useSelector
             const productsObj = useSelector((state) => state.allproduct);

             //destructure property from object
             const { loading, products, error } = productsObj;
           
             //filter speaker_microphone from products
              let speaker_microphone = products.filter((pro)=>{
               return pro.category === "speaker_microphone";
              })
  return (
    <CategoryPage products={speaker_microphone} />
  )
}

export default Speaker_Microphone