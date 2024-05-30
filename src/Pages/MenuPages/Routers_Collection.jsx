import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../Component/CategoryPage';

const Routers_Collection = () => {
           //receive productsObj from allproducts by useSelector
           const productsObj = useSelector((state) => state.allproduct);

           //destructure property from object
           const { loading, products, error } = productsObj;
         
           //filter routers_collection from products
            let routers_collection = products.filter((pro)=>{
             return pro.category === "routers_collection";
            })
  return (
    <CategoryPage products={routers_collection} />
  )
}

export default Routers_Collection