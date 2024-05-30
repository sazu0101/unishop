import React from "react";
import { Link } from "react-router-dom";
//css
import "../CSS/Footer.css";


//icons
import {FaFacebookF,FaYoutube,FaTwitter,FaGoogle} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai"


const Footer = () => {
  return (
    <>
      <section id="footer">

        <div className="container">

        <div className="brand-details">
          <Link className="logo">SHOPEE</Link>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magni modi quo nostrum dolorum quae ullam rerum amet quis odit adipisicing elit.</p>
           
           <div className="footer-downlnad-btn">
              <button className="google-play-download">Google Play</button>
              <button className="app-store-download">App Store</button>
           </div>
        </div>


        <div className="about-section">
          <h3>About us</h3>
          <Link to="/">About us</Link>
          <Link to="/">Shopee Blogs</Link>
          <Link to="/">contact with us</Link>
          <Link to="/">Shopee demo</Link>
          <Link to="/">privacy condition</Link>
          <Link to="/">contact with us</Link>
          <Link to="/">shopee demo</Link>
          

        </div>

        
        <div className="care-section">
          <h3>Customer Care</h3>
          <Link to="/">customer care</Link>
          <Link to="/">corporate order</Link>
          <Link to="/">refund and return policy</Link>
          <Link to="/">terms and condition</Link>
          <Link to="/">complain management</Link>
          <Link to="/">corporate order</Link>
          <Link to="/">refund and return policy</Link>

        </div>

        <div className="contact-section">
          <h3>Contact Us</h3>
          <div className="">
           <p className="address">70 Mugda, Madina bag, Dhaka 1214, Bangladesh</p>
           <p className="Email">Email: atoz60678@gmail.com</p>
           <p className="phone">Phone: 019995952159</p>
 
          </div>

          <ul className="footer-icons">
            <li> <Link to='/'> <FaFacebookF className="icon" /> </Link> </li>
            <li><Link to='/'>  <FaYoutube className="icon" /></Link> </li>
            <li><Link  to=''>  <FaGoogle className="icon" /></Link> </li>
            <li><Link to='/'>  <AiFillInstagram className="icon" /></Link> </li>
            <li> <Link to='/'> <FaTwitter className="icon" /></Link> </li>
           </ul>
        </div>


        </div>
      </section>
    </>
  );
};

export default Footer;
