import React, { useEffect } from "react";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement , Reset } from "../Redux/ProductQuantity";

const Quantity = () => {
  
  const Quantity = useSelector((state) => state.productquantitycounter.count);
  const dispatch = useDispatch();

  useEffect(()=>{
   dispatch(Reset())
  },[])

  return (
    <>
      <button
        onClick={() => {
          dispatch(Decrement());
        }}
        disabled={Quantity === 1}
      >
        <AiOutlineMinus />
      </button>{" "}

      <p>{Quantity} </p>{" "}

      <button
        onClick={() => {
          dispatch(Increment());
        }}
      >
        <AiOutlinePlus />
      </button>
    </>
  );
};

export default Quantity;
