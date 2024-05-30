import React from "react";

import { Link } from "react-router-dom";

//GlobalCartHook
//import { GlobalCartHook } from "../Context/CartContext";

//redux
import { AddtoCart } from "../Redux/CartItem";
import { useDispatch } from "react-redux";

const AddToCart = ({product,quantity,name}) => {
   const {_id,price,title,slug} = product;
   
   //use callback function to get arguments
   //const {AddToCart} =GlobalCartHook();
   
   const dispatch = useDispatch();
   const handleAddToCart = () => {
    // Dispatch the AddtoCart action with the product data
    dispatch(AddtoCart({ _id, price, title,slug,quantity, product }));
  };
  return (
    <>
      
      {/**/}<Link to='/cart'>
  <button className="add-to-cart" onClick={handleAddToCart}>{name}</button>

  </Link> 
    </>
  );
};

export default AddToCart;
