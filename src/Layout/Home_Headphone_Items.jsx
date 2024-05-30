import React, { useState } from "react";
import { Link } from "react-router-dom";

import config from "../config.json";

import Slider from "react-slick";

//css
import "../CSS/HomeProducts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//component
import AddToCart from "../Component/AddToCart";

//icons
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'

//
import { useSelector } from "react-redux";
import Spinner from "../Component/Spinner";

const Headphone_Items = () => {

  //make custone next arrow
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <BsArrowRightShort
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }

  //make custom prev arrow
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <BsArrowLeftShort
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1115,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          speed: 800,
          dots: false,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          speed: 800,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
          speed: 800,
          dots: false,
          infinite: false,
        },
      },
      {
       breakpoint : 670,
       settings: {
        slidesToShow : 2,
        slidesToScroll : 2,
        initialSlide : 1,
        speed: 800,
        dots : false,
        infinit : false,
       }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 800,
          dots: false,
          infinit : false,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 800,
          dots: false,
          infinit : false,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 800,
          dots: false,
          infinit:false,
        },
      },
    ],
  };
     
    //product quantity state
    const QuantityofProduct = useSelector((state) => state.productquantitycounter.count);
    const {count} = QuantityofProduct;
    
     
  //receive productsObj from allproducts by useSelector
  const productsObj = useSelector((state)=> state.allproduct);

  //destructure property from object
   const {loading , products , error} = productsObj;

  
  //filter electronics products
  let headphone_items;
  headphone_items = products.filter((pro) => {
    return pro.category === "headphone_items" ;
  });

//destructure the category name 
let {category} = headphone_items[0] !== undefined && headphone_items[0];

//remove the undesquare from string
let category_Withouth_underSquare = category !== undefined ? category.replace(/_/g," ") : "";
 console.log(category_Withouth_underSquare);
  return (
    <>
      <div className="slide-header">
         <p>{category_Withouth_underSquare}</p>
         <Link  to={`/${category}`} className="button buttontext">See All</Link>
      </div>

      <Slider {...settings} className=""  >
   
        {headphone_items.length > 0 ? (
          headphone_items.slice(0,14).map((pro) => {
            const { title, slug, price, _id } = pro;
   
            return (
              <div key={_id} className="product">
                <Link to={`/SingleProduct/${slug}`}>
                  <div className="product-img">
                    <img
                      className="home-pro-img"
                      src={`${config.apiUrl}/api/product/product-photo/${_id}`}
                      alt=""
                    />
                  </div>

                  <div className="pro-content">
                    <p className="title">{title.slice(0, 18)}..</p>
                    <p className='rating'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></p> 
                  </div>
                </Link>

                <div className="addcart">
                  <p className="price">${price}</p>
                  <AddToCart
                    product={{title, slug, price, _id ,count }}
                    name={"+add"}
                    quantity={QuantityofProduct}
                  />

                </div>
              </div>
            );
          })
        ) : (
          <Spinner />
        )}
      </Slider>


    </>
  );
};

export default Headphone_Items;
