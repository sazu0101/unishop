import React, { useState, useEffect } from "react";

//packages
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//Api-link
import config from "../config.json";

//css
import "../CSS/CategoryPage.css";
//icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


//component
import Pagination from "./Pagination";
import SideFilters from "./SideFilters";

//redux action
import {
  LowestPriceProduct,
  HighestPriceProduct,
  ProductFromAtoZ,
  ProductFromZtoA,
  categoryWiseProductsAction,
} from "../Redux/FilterProduct";
import Filter_Offcanvas from "./Filter_Offcanvas";

const CategoryPage = ({ products }) => {
  //store copy of products 
  const copyProducts = [...products];

  //
  let SingleProduct = copyProducts[0];


  const categoryProducts = useSelector((state) => state.filterproduct);
  const { category_Wise_Products } = categoryProducts;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryWiseProductsAction(products));
  }, [products]);

  const [selectedOption, setSelectedOption] = useState("");
  const handlePriceChange = (e, product) => {
    let selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    if (selectedValue === "highest") {
      dispatch(HighestPriceProduct(product));
    }
    if (selectedValue === "lowest") {
      dispatch(LowestPriceProduct(product));
    }
    if (selectedValue === "A-Z") {
      dispatch(ProductFromAtoZ(product));
    }
    if (selectedValue === "Z-A") {
      dispatch(ProductFromZtoA(product));
    }
  };

  const [show_filter_icon , setShow_filter_icon] = useState(false);

  const handleResize = () => {
    if(window.innerWidth <= 840){
   
       setShow_filter_icon(true)
    }else{
      setShow_filter_icon(false)
    }
  }

  useEffect(()=>{
    // Initial check on mount
     handleResize();
    //add scroll eventlistener to execute function 
    window.addEventListener('scroll',handleResize);

   // Cleanup the event listener on component unmount
    return ()=>{
      window.removeEventListener('scroll' , handleResize);
    }
  },[])



  return (
    <>
      <div className="category_page_topbar">
        <div className="topbar_content">
       {show_filter_icon ? <Filter_Offcanvas products={products}  /> : <Pagination Products={SingleProduct} />} 
        <select
          name=""
          id=""
          onChange={(e) => {
            handlePriceChange(e, category_Wise_Products);
          }}
        >
          <option value="">sort by: Feauture</option>
          <option value="A-Z">Product (A-Z)</option>
          <option value="Z-A">Product (Z-A)</option>
          <option value="highest">Price (highest-lowest)</option>
          <option value="lowest">Price (lowest-highest) </option>
        </select>
        </div>
      </div>

    
{/*col-xxl-5 col-xl-4 col-lg-4 col-md-3 col-sm-2 col-xsm-1 */}
      <div className={`category_page_container`}>
 
      <SideFilters products={products} />

        <div className="category_page_products">
          {category_Wise_Products?.map((pro) => {
            const { title, slug, price, _id, subcategory, brand } = pro;

            return (
              <div
                className="pro"
                key={_id}
              >
                <Link to={`/SingleProduct/${slug}`}>
                  <img
                    className={`category_pro_img`}
                    src={`${config.apiUrl}/api/product/product-photo/${pro._id}`}
                    alt=""
                  />
                </Link>

                <div className={`category_pro_content`}>
                  <Link className="title" to={`/SingleProduct/${slug}`}>
                    {title.length > 20 ? title.slice(0, 28) + "..." : title}
                  </Link>
                  <p className="star">
                    {" "}
                    <AiFillStar />
                    <AiFillStar /> <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </p>
                  <p className="price">${price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
