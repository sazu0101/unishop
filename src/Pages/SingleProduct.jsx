import React, { useEffect, useState } from "react";

//api 
import config from "../config.json";

//packages
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//css
import "../CSS/SingleProduct.css";

//icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

//component
import Images from "../Component/Images";
import Quantity from "../Component/Quantity";
import AddToCart from "../Component/AddToCart";
import Specification from "../Component/Specification";
import Spinner from "../Component/Spinner";

//redux
import { getSingleProduct } from "../Redux/SingleProduct";


 


const SingleProduct = () => {
  const API = `${config.apiUrl}/api/product/get-product`;
  const { slug } = useParams();

  const SingleProductObj = useSelector((state) => state.singleproduct);
  const { loading, SingleProduct, error } = SingleProductObj;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(`${API}/${slug}`));
    /* eslint-disable-next-line */
  }, []);

  //product quantity state
  const QuantityofProduct = useSelector(
    (state) => state.productquantitycounter.count
  );

  //get the cart value
  const Cart = useSelector((state) => state.cart.Cart);

  //
  const [productInCart, setProductinCart] = useState(false);

  // Check if the current single product is in the cart or not
  useEffect(() => {
    if (SingleProduct) {
      let isProductInCart = Cart.some((item) => item._id === SingleProduct._id);
      setProductinCart(isProductInCart);
    }
  }, [SingleProduct, Cart]);

  //check if the single product is not null then destructure the SingleProduct object
  if (SingleProduct !== null) {
    var {
      _id,title,
      specification_property,
      specification_value,
      category,subcategory,
      price,brand,quantity,
    } = SingleProduct;

    var specification_property_array = specification_property.split(/\s+/g);
    var specification_value_array = specification_value.split(/\s+/g);

  }
 




  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div id="Single-Product-Page">
          <div className="Single-Product">
            <Images id={_id} />

            <div className="Single-Product-Details">
              <p className="title">{title}</p>
              <p className="brand"> brand: {brand} | more product from </p>
              <p>
                see more:{" "}
                <Link to={`/${category}/${subcategory}`}>{subcategory}</Link>
              </p>

              <p> in stock : {quantity} pice</p>
              <p className="star">
                {" "}
                <AiFillStar />
                <AiFillStar /> <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />{" "}
              </p>
              <p className="discount-price">$ {price}</p>

              <hr />
              <div className="quantity">
                <p> Quantity : </p> <Quantity />
              </div>

              <div className="Single-Product-buttons">
                {productInCart ? (
                  <Link to="/cart">
                    <button className="add-to-cart">Go to Cart</button>
                  </Link>
                ) : (
                  <AddToCart
                    product={{
                      _id,
                      title,
                      subcategory,
                      category,
                      price,
                      brand,
                      quantity,
                      slug,
                    }}
                    quantity={QuantityofProduct}
                    name={"Buy Now"}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Specification
         value = {specification_value_array}
        property={specification_property_array}
       
      />
    </>
  );
};

export default SingleProduct;
