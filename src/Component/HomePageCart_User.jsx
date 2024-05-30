import React, { useState } from "react";

//component
import Login from "../Authentication/Login";

//css
import HeaderCSS from "../CSS/Header.module.css";

//packages
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

//icons
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";

/*Authentication.email && Authentication.password !== null ? '/dashboard' : '/login' */

const HomePageCart_User = () => {
  const Cart = useSelector((state) => state.cart.Cart);

  const Authentication = useSelector((state) => state.authentication);

  //modal
  const [userModal, SetUserModal] = useState(false);

  const handleModal = () => {
    if (Authentication.email !== null && Authentication.password !== null) {
      SetUserModal(false);
    } else {
      SetUserModal(!userModal);
    }
  };
  return (
    <>
      <div className={HeaderCSS.cart_user_div}>
        <div className={HeaderCSS.cart}>
          <NavLink to="/cart">
            <AiOutlineShoppingCart className={HeaderCSS.cartIcon} />
            {Cart.length !== 0 && <span> {Cart.length}</span>}
          </NavLink>
        </div>

        {Authentication.email && Authentication.password !== null ? (
          <Link
          to={`/dashboard`}
            type="button"
            className={HeaderCSS.user}
          >
            <div className={HeaderCSS.user_name}>
            <p >
              {Authentication.email.slice(0,1)}
            </p>
            </div>
          </Link>
        ) : (
         <Login />
        )}
      </div>
    </>
  );
};

export default HomePageCart_User;
