import React from "react";
import { useSelector } from "react-redux";

//components
import CategoryPage from "../../Component/CategoryPage";

const Computer_Items = () => {
  //receive productsObj from allproducts by useSelector
  const productsObj = useSelector((state) => state.allproduct);

  //destructure property from object
  const { loading, products, error } = productsObj;

  //filter computer_items from products
  let computer_items = products.filter((pro) => {
    return pro.category === "computer_items";
  });

  return (
    <>
      <CategoryPage products={computer_items} />
    </>
  );
};

export default Computer_Items;
