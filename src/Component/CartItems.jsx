import React from 'react';

//packages
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//api
import config from "../config.json"

//icons
import { RiDeleteBinLine } from "react-icons/ri";

//redux actions
import { DeleteFromCart } from '../Redux/CartItem';


const CartItems = ({_id,price,title,slug,quantity}) => {

  const dispatch = useDispatch();
  const handleDelete = () => {
  dispatch(DeleteFromCart(_id))
  }

  
  //const quantity = useSelector((state)=>state.productquantitycounter.count);

  return (
    <>
          <div className='cart-heading'> 
          <div className='cart-product'>
          <div>
          <img src={`${config.apiUrl}/api/product/product-photo/${_id}`} alt="" />
          <RiDeleteBinLine  ssrc='icon_trash.png' className='detele_icon' onClick={handleDelete} />  
          </div>
           <Link to={`/SingleProduct/${slug}`}>{title.slice(0,25)} ...</Link>
          </div>
         

          <div className='cart-price'>{price}$</div>
          <div className='cart-quantity'>
         
            <p>{quantity}</p>

          </div>
          <div className='cart-subtotal'>{price*quantity}$</div>
          </div>


    </>
  )
}

export default CartItems