import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../Component/CategoryPage';

const Home_Appliances = () => {
       //receive productsObj from allproducts by useSelector
       const productsObj = useSelector((state) => state.allproduct);

       //destructure property from object
       const { loading, products, error } = productsObj;
     
       //filter home_appliances from products
        let home_appliances = products.filter((pro)=>{
         return pro.category === "home_appliances";
        })
  return (
    <CategoryPage products={home_appliances} />
  )
}

export default Home_Appliances