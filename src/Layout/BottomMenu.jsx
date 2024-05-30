import React from "react";

//packages
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//icons
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from "react-icons/ai";

import { RiCustomerService2Fill } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";

//component


//css
import "../CSS/BottomMenu.css";
import Login from "../Authentication/Login";

const BottomMenu = () => {
  
  const Authentication = useSelector((state) => state.authentication);
  const cart = useSelector((state)=>state.cart.Cart)

  return (
    <>
      <section id="bottom-menu">
        <Link to="/">
          <AiOutlineHome className="icon" />
        </Link>
        <Link to="/mobile-menu">
          <HiOutlineMenu className="icon" />
        </Link>
        <Link to={`/`} target="blank">
          <RiCustomerService2Fill className="icon" />{" "}
        </Link>
        <Link to="/cart">
          <AiOutlineShoppingCart className="cart-icon" />
          <span className="responsive-cart-length">{cart.length}</span>
        </Link>
        {Authentication.email && Authentication.password !== null ? (
          <Link
          to={`/dashboard`}
          type="button"
          className={'user'}
          >
            <div>
            <p className={'user_name'}>
              {Authentication.email.slice(0,1)}
            </p>
            </div>
   
          </Link>
        ) : (
 
           <Login />

        )}
      </section>
    </>
  );
};

export default BottomMenu;
