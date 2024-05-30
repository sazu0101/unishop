//packages
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate , useLocation } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

import axios from "axios";

//component
import { cities } from "../Component/Area";

//
import config from "../config.json";

//css
import style from "../CSS/ConfirmOrderPage.module.css";
import  ResetCart  from "../Redux/CartItem";

const ConfirmOrderPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  //get cart items
  const Cart = useSelector((state) => state.cart.Cart);

  //get the subtoatal value 
  const {subtotal} = location.state !== null ? location.state : ''

  console.log(Cart);



  //states

  const [selectedCity, setSelectedCity] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [click , setClick] = useState(false)

  const [cart, setCart] = useState(Cart);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [alternative_number, setAlternative_number] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [details_address, setDetails_address] = useState("");
  const [delivery_charge , setDelivery_charge] = useState(0);


  //change city dynamically
  const handleCityChange = (e) => {

    const selectedCityName = e.target.value;

    //set the delivery charge by selected area
    if(e.target.value === "Dhaka"){
      setDelivery_charge(60)
    }else{
      setDelivery_charge(120)
    }

    setCity(selectedCityName);
    setSelectedCity(selectedCityName);
  };

  //place order function by post request
  const handleConfirmOrder = async (e) => {
    e.preventDefault();
      try {
        const res = await axios.post(`${config.apiUrl}/api/orders/create-order`,{
          cart,name,email,number,alternative_number,city,area,details_address,delivery_charge
        })
        if(res.data.success){
           setClick(true)
           dispatch(ResetCart())
           navigate('/complete-order');
        }else{
          console.log(res.data.message);
        }
      } catch (error) {
         console.log(error);
      }

  };

  return (
    <>
      <section className={ click ? style.confirm_order2  : style.confirm_order}>

        <form  className={style.address_form} onSubmit={handleConfirmOrder}> 
          <div>
            <input
              className={style.name}
              type="text"
              placeholder="enter your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />

            <input
              className={style.email}
              type="text"
              placeholder="email (not necessary)"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div>
            <input
              className={style.number}
              type="text"
              placeholder="enter your number"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              required
            />
            <input
              className={style.alter_number}
              type="text"
              placeholder="enter alternative number"  
              onChange={(e) => setAlternative_number(e.target.value)}
              value={alternative_number}
            />
          </div>

          <div>
            <select name="" id="" onChange={handleCityChange} value={city}>
              {Object.keys(cities).map((cityName, i) => {
                return (
                  <React.Fragment key={i}>
                    <option value={cityName}>{cityName}</option>
                  </React.Fragment>
                );
              })}
            </select>

            <select name="" id="" onChange={(e) => setArea(e.target.value)} value={area}>
              <option value="">Area</option>
              {selectedCity &&
                cities[selectedCity].map((area, i) => (
                  <option key={i} value={area}>
                    {area}
                  </option>
                ))}
            </select>
          </div>

          <input
            className={style.comment}
            type="text"
            placeholder="Enter your details address here"
            onChange={(e) => setDetails_address(e.target.value)}
            value={details_address}
            required
          />

          <div className={style.check_terms_And_confirm_btn}>
            <div>
              <input type="checkbox" />
              <span htmlFor="">
                please check our <Link to="/">terms and condition</Link> for
                better experience
              </span>
            </div>

            <div>
              <button
                type="submit"
                disabled={isCheck}
                className={style.confirm_order_btn}
              >
                confirm order
              </button>
            </div>
          </div>
        </form>

        <div className={style.checkout}>
          <p className={style.title}>Total Payable</p>
          <hr />
          <div className={style.subtotal}>
            <p>subtoal</p>
            <p>{subtotal}</p>
          </div>
          <hr />
          <div className={style.shipping}>
            <p>shipping</p>
            <p>(+) {delivery_charge}</p>
          </div>
          <hr />
          <div className={style.total}>
            <p>total</p>
            <p>= {subtotal+delivery_charge}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConfirmOrderPage;
